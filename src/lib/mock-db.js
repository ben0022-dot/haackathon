import crypto from "node:crypto";

function demoUid(email) {
  return `demo_${crypto.createHash("sha1").update(email).digest("hex").slice(0, 24)}`;
}

const INITIAL_SKILLS = [
  { id: "skill-1", name: "Electrical", category: "Trades" },
  { id: "skill-2", name: "Tailoring", category: "Trades" },
  { id: "skill-3", name: "Catering", category: "Services" },
  { id: "skill-4", name: "Plumbing", category: "Trades" },
  { id: "skill-5", name: "Carpentry", category: "Trades" },
  { id: "skill-6", name: "Masonry", category: "Construction" },
  { id: "skill-7", name: "Welding", category: "Construction" },
  { id: "skill-8", name: "ICT", category: "Technology" },
  { id: "skill-9", name: "Mechanics", category: "Trades" },
  { id: "skill-10", name: "Hairdressing", category: "Services" },
];

const INITIAL_USERS = [
  {
    id: "user-brian",
    firebaseUid: demoUid("brian.demo@spacemakers.app"),
    name: "Brian Otieno",
    email: "brian.demo@spacemakers.app",
    phone: "+254 712 345 678",
    location: "Githogoro, Nairobi",
    bio: "TVET graduate. Comfortable with both electrical installations and plumbing repairs.",
    role: "GRADUATE",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 30 * 864e5),
    updatedAt: new Date(Date.now() - 30 * 864e5),
  },
  {
    id: "user-wanjiku",
    firebaseUid: demoUid("wanjiku.demo@spacemakers.app"),
    name: "Wanjiku Njeri",
    email: "wanjiku.demo@spacemakers.app",
    phone: "+254 723 456 789",
    location: "Githogoro, Nairobi",
    bio: "Catering graduate who also sews school uniforms for local families.",
    role: "GRADUATE",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 25 * 864e5),
    updatedAt: new Date(Date.now() - 25 * 864e5),
  },
  {
    id: "user-david",
    firebaseUid: demoUid("david.demo@spacemakers.app"),
    name: "David Mwangi",
    email: "david.demo@spacemakers.app",
    phone: "+254 734 567 890",
    location: "Muthaiga, Nairobi",
    bio: "ICT technician, comfortable with computer repair and network setup.",
    role: "GRADUATE",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 20 * 864e5),
    updatedAt: new Date(Date.now() - 20 * 864e5),
  },
  {
    id: "user-eatery",
    firebaseUid: demoUid("eatery.demo@spacemakers.app"),
    name: "Mama Njeri's Eatery",
    email: "eatery.demo@spacemakers.app",
    phone: "+254 745 678 901",
    location: "Githogoro, Nairobi",
    bio: "Local eatery hiring catering and kitchen staff for events.",
    role: "EMPLOYER",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 40 * 864e5),
    updatedAt: new Date(Date.now() - 40 * 864e5),
  },
  {
    id: "user-hardware",
    firebaseUid: demoUid("hardware.demo@spacemakers.app"),
    name: "Umoja Hardware & Electrical",
    email: "hardware.demo@spacemakers.app",
    phone: "+254 756 789 012",
    location: "Runda, Nairobi",
    bio: "Hardware shop that takes on wiring and installation jobs.",
    role: "EMPLOYER",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 35 * 864e5),
    updatedAt: new Date(Date.now() - 35 * 864e5),
  },
  {
    id: "user-mbugua",
    firebaseUid: demoUid("mbugua.demo@spacemakers.app"),
    name: "Mrs. Mbugua",
    email: "mbugua.demo@spacemakers.app",
    phone: "+254 767 890 123",
    location: "Gigiri, Nairobi",
    bio: "Homeowner who needs regular skilled help around the house.",
    role: "EMPLOYER",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 15 * 864e5),
    updatedAt: new Date(Date.now() - 15 * 864e5),
  },
  {
    id: "user-admin",
    firebaseUid: demoUid("admin.spacemakers@spacemakers.app"),
    name: "SpaceMakers Admin",
    email: "admin.spacemakers@spacemakers.app",
    phone: "+254 700 000 001",
    location: "Githogoro, Nairobi",
    bio: "Platform administrator for verifying listings and moderation.",
    role: "ADMIN",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 60 * 864e5),
    updatedAt: new Date(Date.now() - 60 * 864e5),
  },
  {
    id: "user-kasarani",
    firebaseUid: demoUid("kasarani.demo@spacemakers.app"),
    name: "Kasarani Construction Co.",
    email: "kasarani.demo@spacemakers.app",
    phone: "+254 778 901 234",
    location: "Kasarani, Nairobi",
    bio: "Building contractor with steady need for masonry and welding hands.",
    role: "EMPLOYER",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 12 * 864e5),
    updatedAt: new Date(Date.now() - 12 * 864e5),
  },
  {
    id: "user-salon",
    firebaseUid: demoUid("salon.demo@spacemakers.app"),
    name: "St. Teresa Salons",
    email: "salon.demo@spacemakers.app",
    phone: "+254 789 012 345",
    location: "Eastleigh, Nairobi",
    bio: "Salon and tailoring studio hiring weekend assistants.",
    role: "EMPLOYER",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 10 * 864e5),
    updatedAt: new Date(Date.now() - 10 * 864e5),
  },
  {
    id: "user-mercy",
    firebaseUid: demoUid("mercy.demo@spacemakers.app"),
    name: "Mercy Achieng",
    email: "mercy.demo@spacemakers.app",
    phone: "+254 790 123 456",
    location: "Kasarani, Nairobi",
    bio: "Masonry and welding graduate looking for construction work.",
    role: "GRADUATE",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 12 * 864e5),
    updatedAt: new Date(Date.now() - 12 * 864e5),
  },
  {
    id: "user-samuel",
    firebaseUid: demoUid("samuel.demo@spacemakers.app"),
    name: "Samuel Kiprotich",
    email: "samuel.demo@spacemakers.app",
    phone: "+254 701 234 567",
    location: "Langata, Nairobi",
    bio: "Motorcycle mechanic with a passion for DIY carpentry.",
    role: "GRADUATE",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 11 * 864e5),
    updatedAt: new Date(Date.now() - 11 * 864e5),
  },
  {
    id: "user-faith",
    firebaseUid: demoUid("faith.demo@spacemakers.app"),
    name: "Faith Wambui",
    email: "faith.demo@spacemakers.app",
    phone: "+254 712 345 999",
    location: "Eastleigh, Nairobi",
    bio: "Hairdressing and tailoring graduate, quick and reliable.",
    role: "GRADUATE",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 10 * 864e5),
    updatedAt: new Date(Date.now() - 10 * 864e5),
  },
  {
    id: "user-joseph",
    firebaseUid: demoUid("joseph.demo@spacemakers.app"),
    name: "Joseph Omondi",
    email: "joseph.demo@spacemakers.app",
    phone: "+254 723 456 888",
    location: "Parklands, Nairobi",
    bio: "General trades helper, strong on plumbing and basic electrical.",
    role: "GRADUATE",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 9 * 864e5),
    updatedAt: new Date(Date.now() - 9 * 864e5),
  },
  {
    id: "user-amina",
    firebaseUid: demoUid("amina.demo@spacemakers.app"),
    name: "Amina Noor",
    email: "amina.demo@spacemakers.app",
    phone: "+254 734 567 777",
    location: "Gigiri, Nairobi",
    bio: "Catering expert specialising in events and large groups.",
    role: "GRADUATE",
    avatarUrl: null,
    createdAt: new Date(Date.now() - 8 * 864e5),
    updatedAt: new Date(Date.now() - 8 * 864e5),
  },
];

