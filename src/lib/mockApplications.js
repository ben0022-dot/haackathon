import prisma from "@/lib/prisma";
import { normalizeNeighborhood } from "@/lib/neighborhoods";

const PIPELINE = [
  {
    status: "PENDING",
    daysAgo: 1,
    message: "I have the right skills and can start right away.",
  },
  {
    status: "REVIEWING",
    daysAgo: 2,
    message: "Available right away and happy to take direction.",
  },
  {
    status: "REJECTED",
    daysAgo: 3,
    message: "I am available this week and can start right away.",
  },
  {
    status: "ACCEPTED",
    daysAgo: 4,
    message: "I can start tomorrow and will bring my own tools.",
  },
  {
    status: "COMPLETED",
    daysAgo: 18,
    message: "Handled a very similar job during my TVET attachment.",
  },
];

async function pickOpportunities(user, usedIds, count) {
  const open = await prisma.opportunity.findMany({
    where: { status: "OPEN" },
    include: { skills: { include: { skill: true } } },
    orderBy: { createdAt: "desc" },
  });

  const userSkillNames = new Set(
    (user.skills || []).map((us) => us.skill?.name?.toLowerCase()).filter(Boolean),
  );

  return open
    .filter((o) => !usedIds.has(o.id))
    .map((o) => {
      const required = (o.skills || [])
        .map((os) => os.skill?.name?.toLowerCase())
        .filter(Boolean);
      const matched = required.filter((name) => userSkillNames.has(name)).length;
      return { o, score: matched * 10 + (o.verified ? 1 : 0) };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((c) => c.o);
}

export async function ensureGraduateMockPipeline(user) {
  if (user.role !== "GRADUATE") return;

  const existing = await prisma.application.findMany({
    where: { applicantId: user.id },
    select: { status: true, opportunityId: true },
  });

  const present = new Set(existing.map((a) => a.status));
  const missing = PIPELINE.filter((p) => !present.has(p.status));
  if (missing.length === 0) return;

  const usedIds = new Set(existing.map((a) => a.opportunityId));
  const opps = await pickOpportunities(user, usedIds, missing.length);
  if (opps.length === 0) return;

  const created = [];
  for (const [index, template] of missing.entries()) {
    const op = opps[index];
    if (!op) break;
    try {
      const application = await prisma.application.create({
        data: {
          opportunityId: op.id,
          applicantId: user.id,
          status: template.status,
          message: template.message,
          createdAt: new Date(Date.now() - template.daysAgo * 864e5),
        },
      });
      created.push({ application, op, status: template.status });
    } catch (err) {
      if (err?.code === "P2002") continue;
      console.warn("Mock application create skipped:", err?.message);
    }
  }

  for (const item of created.filter((c) => c.status === "COMPLETED")) {
    const employerId = item.op.employerId;
    const existingReview = await prisma.review.findFirst({
      where: { applicationId: item.application.id, reviewerId: employerId },
    });
    if (existingReview) continue;
    try {
      await prisma.review.create({
        data: {
          applicationId: item.application.id,
          reviewerId: employerId,
          revieweeId: user.id,
          rating: 5,
          comment: "Trained, punctual and worked cleanly. Would hire again.",
        },
      });
    } catch (err) {
      console.warn("Mock review create skipped:", err?.message);
    }
  }
}

const EMPLOYER_GIG_TEMPLATES = [
  {
    title: "Steady support for a local workshop",
    description:
      "Looking for a dependable hand with basic trade skills for ongoing workshop support near our premises.",
    type: "APPRENTICESHIP",
    payment: 900,
    paymentType: "PER_DAY",
    skills: ["Mechanics"],
    verified: true,
    daysAgo: 2,
    deadlineDays: 14,
  },
  {
    title: "Weekend servicing assistant",
    description:
      "Need help over the weekend with servicing work. Basic tools provided; willing to train.",
    type: "GIG",
    payment: 1200,
    paymentType: "PER_DAY",
    skills: ["Mechanics"],
    verified: true,
    daysAgo: 1,
    deadlineDays: 5,
  },
  {
    title: "One-day installation help",
    description:
      "Support a small installation job. Someone reliable who can follow instructions.",
    type: "SERVICE_REQUEST",
    payment: 1500,
    paymentType: "PER_DAY",
    skills: ["Electrical"],
    verified: false,
    daysAgo: 0,
    deadlineDays: 5,
  },
];

const EMPLOYER_STATUSES = ["PENDING", "REVIEWING", "ACCEPTED", "REJECTED", "COMPLETED"];

export async function ensureEmployerMockData(user) {
  if (user.role !== "EMPLOYER") return;

  const now = Date.now();

  const openGigs = await prisma.opportunity.findMany({
    where: { employerId: user.id, status: "OPEN" },
    include: { skills: { include: { skill: true } } },
    orderBy: { createdAt: "desc" },
  });

  let gigs = openGigs;
  if (gigs.length < 2) {
    const skills = await prisma.skill.findMany();
    const skillByName = new Map(skills.map((s) => [s.name.toLowerCase(), s.id]));
    const existingTitles = new Set(
      (
        await prisma.opportunity.findMany({
          where: { employerId: user.id },
          select: { title: true },
        })
      ).map((o) => o.title),
    );

    for (const tpl of EMPLOYER_GIG_TEMPLATES) {
      if (existingTitles.has(tpl.title)) continue;
      const skillId = skillByName.get(tpl.skills[0].toLowerCase());
      if (!skillId) continue;
      const gig = await prisma.opportunity.create({
        data: {
          title: tpl.title,
          description: tpl.description,
          type: tpl.type,
          location: user.location || "Githogoro",
          payment: tpl.payment,
          paymentType: tpl.paymentType,
          deadline: new Date(now + tpl.deadlineDays * 864e5),
          employerId: user.id,
          verified: tpl.verified,
          createdAt: new Date(now - tpl.daysAgo * 864e5),
          skills: {
            create: [{ skillId }],
          },
        },
        include: { skills: { include: { skill: true } } },
      });
      gigs.push(gig);
    }
  }

  if (gigs.length === 0) return;

  const existing = await prisma.application.findMany({
    where: { opportunity: { employerId: user.id } },
    select: { status: true, opportunityId: true },
  });
  const presentStatuses = new Set(existing.map((a) => a.status));
  const missingStatuses = EMPLOYER_STATUSES.filter((s) => !presentStatuses.has(s));
  if (missingStatuses.length === 0) return;

  const graduates = await prisma.user.findMany({
    where: { role: "GRADUATE" },
    include: { skills: { include: { skill: true } } },
    take: 20,
  });
  if (graduates.length === 0) return;

  const usedPairs = new Set(existing.map((a) => `${a.opportunityId}:${a.applicantId}`));

  for (const [index, status] of missingStatuses.entries()) {
    const gig = gigs[index % gigs.length];
    const graduate = graduates[index % graduates.length];

    if (usedPairs.has(`${gig.id}:${graduate.id}`)) continue;

    const duplicate = await prisma.application.findFirst({
      where: { opportunityId: gig.id, applicantId: graduate.id },
    });
    if (duplicate) continue;

    try {
      const app = await prisma.application.create({
        data: {
          opportunityId: gig.id,
          applicantId: graduate.id,
          status,
          message:
            status === "REJECTED"
              ? "Available right away and happy to take direction."
              : `Hi, I have ${graduate.location || ""} experience with ${
                  gig.skills.map((os) => os.skill?.name).join(", ") || "this trade"
                } and can start immediately.`,
          createdAt: new Date(now - (index + 1) * 2 * 864e5),
        },
      });

      if (status === "COMPLETED") {
        const existingReview = await prisma.review.findFirst({
          where: { applicationId: app.id, reviewerId: user.id },
        });
        if (!existingReview) {
          await prisma.review.create({
            data: {
              applicationId: app.id,
              reviewerId: user.id,
              revieweeId: graduate.id,
              rating: 5,
              comment: "Did a clean job and communicated well throughout.",
            },
          });
        }
      }
    } catch (err) {
      if (err?.code === "P2002") continue;
      console.warn("Mock employer application create skipped:", err?.message);
    }
  }
}