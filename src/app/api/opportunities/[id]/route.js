import prisma from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { employerStats } from "@/lib/reputation";

function opportunityInclude() {
  return {
    skills: { include: { skill: true } },
    employer: {
      select: { id: true, name: true, avatarUrl: true, location: true, phoneVerified: true },
    },
    _count: { select: { applications: true } },
  };
}

export async function GET(request, ctx) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  const { id } = await ctx.params;

  const opportunity = await prisma.opportunity.findUnique({
    where: { id },
    include: opportunityInclude(),
  });

  if (!opportunity) {
    return Response.json({ error: "Opportunity not found." }, { status: 404 });
  }

  const applied = await prisma.application.findUnique({
    where: {
      opportunityId_applicantId: {
        opportunityId: opportunity.id,
        applicantId: user.id,
      },
    },
  });

  const stats = await employerStats(opportunity.employerId);

  return Response.json({
    opportunity,
    employerHistory: stats,
    hasApplied: Boolean(applied),
  });
}

export async function PATCH(request, ctx) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  const { id } = await ctx.params;

  if (user.role !== "ADMIN") {
    const existing = await prisma.opportunity.findUnique({ where: { id } });
    if (!existing) return Response.json({ error: "Opportunity not found." }, { status: 404 });
    if (existing.employerId !== user.id) {
      return Response.json({ error: "You can only edit your own opportunities." }, { status: 403 });
    }
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { title, description, location, payment, status, skillIds } = body || {};

  const data = {};
  if (typeof title === "string" && title.trim()) data.title = title.trim();
  if (typeof description === "string" && description.trim()) data.description = description.trim();
  if (typeof location === "string" && location.trim()) data.location = location.trim();

  if (payment || payment === 0) {
    const value = parseInt(payment, 10);
    if (Number.isNaN(value) || value < 0) {
      return Response.json({ error: "Payment must be a valid amount." }, { status: 400 });
    }
    data.payment = value;
  }

  if (status && ["OPEN", "CLOSED"].includes(status)) data.status = status;

  try {
    const opportunity = await prisma.$transaction(async (tx) => {
      const updated = await tx.opportunity.update({
        where: { id },
        data,
        include: opportunityInclude(),
      });

      if (Array.isArray(skillIds)) {
        const selected = [...new Set(skillIds.map((s) => String(s)))];
        if (selected.length > 0) {
          await tx.opportunitySkill.deleteMany({ where: { opportunityId: id } });
          await tx.opportunitySkill.createMany({
            data: selected.map((skillId) => ({ opportunityId: id, skillId })),
          });
        }
        updated.skills = await tx.opportunitySkill.findMany({
          where: { opportunityId: id },
          include: { skill: true },
        });
      }

      return updated;
    });

    return Response.json({ opportunity });
  } catch (err) {
    console.error("Opportunity update error:", err);
    return Response.json({ error: "Could not update the opportunity." }, { status: 500 });
  }
}

export async function DELETE(request, ctx) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  const { id } = await ctx.params;

  if (user.role !== "ADMIN") {
    const existing = await prisma.opportunity.findUnique({ where: { id } });
    if (!existing) return Response.json({ error: "Opportunity not found." }, { status: 404 });
    if (existing.employerId !== user.id) {
      return Response.json({ error: "You can only delete your own opportunities." }, { status: 403 });
    }
  }

  try {
    await prisma.opportunity.delete({ where: { id } });
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Could not delete the opportunity." }, { status: 500 });
  }
}