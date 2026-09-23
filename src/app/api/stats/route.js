import prisma from "@/lib/prisma";

const FALLBACK = {
  graduates: 0,
  employers: 0,
  opportunities: 0,
  applications: 0,
};

export async function GET() {
  try {
    const [graduates, employers, opportunities, applications] = await Promise.all([
      prisma.user.count({ where: { role: "GRADUATE" } }),
      prisma.user.count({ where: { role: "EMPLOYER" } }),
      prisma.opportunity.count({ where: { status: "OPEN" } }),
      prisma.application.count(),
    ]);
    return Response.json({ graduates, employers, opportunities, applications });
  } catch (err) {
    console.warn("Stats query failed, using fallback:", err?.message);
    return Response.json(FALLBACK);
  }
}