import prisma from "@/lib/prisma";
import { requireUser } from "@/lib/auth";

const PHONE_STATUSES = ["ACCEPTED", "COMPLETED"];

function scrubUser(user, exposePhone) {
  if (!user) return user;
  const copy = { ...user };
  if (!exposePhone) delete copy.phone;
  return copy;
}

function scrubApplication(app, exposeApplicantPhone) {
  const copy = { ...app };
  if (copy.applicant) {
    copy.applicant = scrubUser(copy.applicant, exposeApplicantPhone);
  }
  return copy;
}

export async function GET(request) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  const { searchParams } = new URL(request.url);

  if (searchParams.get("as") === "employer") {
    if (user.role !== "EMPLOYER" && user.role !== "ADMIN") {
      return Response.json({ error: "Not allowed." }, { status: 403 });
    }

    const applications = await prisma.application.findMany({
      where: user.role === "ADMIN" ? undefined : { opportunity: { employerId: user.id } },
      include: {
        opportunity: {
          include: { skills: { include: { skill: true } } },
        },
        applicant: {
          include: { skills: { include: { skill: true } } },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return Response.json({
      applications: applications.map((app) =>
        scrubApplication(app, PHONE_STATUSES.includes(app.status)),
      ),
    });
  }

  const applications = await prisma.application.findMany({
    where: { applicantId: user.id },
    include: {
      opportunity: {
        include: {
          skills: { include: { skill: true } },
          employer: { select: { id: true, name: true, phone: true } },
        },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return Response.json({
    applications: applications.map((app) => {
      const copy = { ...app };
      if (copy.opportunity?.employer) {
        copy.opportunity.employer = scrubUser(
          copy.opportunity.employer,
          PHONE_STATUSES.includes(app.status),
        );
      }
      return copy;
    }),
  });
}

export async function POST(request) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { opportunityId, message } = body || {};

  if (!opportunityId) {
    return Response.json({ error: "Opportunity is required." }, { status: 400 });
  }

  const opportunity = await prisma.opportunity.findUnique({ where: { id: opportunityId } });
  if (!opportunity) {
    return Response.json({ error: "Opportunity not found." }, { status: 404 });
  }

  if (opportunity.status !== "OPEN") {
    return Response.json({ error: "This opportunity is no longer open." }, { status: 409 });
  }

  if (opportunity.employerId === user.id) {
    return Response.json({ error: "You cannot apply to your own opportunity." }, { status: 403 });
  }

  const existing = await prisma.application.findUnique({
    where: {
      opportunityId_applicantId: {
        opportunityId,
        applicantId: user.id,
      },
    },
  });

  if (existing) {
    return Response.json({ error: "You have already applied to this opportunity." }, { status: 409 });
  }

  if (!message || !String(message).trim()) {
    return Response.json({ error: "Tell the employer why you are suitable." }, { status: 400 });
  }

  try {
    const application = await prisma.application.create({
      data: {
        opportunityId,
        applicantId: user.id,
        message: String(message).trim(),
        status: "PENDING",
      },
    });
    return Response.json({ application }, { status: 201 });
  } catch (err) {
    console.error("Application create error:", err);
    if (err?.code === "P2002") {
      return Response.json({ error: "You have already applied to this opportunity." }, { status: 409 });
    }
    return Response.json({ error: "Could not submit your application." }, { status: 500 });
  }
}