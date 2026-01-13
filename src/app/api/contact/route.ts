import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactCategory = "pharmacy" | "it";

const categoryLabel: Record<ContactCategory, string> = {
  pharmacy: "薬局",
  it: "医療IT",
};

const MAX_LENGTH = 2000;

function sanitize(value: unknown) {
  if (typeof value !== "string") return "";
  return value.replace(/\r?\n/g, " ").trim();
}

function truncate(value: string) {
  if (value.length <= MAX_LENGTH) return value;
  return value.slice(0, MAX_LENGTH) + "…";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Record<string, unknown> | null = null;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 }
    );
  }

  const category = sanitize(body?.category) as ContactCategory;
  const name = truncate(sanitize(body?.name));
  const contact = truncate(sanitize(body?.contact));
  const organization = truncate(sanitize(body?.organization));
  const preferred = truncate(sanitize(body?.preferred));
  const message = truncate(sanitize(body?.message));
  const honeypot = sanitize(body?.website);
  const startedAt = Number(body?.startedAt ?? 0);

  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  if (startedAt && Date.now() - startedAt < 2000) {
    return NextResponse.json({ ok: false, error: "spam_detected" }, { status: 400 });
  }

  if (!category || !name || !contact || !message) {
    return NextResponse.json(
      { ok: false, error: "required_fields_missing" },
      { status: 400 }
    );
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const contactTo = process.env.CONTACT_TO;
  const smtpHost = process.env.SMTP_HOST ?? "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT ?? "465");
  const fromName = process.env.CONTACT_FROM_NAME ?? "株式会社メディカル東京";

  if (!smtpUser || !smtpPass || !contactTo) {
    console.warn("Email is not configured. Set SMTP_USER/PASS/CONTACT_TO.");
    return NextResponse.json(
      { ok: false, error: "email_not_configured" },
      { status: 503 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const label = categoryLabel[category] ?? "お問い合わせ";
  const subject = `【${label}】${name}様からのお問い合わせ`;
  const timestamp = new Date().toLocaleString("ja-JP", {
    timeZone: "Asia/Tokyo",
  });

  const lines = [
    `カテゴリ: ${label}`,
    `お名前: ${name}`,
    `連絡先: ${contact}`,
    organization ? `法人・組織名: ${organization}` : null,
    preferred ? `希望対応: ${preferred}` : null,
    `送信日時: ${timestamp}`,
    "",
    "お問い合わせ内容:",
    message,
  ].filter(Boolean);

  await transporter.sendMail({
    from: `"${fromName}" <${smtpUser}>`,
    to: contactTo,
    replyTo: isEmail(contact) ? contact : undefined,
    subject,
    text: lines.join("\n"),
  });

  if (isEmail(contact)) {
    const replySubject = `【${label}】お問い合わせありがとうございます`;
    const replyLines = [
      `${name} 様`,
      "",
      "この度はお問い合わせいただき、誠にありがとうございます。",
      "以下の内容で受け付けました。担当より折り返しご連絡いたします。",
      "",
      "----",
      `カテゴリ: ${label}`,
      `お名前: ${name}`,
      `連絡先: ${contact}`,
      organization ? `法人・組織名: ${organization}` : null,
      preferred ? `希望対応: ${preferred}` : null,
      `送信日時: ${timestamp}`,
      "",
      "お問い合わせ内容:",
      message,
      "----",
    ].filter(Boolean);

    try {
      await transporter.sendMail({
        from: `"${fromName}" <${smtpUser}>`,
        to: contact,
        replyTo: contactTo,
        subject: replySubject,
        text: replyLines.join("\n"),
      });
    } catch (error) {
      console.warn("Auto-reply failed:", error);
    }
  }

  return NextResponse.json({ ok: true });
}
