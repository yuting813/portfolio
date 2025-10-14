export interface Env {
  RESEND_API_KEY: string;
  FROM_EMAIL: string;
  TO_EMAIL: string;
  ALLOWED_ORIGINS?: string;
}

function allowOrigin(origin: string | null, env: Env) {
  const list = (env.ALLOWED_ORIGINS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  return origin && list.includes(origin) ? origin : list[0] || "*";
}

function corsHeaders(origin: string, extra: Record<string, string> = {}) {
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin", // 防止快取污染
    ...extra,
  };
}

const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "same-origin",
  "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
  "Cache-Control": "no-store",
};

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("origin");
    const allow = allowOrigin(origin, env);

    // Preflight (CORS)
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: { ...corsHeaders(allow), ...securityHeaders },
      });
    }

    // Only allow POST
    if (request.method !== "POST") {
      return new Response(
        JSON.stringify({ ok: false, error: "Method Not Allowed" }),
        {
          status: 405,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders(allow),
            ...securityHeaders,
          },
        }
      );
    }

    // Parse body
    let body: any;
    try {
      body = await request.json();
    } catch {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid JSON" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders(allow),
            ...securityHeaders,
          },
        }
      );
    }

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const subject = String(body?.subject || "").trim();
    const message = String(body?.message || "").trim();
    const gotcha = String(body?._gotcha || "");

    // Basic validations
    if (gotcha) {
      return new Response(
        JSON.stringify({ ok: false, error: "Spam detected" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders(allow),
            ...securityHeaders,
          },
        }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ ok: false, error: "Invalid email" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders(allow),
            ...securityHeaders,
          },
        }
      );
    }

    if (message.length < 10) {
      return new Response(
        JSON.stringify({ ok: false, error: "Message too short" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders(allow),
            ...securityHeaders,
          },
        }
      );
    }

    // Email content
    const html = `
      <h3>Portfolio Contact</h3>
      <p><b>Name:</b> ${escapeHtml(name || "-")}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Subject:</b> ${escapeHtml(subject || "Portfolio 來信")}</p>
      <p><b>Message:</b></p>
      <pre style="white-space:pre-wrap">${escapeHtml(message)}</pre>
    `;

    // Call Resend API
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: env.FROM_EMAIL,
        to: [env.TO_EMAIL], // ✅ 改成陣列
        subject: subject || "Portfolio 來信",
        html,
        reply_to: email,
      }),
    });

    if (!r.ok) {
      const err = await r.text();
      return new Response(
        JSON.stringify({ ok: false, error: `Email failed: ${err}` }),
        {
          status: 502,
          headers: {
            "Content-Type": "application/json",
            ...corsHeaders(allow),
            ...securityHeaders,
          },
        }
      );
    }

    // Success
    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders(allow), 
        ...securityHeaders,
      },
    });
  },
} satisfies ExportedHandler<Env>;
