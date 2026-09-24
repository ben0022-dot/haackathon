import prisma from "@/lib/prisma";
import { requireUser, requireRole } from "@/lib/auth";

export async function GET(request) {
  const { user, error } = await requireUser(request);
  if (error) {
    return Response.json({ error: error.message }, { status: error.status });
  }

  const roleError = requireRole(user, ["EMPLOYER", "ADMIN"]);
  if (roleError.error) {
    return Response.json({ error: roleError.error.message }, { status: roleError.error.status });
  }

  const [pendingApplications, activeOpportunities] = await Promise.all([
    prisma.application.count({
      where: { opportunity: { employerId: user.id }, status: "PENDING" },
    }),
    prisma.opportunity.count({
      where: { employerId: user.id, status: "OPEN" },
    }),
  ]);

  return Response.json({ pendingApplications, activeOpportunities });
}