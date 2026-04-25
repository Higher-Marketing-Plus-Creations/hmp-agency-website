type LeadEmailOptions = {
  fields: Array<{
    label: string;
    value: unknown;
  }>;
  replyTo?: string;
  subject: string;
  title: string;
};

export async function sendLeadEmail(options: LeadEmailOptions) {
  const resendKey = process.env.RESEND_API_KEY;
  const emailTo = (process.env.LEAD_EMAIL_TO || "")
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
  const emailFrom = process.env.LEAD_EMAIL_FROM;

  if (!resendKey || !emailTo.length || !emailFrom) {
    throw new Error("Email service not configured.");
  }

  const emailPayload: {
    from: string;
    html: string;
    reply_to?: string;
    subject: string;
    text: string;
    to: string[];
  } = {
    from: emailFrom,
    html: generateLeadEmailHtml(options),
    subject: options.subject,
    text: generateLeadEmailText(options),
    to: emailTo
  };

  if (options.replyTo) {
    emailPayload.reply_to = options.replyTo;
  }

  const response = await fetch("https://api.resend.com/emails", {
    body: JSON.stringify(emailPayload),
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Email service error (${response.status}): ${errorText.slice(0, 300)}`);
  }
}

function generateLeadEmailHtml(options: LeadEmailOptions) {
  const rows = options.fields
    .map(
      (field) => `
        <div class="field">
          <div class="field-label">${escapeHtml(field.label)}:</div>
          <div class="field-value">${formatHtmlValue(field.value)}</div>
        </div>`
    )
    .join("");

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #f4f4f4; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
        .field { margin: 15px 0; border-bottom: 1px solid #eee; padding-bottom: 10px; }
        .field-label { font-weight: bold; color: #555; }
        .field-value { margin-top: 5px; color: #333; white-space: pre-wrap; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>${escapeHtml(options.title)}</h2>
          <p>A new website submission has been received.</p>
        </div>
        ${rows}
      </div>
    </body>
    </html>
  `;
}

function generateLeadEmailText(options: LeadEmailOptions) {
  const rows = options.fields
    .map((field) => `${field.label}: ${formatTextValue(field.value)}`)
    .join("\n");

  return `${options.title}
============================

${rows}`;
}

function formatHtmlValue(value: unknown) {
  const text = formatTextValue(value);

  if (!text) {
    return "Not provided";
  }

  return escapeHtml(text);
}

function formatTextValue(value: unknown) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value).trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
