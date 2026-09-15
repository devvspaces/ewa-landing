import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Search, X, HelpCircle, Sparkles, ShieldCheck, CreditCard, Calendar, Briefcase, Mail } from "lucide-react";
import { Nav } from "../components/marketing/Nav";
import { Footer } from "../components/marketing/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Frequently Asked Questions — Ewà" },
      {
        name: "description",
        content:
          "Everything you need to know about booking beauty & grooming appointments, pricing, trust & safety, and working as an independent pro on Ewà.",
      },
    ],
  }),
  component: FAQPage,
});

interface FAQItem {
  id: string;
  question: string;
  answer: string | React.ReactNode;
  category: "about" | "booking" | "money" | "safety" | "pros";
  audience: "client" | "pro" | "all";
}

const FAQ_CATEGORIES = [
  { id: "all", label: "All Questions", icon: HelpCircle },
  { id: "about", label: "What EWÁ Is", icon: Sparkles },
  { id: "booking", label: "Booking & Appointments", icon: Calendar },
  { id: "money", label: "Pricing & Payouts", icon: CreditCard },
  { id: "safety", label: "Trust & Safety", icon: ShieldCheck },
  { id: "pros", label: "Working on EWÁ", icon: Briefcase },
] as const;

const FAQ_DATA: FAQItem[] = [
  // 1. What EWÁ is
  {
    id: "what-is-ewa",
    category: "about",
    audience: "all",
    question: "What is EWÁ?",
    answer:
      "EWÁ is a marketplace that brings licensed beauty and grooming professionals to you. There is no salon — the pro travels to your home, office, or wherever you are. Clients book through the Ewà app; professionals run their business through Ewà Biz.",
  },
  {
    id: "services-offered",
    category: "about",
    audience: "client",
    question: "What services can I book?",
    answer:
      "Hair styling & braiding, barbering and grooming, and makeup. We do not offer tattoos, injectables, lasers, or medical aesthetic treatments.",
  },
  {
    id: "operating-locations",
    category: "about",
    audience: "all",
    question: "Where does EWÁ operate?",
    answer:
      "We are live in select New York City neighbourhoods and expanding one area at a time. If you are outside our current zone, you can join our waitlist and we will notify you as soon as we reach your neighbourhood.",
  },
  {
    id: "salon-or-employer",
    category: "about",
    audience: "all",
    question: "Is EWÁ a salon or an employer?",
    answer:
      "Neither. Professionals on EWÁ are independent business owners. They set their own prices, choose their own hours, decide which bookings to take, and bring their own tools and products. EWÁ provides the platform, secure payments, and customer support.",
  },

  // 2. Booking and the appointment
  {
    id: "on-demand-booking",
    category: "booking",
    audience: "client",
    question: "How does on-demand booking work?",
    answer:
      "Choose a pro who is online, request a booking, and they have five minutes to accept. If they do not accept, the booking cancels automatically and we immediately show you other pros available now. You are never charged for a booking that is not accepted.",
  },
  {
    id: "nobody-accepts",
    category: "booking",
    audience: "client",
    question: "What if nobody accepts?",
    answer:
      "Nothing is charged. We will show you other pros available now or give you the option to schedule for later. If we cannot fill your request, please tell us — unfilled requests help us decide where to onboard new professionals next.",
  },
  {
    id: "pin-verification",
    category: "booking",
    audience: "all",
    question: "What is the PIN for?",
    answer:
      "When your pro arrives, you give them a four-digit PIN from your app. Entering this PIN in their app officially starts the appointment. It verifies the right person arrived at the right location, and ensures the appointment clock does not start until they are actually with you.",
  },
  {
    id: "appointment-completion",
    category: "booking",
    audience: "all",
    question: "How is the appointment ended?",
    answer:
      "Your pro marks the service complete in Ewà Biz when the work is finished. You will receive an instant prompt in your app to rate the service and add a tip if you wish. If you do not respond within 24 hours, the appointment confirms automatically.",
  },
  {
    id: "change-or-reschedule",
    category: "booking",
    audience: "client",
    question: "What if I need to change or reschedule?",
    answer:
      "You can manage, reschedule, or cancel an upcoming appointment directly in the app from your bookings tab. Please submit changes as early as possible so your pro can adjust their day. Cancellation policies and windows are clearly presented before you confirm your booking.",
  },
  {
    id: "home-prep",
    category: "booking",
    audience: "client",
    question: "What do I need to have ready at home?",
    answer:
      "A chair, access to a sink or running water for services that require it, a power outlet, and enough clear space for your pro to work safely and comfortably. Your pro will message you in the app before arriving if they need anything specific.",
  },
  {
    id: "rebook-same-pro",
    category: "booking",
    audience: "client",
    question: "Can I book the same pro again?",
    answer:
      "Yes! You can rebook any pro you have seen previously directly from your booking history, and they will see that you are a returning client. Your appointment history, payments, and platform cover remain organized in one place.",
  },

  // 3. Money
  {
    id: "client-pricing",
    category: "money",
    audience: "client",
    question: "What does it cost me?",
    answer:
      "Your pro sets their own price for each service. At checkout you will see that price plus a transparent 3% service fee. There are no hidden charges, and the price you approve is the exact price you pay.",
  },
  {
    id: "when-charged",
    category: "money",
    audience: "client",
    question: "When am I charged?",
    answer:
      "We authorise your payment card when the booking is accepted (a temporary pre-authorisation hold, not a charge) and capture payment once the service is marked complete. If the booking is never accepted or is cancelled before it begins, the hold is released immediately.",
  },
  {
    id: "pro-commission",
    category: "money",
    audience: "pro",
    question: "What does EWÁ cost me as a pro?",
    answer:
      "EWÁ takes a 20% platform commission on the service price — you keep 80%. There is no booth rent, no monthly subscription fee, and no cost to be listed. For example, on an $80 haircut, you keep $64.",
  },
  {
    id: "set-own-prices",
    category: "money",
    audience: "pro",
    question: "Do I set my own prices as a pro?",
    answer:
      "Yes. You set your own prices for every service you offer and you can update them at any time. EWÁ does not set, cap, or dictate your service prices.",
  },
  {
    id: "travel-time",
    category: "money",
    audience: "pro",
    question: "Do I get paid for travel time?",
    answer:
      "Travel is not billed as a separate fee. You determine your own service radius and set your service prices with travel factored in. You can adjust your travel radius at any time inside Ewà Biz.",
  },
  {
    id: "pro-payouts",
    category: "money",
    audience: "pro",
    question: "When do I get paid?",
    answer:
      "You choose your preferred payout schedule in Ewà Biz: get paid instantly (typically within 30 minutes) to an eligible debit card, or via standard bank transfer in 2–3 business days.",
  },
  {
    id: "tips-policy",
    category: "money",
    audience: "all",
    question: "How do tips work?",
    answer:
      "100% of tips go directly to the professional. EWÁ takes 0% commission from tips.",
  },
  {
    id: "taxes",
    category: "money",
    audience: "pro",
    question: "Do I need to handle my own taxes?",
    answer:
      "Yes. As an independent business owner, you are responsible for your own income taxes and any applicable sales tax on your services. In New York City, certain beauty services are subject to local sales tax, which you collect and remit. EWÁ provides all payment and earnings summaries you need for tax reporting. (EWÁ cannot provide legal or tax advice; please consult a qualified tax professional).",
  },

  // 4. Trust and safety
  {
    id: "vetting-and-security",
    category: "safety",
    audience: "client",
    question: "Who is the professional coming to my home?",
    answer:
      "Every professional on EWÁ undergoes government ID verification, licensing verification where applicable, and comprehensive security checks before they are permitted to accept client bookings on the platform.",
  },
  {
    id: "address-privacy",
    category: "safety",
    audience: "client",
    question: "Is my address safe?",
    answer:
      "Yes. Your exact address is shared with your chosen pro only after they officially accept your booking. It is never displayed on your public profile or visible to anyone else on EWÁ.",
  },
  {
    id: "feeling-unsafe",
    category: "safety",
    audience: "all",
    question: "What if I feel unsafe during an appointment?",
    answer:
      "Both the client and pro apps have built-in Safety & Security features that allow you to discreetly access emergency assistance, share appointment details, or report issues in real time.",
  },
  {
    id: "leave-appointment",
    category: "safety",
    audience: "all",
    question: "Can I leave an appointment?",
    answer:
      "Yes. If a situation feels unsafe or deviates significantly from what was agreed, you have full authority to end the appointment and leave immediately. Report the incident through the app and our safety team will follow up. You will never be penalized for prioritizing your personal safety.",
  },
  {
    id: "appointment-issues",
    category: "safety",
    audience: "all",
    question: "Something went wrong with my appointment. What do I do?",
    answer: (
      <span>
        Report it directly in the app or email our dedicated support team at{" "}
        <a
          href="mailto:support@ewatheapp.com"
          className="font-medium text-orange underline hover:text-orange/80"
        >
          support@ewatheapp.com
        </a>
        . Provide details on what occurred and what resolution you are seeking. We investigate and resolve every report individually.
      </span>
    ),
  },

  // 5. Working on EWÁ
  {
    id: "pro-requirements",
    category: "pros",
    audience: "pro",
    question: "What do I need to join as a pro?",
    answer:
      "To join EWÁ Biz, you will need: government ID verification, an active Stripe account with an attached debit card for payouts, and the professional tools and sanitary products necessary for your services. You must also satisfy applicable state licensing and background check requirements.",
  },
  {
    id: "online-offline-mode",
    category: "pros",
    audience: "pro",
    question: "How does online / offline work?",
    answer:
      "Toggling 'Online' enables on-demand requests right now in addition to advance bookings. Toggling 'Offline' means you can still be booked in advance for future appointments, but won't receive immediate on-demand requests. You can toggle anytime — there are no minimum hours, shifts, or mandatory schedules.",
  },
  {
    id: "declining-requests",
    category: "pros",
    audience: "pro",
    question: "What happens if I decline a request?",
    answer:
      "Declining a request is free and there are no acceptance targets or penalties. If you cannot take a booking, decline as promptly as possible so the client is automatically re-matched in seconds. What we ask is that you do not leave requests to expire while online: unanswered expired requests affect search visibility because reliable response times are essential to on-demand service.",
  },
  {
    id: "cancel-after-accepting",
    category: "pros",
    audience: "pro",
    question: "What if I need to cancel after accepting?",
    answer:
      "If an unavoidable conflict arises, cancel through the app as soon as possible and state your genuine reason so the client can be promptly notified and re-accommodated.",
  },
  {
    id: "taking-clients-off-platform",
    category: "pros",
    audience: "pro",
    question: "Can I take my clients off-platform?",
    answer:
      "No. All appointments and transactions connected through EWÁ must remain on the platform. Keeping bookings on EWÁ guarantees payment protection, dispute resolution, platform safety coverage, and ensures your account remains in good standing.",
  },
];