const INITIAL_USER_SKILLS = [
  { id: "us-1", userId: "user-brian", skillId: "skill-1", experienceLevel: "INTERMEDIATE" },
  { id: "us-2", userId: "user-brian", skillId: "skill-4", experienceLevel: "INTERMEDIATE" },
  { id: "us-3", userId: "user-wanjiku", skillId: "skill-2", experienceLevel: "ADVANCED" },
  { id: "us-4", userId: "user-wanjiku", skillId: "skill-3", experienceLevel: "INTERMEDIATE" },
  { id: "us-5", userId: "user-david", skillId: "skill-8", experienceLevel: "ADVANCED" },
  { id: "us-6", userId: "user-david", skillId: "skill-5", experienceLevel: "BEGINNER" },
  { id: "us-7", userId: "user-mercy", skillId: "skill-6", experienceLevel: "INTERMEDIATE" },
  { id: "us-8", userId: "user-mercy", skillId: "skill-7", experienceLevel: "BEGINNER" },
  { id: "us-9", userId: "user-samuel", skillId: "skill-9", experienceLevel: "ADVANCED" },
  { id: "us-10", userId: "user-samuel", skillId: "skill-5", experienceLevel: "INTERMEDIATE" },
  { id: "us-11", userId: "user-faith", skillId: "skill-10", experienceLevel: "ADVANCED" },
  { id: "us-12", userId: "user-faith", skillId: "skill-2", experienceLevel: "INTERMEDIATE" },
  { id: "us-13", userId: "user-joseph", skillId: "skill-4", experienceLevel: "ADVANCED" },
  { id: "us-14", userId: "user-joseph", skillId: "skill-1", experienceLevel: "BEGINNER" },
  { id: "us-15", userId: "user-amina", skillId: "skill-3", experienceLevel: "ADVANCED" },
];

const now = Date.now();

