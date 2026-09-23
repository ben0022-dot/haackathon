import prisma from "@/lib/prisma";
import { requireUser } from "@/lib/auth";
import { generateOtp, hashOtp, normalizePhone, sendSms } from "@/lib/sms";

const OTP_TTL_MS = 10 * 60 * 1000;
const RESEND_COOLDOWN_MS = 45 * 1000;

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
  if (!phone) {
    return Response.json(
      { error: "Enter a valid Kenyan phone number, e.g. 0712 345 678." },
      { status: 400 },
    );
  }

  const recent = await prisma.phoneOtp.findFirst({
    where: { userId: user.id, used: false, expiresAt: { gt: new Date(Date.now() + RESEND_COOLDOWN_MS) } },
    orderBy: { createdAt: "desc" },
  });
  if (recent) {
    const wait = Math.ceil(
      (recent.expiresAt.getTime() - RESEND_COOLDOWN_MS - Date.now()) / 1000,
    );
    return Response.json(
      { error: `Please wait ${Math.max(1, wait)} seconds before requesting another code.` },
      { status: 429 },
    );
  }

  const code = generateOtp();
  const expiresAt = new Date(Date.now() + OTP_TTL_MS);
  const sendResult = await sendSms(phone, `Your SpaceMakers verification code is ${code}. It expires in 10 minutes.`);

  if (!sendResult.ok) {
    return Response.json(
      { error: "Could not send the verification code. Please try again later." },
      { status: 502 },
    );
  }

  await prisma.phoneOtp.create({
    data: {
      userId: user.id,
      phone,
      codeHash: hashOtp(code),
      expiresAt,
    },
  });

  const devCode = sendResult.dev ? code : undefined;
  return Response.json({ ok: true, ...(devCode ? { devCode } : {}) });
}