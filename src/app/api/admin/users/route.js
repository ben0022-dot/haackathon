import prisma from "@/lib/prisma";
import { requireUser, requireRole } from "@/lib/auth";

export async function GET(request) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  const roleError = requireRole(user, ["ADMIN"]);
  if (roleError.error) return Response.json({ error: roleError.error.message }, { status: roleError.error.status });

  const { searchParams } = new URL(request.url);
  const role = searchParams.get("role");
  const q = searchParams.get("q");

  const where = {};
  if (role && ["GRADUATE", "EMPLOYER", "ADMIN"].includes(role)) where.role = role;
  if (q && String(q).trim()) {
    const term = String(q).trim();
    where.OR = [
      { name: { contains: term, mode: "insensitive" } },
      { email: { contains: term, mode: "insensitive" } },
    ];
  }

  const users = await prisma.user.findMany({
    where,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      location: true,
      emailVerified: true,
      createdAt: true,
      _count: { select: { applications: true, opportunities: true } },
    },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return Response.json({ users });
}