const INITIAL_OPPORTUNITIES = [
  {
    id: "opp-1",
    title: "Electrician needed for house wiring",
    description: "Rewiring a 2-bedroom house in Githogoro. Must be able to install sockets, switchboards and lighting. Materials will be provided.",
    type: "GIG",
    location: "Githogoro, Nairobi",
    payment: 2500,
    paymentType: "FIXED",
    deadline: new Date(now + 5 * 864e5),
    employerId: "user-hardware",
    status: "OPEN",
    verified: true,
    createdAt: new Date(now - 1 * 3600e3),
    updatedAt: new Date(now - 1 * 3600e3),
    skills: ["skill-1"],
  },
  {
    id: "opp-2",
    title: "Wedding catering assistant",
    description: "Assist with food prep, serving and cleanup for a wedding in Runda on Saturday. Catering experience needed.",
    type: "GIG",
    location: "Runda, Nairobi",
    payment: 1800,
    paymentType: "PER_DAY",
    deadline: new Date(now + 4 * 864e5),
    employerId: "user-eatery",
    status: "OPEN",
    verified: true,
    createdAt: new Date(now - 2 * 3600e3),
    updatedAt: new Date(now - 2 * 3600e3),
    skills: ["skill-3"],
  },
  {
    id: "opp-3",
    title: "Tailor needed for school uniforms",
    description: "Need a tailor to make 30 school uniforms before next term. Fabric provided. Payment per set.",
    type: "CONTRACT",
    location: "Githogoro, Nairobi",
    payment: 600,
    paymentType: "PER_DAY",
    deadline: new Date(now + 10 * 864e5),
    employerId: "user-mbugua",
    status: "OPEN",
    verified: true,
    createdAt: new Date(now - 1 * 864e5),
    updatedAt: new Date(now - 1 * 864e5),
    skills: ["skill-2"],
  },
  {
    id: "opp-4",
    title: "Plumber for residential repair",
    description: "Fix leaking pipes and a blocked sink in a Muthaiga home. Small job, can be done in one day.",
    type: "SERVICE_REQUEST",
    location: "Muthaiga, Nairobi",
    payment: 1500,
    paymentType: "FIXED",
    deadline: new Date(now + 3 * 864e5),
    employerId: "user-mbugua",
    status: "OPEN",
    verified: true,
    createdAt: new Date(now - 1 * 864e5),
    updatedAt: new Date(now - 1 * 864e5),
    skills: ["skill-4"],
  },
  {
    id: "opp-5",
    title: "ICT support assistant",
    description: "Help set up computers and a small network for a local shop. Also install office software.",
    type: "GIG",
    location: "Gigiri, Nairobi",
    payment: 2000,
    paymentType: "FIXED",
    deadline: new Date(now + 6 * 864e5),
    employerId: "user-hardware",
    status: "OPEN",
    verified: false,
    createdAt: new Date(now - 3 * 3600e3),
    updatedAt: new Date(now - 3 * 3600e3),
    skills: ["skill-8"],
  },
  {
    id: "opp-6",
    title: "Carpentry assistant wanted",
    description: "Help build shelves and repair wooden furniture for a weekend project in Githogoro.",
    type: "GIG",
    location: "Githogoro, Nairobi",
    payment: 1000,
    paymentType: "PER_DAY",
    deadline: new Date(now + 5 * 864e5),
    employerId: "user-mbugua",
    status: "OPEN",
    verified: false,
    createdAt: new Date(now - 2 * 864e5),
    updatedAt: new Date(now - 2 * 864e5),
    skills: ["skill-5"],
  },
  {
    id: "opp-7",
    title: "Event ushers & kitchen helpers",
    description: "Event next month needs 3 helpers for setup, serving and cleanup. Catering experience preferred.",
    type: "JOB",
    location: "Githogoro, Nairobi",
    payment: 1200,
    paymentType: "PER_DAY",
    deadline: new Date(now + 14 * 864e5),
    employerId: "user-eatery",
    status: "OPEN",
    verified: true,
    createdAt: new Date(now - 3 * 864e5),
    updatedAt: new Date(now - 3 * 864e5),
    skills: ["skill-3"],
  },
  {
    id: "opp-8",
    title: "Mason for boundary wall repair",
    description: "Repair cracked sections of a compound wall in Muthaiga. Masonry experience required.",
    type: "CONTRACT",
    location: "Muthaiga, Nairobi",
    payment: 3500,
    paymentType: "FIXED",
    deadline: new Date(now + 8 * 864e5),
    employerId: "user-mbugua",
    status: "OPEN",
    verified: false,
    createdAt: new Date(now - 4 * 864e5),
    updatedAt: new Date(now - 4 * 864e5),
    skills: ["skill-6"],
  },
  {
    id: "opp-9",
    title: "Motorcycle mechanic helper",
    description: "Assist with servicing small motorbikes at a garage in Eastleigh. Basic mechanic knowledge needed.",
    type: "APPRENTICESHIP",
    location: "Eastleigh, Nairobi",
    payment: 800,
    paymentType: "PER_DAY",
    deadline: new Date(now + 12 * 864e5),
    employerId: "user-hardware",
    status: "OPEN",
    verified: false,
    createdAt: new Date(now - 5 * 864e5),
    updatedAt: new Date(now - 5 * 864e5),
    skills: ["skill-9"],
  },
  {
    id: "opp-10",
    title: "Hairdressing assistant (barbershop)",
    description: "Weekend assistant at a busy barbershop. Experience with haircuts needed.",
    type: "GIG",
    location: "Githogoro, Nairobi",
    payment: 750,
    paymentType: "PER_DAY",
    deadline: new Date(now + 5 * 864e5),
    employerId: "user-eatery",
    status: "OPEN",
    verified: true,
    createdAt: new Date(now - 6 * 864e5),
    updatedAt: new Date(now - 6 * 864e5),
    skills: ["skill-10"],
  },
  {
    id: "opp-11",
    title: "Welder for gate repairs",
    description: "Weld and repaint a metal gate and window grilles in Gigiri. Tools can be arranged.",
    type: "GIG",
    location: "Gigiri, Nairobi",
    payment: 3000,
    paymentType: "FIXED",
    deadline: new Date(now + 7 * 864e5),
    employerId: "user-mbugua",
    status: "OPEN",
    verified: false,
    createdAt: new Date(now - 7 * 864e5),
    updatedAt: new Date(now - 7 * 864e5),
    skills: ["skill-7"],
  },
  {
    id: "opp-12",
    title: "Kitchen porter (permanent)",
    description: "Full-time kitchen porter at the eatery. Willing to train the right person.",
    type: "JOB",
    location: "Githogoro, Nairobi",
    payment: 900,
    paymentType: "PER_DAY",
    deadline: new Date(now + 14 * 864e5),
    employerId: "user-eatery",
    status: "OPEN",
    verified: true,
    createdAt: new Date(now - 8 * 864e5),
    updatedAt: new Date(now - 8 * 864e5),
    skills: ["skill-3"],
  },
  {
    id: "opp-13",
    title: "Mason needed for apartment finishing",
    description: "Plastering and floor screeding for a two-bedroom unit in Kasarani. Two days of work, materials on site.",
    type: "GIG",
    location: "Kasarani, Nairobi",
    payment: 2800,
    paymentType: "PER_DAY",
    deadline: new Date(now + 5 * 864e5),
    employerId: "user-kasarani",
    status: "OPEN",
    verified: true,
    createdAt: new Date(now - 3600e3),
    updatedAt: new Date(now - 3600e3),
    skills: ["skill-6"],
  },
  {
    id: "opp-14",
    title: "Barbershop weekend assistant",
    description: "Weekend haircuts and blade washing at St. Teresa Salons in Eastleigh. Steady weekend work.",
    type: "GIG",
    location: "Eastleigh, Nairobi",
    payment: 850,
    paymentType: "PER_DAY",
    deadline: new Date(now + 5 * 864e5),
    employerId: "user-salon",
    status: "OPEN",
    verified: true,
    createdAt: new Date(now - 2 * 864e5),
    updatedAt: new Date(now - 2 * 864e5),
    skills: ["skill-10"],
  },
  {
    id: "opp-15",
    title: "Garage mechanic helper",
    description: "General servicing, oil changes and brake checks at a garage in Parklands. Basic tools provided.",
    type: "APPRENTICESHIP",
    location: "Parklands, Nairobi",
    payment: 900,
    paymentType: "PER_DAY",
    deadline: new Date(now + 12 * 864e5),
    employerId: "user-hardware",
    status: "OPEN",
    verified: true,
    createdAt: new Date(now - 4 * 864e5),
    updatedAt: new Date(now - 4 * 864e5),
    skills: ["skill-9"],
  },
  {
    id: "opp-16",
    title: "Drain unblocking & pipe fitting",
    description: "A restaurant in Gigiri needs a plumber to unblock drains and refit two kitchen pipes before inspection.",
    type: "SERVICE_REQUEST",
    location: "Gigiri, Nairobi",
    payment: 1700,
    paymentType: "FIXED",
    deadline: new Date(now + 3 * 864e5),
    employerId: "user-eatery",
    status: "OPEN",
    verified: false,
    createdAt: new Date(now - 5 * 864e5),
    updatedAt: new Date(now - 5 * 864e5),
    skills: ["skill-4"],
  },
  {
    id: "opp-17",
    title: "Event catering for 150 guests",
    description: "Full event catering for a birthday in Githogoro next week. Menu and budget agreed in advance.",
    type: "GIG",
    location: "Githogoro, Nairobi",
    payment: 3000,
    paymentType: "FIXED",
    deadline: new Date(now + 6 * 864e5),
    employerId: "user-eatery",
    status: "OPEN",
    verified: true,
    createdAt: new Date(now - 864e5),
    updatedAt: new Date(now - 864e5),
    skills: ["skill-3"],
  },
];

