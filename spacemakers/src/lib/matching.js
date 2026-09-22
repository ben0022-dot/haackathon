const SKILL_MATCH = 50;
const LOCATION_MATCH = 30;
const VERIFICATION_BONUS = 20;

function sameLocation(a, b) {
  if (!a || !b) return false;
  const x = String(a).toLowerCase();
  const y = String(b).toLowerCase();
  if (x === y) return true;
  return x.includes(y) || y.includes(x);
}

export function scoreOpportunity(opportunity, user) {
  const userSkillNames = new Set((user.skills || []).map((us) => us.skill?.name?.toLowerCase()));

  const requiredSkills = (opportunity.skills || []).map((os) => os.skill?.name?.toLowerCase());
  const hasSkillMatch = requiredSkills.some((name) => name && userSkillNames.has(name));
  const skillMatch = hasSkillMatch ? SKILL_MATCH : 0;

  const locationMatch = sameLocation(opportunity.location, user.location) ? LOCATION_MATCH : 0;

  const verificationBonus = opportunity.verified ? VERIFICATION_BONUS : 0;

  return skillMatch + locationMatch + verificationBonus;
}

export function rankOpportunities(opportunities, user) {
  return opportunities
    .map((opportunity) => ({
      ...opportunity,
      score: scoreOpportunity(opportunity, user),
    }))
    .sort((a, b) => b.score - a.score || new Date(b.createdAt) - new Date(a.createdAt));
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