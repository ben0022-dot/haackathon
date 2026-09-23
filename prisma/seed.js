const crypto = require("node:crypto");

const { PrismaClient } = require("../src/generated/prisma/client.js");
const { PrismaPg } = require("@prisma/adapter-pg");
const { initializeApp, cert, getApps } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");
const dotenv = require("dotenv");

dotenv.config({ path: [".env.local", ".env"] });

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    }),
  });
}

const DEMO_PASSWORD = "SpaceMakers@2026";

const SKILLS = [
  { name: "Electrical", category: "Trades" },
  { name: "Tailoring", category: "Trades" },
  { name: "Catering", category: "Services" },
  { name: "Plumbing", category: "Trades" },
  { name: "Carpentry", category: "Trades" },
  { name: "Masonry", category: "Construction" },
  { name: "Welding", category: "Construction" },
  { name: "ICT", category: "Technology" },
  { name: "Mechanics", category: "Trades" },
  { name: "Hairdressing", category: "Services" },
];

const GRADUATES = [
  {
    name: "Brian Otieno",
    email: "brian.demo@spacemakers.app",
    location: "Githogoro",
    bio: "TVET graduate. Comfortable with both electrical installations and plumbing repairs.",
    roles: { Electrical: "INTERMEDIATE", Plumbing: "INTERMEDIATE" },
  },
  {
    name: "Wanjiku Njeri",
    email: "wanjiku.demo@spacemakers.app",
    location: "Githogoro",
    bio: "Catering graduate who also sews school uniforms for local families.",
    roles: { Tailoring: "ADVANCED", Catering: "INTERMEDIATE" },
  },
  {
    name: "David Mwangi",
    email: "david.demo@spacemakers.app",
    location: "Muthaiga",
    bio: "ICT technician, comfortable with computer repair and network setup.",
    roles: { ICT: "ADVANCED", Carpentry: "BEGINNER" },
  },
];

const EMPLOYERS = [
  {
    name: "Mama Njeri's Eatery",
    email: "eatery.demo@spacemakers.app",
    location: "Githogoro",
    bio: "Local eatery hiring catering and kitchen staff for events.",
  },
  {
    name: "Umoja Hardware & Electrical",
    email: "hardware.demo@spacemakers.app",
    location: "Runda",
    bio: "Hardware shop that takes on wiring and installation jobs.",
  },
];

const ADMIN = {
  name: "SpaceMakers Admin",
  email: "admin.spacemakers@spacemakers.app",
  location: "Githogoro",
  bio: "Platform administrator.",
};

async function upsertUser({ name, email, location, bio, role, firebaseUid }) {
  await prisma.user.upsert({
    where: { firebaseUid },
    update: { name, email, location, bio, role, emailVerified: true },
    create: { firebaseUid, name, email, location, bio, role, emailVerified: true },
  });
  return prisma.user.findUnique({ where: { firebaseUid } });
}

let firebaseAuthOk = true;

async function ensureFirebaseUser(email, displayName) {
  if (!firebaseAuthOk) {
    return `demo_${crypto.createHash("sha1").update(email).digest("hex").slice(0, 24)}`;
  }
  try {
    const existing = await getAuth().getUserByEmail(email);
    return existing.uid;
  } catch {
    if (getApps().length) {
      try {
        const record = await getAuth().createUser({
          email,
          password: DEMO_PASSWORD,
          displayName,
          emailVerified: true,
        });
        return record.uid;
      } catch (err) {
        if (err.errorInfo?.code === "auth/configuration-not-found") {
          firebaseAuthOk = false;
          console.warn("    ! Firebase Auth not enabled on this project; falling back to demo UIDs.");
        }
      }
    }
    return `demo_${crypto.createHash("sha1").update(email).digest("hex").slice(0, 24)}`;
  }
}

async function ensureSkills() {
  const map = {};
  for (const skill of SKILLS) {
    const saved = await prisma.skill.upsert({
      where: { name: skill.name },
      update: {},
      create: skill,
    });
    map[skill.name] = saved.id;
  }
  return map;
}

const skillIdByName = {};