const INITIAL_APPLICATIONS = [
  {
    id: "app-1",
    opportunityId: "opp-1",
    applicantId: "user-brian",
    message: "Hi, I have relevant experience with electrical wiring and installations, and I'm based in Githogoro. Available immediately.",
    status: "PENDING",
    createdAt: new Date(now - 1 * 3600e3),
    updatedAt: new Date(now - 1 * 3600e3),
  },
  {
    id: "app-2",
    opportunityId: "opp-2",
    applicantId: "user-wanjiku",
    message: "Hi, I'm a certified catering graduate from TVET with practical experience in large wedding setups.",
    status: "REVIEWING",
    createdAt: new Date(now - 2 * 3600e3),
    updatedAt: new Date(now - 2 * 3600e3),
  },
  {
    id: "app-3",
    opportunityId: "opp-4",
    applicantId: "user-brian",
    message: "I can fix the plumbing issue quickly. I live nearby in Githogoro and have tools ready.",
    status: "COMPLETED",
    createdAt: new Date(now - 24 * 3600e3),
    updatedAt: new Date(now - 12 * 3600e3),
  },
  {
    id: "app-4",
    opportunityId: "opp-17",
    applicantId: "user-amina",
    message: "Expert caterer for large groups; I can handle 150 guests with a full menu.",
    status: "ACCEPTED",
    createdAt: new Date(now - 6 * 3600e3),
    updatedAt: new Date(now - 3 * 3600e3),
  },
  {
    id: "app-5",
    opportunityId: "opp-16",
    applicantId: "user-joseph",
    message: "Plumbing specialist, drains and pipe fitting are my daily work.",
    status: "PENDING",
    createdAt: new Date(now - 9 * 3600e3),
    updatedAt: new Date(now - 9 * 3600e3),
  },
  {
    id: "app-6",
    opportunityId: "opp-14",
    applicantId: "user-faith",
    message: "Advanced hairdressing; weekends fit my schedule perfectly.",
    status: "REVIEWING",
    createdAt: new Date(now - 26 * 3600e3),
    updatedAt: new Date(now - 20 * 3600e3),
  },
  {
    id: "app-7",
    opportunityId: "opp-15",
    applicantId: "user-samuel",
    message: "Motorcycle mechanic with years of garage experience.",
    status: "REJECTED",
    createdAt: new Date(now - 30 * 3600e3),
    updatedAt: new Date(now - 22 * 3600e3),
  },
  {
    id: "app-8",
    opportunityId: "opp-13",
    applicantId: "user-mercy",
    message: "Masonry and plastering experience on residential sites.",
    status: "ACCEPTED",
    createdAt: new Date(now - 3 * 3600e3),
    updatedAt: new Date(now - 1 * 3600e3),
  },
];

