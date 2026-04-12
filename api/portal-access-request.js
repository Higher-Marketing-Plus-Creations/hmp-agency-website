module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ detail: "Method not allowed." });
  }

  const webhookUrl = process.env.PORTAL_ACCESS_WEBHOOK_URL;

  if (!webhookUrl) {
    return res.status(202).json({
      accepted: true,
      detail:
        "Request accepted. Configure PORTAL_ACCESS_WEBHOOK_URL to forward submissions to your CRM or automation endpoint."
    });
  }

  try {
    const upstream = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body ?? {})
    });

    if (!upstream.ok) {
      const responseText = await upstream.text();
      return res.status(502).json({
        detail: `Upstream webhook rejected request (${upstream.status}): ${responseText.slice(0, 300)}`
      });
    }

    return res.status(200).json({ accepted: true });
  } catch (error) {
    return res.status(502).json({
      detail: error instanceof Error ? error.message : "Unable to forward request."
    });
  }
};