function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [audienceFilter, setAudienceFilter] = useState<"all" | "client" | "pro">("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return FAQ_DATA.filter((item) => {
      // Category filter
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }

      // Audience filter
      if (audienceFilter !== "all" && item.audience !== "all" && item.audience !== audienceFilter) {
        return false;
      }

      // Search query
      if (query) {
        const questionMatch = item.question.toLowerCase().includes(query);
        const answerMatch =
          typeof item.answer === "string"
            ? item.answer.toLowerCase().includes(query)
            : item.id.toLowerCase().includes(query);
        return questionMatch || answerMatch;
      }

      return true;
    });
  }, [selectedCategory, audienceFilter, searchQuery]);

  // Group filtered items by category for structured reading if "all" is selected
  const categoryGroups = useMemo(() => {
    if (selectedCategory !== "all" || searchQuery.trim() !== "") {
      return null;
    }
    const groups: { category: (typeof FAQ_CATEGORIES)[number]; items: FAQItem[] }[] = [];
    for (const cat of FAQ_CATEGORIES) {
      if (cat.id === "all") continue;
      const items = filteredItems.filter((item) => item.category === cat.id);
      if (items.length > 0) {
        groups.push({ category: cat, items });
      }
    }
    return groups;
  }, [filteredItems, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-paper text-midnight selection:bg-orange/20 selection:text-midnight">
      <Nav variant="landing" />

      <main className="mx-auto max-w-[920px] px-6 py-12 md:py-20">
        {/* Header Section */}
        <div className="text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-orange/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[.14em] text-orange">
            Help &amp; Answers
          </span>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-midnight md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-midnight/70 md:text-lg">
            Everything you need to know about booking home beauty services, pricing, trust &amp;
            safety, and growing your business with Ewà.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative mx-auto mt-10 max-w-2xl">
          <div className="relative flex items-center">
            <Search className="pointer-events-none absolute left-4 h-5 w-5 text-midnight/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions (e.g. PIN, pricing, tipping, taxes, cancellation)..."
              className="w-full rounded-2xl border border-midnight/[.12] bg-white py-4 pl-12 pr-12 text-[15px] text-midnight shadow-xs placeholder:text-midnight/40 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 rounded-full p-1 text-midnight/40 hover:bg-midnight/5 hover:text-midnight"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Audience toggle */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="mr-1 text-xs font-semibold uppercase tracking-wider text-midnight/40">
            Show for:
          </span>
          {(
            [
              { id: "all", label: "Everyone" },
              { id: "client", label: "Clients" },
              { id: "pro", label: "Beauty Pros" },
            ] as const
          ).map((aud) => (
            <button
              key={aud.id}
              type="button"
              onClick={() => setAudienceFilter(aud.id)}
              className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all ${
                audienceFilter === aud.id
                  ? "bg-midnight text-creamy shadow-xs"
                  : "bg-midnight/[.05] text-midnight/70 hover:bg-midnight/[.09]"
              }`}
            >
              {aud.label}
            </button>
          ))}
        </div>

        {/* Category Pill Filters */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 border-b border-midnight/[.08] pb-6">
          {FAQ_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat.id);
                }}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "bg-orange text-midnight shadow-xs font-semibold"
                    : "bg-white border border-midnight/[.08] text-midnight/75 hover:border-midnight/20 hover:text-midnight"
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? "text-midnight" : "text-orange"}`} />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* FAQ Content Section */}
        <div className="mt-8">
          {filteredItems.length === 0 ? (
            <div className="rounded-2xl border border-midnight/[.08] bg-white p-12 text-center">
              <HelpCircle className="mx-auto h-10 w-10 text-midnight/30" />
              <h3 className="mt-4 font-display text-lg font-medium text-midnight">
                No matching questions found
              </h3>
              <p className="mt-2 text-sm text-midnight/60">
                Try searching with different terms, or clear the search query to view all questions.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                  setAudienceFilter("all");
                }}
                className="mt-5 inline-flex items-center rounded-full bg-midnight px-4 py-2 text-xs font-semibold text-creamy hover:bg-midnight/90"
              >
                Reset filters
              </button>
            </div>
          ) : categoryGroups ? (
            /* Structured display by category */
            <div className="space-y-10">
              {categoryGroups.map((group) => {
                const Icon = group.category.icon;
                return (
                  <section key={group.category.id} id={group.category.id} className="scroll-mt-24">
                    <div className="mb-4 flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange/10 text-orange">
                        <Icon className="h-4 w-4" />
                      </div>
                      <h2 className="font-display text-2xl font-medium text-midnight">
                        {group.category.label}
                      </h2>
                    </div>

                    <div className="rounded-2xl border border-midnight/[.08] bg-white px-6 shadow-xs">
                      <Accordion type="multiple" className="w-full divide-y divide-midnight/[.06]">
                        {group.items.map((item) => (
                          <AccordionItem
                            key={item.id}
                            value={item.id}
                            className="border-b-0 py-1"
                          >
                            <AccordionTrigger className="py-4 text-left text-base font-medium text-midnight hover:no-underline hover:text-orange">
                              <span className="pr-4">{item.question}</span>
                            </AccordionTrigger>
                            <AccordionContent className="pb-5 pt-1 text-[15px] leading-relaxed text-midnight/70">
                              {item.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            /* Flat list for search / specific category view */
            <div className="rounded-2xl border border-midnight/[.08] bg-white px-6 shadow-xs">
              <Accordion type="multiple" className="w-full divide-y divide-midnight/[.06]">
                {filteredItems.map((item) => (
                  <AccordionItem key={item.id} value={item.id} className="border-b-0 py-1">
                    <AccordionTrigger className="py-4 text-left text-base font-medium text-midnight hover:no-underline hover:text-orange">
                      <span className="pr-4">{item.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 pt-1 text-[15px] leading-relaxed text-midnight/70">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}
        </div>

        {/* Still have questions? Help card */}
        <div className="mt-14 rounded-3xl border border-midnight/[.08] bg-white p-8 md:p-10 text-center shadow-xs">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-orange/15 text-orange">
            <Mail className="h-6 w-6" />
          </div>
          <h3 className="mt-4 font-display text-2xl font-medium text-midnight">
            Still have questions?
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-midnight/70">
            Can’t find what you’re looking for? Reach out directly to our team. We handle every
            inquiry personally.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:support@ewatheapp.com"
              className="inline-flex items-center gap-2 rounded-full bg-midnight px-6 py-3 text-sm font-semibold text-creamy transition-all hover:bg-midnight/90 hover:scale-[1.01] active:scale-[.99]"
            >
              <Mail className="h-4 w-4 text-orange" />
              Email support@ewatheapp.com
            </a>
          </div>
        </div>
      </main>

      <Footer variant="landing" />
    </div>
  );
}