const INITIAL_REVIEWS = [
  {
    id: "rev-1",
    applicationId: "app-3",
    reviewerId: "user-mbugua",
    revieweeId: "user-brian",
    rating: 5,
    comment: "Trained, punctual and worked cleanly. Would hire again.",
    createdAt: new Date(now - 10 * 3600e3),
  },
];

class MockDatabase {
  constructor() {
    this.skills = [...INITIAL_SKILLS];
    this.users = [...INITIAL_USERS];
    this.userSkills = [...INITIAL_USER_SKILLS];
    this.opportunities = [...INITIAL_OPPORTUNITIES];
    this.applications = [...INITIAL_APPLICATIONS];
    this.phoneOtps = [];
    this.reviews = [...INITIAL_REVIEWS];

    this.user = {
      findUnique: async ({ where, include }) => {
        const u = this.users.find((x) =>
          (where.id && x.id === where.id) ||
          (where.firebaseUid && (x.firebaseUid === where.firebaseUid || x.email?.toLowerCase() === where.firebaseUid?.toLowerCase())) ||
          (where.email && x.email?.toLowerCase() === where.email?.toLowerCase())
        );
        return u ? this._enrichUser(u, include) : null;
      },
      findFirst: async ({ where, include }) => {
        const u = this.users.find((x) => {
          if (where.OR) {
            return where.OR.some((cond) =>
              (cond.email && x.email?.toLowerCase() === cond.email?.toLowerCase()) ||
              (cond.id && x.id === cond.id) ||
              (cond.firebaseUid && x.firebaseUid === cond.firebaseUid)
            );
          }
          if (where.id && x.id !== where.id) return false;
          if (where.firebaseUid && x.firebaseUid !== where.firebaseUid) return false;
          if (where.email && x.email?.toLowerCase() !== where.email?.toLowerCase()) return false;
          return true;
        });
        return u ? this._enrichUser(u, include) : null;
      },
      findMany: async ({ where, include } = {}) => {
        let list = [...this.users];
        if (where) {
          if (where.role) list = list.filter((x) => x.role === where.role);
        }
        return list.map((u) => this._enrichUser(u, include));
      },
      create: async ({ data, include }) => {
        const id = data.id || `user_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
        const newUser = {
          id,
          firebaseUid: data.firebaseUid || id,
          name: data.name || "",
          email: data.email || `${id}@spacemakers.app`,
          emailVerified: data.emailVerified || false,
          phone: data.phone || null,
          phoneVerified: data.phoneVerified || false,
          location: data.location || null,
          bio: data.bio || null,
          role: data.role || "GRADUATE",
          avatarUrl: data.avatarUrl || null,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        this.users.push(newUser);
        return this._enrichUser(newUser, include);
      },
      update: async ({ where, data, include }) => {
        const idx = this.users.findIndex((x) =>
          (where.id && x.id === where.id) ||
          (where.firebaseUid && x.firebaseUid === where.firebaseUid)
        );
        if (idx === -1) throw new Error("User not found to update");
        this.users[idx] = { ...this.users[idx], ...data, updatedAt: new Date() };
        return this._enrichUser(this.users[idx], include);
      },
      upsert: async ({ where, update, create }) => {
        const existing = await this.user.findUnique({ where });
        if (existing) {
          return this.user.update({ where, data: update });
        }
        return this.user.create({ data: create });
      },
    };

    this.skill = {
      findMany: async ({ orderBy } = {}) => {
        const list = [...this.skills];
        if (orderBy?.name === "asc") {
          list.sort((a, b) => a.name.localeCompare(b.name));
        }
        return list;
      },
      findFirst: async ({ where } = {}) => {
        if (!where) return this.skills[0] || null;
        return this.skills.find((s) => s.name?.toLowerCase() === where.name?.toLowerCase()) || null;
      },
      create: async ({ data }) => {
        const newSkill = {
          id: data.id || `skill-${Date.now()}`,
          name: data.name,
          category: data.category || "General",
        };
        this.skills.push(newSkill);
        return newSkill;
      },
      upsert: async ({ where, update, create }) => {
        const existing = await this.skill.findFirst({ where });
        if (existing) return existing;
        return this.skill.create({ data: create });
      },
    };

    this.userSkill = {
      findMany: async ({ where, include }) => {
        let list = this.userSkills;
        if (where?.userId) list = list.filter((us) => us.userId === where.userId);
        return list.map((us) => ({
          ...us,
          skill: include?.skill ? this.skills.find((s) => s.id === us.skillId) : undefined,
        }));
      },
      deleteMany: async ({ where }) => {
        const initialLen = this.userSkills.length;
        if (where?.userId) {
          this.userSkills = this.userSkills.filter((us) => us.userId !== where.userId);
        }
        return { count: initialLen - this.userSkills.length };
      },
      createMany: async ({ data }) => {
        for (const item of data) {
          this.userSkills.push({
            id: `us-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
            userId: item.userId,
            skillId: item.skillId,
            experienceLevel: item.experienceLevel || "BEGINNER",
            createdAt: new Date(),
          });
        }
        return { count: data.length };
      },
    };

    this.opportunity = {
      findMany: async ({ where, include, orderBy, take, skip } = {}) => {
        let list = [...this.opportunities];

        if (where) {
          if (where.status) list = list.filter((o) => o.status === where.status);
          if (where.verified !== undefined) list = list.filter((o) => o.verified === where.verified);
          if (where.employerId) list = list.filter((o) => o.employerId === where.employerId);
          if (where.type) list = list.filter((o) => o.type === where.type);
          if (where.location) {
            const loc = where.location.toLowerCase();
            list = list.filter((o) => o.location?.toLowerCase().includes(loc));
          }
          if (where.OR) {
            list = list.filter((o) => {
              return where.OR.some((cond) => {
                if (cond.title?.contains) {
                  return o.title?.toLowerCase().includes(cond.title.contains.toLowerCase());
                }
                if (cond.description?.contains) {
                  return o.description?.toLowerCase().includes(cond.description.contains.toLowerCase());
                }
                if (cond.location?.contains) {
                  return o.location?.toLowerCase().includes(cond.location.contains.toLowerCase());
                }
                return false;
              });
            });
          }
          if (where.skills?.some?.skill?.name) {
            const reqSkillName = where.skills.some.skill.name.equals?.toLowerCase() ||
              where.skills.some.skill.name.toLowerCase();
            list = list.filter((o) => {
              const oppSkills = o.skills.map((sid) => this.skills.find((s) => s.id === sid)?.name?.toLowerCase());
              return oppSkills.includes(reqSkillName);
            });
          }
        }

        if (orderBy?.createdAt === "desc") {
          list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        } else if (orderBy?.createdAt === "asc") {
          list.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        }

        const total = list.length;
        if (skip) list = list.slice(skip);
        if (take) list = list.slice(0, take);

        return list.map((o) => this._enrichOpportunity(o, include));
      },
      count: async ({ where } = {}) => {
        const list = await this.opportunity.findMany({ where });
        return list.length;
      },
      findUnique: async ({ where, include }) => {
        const o = this.opportunities.find((x) => x.id === where.id);
        return o ? this._enrichOpportunity(o, include) : null;
      },
      findFirst: async ({ where, include } = {}) => {
        const list = await this.opportunity.findMany({ where, include, take: 1 });
        return list[0] || null;
      },
      create: async ({ data, include }) => {
        const id = data.id || `opp_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
        let skillIds = [];
        if (data.skills?.create) {
          skillIds = data.skills.create.map((s) => s.skillId);
        }
        const newOpp = {
          id,
          title: data.title,
          description: data.description,
          type: data.type || "GIG",
          location: data.location,
          payment: data.payment ?? null,
          paymentType: data.paymentType || "NEGOTIABLE",
          deadline: data.deadline ? new Date(data.deadline) : null,
          employerId: data.employerId,
          status: data.status || "OPEN",
          verified: data.verified ?? false,
          createdAt: data.createdAt ? new Date(data.createdAt) : new Date(),
          updatedAt: new Date(),
          skills: skillIds,
        };
        this.opportunities.unshift(newOpp);
        return this._enrichOpportunity(newOpp, include);
      },
      update: async ({ where, data, include }) => {
        const idx = this.opportunities.findIndex((x) => x.id === where.id);
        if (idx === -1) throw new Error("Opportunity not found");
        this.opportunities[idx] = { ...this.opportunities[idx], ...data, updatedAt: new Date() };
        return this._enrichOpportunity(this.opportunities[idx], include);
      },
    };

    this.application = {
      findMany: async ({ where, include, orderBy } = {}) => {
        let list = [...this.applications];
        if (where) {
          if (where.applicantId) list = list.filter((a) => a.applicantId === where.applicantId);
          if (where.opportunityId) list = list.filter((a) => a.opportunityId === where.opportunityId);
          if (where.opportunity?.employerId) {
            list = list.filter((a) => {
              const opp = this.opportunities.find((o) => o.id === a.opportunityId);
              return opp && opp.employerId === where.opportunity.employerId;
            });
          }
        }
        if (orderBy?.createdAt === "desc") {
          list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        return list.map((a) => this._enrichApplication(a, include));
      },
      findUnique: async ({ where, include }) => {
        let app = null;
        if (where.id) {
          app = this.applications.find((a) => a.id === where.id);
        } else if (where.opportunityId_applicantId) {
          app = this.applications.find(
            (a) =>
              a.opportunityId === where.opportunityId_applicantId.opportunityId &&
              a.applicantId === where.opportunityId_applicantId.applicantId
          );
        }
        return app ? this._enrichApplication(app, include) : null;
      },
      findFirst: async ({ where, include }) => {
        let list = await this.application.findMany({ where, include });
        return list[0] || null;
      },
      create: async ({ data, include }) => {
        const id = data.id || `app_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
        const newApp = {
          id,
          opportunityId: data.opportunityId,
          applicantId: data.applicantId,
          message: data.message || "",
          status: data.status || "PENDING",
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        this.applications.unshift(newApp);
        return this._enrichApplication(newApp, include);
      },
      update: async ({ where, data, include }) => {
        const idx = this.applications.findIndex((a) => a.id === where.id);
        if (idx === -1) throw new Error("Application not found");
        this.applications[idx] = { ...this.applications[idx], ...data, updatedAt: new Date() };
        return this._enrichApplication(this.applications[idx], include);
      },
      count: async ({ where } = {}) => {
        let list = [...this.applications];
        if (where) {
          if (where.applicantId) list = list.filter((a) => a.applicantId === where.applicantId);
          if (where.status) list = list.filter((a) => a.status === where.status);
          if (where.opportunity?.employerId) {
            list = list.filter((a) => {
              const opp = this.opportunities.find((o) => o.id === a.opportunityId);
              return opp && opp.employerId === where.opportunity.employerId;
            });
          }
        }
        return list.length;
      },
    };

    this.matchExplanation = {
      _store: new Map(),
      findUnique: async ({ where }) => {
        if (where.graduateId_opportunityId) {
          const key = `${where.graduateId_opportunityId.graduateId}__${where.graduateId_opportunityId.opportunityId}`;
          return this.matchExplanation._store.get(key) || null;
        }
        if (where.id) {
          for (const v of this.matchExplanation._store.values()) {
            if (v.id === where.id) return v;
          }
        }
        return null;
      },
      upsert: async ({ where, update, create }) => {
        const key = `${where.graduateId_opportunityId.graduateId}__${where.graduateId_opportunityId.opportunityId}`;
        const existing = this.matchExplanation._store.get(key);
        if (existing) {
          const merged = { ...existing, ...update, updatedAt: new Date() };
          this.matchExplanation._store.set(key, merged);
          return merged;
        }
        const created = {
          id: `me-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          graduateId: where.graduateId_opportunityId.graduateId,
          opportunityId: where.graduateId_opportunityId.opportunityId,
          explanation: create.explanation,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        this.matchExplanation._store.set(key, created);
        return created;
      },
    };

    this.skillRequest = {
      _store: [],
      findMany: async ({ where, orderBy } = {}) => {
        let list = this.skillRequest._store;
        if (where) {
          if (where.status) list = list.filter((s) => s.status === where.status);
          if (where.employerId) list = list.filter((s) => s.employerId === where.employerId);
        }
        if (orderBy?.createdAt === "desc") {
          list = list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        return [...list];
      },
      findUnique: async ({ where }) => {
        return this.skillRequest._store.find((s) => s.id === where.id) || null;
      },
      findFirst: async ({ where } = {}) => {
        let list = this.skillRequest._store;
        if (where) {
          if (where.employerId) list = list.filter((s) => s.employerId === where.employerId);
          if (where.name) list = list.filter((s) => s.name?.toLowerCase() === where.name.toLowerCase());
        }
        return list[0] || null;
      },
      create: async ({ data }) => {
        const created = {
          id: `sr-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          name: data.name,
          employerId: data.employerId,
          status: data.status || "PENDING",
          createdAt: new Date(),
          updatedAt: new Date(),
        };
        this.skillRequest._store.push(created);
        return created;
      },
      update: async ({ where, data }) => {
        const idx = this.skillRequest._store.findIndex((s) => s.id === where.id);
        if (idx === -1) throw new Error("Skill request not found");
        this.skillRequest._store[idx] = { ...this.skillRequest._store[idx], ...data, updatedAt: new Date() };
        return this.skillRequest._store[idx];
      },
    };

    this.phoneOtp = {
      findFirst: async ({ where, orderBy }) => {
        let list = this.phoneOtps.filter((o) => {
          if (where?.userId && o.userId !== where.userId) return false;
          if (where?.phone && o.phone !== where.phone) return false;
          if (where?.used !== undefined && o.used !== where.used) return false;
          if (where?.expiresAt?.gt && new Date(o.expiresAt) <= new Date(where.expiresAt.gt)) return false;
          return true;
        });
        if (orderBy?.createdAt === "desc") {
          list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        return list[0] || null;
      },
      create: async ({ data }) => {
        const created = {
          id: `otp-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          userId: data.userId,
          phone: data.phone,
          codeHash: data.codeHash,
          attempts: data.attempts || 0,
          expiresAt: data.expiresAt,
          used: data.used || false,
          createdAt: new Date(),
        };
        this.phoneOtps.push(created);
        return created;
      },
      update: async ({ where, data }) => {
        const idx = this.phoneOtps.findIndex((o) => o.id === where.id);
        if (idx === -1) throw new Error("PhoneOtp not found");
        this.phoneOtps[idx] = { ...this.phoneOtps[idx], ...data };
        return this.phoneOtps[idx];
      },
    };

    this.review = {
      create: async ({ data }) => {
        const created = {
          id: `rev-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
          applicationId: data.applicationId,
          reviewerId: data.reviewerId,
          revieweeId: data.revieweeId,
          rating: data.rating,
          comment: data.comment || null,
          createdAt: new Date(),
        };
        this.reviews.push(created);
        return created;
      },
      aggregate: async ({ where, _avg, _count }) => {
        let list = this.reviews.filter((r) => {
          if (where?.revieweeId && r.revieweeId !== where.revieweeId) return false;
          return true;
        });
        const ratings = list.map((r) => r.rating);
        return {
          _avg: { rating: ratings.length ? ratings.reduce((a, b) => a + b, 0) / ratings.length : null },
          _count: list.length,
        };
      },
      findMany: async () => [...this.reviews],
    };
  }

  _enrichUser(u, include) {
    const copy = { ...u };
    if (include?.skills) {
      const userSkillRecords = this.userSkills.filter((us) => us.userId === u.id);
      copy.skills = userSkillRecords.map((us) => ({
        ...us,
        skill: include.skills.include?.skill
          ? this.skills.find((s) => s.id === us.skillId)
          : undefined,
      }));
    }
    return copy;
  }

  _enrichOpportunity(o, include) {
    const copy = { ...o };
    if (include?.skills) {
      copy.skills = (o.skills || []).map((sid) => {
        const skillObj = this.skills.find((s) => s.id === sid);
        return {
          skillId: sid,
          skill: include.skills.include?.skill ? skillObj : undefined,
        };
      });
    }
    if (include?.employer) {
      const emp = this.users.find((u) => u.id === o.employerId);
      copy.employer = emp
        ? { id: emp.id, name: emp.name, avatarUrl: emp.avatarUrl, location: emp.location, phone: emp.phone, phoneVerified: emp.phoneVerified || false }
        : null;
    }
    if (include?._count?.applications) {
      copy._count = {
        applications: this.applications.filter((a) => a.opportunityId === o.id).length,
      };
    }
    return copy;
  }

  _enrichApplication(a, include) {
    const copy = { ...a };
    if (include?.opportunity) {
      const opp = this.opportunities.find((o) => o.id === a.opportunityId);
      copy.opportunity = opp
        ? this._enrichOpportunity(opp, include.opportunity)
        : null;
    }
    if (include?.applicant) {
      const user = this.users.find((u) => u.id === a.applicantId);
      copy.applicant = user
        ? this._enrichUser(user, include.applicant)
        : null;
    }
    if (include?.reviews) {
      copy.reviews = this.reviews
        .filter((r) => r.applicationId === a.id)
        .map(({ id, reviewerId, revieweeId, rating, comment, createdAt }) => ({
          id,
          reviewerId,
          revieweeId,
          rating,
          comment,
          createdAt,
        }));
    }
    return copy;
  }

  async $transaction(fn) {
    if (typeof fn === "function") {
      return fn(this);
    }
    return Promise.all(fn);
  }

  async $disconnect() {
    return Promise.resolve();
  }
}

const globalForMock = globalThis;
const mockDb = globalForMock.spacemakersMockDb ?? new MockDatabase();
if (process.env.NODE_ENV !== "production") {
  globalForMock.spacemakersMockDb = mockDb;
}

export { mockDb, demoUid };
export default mockDb;
