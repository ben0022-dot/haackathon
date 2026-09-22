import prisma from "@/lib/prisma";
import { requireUser, requireRole } from "@/lib/auth";

export async function GET(request) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  const roleError = requireRole(user, ["ADMIN"]);
  if (roleError.error) return Response.json({ error: roleError.error.message }, { status: roleError.error.status });

  const opportunities = await prisma.opportunity.findMany({
    where: { verified: false, status: "OPEN" },
    include: {
      skills: { include: { skill: true } },
      employer: { select: { id: true, name: true, avatarUrl: true, location: true } },
      _count: { select: { applications: true } },
    },
    orderBy: { createdAt: "asc" },
  });

  return Response.json({ opportunities });
}

export async function PATCH(request) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  const roleError = requireRole(user, ["ADMIN"]);
  if (roleError.error) return Response.json({ error: roleError.error.message }, { status: roleError.error.status });

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { opportunityId, action } = body || {};

  if (!opportunityId) {
    return Response.json({ error: "Opportunity is required." }, { status: 400 });
  }

  if (!["approve", "reject"].includes(action)) {
    return Response.json({ error: "Action must be approve or reject." }, { status: 400 });
  }

  const opportunity = await prisma.opportunity.findUnique({ where: { id: opportunityId } });
  if (!opportunity) {
    return Response.json({ error: "Opportunity not found." }, { status: 404 });
  }

  try {
    const updated = await prisma.opportunity.update({
      where: { id: opportunityId },
      data:
        action === "approve"
          ? { verified: true, status: "OPEN" }
          : { verified: false, status: "CLOSED" },
      include: { skills: { include: { skill: true } } },
    });
    return Response.json({ opportunity: updated });
  } catch (err) {
    console.error("Admin review error:", err);
    return Response.json({ error: "Could not update the opportunity." }, { status: 500 });
  }
}