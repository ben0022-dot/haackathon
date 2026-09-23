import { normalizeNeighborhood, isAdjacentLocation } from "./neighborhoods";

export const SKILL_WEIGHT = 50;
export const LOCATION_EXACT = 30;
export const LOCATION_ADJACENT = 15;
export const VERIFICATION_BONUS = 20;

export function scoreOpportunity(opportunity, user) {
  const userSkillNames = new Set(
    (user.skills || []).map((us) => us.skill?.name?.toLowerCase()).filter(Boolean),
  );

  const requiredSkills = (opportunity.skills || [])
    .map((os) => os.skill?.name?.toLowerCase())
    .filter(Boolean);

  const totalRequired = requiredSkills.length;
  const matched = requiredSkills.filter((name) => userSkillNames.has(name)).length;
  const skillScore = totalRequired > 0 ? SKILL_WEIGHT * (matched / totalRequired) : 0;

  const a = normalizeNeighborhood(user.location);
  const b = normalizeNeighborhood(opportunity.location);
  let locationScore = 0;
  if (a && b && a === b) {
    locationScore = LOCATION_EXACT;
  } else if (a && b && isAdjacentLocation(a, b)) {
    locationScore = LOCATION_ADJACENT;
  }

  const verificationBonus = opportunity.verified ? VERIFICATION_BONUS : 0;

  return skillScore + locationScore + verificationBonus;
}

export function rankOpportunities(opportunities, user) {
  return opportunities
    .map((opportunity) => ({
      ...opportunity,
      score: scoreOpportunity(opportunity, user),
    }))
    .sort(
      (a, b) =>
        b.score - a.score || new Date(b.createdAt) - new Date(a.createdAt),
    );
}

export function profileCompletion(user) {
  let count = 0;
  if (user.name) count += 1;
  if (user.location) count += 1;
  if (user.bio) count += 1;
  if (user.phone) count += 1;
  if ((user.skills || []).length > 0) count += 1;
  return Math.round((count / 5) * 100);
}