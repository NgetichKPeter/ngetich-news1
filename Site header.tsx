The user is asking for a news site based on a mockup they've shared, so I'll build it directly using that visual reference as my guide.





src/styles.css
@import "tailwindcss" source(none);
@source "../src";
@import "tw-animate-css";
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=Inter:wght@400;500;600;700&display=swap');
@theme inline {
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-body: 'Source Serif 4', Georgia, serif;
  --font-sans: 'Inter', system-ui, sans-serif;
}
@custom-variant dark (&:is(.dark *));
src/styles.css
}
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.129 0.042 264.695);
  --radius: 0.25rem;
  --background: oklch(0.99 0.003 90);
  --foreground: oklch(0.15 0.02 260);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.129 0.042 264.695);
  --card-foreground: oklch(0.15 0.02 260);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.129 0.042 264.695);
  --primary: oklch(0.208 0.042 265.755);
  --primary-foreground: oklch(0.984 0.003 247.858);
  --secondary: oklch(0.968 0.007 247.896);
  --secondary-foreground: oklch(0.208 0.042 265.755);
  --muted: oklch(0.968 0.007 247.896);
  --muted-foreground: oklch(0.554 0.046 257.417);
  --accent: oklch(0.968 0.007 247.896);
  --accent-foreground: oklch(0.208 0.042 265.755);
  --popover-foreground: oklch(0.15 0.02 260);
  --primary: oklch(0.25 0.08 255);
  --primary-foreground: oklch(0.98 0.003 90);
  --secondary: oklch(0.95 0.01 90);
  --secondary-foreground: oklch(0.25 0.08 255);
  --muted: oklch(0.96 0.005 90);
  --muted-foreground: oklch(0.45 0.02 260);
  --accent: oklch(0.55 0.22 28);
  --accent-foreground: oklch(0.98 0.003 90);
  --destructive: oklch(0.577 0.245 27.325);
  --destructive-foreground: oklch(0.984 0.003 247.858);
  --border: oklch(0.929 0.013 255.508);
src/styles.css
  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-body);
  }
  h1, h2, h3, h4, .serif {
    font-family: var(--font-serif);
    letter-spacing: -0.02em;
  }
}
@utility nav-link {
  @apply text-xs font-semibold uppercase tracking-wider text-primary-foreground/85 hover:text-primary-foreground transition;
}
@utility tag-pill {
  @apply inline-block bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-widest px-2 py-1;
}
@utility section-rule {
  @apply border-b-2 border-primary pb-2 mb-4 text-xs font-bold uppercase tracking-widest text-primary;
}

src/components/SiteHeader.tsx
import { Link } from "@tanstack/react-router";
import { Search, User } from "lucide-react";
const sections = ["News", "Politics", "World", "Business", "Tech", "Opinion", "Sports", "Culture"];
export function SiteHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", month: "long", day: "numeric", year: "numeric",
  });
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="border-b border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="text-[11px] uppercase tracking-widest text-primary-foreground/70 hidden md:block">
            {today}
          </div>
          <Link to="/" className="font-serif text-3xl md:text-4xl font-black tracking-tight">
            Ngetich
          </Link>
          <div className="flex items-center gap-3">
            <button className="p-1.5 hover:bg-primary-foreground/10 rounded" aria-label="Search">
              <Search className="h-4 w-4" />
            </button>
            <button className="p-1.5 hover:bg-primary-foreground/10 rounded hidden sm:flex items-center gap-1.5 text-xs uppercase tracking-wider">
              <User className="h-4 w-4" /> Login
            </button>
            <button className="bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <nav className="mx-auto max-w-7xl px-4 py-2.5 flex items-center gap-5 overflow-x-auto">
        {sections.map((s) => (
          <Link key={s} to="/" className="nav-link whitespace-nowrap">{s}</Link>
        ))}
      </nav>
      <div className="bg-accent text-accent-foreground">
        <div className="mx-auto max-w-7xl px-4 py-1.5 flex items-center gap-3 text-xs">
          <span className="font-bold uppercase tracking-widest">Breaking</span>
          <span className="opacity-90 truncate">Election results tight as nation holds its breath — live updates throughout the night.</span>
        </div>
      </div>
    </header>
  );
}
