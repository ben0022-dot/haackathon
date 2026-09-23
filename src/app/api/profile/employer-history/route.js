import { requireUser } from "@/lib/auth";
import { employerStats } from "@/lib/reputation";

export async function GET(request) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  const stats = await employerStats(user.id);
  return Response.json({ history: stats });
}