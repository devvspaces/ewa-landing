import { Link } from "@tanstack/react-router";
import { Logomark } from "./Nav";

export function Footer({ variant }: { variant: "landing" | "pros" }) {
  return (
    <footer
      className={
        variant === "pros"
          ? "border-t border-creamy/[.09] py-9 text-creamy/45"
          : "mt-5 bg-midnight py-10 text-creamy/65"
      }
    >
      <div className="mx-auto flex max-w-[1080px] flex-wrap items-center justify-between gap-5 px-6">
        <Link to="/" className="flex items-center gap-[9px] text-creamy">
          <Logomark />
          <span className="font-display text-[22px] font-medium">ewà</span>
        </Link>
        <div className="flex gap-6 text-sm">
          {variant === "landing" ? (
            <>
              <a href="/#how" className="hover:text-creamy">
                How it works
              </a>
              <a href="/#pros" className="hover:text-creamy">
                For pros
              </a>
              <a href="#" className="hover:text-creamy">
                Instagram
              </a>
              <a href="#" className="hover:text-creamy">
                Terms
              </a>
              <a href="#" className="hover:text-creamy">
                Privacy
              </a>
            </>
          ) : (
            <>
              <Link to="/" className="hover:text-creamy">
                For clients
              </Link>
              <a href="#apply" className="hover:text-creamy">
                Apply
              </a>
              <a href="#" className="hover:text-creamy">
                Instagram
              </a>
              <a href="#" className="hover:text-creamy">
                Terms
              </a>
              <a href="#" className="hover:text-creamy">
                Privacy
              </a>
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
