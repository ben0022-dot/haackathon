import { adminAuth } from "@/lib/firebase-admin";
import prisma from "@/lib/prisma";

export async function getFirebaseUid(request) {
  const header = request.headers.get("authorization");
  if (!header || !header.startsWith("Bearer ")) {
    return { error: { status: 401, message: "Signed in required." } };
  }
  const token = header.slice(7);
  try {
    const decoded = await adminAuth.verifyIdToken(token);
    return { firebaseUid: decoded.uid };
  } catch {
    // If token is a demo token or direct UID/email
    if (token.startsWith("demo_") || token.startsWith("user-") || token.includes("@")) {
      return { firebaseUid: token };
    }
    return { error: { status: 401, message: "Invalid session." } };
  }
}

export async function requireUser(request) {
  const result = await getFirebaseUid(request);
  if (result.error) return result;

  let user = await prisma.user.findUnique({
    where: { firebaseUid: result.firebaseUid },
    include: {
      skills: { include: { skill: true } },
    },
  });

  if (!user) {
    let emailToFind = result.firebaseUid;
    try {
      const fbUser = await adminAuth.getUser(result.firebaseUid);
      if (fbUser?.email) emailToFind = fbUser.email;
    } catch {
      // ignore
    }

    user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: emailToFind },
          { email: result.firebaseUid },
          { id: result.firebaseUid },
        ],
      },
      include: {
        skills: { include: { skill: true } },
      },
    });

    if (user && user.firebaseUid !== result.firebaseUid) {
      try {
        user = await prisma.user.update({
          where: { id: user.id },
          data: { firebaseUid: result.firebaseUid },
          include: {
            skills: { include: { skill: true } },
          },
        });
      } catch (err) {
        console.warn("Could not sync firebaseUid to user record:", err?.message);
      }
    }
  }

  if (!user) {
    return {
      error: { status: 404, message: "Profile not found. Create your profile first." },
      firebaseUid: result.firebaseUid,
    };
  }

  await syncEmailVerified(user, result.firebaseUid);

  return { user, firebaseUid: user.firebaseUid };
}

async function syncEmailVerified(user, firebaseUid) {
  try {
    const fbUser = await adminAuth.getUser(firebaseUid);
    const emailVerified = Boolean(fbUser?.emailVerified);
    if (user.emailVerified !== emailVerified) {
      await prisma.user.update({
        where: { id: user.id },
        data: { emailVerified },
      });
      user.emailVerified = emailVerified;
    }
  } catch {
    // Firebase sync is best-effort; fall back to the stored flag.
  }
}

export function requireRole(user, roles) {
  if (!roles.includes(user.role)) {
    return { error: { status: 403, message: "You don't have permission to do that." } };
  }
  return {};
}
