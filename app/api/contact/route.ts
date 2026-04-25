import { NextResponse } from "next/server";

import { sendLeadEmail } from "@/lib/lead-email";

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as Record<string, unknown> | null;

  if (!payload) {
    return NextResponse.json({ detail: "Invalid request payload." }, { status: 400 });
  }

  try {
    const name = getString(payload.name);
    const email = getString(payload.email);

    if (!name || !email) {
      return NextResponse.json({ detail: "Missing required fields." }, { status: 400 });
    }

    await sendLeadEmail({
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Phone", value: payload.phone },
        { label: "Service", value: payload.service },
        { label: "Message", value: payload.message },
        { label: "Submitted", value: new Date().toISOString() }
      ],
      replyTo: email,
      subject: `New Higher Marketing Plus lead - ${name}`,
      title: "New Lead from Higher Marketing Plus website"
    });

    return NextResponse.json({ accepted: true });
  } catch (error) {
    return NextResponse.json(
      {
        detail: error instanceof Error ? error.message : "Email service error."
      },
      { status: 502 }
    );
  }
}

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}
