
14 May at 18:19

1778771887602.png
Create web that looks like that


Thought for 4s
Created newspaper-style site
Built a classic newspaper-style site "Ngetich" with navy header, breaking-news bar, hero + sidebar layout, three-column section grid, and a full article page with byline, drop-cap, comments and related stories — matching your reference.

14 May at 18:28
Can I upload it to GitHub?

Yes! Click the GitHub button in the top-right of the Lovable editor (or use the + menu → GitHub → Connect project) to authorize the Lovable GitHub App and create a repo. After that, changes sync both ways automatically.

14 May at 18:30
Connect my GitHub account to sync this project to a new repository.

GitHub connection is handled directly in the Lovable UI, not through me. Here's how:

Click the GitHub button in the top-right of the editor (or + menu → GitHub → Connect project)
Authorize the Lovable GitHub App
Pick the account/org for the new repo
Click Create Repository
After that, changes sync both ways automatically.

14 May at 18:40
Where is lovable ui

The GitHub button is in the Lovable editor UI (not in your app's preview). Here's where to find it:

Desktop: Click the + button in the chat input (bottom-left) → GitHub → Connect project.

Mobile: Tap the + button in the bottom-left (Chat mode) → GitHub.

Then authorize the Lovable GitHub App and create the repo — sync runs both ways after that.

Ask Lovable...







src/components/SiteFooter.tsx
export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8">
        <div>
          <div className="font-serif text-2xl font-black mb-2">Ngetich</div>
          <p className="text-sm text-primary-foreground/70">Independent journalism since 1924.</p>
        </div>
        {[
          { h: "Sections", l: ["Politics", "World", "Business", "Tech", "Opinion"] },
          { h: "Company", l: ["About", "Careers", "Press", "Contact"] },
          { h: "Legal", l: ["Terms", "Privacy", "Cookies", "Accessibility"] },
        ].map((c) => (
          <div key={c.h}>
            <div className="text-xs font-bold uppercase tracking-widest mb-3">{c.h}</div>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {c.l.map((i) => <li key={i}><a href="#" className="hover:text-primary-foreground">{i}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Ngetich Media Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
src/routes/index.tsx
import { createFileRoute } from "@tanstack/react-router";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero-news.jpg";
import politicsImg from "@/assets/politics.jpg";
import worldImg from "@/assets/world.jpg";
export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ngetich — Independent News, Politics, World & Business" },
      { name: "description", content: "Breaking news, in-depth analysis, and original reporting from around the world." },
      { property: "og:title", content: "Ngetich — Independent News" },
      { property: "og:description", content: "Breaking news and original reporting." },
    ],
  }),
  component: Home,
});
// IMPORTANT: Replace this placeholder. For sites with multiple pages (About, Services, Contact, etc.),
// create separate route files (about.tsx, services.tsx, contact.tsx) — don't put all pages in this file.
function PlaceholderIndex() {
function StoryRow({ title, kicker }: { title: string; kicker: string }) {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "#fcfbf8" }}
    >
      <img
        data-lovable-blank-page-placeholder="REMOVE_THIS"
        src="https://cdn.gpteng.co/blank-app-v1.svg"
        alt="Your app will live here!"
      />
    <Link to="/article/$slug" params={{ slug: "long-road-to-recovery" }} className="block group border-b border-border py-3 last:border-0">
      <div className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">{kicker}</div>
      <h4 className="font-serif text-lg leading-snug group-hover:underline">{title}</h4>
      <div className="text-xs text-muted-foreground mt-1">By Sarah Chen · 4 min read</div>
    </Link>
  );
}
function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-8">
        {/* Hero */}
        <section className="grid lg:grid-cols-3 gap-8 pb-10 border-b-2 border-primary">
          <div className="lg:col-span-2">
            <Link to="/article/$slug" params={{ slug: "election-results-tight" }} className="group block">
              <img src={heroImg} alt="Candidate at podium" width={1280} height={768} className="w-full aspect-[16/10] object-cover" />
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-3">Michael Chen / Getty — Pool Photo</div>
              <span className="tag-pill mt-3">Election 2024</span>
              <h1 className="font-serif text-4xl md:text-6xl font-black leading-[1.05] mt-3 group-hover:underline decoration-2 underline-offset-4">
                'Election Results Tight; Nation Holds Breath'
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
                With six battleground states yet to call, the country waits through a long, uncertain night as both campaigns claim narrow paths to victory.
              </p>
              <div className="mt-3 text-xs text-muted-foreground">By Eleanor Vance & David Park · Updated 12 minutes ago</div>
            </Link>
          </div>
          <aside className="space-y-1">
            <div className="section-rule">Top Stories</div>
            <StoryRow kicker="Markets" title="Wall Street braces for volatility as results trickle in overnight" />
            <StoryRow kicker="Analysis" title="Five charts that explain how we got to this razor-thin margin" />
            <StoryRow kicker="Live" title="State-by-state: where the count stands at 11pm Eastern" />
            <StoryRow kicker="Opinion" title="Whatever the outcome, the republic survives — barely" />
          </aside>
        </section>
        {/* Three-column grid */}
        <section className="grid md:grid-cols-3 gap-10 py-12">
          <div>
            <div className="section-rule">Politics</div>
            <Link to="/article/$slug" params={{ slug: "capitol-watch" }} className="block group">
              <img src={politicsImg} alt="Capitol building" loading="lazy" width={800} height={512} className="w-full aspect-[4/3] object-cover" />
              <h3 className="font-serif text-2xl font-bold mt-3 group-hover:underline">Inside the Capitol's longest night in a generation</h3>
              <p className="text-sm text-muted-foreground mt-2">Senators and staff describe the strange quiet of a chamber waiting for the country to decide.</p>
            </Link>
            <div className="mt-4 space-y-3">
              <StoryRow kicker="Senate" title="Three races that will decide the upper chamber" />
              <StoryRow kicker="Profile" title="The county clerk who became a national figure overnight" />
            </div>
          </div>
          <div>
            <div className="section-rule">World</div>
            <Link to="/article/$slug" params={{ slug: "world-watching" }} className="block group">
              <img src={worldImg} alt="World map" loading="lazy" width={800} height={512} className="w-full aspect-[4/3] object-cover" />
              <h3 className="font-serif text-2xl font-bold mt-3 group-hover:underline">How allies and rivals are reading the American vote</h3>
              <p className="text-sm text-muted-foreground mt-2">From Brussels to Beijing, foreign capitals prepare for either outcome — and the policy whiplash that may follow.</p>
            </Link>
            <div className="mt-4 space-y-3">
              <StoryRow kicker="Europe" title="EU leaders convene emergency briefing on transatlantic ties" />
              <StoryRow kicker="Asia" title="Markets in Tokyo and Seoul open to tentative gains" />
            </div>
          </div>
          <div>
            <div className="section-rule">Opinion</div>
            <div className="space-y-5">
              {[
                { a: "Mira Achebe", t: "We have spent four years afraid of this night. Now we live through it." },
                { a: "Tomás Reyes", t: "The polling industry's reckoning is coming, regardless of who wins." },
                { a: "Hannah Klein", t: "A modest defense of waiting — and of patience as a civic virtue." },
                { a: "Daniel Okafor", t: "What young voters told me they actually wanted from this election." },
              ].map((o) => (
                <Link key={o.a} to="/article/$slug" params={{ slug: "opinion" }} className="block group border-b border-border pb-4 last:border-0">
                  <div className="flex gap-3">
                    <div className="h-12 w-12 rounded-full bg-muted flex-shrink-0 flex items-center justify-center font-serif text-lg font-bold text-primary">
                      {o.a.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h4 className="font-serif text-base leading-snug group-hover:underline">{o.t}</h4>
                      <div className="text-xs text-muted-foreground mt-1">{o.a}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* National & Business */}
        <section className="grid md:grid-cols-2 gap-10 py-8 border-t border-border">
          {[
            { h: "National", items: ["Wildfires force evacuation of three Oregon counties", "Federal Reserve signals patience on next rate move", "School board races draw record turnout in suburbs"] },
            { h: "Business", items: ["Chipmaker posts surprise quarterly loss, shares slide", "Airlines test biometric boarding at six major hubs", "Retail giants split on holiday hiring forecasts"] },
          ].map((s) => (
            <div key={s.h}>
              <div className="section-rule">{s.h}</div>
              <ul className="space-y-3">
                {s.items.map((i) => (
                  <li key={i}>
                    <Link to="/article/$slug" params={{ slug: "story" }} className="block group border-b border-border pb-3">
                      <h4 className="font-serif text-xl leading-snug group-hover:underline">{i}</h4>
                      <div className="text-xs text-muted-foreground mt-1">2 hours ago · 5 min read</div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
function Index() {
  return <PlaceholderIndex />;
}
