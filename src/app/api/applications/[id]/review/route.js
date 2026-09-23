import prisma from "@/lib/prisma";
import { requireUser } from "@/lib/auth";

export async function POST(request, ctx) {
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
  if (!isApplicant && !isOwner) {
    return Response.json({ error: "You cannot review this application." }, { status: 403 });
  }

  if (application.status !== "COMPLETED") {
    return Response.json(
      { error: "Reviews are available once the opportunity is marked completed." },
      { status: 409 },
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const rating = parseInt(body?.rating, 10);
  if (Number.isNaN(rating) || rating < 1 || rating > 5) {
    return Response.json({ error: "Rate between 1 and 5 stars." }, { status: 400 });
  }

  const comment = typeof body?.comment === "string" ? body.comment.trim() : "";

  try {
    const review = await prisma.review.create({
      data: {
        applicationId: application.id,
        reviewerId: user.id,
        revieweeId: isApplicant ? application.opportunity.employerId : application.applicantId,
        rating,
        comment: comment || null,
      },
    });
    return Response.json({ review }, { status: 201 });
  } catch (err) {
    if (err?.code === "P2002") {
      return Response.json({ error: "You have already reviewed this application." }, { status: 409 });
    }
    console.error("Review create error:", err);
    return Response.json({ error: "Could not submit your review." }, { status: 500 });
  }
}