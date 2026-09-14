import { useEffect, useRef, useState, type FormEvent } from "react";
import { Eyebrow } from "./Eyebrow";
import { Logomark } from "./Nav";
import { ChipSelect } from "./ChipSelect";
import { readUtmParams } from "../../lib/utm";
import { submitProApplication } from "../../lib/waitlist";

const SERVICES = [
  "Barber",
  "Hairstylist",
  "Braider",
  "Loctician",
  "Nail tech",
  "MUA",
  "Lash tech",
] as const;
const BOROUGHS = ["Brooklyn", "Manhattan", "Queens", "The Bronx", "Staten Island"] as const;

export function ProApplication() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const preName = params.get("name");
    const preEmail = params.get("email");
    if (preName) setName(preName);
    if (preEmail) setEmail(preEmail);
  }, []);

  const [instagram, setInstagram] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [boroughs, setBoroughs] = useState<string[]>([]);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    if (!trimmedName) {
      nameRef.current?.focus();
      return;
    }
    if (!trimmedEmail || trimmedEmail.indexOf("@") < 1) {
      emailRef.current?.focus();
      return;
    }
    void submitProApplication({
      name: trimmedName,
      email: trimmedEmail,
      services,
      boroughs,
      instagram: instagram.trim(),
      utm: readUtmParams(),
    });
    setSubmitted(true);
  }

  return (
    <section id="apply" className="py-[76px]">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-14 px-6 min-[861px]:grid-cols-[.9fr_1.1fr]">
        <div>
          <Eyebrow>Apply</Eyebrow>
          <h2 className="my-3.5 font-display text-[28px] font-medium leading-[1.15] text-creamy min-[861px]:text-[40px]">
            Become a founding pro.
          </h2>
          <p className="mb-[18px] max-w-[42ch] text-base text-creamy/70">
            Takes about a minute. We review every application and reach out personally — founding
            spots are limited per neighborhood.
          </p>
          <p className="max-w-[42ch] text-sm text-creamy/45">
            Licensed or experienced barbers, stylists, braiders, locticians, nail techs, MUAs and
            lash techs working in the five boroughs.
          </p>
        </div>

        <div className="rounded-3xl bg-paper px-8 py-[34px] text-midnight">
          {submitted ? (
            <div role="status" className="py-5 text-center">
              <Logomark />
              <h3 className="mt-3.5 mb-2 font-display text-2xl font-medium text-midnight">
                Application received.
              </h3>
              <p className="text-[15px] text-midnight/60">
                We review every founding application personally and we'll reach out soon. Keep an
                eye on your inbox — and your DMs.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <label
                htmlFor="p-name"
                className="mb-2 block text-xs font-bold uppercase tracking-[.1em] text-midnight/40"
              >
                Full name
              </label>
              <input
                ref={nameRef}
                type="text"
                id="p-name"
                placeholder="Amaka Okonkwo"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border-[1.5px] border-midnight/[.18] bg-white px-4 py-[13px] text-[15px] text-midnight outline-none focus:border-orange focus:shadow-[0_0_0_3px_rgba(255,130,63,.18)]"
              />

              <label
                htmlFor="p-email"
                className="mb-2 mt-[18px] block text-xs font-bold uppercase tracking-[.1em] text-midnight/40"
              >
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                id="p-email"
                placeholder="you@email.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border-[1.5px] border-midnight/[.18] bg-white px-4 py-[13px] text-[15px] text-midnight outline-none focus:border-orange focus:shadow-[0_0_0_3px_rgba(255,130,63,.18)]"
              />

              <label className="mb-2 mt-[18px] block text-xs font-bold uppercase tracking-[.1em] text-midnight/40">
                What do you do?
              </label>
              <ChipSelect
                options={SERVICES}
                selected={services}
                onToggle={(o) =>
                  setServices((prev) =>
                    prev.includes(o) ? prev.filter((s) => s !== o) : [...prev, o],
                  )
                }
              />

              <label className="mb-2 mt-[18px] block text-xs font-bold uppercase tracking-[.1em] text-midnight/40">
                Where do you work?
              </label>
              <ChipSelect
                options={BOROUGHS}
                selected={boroughs}
                onToggle={(o) =>
                  setBoroughs((prev) =>
                    prev.includes(o) ? prev.filter((b) => b !== o) : [...prev, o],
                  )
                }
              />

              <label
                htmlFor="p-ig"
                className="mb-2 mt-[18px] block text-xs font-bold uppercase tracking-[.1em] text-midnight/40"
              >
                Instagram handle
              </label>
              <input
                type="text"
                id="p-ig"
                placeholder="@yourwork"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="w-full rounded-xl border-[1.5px] border-midnight/[.18] bg-white px-4 py-[13px] text-[15px] text-midnight outline-none focus:border-orange focus:shadow-[0_0_0_3px_rgba(255,130,63,.18)]"
              />

              <button
                type="submit"
                className="mt-[26px] inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange px-[26px] py-3.5 text-[15px] font-semibold text-midnight transition-transform hover:bg-[#ff9257] active:scale-[.98]"
              >
                Apply to be a founding pro
              </button>
              <p className="mt-3 text-center text-[12.5px] text-midnight/40">
                We'll never post to your account. Your IG is your portfolio — it's how we vet fast.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
