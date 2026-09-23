import prisma from "@/lib/prisma";
import { requireUser, requireRole } from "@/lib/auth";
import { getCachedMatchExplanation } from "@/lib/gemini";

export async function GET(request, ctx) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  const roleError = requireRole(user, ["GRADUATE", "ADMIN"]);
  if (roleError.error) return Response.json({ error: roleError.error.message }, { status: roleError.error.status });

  const { id } = await ctx.params;

  const opportunity = await prisma.opportunity.findUnique({
    where: { id },
    include: { skills: { include: { skill: true } } },
  });

  if (!opportunity) {
    return Response.json({ error: "Opportunity not found." }, { status: 404 });
  }

  if (opportunity.employerId === user.id) {
    return Response.json({ error: "This is your own opportunity." }, { status: 400 });
  }

  try {
    const explanation = await getCachedMatchExplanation({
      graduateId: user.id,
      opportunityId: opportunity.id,
      profile: user,
      opportunity,
    });
    if (!explanation) {
      return Response.json({ error: "Could not generate an explanation right now." }, { status: 502 });
    }
    return Response.json({ explanation });
  } catch (err) {
    console.error("Match explain error:", err);
    return Response.json({ error: "Could not generate an explanation right now." }, { status: 502 });
  }
}