async function main() {
  console.log("Seeding skills...");
  const skillsByName = await ensureSkills();
  Object.assign(skillIdByName, skillsByName);

  const now = Date.now();

  const grads = [];
  for (const [index, g] of GRADUATES.entries()) {
    const uid = await ensureFirebaseUser(g.email, g.name, "GRADUATE");
    const user = await upsertUser({
      firebaseUid: uid,
      name: g.name,
      email: g.email,
      location: g.location,
      bio: g.bio,
      role: "GRADUATE",
    });
    await prisma.userSkill.deleteMany({ where: { userId: user.id } });
    await prisma.userSkill.createMany({
      data: Object.entries(g.roles).map(([name, level]) => ({
        userId: user.id,
        skillId: skillsByName[name],
        experienceLevel: level,
      })),
    });
    grads.push({
      user,
      skillNames: new Set(Object.keys(g.roles)),
      offsetDays: [1, 3, 5][index] || 2,
    });
    console.log(`  + graduate ${g.name} (${uid})`);
  }

  const employers = [];
  for (const e of EMPLOYERS) {
    const uid = await ensureFirebaseUser(e.email, e.name, "EMPLOYER");
    const user = await upsertUser({
      firebaseUid: uid,
      name: e.name,
      email: e.email,
      location: e.location,
      bio: e.bio,
      role: "EMPLOYER",
    });
    employers.push(user);
    console.log(`  + employer ${e.name} (${uid})`);
  }

  const adminUid = await ensureFirebaseUser(ADMIN.email, ADMIN.name, "ADMIN");
  const adminUser = await upsertUser({
    firebaseUid: adminUid,
    name: ADMIN.name,
    email: ADMIN.email,
    location: ADMIN.location,
    bio: ADMIN.bio,
    role: "ADMIN",
  });
  console.log(`  + admin ${ADMIN.name} (${adminUid})`);

  const [eatery, hardware] = employers;
  const household = {
    name: "Mrs. Mbugua",
    email: "mbugua.demo@spacemakers.app",
    location: "Gigiri",
    bio: "Homeowner who needs regular skilled help around the house.",
  };
  const householdUid = await ensureFirebaseUser(household.email, household.name, "EMPLOYER");
  const householdUser = await upsertUser({
    firebaseUid: householdUid,
    name: household.name,
    email: household.email,
    location: household.location,
    bio: household.bio,
    role: "EMPLOYER",
  });
  console.log(`  + household ${household.name} (${householdUid})`);

  const OPPORTUNITY_SEEDS = [
    {
      title: "Electrician needed for house wiring",
      description:
        "Rewiring a 2-bedroom house in Githogoro. Must be able to install sockets, switchboards and lighting. Materials will be provided.",
      type: "GIG",
      location: "Githogoro",
      payment: 2500,
      paymentType: "FIXED",
      employerId: hardware.id,
      skills: ["Electrical"],
      verified: true,
      daysAgo: 0,
    },
    {
      title: "Wedding catering assistant",
      description:
        "Assist with food prep, serving and cleanup for a wedding in Runda on Saturday. Catering experience needed.",
      type: "GIG",
      location: "Runda",
      payment: 1800,
      paymentType: "PER_DAY",
      employerId: eatery.id,
      skills: ["Catering"],
      verified: true,
      daysAgo: 0,
    },
    {
      title: "Tailor needed for school uniforms",
      description:
        "Need a tailor to make 30 school uniforms before next term. Fabric provided. Payment per set.",
      type: "CONTRACT",
      location: "Githogoro",
      payment: 600,
      paymentType: "PER_DAY",
      employerId: householdUser.id,
      skills: ["Tailoring"],
      verified: true,
      daysAgo: 1,
    },
    {
      title: "Plumber for residential repair",
      description:
        "Fix leaking pipes and a blocked sink in a Muthaiga home. Small job, can be done in one day.",
      type: "SERVICE_REQUEST",
      location: "Muthaiga",
      payment: 1500,
      paymentType: "FIXED",
      employerId: householdUser.id,
      skills: ["Plumbing"],
      verified: true,
      daysAgo: 1,
    },
    {
      title: "ICT support assistant",
      description:
        "Help set up computers and a small network for a local shop. Also install office software.",
      type: "GIG",
      location: "Gigiri",
      payment: 2000,
      paymentType: "FIXED",
      employerId: hardware.id,
      skills: ["ICT"],
      verified: false,
      daysAgo: 0,
    },
    {
      title: "Carpentry assistant wanted",
      description:
        "Help build shelves and repair wooden furniture for a weekend project in Githogoro.",
      type: "GIG",
      location: "Githogoro",
      payment: 1000,
      paymentType: "PER_DAY",
      employerId: householdUser.id,
      skills: ["Carpentry"],
      verified: false,
      daysAgo: 2,
    },
    {
      title: "Event ushers & kitchen helpers",
      description:
        "Event next month needs 3 helpers for setup, serving and cleanup. Catering experience preferred.",
      type: "JOB",
      location: "Githogoro",
      payment: 1200,
      paymentType: "PER_DAY",
      employerId: eatery.id,
      skills: ["Catering"],
      verified: true,
      daysAgo: 3,
    },
    {
      title: "Mason for boundary wall repair",
      description:
        "Repair cracked sections of a compound wall in Muthaiga. Masonry experience required.",
      type: "CONTRACT",
      location: "Muthaiga",
      payment: 3500,
      paymentType: "FIXED",
      employerId: householdUser.id,
      skills: ["Masonry"],
      verified: false,
      daysAgo: 4,
    },
    {
      title: "Motorcycle mechanic helper",
      description:
        "Assist with servicing small motorbikes at a garage in Eastleigh. Basic mechanic knowledge needed.",
      type: "APPRENTICESHIP",
      location: "Parklands",
      payment: 800,
      paymentType: "PER_DAY",
      employerId: hardware.id,
      skills: ["Mechanics"],
      verified: false,
      daysAgo: 5,
    },
    {
      title: "Hairdressing assistant (barbershop)",
      description:
        "Weekend assistant at a busy barbershop. Experience with haircuts needed.",
      type: "GIG",
      location: "Githogoro",
      payment: 750,
      paymentType: "PER_DAY",
      employerId: eatery.id,
      skills: ["Hairdressing"],
      verified: true,
      daysAgo: 6,
    },
    {
      title: "Welder for gate repairs",
      description:
        "Weld and repaint a metal gate and window grilles in Gigiri. Tools can be arranged.",
      type: "GIG",
      location: "Gigiri",
      payment: 3000,
      paymentType: "FIXED",
      employerId: householdUser.id,
      skills: ["Welding"],
      verified: false,
      daysAgo: 7,
    },
    {
      title: "Kitchen porter (permanent)",
      description:
        "Full-time kitchen porter at the eatery. Willing to train the right person.",
      type: "JOB",
      location: "Githogoro",
      payment: 900,
      paymentType: "PER_DAY",
      employerId: eatery.id,
      skills: ["Catering"],
      verified: true,
      daysAgo: 8,
    },
  ];

  console.log("Seeding opportunities...");
  const opportunities = [];
  for (const [index, seed] of OPPORTUNITY_SEEDS.entries()) {
    const existing = await prisma.opportunity.findFirst({ where: { title: seed.title } });
    if (existing) {
      const full = await prisma.opportunity.findUnique({
        where: { id: existing.id },
        include: { skills: { include: { skill: true } } },
      });
      opportunities.push(full);
      continue;
    }
    const deadline = seed.type === "CONTRACT" ? new Date(now + 10 * 864e5) : seed.type === "JOB" ? new Date(now + 14 * 864e5) : new Date(now + 5 * 864e5);
    const opportunity = await prisma.opportunity.create({
      data: {
        title: seed.title,
        description: seed.description,
        type: seed.type,
        location: seed.location,
        payment: seed.payment,
        paymentType: seed.paymentType,
        deadline,
        employerId: seed.employerId,
        verified: seed.verified,
        createdAt: new Date(now - seed.daysAgo * 864e5),
        skills: {
          create: seed.skills.map((name) => ({ skillId: skillsByName[name] })),
        },
      },
      include: { skills: { include: { skill: true } } },
    });
    opportunities.push(opportunity);
    console.log(`  + ${seed.verified ? "✓" : " "} ${opportunity.title}`);
  }

  console.log("Seeding applications...");
  for (const grad of grads) {
    const ops = opportunities.filter((o) =>
      o.skills.some((os) => grad.skillNames?.has(os.skill?.name)),
    );
    const target = ops[0] || opportunities[0];
    if (!target) continue;
    const existingApp = await prisma.application.findFirst({
      where: { applicantId: grad.user.id, opportunityId: target.id },
    });
    if (!existingApp) {
      await prisma.application.create({
        data: {
          opportunityId: target.id,
          applicantId: grad.user.id,
          status: "PENDING",
          message: `Hi, I have relevant experience and I'm based in ${grad.user.location}. I'm available to start right away.`,
        },
      });
      console.log(`  + application: ${grad.user.name} -> ${target.title}`);
    }
  }

  console.log("Seed complete.");
  await prisma.$disconnect();
  process.exit(0);
}

main().catch(async (err) => {
  console.error("Seed failed:", err);
  await prisma.$disconnect();
  process.exit(1);
});