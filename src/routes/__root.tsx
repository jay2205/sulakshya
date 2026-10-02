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

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
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
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
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
      { title: "Sulakshya — Small Gestures That Bring Big Smiles" },
      {
        name: "description",
        content:
          "Sulakshya Seva Samithi is a volunteer-led NGO bringing joy, care, and opportunity to underprivileged children and communities across India.",
      },
      { name: "author", content: "Sulakshya Seva Samithi" },
      { property: "og:site_name", content: "Sulakshya Seva Samithi" },
      { property: "og:title", content: "Sulakshya — Small Gestures That Bring Big Smiles" },
      {
        property: "og:description",
        content:
          "Sulakshya Seva Samithi is a volunteer-led NGO bringing joy, care, and opportunity to underprivileged children and communities across India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.sulakshya.org" },
      { property: "og:image", content: "https://www.sulakshya.org/logo.png" },
      { property: "og:image:secure_url", content: "https://www.sulakshya.org/logo.png" },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "342" },
      { property: "og:image:height", content: "307" },
      { property: "og:image:alt", content: "Sulakshya Seva Samithi Logo" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@SulakshyaNGO" },
      { name: "twitter:creator", content: "@SulakshyaNGO" },
      { name: "twitter:title", content: "Sulakshya — Small Gestures That Bring Big Smiles" },
      {
        name: "twitter:description",
        content:
          "Sulakshya Seva Samithi is a volunteer-led NGO bringing joy, care, and opportunity to underprivileged children and communities across India.",
      },
      { name: "twitter:image", content: "https://www.sulakshya.org/logo.png" },
      { name: "twitter:image:alt", content: "Sulakshya Seva Samithi Logo" },
    ],
    links: [
      { rel: "icon", href: "/logo.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/logo.png" },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;1,14..32,400&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
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
