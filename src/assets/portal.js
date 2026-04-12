const form = document.querySelector("[data-portal-access-form]");
const statusEl = document.querySelector("[data-portal-access-status]");

function setStatus(message, tone = "") {
  if (!statusEl) return;
  statusEl.textContent = message;
  if (tone) {
    statusEl.setAttribute("data-tone", tone);
  } else {
    statusEl.removeAttribute("data-tone");
  }
}

if (form instanceof HTMLFormElement) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    setStatus("Submitting access request...");
    const formData = new FormData(form);
    const payload = {
      contact_name: String(formData.get("contact_name") || "").trim(),
      contact_email: String(formData.get("contact_email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      requested_use_case: String(formData.get("requested_use_case") || "").trim()
    };
    try {
      const response = await fetch("/v1/platform/portal-access-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(body.detail || `Request failed (${response.status})`);
      }
      form.reset();
      setStatus(
        "Access request received. Higher Marketing Plus will provision your portal workspace directly.",
        "success"
      );
    } catch (error) {
      setStatus(
        error instanceof Error ? error.message : "Unable to submit request.",
        "error"
      );
    }
  });
}
