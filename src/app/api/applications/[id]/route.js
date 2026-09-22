import prisma from "@/lib/prisma";
import { requireUser } from "@/lib/auth";

export async function PATCH(request, ctx) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  const { id } = await ctx.params;

  const application = await prisma.application.findUnique({
    where: { id },
    include: { opportunity: { select: { employerId: true } } },
  });

  if (!application) {
    return Response.json({ error: "Application not found." }, { status: 404 });
  }

  const isApplicant = application.applicantId === user.id;
  const isOwner = application.opportunity.employerId === user.id;
  const isAdmin = user.role === "ADMIN";

  if (!isApplicant && !isOwner && !isAdmin) {
    return Response.json({ error: "You cannot update this application." }, { status: 403 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { status } = body || {};

  if (!status) {
    return Response.json({ error: "Status is required." }, { status: 400 });
  }

  if (isApplicant && !isOwner && !isAdmin) {
    return Response.json({ error: "Only the employer can change the status." }, { status: 403 });
  }

  const VALID = ["PENDING", "REVIEWING", "ACCEPTED", "REJECTED", "COMPLETED"];
  if (!VALID.includes(status)) {
    return Response.json({ error: "Invalid status." }, { status: 400 });
  }

  try {
    const updated = await prisma.application.update({
      where: { id },
      data: { status },
    });
    return Response.json({ application: updated });
  } catch (err) {
    console.error("Application update error:", err);
    return Response.json({ error: "Could not update the application." }, { status: 500 });
  }
}