import prisma from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { hashOtp, normalizePhone } from "@/lib/sms";

const MAX_ATTEMPTS = 5;

export async function POST(request) {
  const { user, error } = await requireUser(request);
  if (error) return Response.json({ error: error.message }, { status: error.status });

  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body." }, { status: 400 });
  }

  const phone = normalizePhone(body?.phone);
  const code = body?.code;
  if (!phone || !code || !String(code).trim()) {
    return Response.json({ error: "Phone number and code are required." }, { status: 400 });
  }

  const otp = await prisma.phoneOtp.findFirst({
    where: { userId: user.id, phone, used: false },
    orderBy: { createdAt: "desc" },
  });

  if (!otp) {
    return Response.json({ error: "No active code for this number. Request a new one." }, { status: 404 });
  }

  if (new Date(otp.expiresAt) < new Date()) {
    return Response.json({ error: "This code has expired. Request a new one." }, { status: 410 });
  }

  if (otp.attempts >= MAX_ATTEMPTS) {
    return Response.json({ error: "Too many attempts. Request a new code." }, { status: 429 });
  }

  if (otp.codeHash !== hashOtp(String(code).trim())) {
    await prisma.phoneOtp.update({
      where: { id: otp.id },
      data: { attempts: otp.attempts + 1 },
    });
    return Response.json({ error: "Incorrect code. Please try again." }, { status: 400 });
  }

  await prisma.$transaction([
    prisma.phoneOtp.update({
      where: { id: otp.id },
      data: { used: true },
    }),
    prisma.user.update({
      where: { id: user.id },
      data: { phone, phoneVerified: true },
    }),
  ]);

  return Response.json({ ok: true, phone, phoneVerified: true });
}