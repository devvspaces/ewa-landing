import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">404 — off the path</p>
        <h1 className="mt-4 text-6xl font-medium text-foreground">Not here.</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you were looking for has drifted somewhere else.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="eyebrow">Something interrupted</p>
        <h1 className="mt-4 text-3xl font-medium text-foreground">This page didn't load</h1>
        <p className="mt-3 text-sm text-muted-foreground">Please try again, or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ewà — Making Beauty Convenient" },
      {
        name: "description",
        content:
          "Vetted barbers, stylists, braiders and nail techs who come to you — on demand or scheduled. Launching in New York City in 2026.",
      },
      { name: "author", content: "Ewà" },
      { name: "theme-color", content: "#061c27" },
      { property: "og:title", content: "Ewà — Making Beauty Convenient" },
      {
        property: "og:description",
        content:
          "Vetted barbers, stylists, braiders and nail techs who come to you — on demand or scheduled. Launching in New York City in 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ewà — Making Beauty Convenient" },
      {
        name: "description",
        content:
          "Vetted barbers, stylists, braiders and nail techs who come to you — on demand or scheduled. Launching in New York City in 2026.",
      },
      {
        property: "og:description",
        content:
          "Vetted barbers, stylists, braiders and nail techs who come to you — on demand or scheduled. Launching in New York City in 2026.",
      },
      {
        name: "twitter:description",
        content:
          "Vetted barbers, stylists, braiders and nail techs who come to you — on demand or scheduled. Launching in New York City in 2026.",
      },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/RmMfax4RlJOFYeb5gEaHEoWydl12/social-images/social-1783153057037-Screenshot_2026-04-29_at_2.39.52_AM.webp",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/RmMfax4RlJOFYeb5gEaHEoWydl12/social-images/social-1783153057037-Screenshot_2026-04-29_at_2.39.52_AM.webp",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
