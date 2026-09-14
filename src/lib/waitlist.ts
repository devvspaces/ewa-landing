import { submitWaitlistFn, submitProApplicationFn } from "./waitlist.functions";
import type { UtmParams } from "./utm";

export type WaitlistRole = "customer" | "pro";

export type WaitlistPayload = {
  email: string;
  firstName: string;
  role: WaitlistRole;
  zip: string | null;
  utm: UtmParams;
};

export type ProApplicationPayload = {
  name: string;
  email: string;
  services: string[];
  boroughs: string[];
  instagram: string;
  utm: UtmParams;
};

export type WaitlistResult = { ok: true; duplicate: boolean };

export async function submitWaitlist(payload: WaitlistPayload): Promise<WaitlistResult> {
  try {
    const result = await submitWaitlistFn({ data: payload });
    return result as WaitlistResult;
  } catch (err) {
    console.error("waitlist submit error", err);
    return { ok: true, duplicate: false };
  }
}

export async function submitProApplication(payload: ProApplicationPayload): Promise<void> {
  try {
    await submitProApplicationFn({ data: payload });
  } catch (err) {
    console.error("pro application submit error", err);
  }
}
