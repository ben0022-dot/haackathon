import prisma from "@/lib/prisma";
import { requireUser, requireRole } from "@/lib/auth";
import { rankOpportunities } from "@/lib/matching";
import { normalizeNeighborhood } from "@/lib/neighborhoods";
import { getCachedMatchExplanation } from "@/lib/gemini";

const PAGE_SIZE = 12;

function buildWhere(searchParams) {
  const where = {};
  where.status = "OPEN";

  const q = searchParams.get("q");
  if (q) {
    where.OR = [
      { title: { contains: q, mode: "insensitive" } },
      { description: { contains: q, mode: "insensitive" } },
    ];
  }

  const skill = searchParams.get("skill");
  if (skill) {
    where.skills = {
      some: { skill: { name: { equals: skill, mode: "insensitive" } } },
    };
  }

  const location = searchParams.get("location");
  if (location) {
    const canonical = normalizeNeighborhood(location);
    if (canonical) where.location = canonical;
  }

  const type = searchParams.get("type");
  if (type) where.type = type;

  const verified = searchParams.get("verified");
  if (verified === "true") where.verified = true;
  if (verified === "false") where.verified = false;

  const employerId = searchParams.get("employerId");
  if (employerId) where.employerId = employerId;

  return where;
}

export async function GET(request) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  const { searchParams } = new URL(request.url);

  if (searchParams.get("mine") === "true") {
    if (user.role !== "EMPLOYER" && user.role !== "ADMIN") {
      return Response.json({ error: "Only employers can list their opportunities." }, { status: 403 });
    }
    const opportunities = await prisma.opportunity.findMany({
      where: { employerId: user.id },
      include: {
        skills: { include: { skill: true } },
        employer: { select: { id: true, name: true, avatarUrl: true } },
        _count: { select: { applications: true } },
      },
      orderBy: { createdAt: "desc" },
    });
    return Response.json({ opportunities });
  }

  const where = buildWhere(searchParams);
  if (user.role !== "ADMIN" && !searchParams.get("includeUnverified")) {
    where.verified = true;
  }

  const dashboard = searchParams.get("dashboard") === "true";
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));

  const opportunities = await prisma.opportunity.findMany({
    where,
    include: {
      skills: { include: { skill: true } },
      employer: { select: { id: true, name: true, avatarUrl: true } },
      _count: { select: { applications: true } },
    },
    orderBy: { createdAt: "desc" },
    take: PAGE_SIZE,
    skip: (page - 1) * PAGE_SIZE,
  });

  const total = await prisma.opportunity.count({ where });

  let result = opportunities;
  if (dashboard && user.skills?.length) {
    result = rankOpportunities(opportunities, user);
    result = await Promise.all(
      result.map(async (opportunity) => {
        const explanation = await getCachedMatchExplanation({
          graduateId: user.id,
          opportunityId: opportunity.id,
          profile: user,
          opportunity,
        });
        return { ...opportunity, explanation };
      }),
    );
  }

  return Response.json({ opportunities: result, total, page, pageSize: PAGE_SIZE });
}

export async function POST(request) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  const roleError = requireRole(user, ["EMPLOYER", "ADMIN"]);
  if (roleError.error) return Response.json({ error: roleError.error.message }, { status: roleError.error.status });

  if (user.role === "EMPLOYER" && !user.phoneVerified) {
    return Response.json(
      { error: "Verify your phone number with an OTP before posting an opportunity." },
      { status: 403 },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const {
    title,
    description,
    type,
    location,
    payment,
    paymentType,
    deadline,
    skillIds,
  } = body || {};

  if (!title || !String(title).trim()) {
    return Response.json({ error: "Title is required." }, { status: 400 });
  }
  if (!description || !String(description).trim()) {
    return Response.json({ error: "Description is required." }, { status: 400 });
  }
  if (!location || !String(location).trim()) {
    return Response.json({ error: "Location is required." }, { status: 400 });
  }

  const canonicalLocation = normalizeNeighborhood(location);
  if (!canonicalLocation) {
    return Response.json({ error: "Choose a neighborhood from the list." }, { status: 400 });
  }
  if (!Array.isArray(skillIds) || skillIds.length === 0) {
    return Response.json({ error: "At least one required skill is needed." }, { status: 400 });
  }

  const VALID_TYPES = ["JOB", "GIG", "CONTRACT", "APPRENTICESHIP", "SERVICE_REQUEST"];
  if (type && !VALID_TYPES.includes(type)) {
    return Response.json({ error: "Invalid opportunity type." }, { status: 400 });
  }

  const VALID_PAYMENT_TYPES = ["FIXED", "PER_DAY", "PER_HOUR", "NEGOTIABLE"];
  if (paymentType && !VALID_PAYMENT_TYPES.includes(paymentType)) {
    return Response.json({ error: "Invalid payment type." }, { status: 400 });
  }

  let paymentValue = null;
  if (payment || payment === 0) {
    paymentValue = parseInt(payment, 10);
    if (Number.isNaN(paymentValue) || paymentValue < 0) {
      return Response.json({ error: "Payment must be a valid amount." }, { status: 400 });
    }
  }

  let deadlineDate = null;
  if (deadline) {
    deadlineDate = new Date(deadline);
    if (Number.isNaN(deadlineDate.getTime())) {
      return Response.json({ error: "Deadline is invalid." }, { status: 400 });
    }
  }

  const uniqueSkillIds = [...new Set(skillIds.map((s) => String(s)))];

  try {
    const opportunity = await prisma.opportunity.create({
      data: {
        title: String(title).trim(),
        description: String(description).trim(),
        type: type || "GIG",
        location: canonicalLocation,
        payment: paymentValue,
        paymentType: paymentType || "NEGOTIABLE",
        deadline: deadlineDate,
        employerId: user.id,
        verified: false,
        skills: {
          create: uniqueSkillIds.map((skillId) => ({ skillId })),
        },
      },
      include: {
        skills: { include: { skill: true } },
      },
    });

    return Response.json({ opportunity }, { status: 201 });
  } catch (err) {
    console.error("Opportunity create error:", err);
    return Response.json({ error: "Could not post the opportunity." }, { status: 500 });
  }
}