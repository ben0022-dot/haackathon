import prisma from "@/lib/prisma";
import { getFirebaseUid, requireUser } from "@/lib/auth";
import { adminAuth } from "@/lib/firebase-admin";

export async function GET(request) {
  const { user, error } = await requireUser(request);
  if (error) {
    return Response.json({ error: error.message }, { status: error.status });
  }

  return Response.json({ profile: user });
}

export async function POST(request) {
  const result = await getFirebaseUid(request);
  if (result.error) {
    return Response.json({ error: result.error.message }, { status: result.error.status });
  }

  let email = null;
  try {
    const account = await adminAuth.getUser(result.firebaseUid);
    email = account?.email || null;
  } catch {
    email = null;
  }

  const existing = await prisma.user.findFirst({
    where: {
      OR: [
        { firebaseUid: result.firebaseUid },
        ...(email ? [{ email }] : []),
      ],
    },
    include: { skills: { include: { skill: true } } },
  });

  if (existing) {
    if (existing.firebaseUid !== result.firebaseUid) {
      try {
        const updated = await prisma.user.update({
          where: { id: existing.id },
          data: { firebaseUid: result.firebaseUid },
          include: { skills: { include: { skill: true } } },
        });
        return Response.json({ profile: updated }, { status: 200 });
      } catch {
        // ignore
      }
    }
    return Response.json({ profile: existing }, { status: 200 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, role } = body || {};

  if (!name || !String(name).trim()) {
    return Response.json({ error: "Name is required." }, { status: 400 });
  }

  const validRole = role === "EMPLOYER" ? "EMPLOYER" : "GRADUATE";

  try {
    const user = await prisma.user.create({
      data: {
        firebaseUid: result.firebaseUid,
        email: email || `user_${result.firebaseUid.slice(0, 8)}@spacemakers.app`,
        name: String(name).trim(),
        role: validRole,
      },
      include: { skills: { include: { skill: true } } },
    });
    return Response.json({ profile: user }, { status: 201 });
  } catch (err) {
    console.error("Profile create error:", err);
    return Response.json({ error: "Could not create your profile." }, { status: 500 });
  }
}

export async function PATCH(request) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, bio, location, role, skillIds, experienceLevels } = body;

  const updateData = {};
  if (typeof name === "string" && name.trim()) updateData.name = name.trim();
  if (typeof phone === "string") updateData.phone = phone.trim() || null;
  if (typeof bio === "string") updateData.bio = bio.trim() || null;
  if (typeof location === "string" && location.trim()) updateData.location = location.trim();

  if (role && ["GRADUATE", "EMPLOYER"].includes(role)) {
    if (user.role === "ADMIN") {
      return Response.json({ error: "Admin role cannot be changed." }, { status: 403 });
    }
    updateData.role = role;
  }

  try {
    const updated = await prisma.$transaction(async (tx) => {
      const saved = await tx.user.update({
        where: { id: user.id },
        data: updateData,
        include: { skills: { include: { skill: true } } },
      });

      if (Array.isArray(skillIds)) {
        const selected = [...new Set(skillIds.map((s) => String(s)))];
        await tx.userSkill.deleteMany({ where: { userId: user.id } });

        if (selected.length > 0) {
          const levels = experienceLevels || {};
          await tx.userSkill.createMany({
            data: selected.map((skillId) => ({
              userId: user.id,
              skillId,
              experienceLevel: levels[skillId] || "BEGINNER",
            })),
          });
        }
        saved.skills = await tx.userSkill.findMany({
          where: { userId: user.id },
          include: { skill: true },
        });
      }

      return saved;
    });

    return Response.json({ profile: updated });
  } catch (err) {
    console.error("Profile PATCH error:", err);
    return Response.json({ error: "Could not save your profile." }, { status: 500 });
  }
}
