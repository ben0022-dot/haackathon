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
  const isEmployer = user.role === "EMPLOYER";
  const fields = [
    Boolean(user.name),
    Boolean(user.location),
    Boolean(user.bio),
    Boolean(user.phone),
    ...(isEmployer ? [] : [Boolean((user.skills || []).length > 0)]),
  ];
  const done = fields.filter(Boolean).length;
  return Math.round((done / fields.length) * 100);
}