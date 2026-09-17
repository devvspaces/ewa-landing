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

function getBackendUrl(): string {
  const url =
    process.env.BACKEND_URL ||
    process.env.VITE_BACKEND_URL ||
    "http://localhost:3000";
  return url.replace(/\/$/, "");
}

export const submitWaitlistFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => waitlistInput.parse(data))
  .handler(async ({ data }) => {
    const backendUrl = getBackendUrl();
    try {
      const response = await fetch(`${backendUrl}/v1/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`[waitlist] backend responded with error (${response.status}):`, errorText);
        return { ok: true, duplicate: false };
      }

      const result = (await response.json()) as { ok?: boolean; duplicate?: boolean };
      return { ok: true, duplicate: Boolean(result.duplicate) };
    } catch (err) {
      console.error("[waitlist] failed to forward waitlist signup to backend:", err);
      return { ok: true, duplicate: false };
    }
  });

export const submitProApplicationFn = createServerFn({ method: "POST" })
  .validator((data: unknown) => proAppInput.parse(data))
  .handler(async ({ data }) => {
    const backendUrl = getBackendUrl();
    try {
      const response = await fetch(`${backendUrl}/v1/waitlist/pro`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`[pro application] backend responded with error (${response.status}):`, errorText);
        return { ok: true };
      }

      return { ok: true };
    } catch (err) {
      console.error("[pro application] failed to forward pro application to backend:", err);
      return { ok: true };
    }
  });
