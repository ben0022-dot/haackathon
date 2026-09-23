import prisma from "@/lib/prisma";

export async function employerStats(employerId) {
  const [posted, verified, completed, ratingAgg] = await Promise.all([
    prisma.opportunity.count({ where: { employerId } }),
    prisma.opportunity.count({ where: { employerId, verified: true } }),
    prisma.application.count({
      where: { opportunity: { employerId }, status: "COMPLETED" },
    }),
    prisma.review.aggregate({
      where: { revieweeId: employerId },
      _avg: { rating: true },
      _count: true,
    }),
  ]);

  return {
    posted,
    verified,
    completed,
    avgRating: ratingAgg._avg.rating ?? null,
    reviewCount: ratingAgg._count,
  };
}