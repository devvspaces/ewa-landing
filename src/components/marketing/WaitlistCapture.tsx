import { useEffect, useRef, useState, type FormEvent } from "react";
import { Logomark } from "./Nav";
import { readUtmParams } from "../../lib/utm";
import { submitWaitlist, type WaitlistRole } from "../../lib/waitlist";

type Step = "email" | "name" | "role" | "zip" | "done";

export function WaitlistCapture({
  idPrefix,
  thanksMessage,
  centered = false,
  prominent = false,
  pulse: pulseProp,
}: {
  idPrefix: string;
  thanksMessage: string;
  centered?: boolean;
  prominent?: boolean;
  pulse?: boolean;
}) {
  const pulse = pulseProp ?? prominent;
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [role, setRole] = useState<WaitlistRole | null>(null);
  const [zip, setZip] = useState("");
  const [duplicate, setDuplicate] = useState(false);
  const [pulseActive, setPulseActive] = useState(pulse);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const wrap = centered ? "mx-auto" : "";
  const maxWidth = prominent ? "max-w-[440px] min-[861px]:max-w-[560px]" : "max-w-[480px]";

  useEffect(() => {
    if (!prominent) return;
    const handler = () => emailRef.current?.focus();
    window.addEventListener("ewa:focus-hero-email", handler);
    return () => window.removeEventListener("ewa:focus-hero-email", handler);
  }, [prominent]);

  useEffect(() => {
    if (step === "name") nameRef.current?.focus();
  }, [step]);

  function handleEmailSubmit(e: FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value || value.indexOf("@") < 1) {
      emailRef.current?.focus();
      return;
    }
    setEmail(value);
    setStep("name");
  }

  function handleNameSubmit(e: FormEvent) {
    e.preventDefault();
    const value = firstName.trim();
    if (!value) {
      nameRef.current?.focus();
      return;
    }
    setFirstName(value);
    setStep("role");
  }

  function chooseRole(r: WaitlistRole) {
    setRole(r);
    if (r === "pro") {
      // Save signup in the background, then redirect to pro application.
      void submitWaitlist({
        email,
        firstName,
        role: "pro",
        zip: null,
        utm: readUtmParams(),
      });
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("ewa:waitlist-submitted"));
        window.location.href = `/pros?email=${encodeURIComponent(
          email,
        )}&name=${encodeURIComponent(firstName)}#apply`;
      }
      return;
    }
    setStep("zip");
  }

  async function finish(finalZip: string) {
    if (!role) return;
    const result = await submitWaitlist({
      email,
      firstName,
      role,
      zip: finalZip || null,
      utm: readUtmParams(),
    });
    setDuplicate(result.duplicate);
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("ewa:waitlist-submitted"));
    }
    setStep("done");
  }

  if (step === "done") {
    return (
      <div
        role="status"
        className={`${maxWidth} animate-fade-up rounded-[20px] border-[1.5px] border-orange/45 bg-white px-6 py-6 ${wrap}`}
      >
        <div className="mb-2 flex items-center gap-2.5 text-base font-semibold text-midnight">
          <Logomark size={20} />
          {duplicate ? "You're already on the list!" : `You're on the list, ${firstName}.`}
        </div>
        <p className="text-sm text-midnight/60">
          {duplicate ? "We've got your email — hang tight." : thanksMessage} Check your inbox for a
          confirmation.
        </p>
        {role === "pro" && (
          <div className="mt-4 rounded-2xl bg-orange/10 p-4">
            <p className="mb-3 text-sm font-semibold text-midnight">
              Founding pro spots are limited.
            </p>
            <p className="mb-3 text-[13.5px] text-midnight/60">
              Complete your application (takes about a minute) so we can review your work.
            </p>
            <a
              href={`/pros?email=${encodeURIComponent(email)}&name=${encodeURIComponent(firstName)}#apply`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-midnight transition-transform hover:bg-[#ff9257] active:scale-[.98]"
            >
              Complete your founding pro application (1 min)
            </a>
          </div>
        )}
      </div>
    );
  }

  if (step === "name") {
    return (
      <form
        onSubmit={handleNameSubmit}
        noValidate
        className={`${maxWidth} animate-fade-up rounded-[20px] border-[1.5px] border-orange/45 bg-white px-6 py-[22px] ${wrap}`}
      >
        <div className="mb-1.5 flex items-center gap-2.5 text-base font-semibold text-midnight">
          <Logomark size={20} />
          Nice. What should we call you?
        </div>
        <p className="mb-4 text-sm text-midnight/60">Just your first name is fine.</p>
        <input
          ref={nameRef}
          type="text"
          id={`${idPrefix}-name`}
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full rounded-xl border-[1.5px] border-midnight/[.18] bg-paper px-4 py-3 text-[15px] text-midnight outline-none focus:border-orange focus:shadow-[0_0_0_3px_rgba(255,130,63,.18)]"
        />
        <button
          type="submit"
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-orange px-[26px] py-3 text-[15px] font-semibold text-midnight transition-transform active:scale-[.98]"
        >
          Continue
        </button>
      </form>
    );
  }

  if (step === "role") {
    return (
      <div
        className={`${maxWidth} animate-fade-up rounded-[20px] border-[1.5px] border-orange/45 bg-white px-6 py-[22px] ${wrap}`}
      >
        <div className="mb-1.5 flex items-center gap-2.5 text-base font-semibold text-midnight">
          <Logomark size={20} />
          Are you here to book or to work?
        </div>
        <p className="mb-4 text-sm text-midnight/60">Choose one.</p>
        <div className="grid gap-3">
          <button
            type="button"
            onClick={() => chooseRole("customer")}
            className="rounded-2xl border-[1.5px] border-midnight/[.14] bg-paper px-5 py-4 text-left transition-colors hover:border-orange hover:bg-orange/10"
          >
            <b className="block text-[15.5px] font-semibold text-midnight">
              I want to book beauty services
            </b>
            <span className="mt-1 block text-[13.5px] text-midnight/60">
              Vetted pros come to you — home, hotel, or office.
            </span>
          </button>
          <button
            type="button"
            onClick={() => chooseRole("pro")}
            className="rounded-2xl border-[1.5px] border-midnight/[.14] bg-paper px-5 py-4 text-left transition-colors hover:border-orange hover:bg-orange/10"
          >
            <b className="block text-[15.5px] font-semibold text-midnight">
              I'm a beauty professional
            </b>
            <span className="mt-1 block text-[13.5px] text-midnight/60">
              Grow your book — clients across NYC, your calendar, your rules.
            </span>
          </button>
        </div>
      </div>
    );
  }

  if (step === "zip") {
    return (
      <div
        className={`${maxWidth} animate-fade-up rounded-[20px] border-[1.5px] border-orange/45 bg-white px-6 py-[22px] ${wrap}`}
      >
        <div className="mb-1.5 flex items-center gap-2.5 text-base font-semibold text-midnight">
          <Logomark size={20} />
          Your ZIP code
        </div>
        <p className="mb-4 text-sm text-midnight/60">Optional — helps us launch near you first.</p>
        <input
          type="text"
          id={`${idPrefix}-zip`}
          inputMode="numeric"
          maxLength={5}
          placeholder="11216"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          className="w-full rounded-xl border-[1.5px] border-midnight/[.18] bg-paper px-4 py-3 text-[15px] text-midnight outline-none focus:border-orange focus:shadow-[0_0_0_3px_rgba(255,130,63,.18)]"
        />
        <div className="mt-5 flex items-center gap-4">
          <button
            type="button"
            onClick={() => void finish(zip.trim())}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-[26px] py-3 text-[15px] font-semibold text-midnight transition-transform active:scale-[.98]"
          >
            Done
          </button>
          <button
            type="button"
            onClick={() => void finish("")}
            className="font-sans text-[13.5px] text-midnight/40 underline"
          >
            Skip
          </button>
        </div>
      </div>
    );
  }

  const inputSize = prominent
    ? "h-[58px] min-[861px]:h-[64px] px-5 min-[861px]:px-7 text-[16px]"
    : "px-5 py-3.5 text-[15px]";
  const buttonSize = prominent
    ? "h-[58px] min-[861px]:h-[64px] px-8 text-[18px]"
    : "px-[26px] py-3.5 text-[15px]";
  const buttonGlow = prominent ? "shadow-[0_0_54px_10px_rgba(255,130,63,0.38)]" : "";
  const buttonPulse = prominent && pulseActive ? "animate-pulse-glow" : "";

  return (
    <form
      onSubmit={handleEmailSubmit}
      noValidate
      className={`flex w-full ${maxWidth} flex-col gap-2.5 min-[861px]:flex-row ${wrap}`}
    >
      <input
        ref={emailRef}
        id={`${idPrefix}-email`}
        type="email"
        name="email"
        placeholder="you@email.com"
        aria-label="Email address"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onFocus={() => setPulseActive(false)}
        className={`min-w-0 rounded-full border-[1.5px] border-midnight/[.18] bg-white ${inputSize} text-midnight outline-none focus:border-orange focus:shadow-[0_0_0_3px_rgba(255,130,63,.18)] min-[861px]:flex-1`}
      />
      <button
        type="submit"
        className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange ${buttonSize} font-semibold text-midnight transition-transform hover:bg-[#ff9257] active:scale-[.98] min-[861px]:w-auto ${buttonGlow} ${buttonPulse}`}
      >
        Get on the list
      </button>
    </form>
  );
}
