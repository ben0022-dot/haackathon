import prisma from "@/lib/prisma";

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