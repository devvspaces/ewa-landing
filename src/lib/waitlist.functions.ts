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

export const submitWaitlistFn = createServerFn({ method: "POST" })
  .inputValidator((data) => waitlistInput.parse(data))
  .handler(async ({ data }) => {
    console.warn("[waitlist] not wired up yet — signup ignored", data.email);
    return { ok: true, duplicate: false };
  });

export const submitProApplicationFn = createServerFn({ method: "POST" })
  .inputValidator((data) => proAppInput.parse(data))
  .handler(async ({ data }) => {
    console.warn("[pro application] not wired up yet — application ignored", data.email);
    return { ok: true };
  });
