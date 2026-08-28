// Cloudflare Worker — receives the generated BRD Word document from the
// browser and emails it as a real attachment via Resend. The Resend API key
// stays server-side here (set as an encrypted Worker secret, never in this
// source file), so nothing sensitive is exposed to the page's visitors.
// Recipient is fixed below, not taken from the request, so this endpoint
// can only ever send to one address regardless of who calls it.

const RECIPIENT = "basilareeckal06@gmail.com";
const SENDER = "BRD Questionnaire <onboarding@resend.dev>";

// Restrict which sites may call this Worker. Add more origins as needed
// (e.g. a custom domain) — keep 'null' for local file:// testing.
const ALLOWED_ORIGINS = [
  "https://basil-muz.github.io",
  "null",
];

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowed,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function arrayBufferToBase64(buffer) {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  for (let i = 0; i < bytes.length; i += chunkSize) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
  }
  return btoa(binary);
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "null";
    const headers = corsHeaders(origin);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ success: false, error: "Method not allowed" }), {
        status: 405,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }

    try {
      const formData = await request.formData();
      const file = formData.get("attachment");
      const filename = (formData.get("filename") || "BRD_Answers.docx").toString();
      const subject = (formData.get("subject") || "BRD Submission").toString();
      const message = (formData.get("message") || "").toString();

      if (!file) {
        return new Response(JSON.stringify({ success: false, error: "No file attached" }), {
          status: 400,
          headers: { ...headers, "Content-Type": "application/json" },
        });
      }

      const base64Content = arrayBufferToBase64(await file.arrayBuffer());

      const resendResp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: SENDER,
          to: [RECIPIENT],
          subject,
          text: message,
          attachments: [{ filename, content: base64Content }],
        }),
      });

      const result = await resendResp.json();
      return new Response(JSON.stringify({ success: resendResp.ok, result }), {
        status: resendResp.ok ? 200 : 502,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ success: false, error: err.message }), {
        status: 500,
        headers: { ...headers, "Content-Type": "application/json" },
      });
    }
  },
};
