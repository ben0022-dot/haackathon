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
    return { error: { status: 401, message: "Invalid session." } };
  }
}

export async function requireUser(request) {
  const result = await getFirebaseUid(request);
  if (result.error) return result;

  const user = await prisma.user.findUnique({
    where: { firebaseUid: result.firebaseUid },
    include: {
      skills: { include: { skill: true } },
    },
  });

  if (!user) {
    return {
      error: { status: 404, message: "Profile not found. Create your profile first." },
      firebaseUid: result.firebaseUid,
    };
  }
  return { user, firebaseUid: result.firebaseUid };
}

export function requireRole(user, roles) {
  if (!roles.includes(user.role)) {
    return { error: { status: 403, message: "You don't have permission to do that." } };
  }
  return {};
}