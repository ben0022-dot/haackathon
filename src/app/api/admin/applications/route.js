import prisma from "@/lib/prisma";
import { requireUser, requireRole } from "@/lib/auth";

export async function GET(request) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  const roleError = requireRole(user, ["ADMIN"]);
  if (roleError.error) return Response.json({ error: roleError.error.message }, { status: roleError.error.status });

  const applications = await prisma.application.findMany({
    include: {
      opportunity: {
        include: {
          skills: { include: { skill: true } },
          employer: { select: { id: true, name: true, avatarUrl: true, location: true } },
        },
      },
      applicant: {
        select: { id: true, name: true, avatarUrl: true, location: true },
      },
      reviews: true,
    },
    orderBy: { createdAt: "desc" },
    take: 30,
  });

  return Response.json({ applications });
}