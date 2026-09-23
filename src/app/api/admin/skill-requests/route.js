import prisma from "@/lib/prisma";
import { requireUser, requireRole } from "@/lib/auth";

export async function GET(request) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  const roleError = requireRole(user, ["ADMIN"]);
  if (roleError.error) return Response.json({ error: roleError.error.message }, { status: roleError.error.status });

  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status") || "PENDING";
  const valid = ["PENDING", "APPROVED", "MERGED", "REJECTED"];
  if (!valid.includes(status)) {
    return Response.json({ error: "Invalid status." }, { status: 400 });
  }

  const requests = await prisma.skillRequest.findMany({
    where: { status },
    include: { employer: { select: { id: true, name: true } } },
    orderBy: { createdAt: "asc" },
  });

  return Response.json({ requests });
}

export async function POST(request) {
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

  const { requestId, action, mergeInto } = body || {};

  if (!requestId) return Response.json({ error: "Request is required." }, { status: 400 });
  if (!["approve", "reject", "merge"].includes(action)) {
    return Response.json({ error: "Action must be approve, reject, or merge." }, { status: 400 });
  }

  const skillRequest = await prisma.skillRequest.findUnique({ where: { id: requestId } });
  if (!skillRequest) return Response.json({ error: "Skill request not found." }, { status: 404 });
  if (skillRequest.status !== "PENDING") {
    return Response.json({ error: "This request was already reviewed." }, { status: 409 });
  }

  try {
    if (action === "approve") {
      await prisma.skill.upsert({
        where: { name: skillRequest.name },
        update: {},
        create: { name: skillRequest.name },
      });
      return Response.json({
        request: await prisma.skillRequest.update({
          where: { id: requestId },
          data: { status: "APPROVED" },
        }),
      });
    }

    if (action === "merge") {
      if (!mergeInto || !String(mergeInto).trim()) {
        return Response.json({ error: "Choose the skill this request merges into." }, { status: 400 });
      }
      const target = await prisma.skill.findUnique({ where: { name: String(mergeInto).trim() } });
      if (!target) {
        return Response.json({ error: "Target skill does not exist." }, { status: 400 });
      }
      return Response.json({
        request: await prisma.skillRequest.update({
          where: { id: requestId },
          data: { status: "MERGED" },
        }),
      });
    }

    return Response.json({
      request: await prisma.skillRequest.update({
        where: { id: requestId },
        data: { status: "REJECTED" },
      }),
    });
  } catch (err) {
    console.error("Skill request review error:", err);
    return Response.json({ error: "Could not update the skill request." }, { status: 500 });
  }
}