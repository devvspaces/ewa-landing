import { Link } from "@tanstack/react-router";

export function Logomark({ size = 26 }: { size?: number }) {
  return (
    <img
      src="/logo-mark.svg"
      width={size}
      height={size}
      className="shrink-0"
      alt=""
      aria-hidden="true"
    />
  );
}

const navLink = "hidden min-[861px]:inline text-[14.5px] font-medium transition-colors";

export function Nav({ variant }: { variant: "landing" | "pros" }) {
  const dark = variant === "pros";

  return (
    <header
      className={
        dark
          ? "sticky top-0 z-50 border-b border-creamy/[.09] bg-midnight/85 backdrop-blur-md"
          : "sticky top-0 z-50 border-b border-midnight/[.07] bg-paper/88 backdrop-blur-md"
      }
    >
      <div className="mx-auto flex h-[68px] max-w-[1080px] items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-[9px]" aria-label="Ewà home">
          <img
            src={dark ? "/logo-creamy.svg" : "/logo.svg"}
            alt="Ewà"
            className="h-[28px] w-auto"
          />
          {dark && (
            <span className="ml-0.5 text-xs font-bold tracking-[.1em] text-orange">BIZ</span>
          )}
        </Link>
        <nav className="flex items-center gap-7" aria-label="Main">
          {variant === "landing" ? (
            <>
              <a href="/#how" className={`${navLink} text-midnight/60 hover:text-midnight`}>
                How it works
              </a>
              <Link
                to="/pros"
                className="text-[14.5px] font-medium whitespace-nowrap text-midnight/60 transition-colors hover:text-midnight"
              >
                For pros
              </Link>
              <Link to="/faq" className={`${navLink} text-midnight/60 hover:text-midnight`}>
                FAQ
              </Link>
              <a
                href="/#waitlist"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-midnight transition-transform hover:bg-[#ff9257] active:scale-[.98]"
              >
                Get on the list
              </a>
            </>
          ) : (
            <>
              <Link to="/" className={`${navLink} text-creamy/70 hover:text-creamy`}>
                For clients
              </Link>
              <Link to="/faq" className={`${navLink} text-creamy/70 hover:text-creamy`}>
                FAQ
              </Link>
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange px-5 py-2.5 text-sm font-semibold text-midnight transition-transform hover:bg-[#ff9257] active:scale-[.98]"
              >
                Apply now
              </a>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
