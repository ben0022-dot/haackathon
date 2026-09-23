import prisma from "@/lib/prisma";
import { requireUser, requireRole } from "@/lib/auth";

export async function POST(request) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  const roleError = requireRole(user, ["EMPLOYER", "ADMIN"]);
  if (roleError.error) return Response.json({ error: roleError.error.message }, { status: roleError.error.status });

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name } = body || {};

  if (!name || !String(name).trim()) {
    return Response.json({ error: "Skill name is required." }, { status: 400 });
  }

  const skillName = String(name).trim();
  const existingSkill = await prisma.skill.findFirst({
    where: { name: { equals: skillName, mode: "insensitive" } },
  });
  if (existingSkill) {
    return Response.json({ skill: existingSkill }, { status: 200 });
  }

  const existingRequest = await prisma.skillRequest.findFirst({
    where: { employerId: user.id, name: { equals: skillName, mode: "insensitive" } },
    orderBy: { createdAt: "desc" },
  });
  if (existingRequest) {
    return Response.json({ request: existingRequest }, { status: 200 });
  }

  const created = await prisma.skillRequest.create({
    data: { name: skillName, employerId: user.id, status: "PENDING" },
  });
  return Response.json({ request: created }, { status: 201 });
}