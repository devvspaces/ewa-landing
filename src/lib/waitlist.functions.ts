import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const utmSchema = z.record(z.string(), z.string()).default({});

const waitlistInput = z.object({
  email: z.string().email(),
  firstName: z.string().min(1).max(80),
  role: z.enum(["customer", "pro"]),
  zip: z.string().max(10).nullable().optional(),
  utm: utmSchema,
});

const proAppInput = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  services: z.array(z.string()).default([]),
  boroughs: z.array(z.string()).default([]),
  instagram: z.string().max(80).optional().default(""),
  utm: utmSchema,
});

async function sendConfirmationEmail(args: {
  email: string;
  firstName: string;
  role: "customer" | "pro";
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("RESEND_API_KEY not set — skipping confirmation email");
    return;
  }
  const from = process.env.EWA_EMAIL_FROM || "Ewà <hello@ewabeauty.com>";
  const proBlock =
    args.role === "pro"
      ? `<p style="margin:0 0 18px;font:15px/1.6 'Hanken Grotesk',Arial,sans-serif;color:#061c27cc;">
          You told us you're a beauty professional — founding pro spots are limited per neighborhood.
          <a href="https://ewabeauty.com/pros?email=${encodeURIComponent(args.email)}&name=${encodeURIComponent(args.firstName)}"
            style="color:#ff823f;font-weight:600;text-decoration:none;">Complete your founding application →</a>
         </p>`
      : "";

  const html = `<!doctype html>
<html><body style="margin:0;background:#fbf9f2;padding:32px 16px;font-family:'Hanken Grotesk',Arial,sans-serif;color:#061c27;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:24px;overflow:hidden;">
    <tr><td style="padding:36px 36px 8px;">
      <div style="font:600 12px/1 'Hanken Grotesk',Arial,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#ff823f;">Ewà</div>
      <h1 style="margin:14px 0 12px;font-family:Fraunces,Georgia,serif;font-weight:500;font-size:34px;line-height:1.1;color:#061c27;">
        Hi ${escapeHtml(args.firstName)}, you're on the list.
      </h1>
      <p style="margin:0 0 18px;font:16px/1.55 'Hanken Grotesk',Arial,sans-serif;color:#061c27cc;">
        We'll be in touch before doors open in New York City in 2026 — vetted barbers, stylists,
        braiders and nail techs who come to wherever you are.
      </p>
      ${proBlock}
      <p style="margin:0 0 8px;font:15px/1.6 'Hanken Grotesk',Arial,sans-serif;color:#061c27cc;">
        See you soon,<br/>
        <b style="color:#061c27;">The Ewà team</b>
      </p>
    </td></tr>
    <tr><td style="padding:20px 36px 32px;border-top:1px solid #061c2714;font:12px/1.5 'Hanken Grotesk',Arial,sans-serif;color:#061c2799;">
      Ewà — Making beauty convenient. Launching in NYC in 2026.
    </td></tr>
  </table>
</body></html>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [args.email],
      subject: "You're on the list ✨",
      html,
    }),
  });
  if (!res.ok) {
    console.error("Resend send failed", res.status, await res.text());
  }
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
}

export const submitWaitlistFn = createServerFn({ method: "POST" })
  .inputValidator((data) => waitlistInput.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("waitlist_signups").insert({
      email: data.email.toLowerCase(),
      first_name: data.firstName,
      role: data.role,
      zip: data.zip ?? null,
      utm: data.utm,
    });

    if (error) {
      // Unique violation → already on the list, still friendly.
      if ((error as { code?: string }).code === "23505") {
        return { ok: true, duplicate: true };
      }
      console.error("waitlist insert failed", error);
      throw new Error("Could not save signup");
    }

    // Fire and forget email (don't block user on provider slowness).
    void sendConfirmationEmail({
      email: data.email,
      firstName: data.firstName,
      role: data.role,
    });

    return { ok: true, duplicate: false };
  });

export const submitProApplicationFn = createServerFn({ method: "POST" })
  .inputValidator((data) => proAppInput.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("pro_applications").insert({
      name: data.name,
      email: data.email.toLowerCase(),
      services: data.services,
      boroughs: data.boroughs,
      instagram: data.instagram || null,
      utm: data.utm,
    });
    if (error) {
      console.error("pro application insert failed", error);
      throw new Error("Could not save application");
    }
    return { ok: true };
  });
