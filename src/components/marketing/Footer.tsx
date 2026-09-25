import { Link } from "@tanstack/react-router";

export function Footer({ variant }: { variant: "landing" | "pros" }) {
  return (
    <footer
      className={
        variant === "pros"
          ? "border-t border-creamy/[.09] py-9 text-creamy/45"
          : "mt-5 bg-midnight py-10 text-creamy/65"
      }
    >
      <div className="mx-auto flex max-w-[1080px] flex-col items-start gap-6 px-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
        <Link to="/" className="flex items-center" aria-label="Ewà home">
          <img src="/logo-creamy.svg" alt="Ewà" className="h-[26px] w-auto" />
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
          {variant === "landing" ? (
            <>
              <a href="/#how" className="hover:text-creamy">
                How it works
              </a>
              <a href="/#pros" className="hover:text-creamy">
                For pros
              </a>
              <Link to="/faq" className="hover:text-creamy">
                FAQ
              </Link>
              <a
                href="https://www.instagram.com/ewaatheapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-creamy"
              >
                Instagram
              </a>
              <Link to="/terms" className="hover:text-creamy">
                Terms
              </Link>
              <Link to="/privacy" className="hover:text-creamy">
                Privacy
              </Link>
              <Link to="/sms-opt-in" className="hover:text-creamy">
                SMS Disclosure
              </Link>
            </>
          ) : (
            <>
              <Link to="/" className="hover:text-creamy">
                For clients
              </Link>
              <a href="#apply" className="hover:text-creamy">
                Apply
              </a>
              <Link to="/faq" className="hover:text-creamy">
                FAQ
              </Link>
              <a
                href="https://www.instagram.com/ewaatheapp/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-creamy"
              >
                Instagram
              </a>
              <Link to="/terms" className="hover:text-creamy">
                Terms
              </Link>
              <Link to="/privacy" className="hover:text-creamy">
                Privacy
              </Link>
              <Link to="/sms-opt-in" className="hover:text-creamy">
                SMS Disclosure
              </Link>
            </>
          )}
        </div>
        <small className="mt-2 w-full text-[13px]">
          © 2026 Ewà · Making Beauty Convenient · New York City
        </small>
      </div>
    </footer>
  );
}
