import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { FilmGrain } from "@/components/site/FilmGrain";
import { CursorGlow } from "@/components/site/CursorGlow";
import { SmoothScroll } from "@/components/site/SmoothScroll";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl tracking-tight text-foreground">404</h1>
        <p className="mt-4 text-muted-foreground">This page faded out of frame.</p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm hover:border-primary/50"
        >
          Return home
        </Link>
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
        <h1 className="font-display text-2xl">Something flickered.</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm hover:border-primary/50"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Luna Aria — Singer, Dancer, Storyteller" },
      {
        name: "description",
        content:
          "The cinematic personal world of Luna Aria — a singer, dancer, guitarist and creator turning every moment into rhythm.",
      },
      { property: "og:title", content: "Luna Aria — A cinematic creator portfolio" },
      { property: "og:description", content: "From silent beginnings to unforgettable stages." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Luna Aria" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#0a0712" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@300;400;500;600;700&family=Instrument+Serif:ital@0;1&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
        <style>{`
          :root {
            --font-display: "Space Grotesk", "Clash Display", system-ui, sans-serif;
            --font-sans: "Inter", system-ui, sans-serif;
            --font-serif: "Instrument Serif", "Cormorant Garamond", serif;
          }
        `}</style>
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
      <SmoothScroll />
      <CursorGlow />
      <FilmGrain />
      <Nav />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}
