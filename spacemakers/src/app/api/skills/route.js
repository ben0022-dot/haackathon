import prisma from "@/lib/prisma";
import { getFirebaseUid } from "@/lib/auth";

export async function GET(request) {
  const result = await getFirebaseUid(request);
  if (result.error) {
    return Response.json({ error: result.error.message }, { status: result.error.status });
  }

  const skills = await prisma.skill.findMany({ orderBy: { name: "asc" } });
  return Response.json({ skills });
}