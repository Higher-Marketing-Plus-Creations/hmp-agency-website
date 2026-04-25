import { NextResponse } from "next/server";

import { sendLeadEmail } from "@/lib/lead-email";

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as Record<string, unknown> | null;

  if (!payload) {
    return NextResponse.json({ detail: "Invalid request payload." }, { status: 400 });
  }

  try {
    const name = getString(payload.contact_name);
    const email = getString(payload.contact_email);
    const company = getString(payload.company);

    if (!name || !email || !company) {
      return NextResponse.json({ detail: "Missing required fields." }, { status: 400 });
    }

    await sendLeadEmail({
      fields: [
        { label: "Name", value: name },
        { label: "Email", value: email },
        { label: "Company", value: company },
        { label: "Requested Use Case", value: payload.requested_use_case },
        { label: "Submitted", value: new Date().toISOString() }
      ],
      replyTo: email,
      subject: `New HMP portal access request - ${company}`,
      title: "New Portal Access Request from Higher Marketing Plus website"
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
