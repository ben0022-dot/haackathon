export const NEIGHBORHOODS = [
  "Githogoro",
  "Runda",
  "Gigiri",
  "Mountain View",
  "Muthangari",
  "Loresho",
  "Westlands",
  "Parklands",
  "Muthaiga",
  "Spring Valley",
  "Kileleshwa",
];

const LEGACY_SUFFIXES = [
  "Githogoro, Nairobi",
  "Runda, Nairobi",
  "Gigiri, Nairobi",
  "Muthaiga, Nairobi",
  "Eastleigh, Nairobi",
];

export function normalizeNeighborhood(value) {
  if (!value) return null;
  const trimmed = String(value).trim();
  if (!trimmed) return null;

  const exact = NEIGHBORHOODS.find((n) => n.toLowerCase() === trimmed.toLowerCase());
  if (exact) return exact;

  const lower = `, ${trimmed.toLowerCase()}`;
  const match = NEIGHBORHOODS.find((n) => lower.endsWith(n.toLowerCase()));
  if (match) return match;

  const legacy = LEGACY_SUFFIXES.find(
    (s) => s.toLowerCase() === trimmed.toLowerCase(),
  );
  if (legacy) return legacy.split(",")[0];

  return null;
}

export const ADJACENT_NEIGHBORHOODS = {
  Githogoro: ["Runda", "Mountain View", "Muthangari"],
  Runda: ["Githogoro", "Muthaiga", "Loresho", "Gigiri"],
  Gigiri: ["Runda", "Muthaiga"],
  "Mountain View": ["Githogoro", "Muthangari", "Parklands", "Westlands"],
  Muthangari: ["Githogoro", "Mountain View", "Westlands"],
  Loresho: ["Runda", "Spring Valley", "Kileleshwa"],
  Westlands: ["Mountain View", "Muthangari", "Parklands", "Spring Valley", "Kileleshwa"],
  Parklands: ["Westlands", "Mountain View", "Kileleshwa"],
  Muthaiga: ["Runda", "Gigiri", "Spring Valley"],
  "Spring Valley": ["Loresho", "Westlands", "Muthaiga", "Kileleshwa"],
  Kileleshwa: ["Loresho", "Westlands", "Parklands", "Spring Valley"],
};

function pairsFor(neighborhood) {
  const neighbors = ADJACENT_NEIGHBORHOODS[neighborhood] || [];
  return neighbors.concat(
    Object.keys(ADJACENT_NEIGHBORHOODS).filter(
      (key) => (ADJACENT_NEIGHBORHOODS[key] || []).includes(neighborhood),
    ),
  );
}

export function isAdjacentLocation(a, b) {
  const x = normalizeNeighborhood(a);
  const y = normalizeNeighborhood(b);
  if (!x || !y) return false;
  return pairsFor(x).includes(y);
}