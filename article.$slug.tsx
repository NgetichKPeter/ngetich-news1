



src/routes/article.$slug.tsx
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Bookmark, Share2, MessageCircle, Heart } from "lucide-react";
import articleImg from "@/assets/article-hero.jpg";
import politicsImg from "@/assets/politics.jpg";
import worldImg from "@/assets/world.jpg";
export const Route = createFileRoute("/article/$slug")({
  head: () => ({
    meta: [
      { title: "The Long Road to Recovery: Inside the City's Effort — Ngetich" },
      { name: "description", content: "An in-depth look at how one city is rebuilding after the storm." },
      { property: "og:title", content: "The Long Road to Recovery" },
      { property: "og:description", content: "An in-depth look at the city's rebuilding effort." },
      { property: "og:type", content: "article" },
    ],
  }),
  component: Article,
});
function RelatedCard({ title }: { title: string }) {
  return (
    <Link to="/article/$slug" params={{ slug: "related" }} className="block group border-b border-border py-3">
      <h4 className="font-serif text-base leading-snug group-hover:underline">{title}</h4>
      <div className="text-xs text-muted-foreground mt-1">3 days ago</div>
    </Link>
  );
}
function Article() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <div className="mx-auto max-w-7xl px-4 py-8 grid lg:grid-cols-[1fr_320px] gap-12">
        <article>
          <div className="text-xs text-muted-foreground mb-4">
            <Link to="/" className="hover:underline">Home</Link> / <span>National</span>
          </div>
          <span className="tag-pill">National</span>
          <h1 className="font-serif text-4xl md:text-5xl font-black leading-[1.1] mt-4">
            The Long Road to Recovery: Inside the City's Effort
          </h1>
          <p className="text-xl text-muted-foreground font-body italic mt-4 leading-relaxed">
            Six months after the storm, residents and officials are still untangling what comes next — block by block, dollar by dollar.
          </p>
          <div className="flex items-center justify-between border-y border-border my-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-bold">SC</div>
              <div>
                <div className="text-sm font-semibold">By Sarah Chen</div>
                <div className="text-xs text-muted-foreground">Published Nov 14, 2024 · 12 min read</div>
              </div>
            </div>
            <div className="flex gap-2">
              {[Bookmark, Share2].map((Icon, i) => (
                <button key={i} className="p-2 rounded hover:bg-muted" aria-label="action"><Icon className="h-4 w-4" /></button>
              ))}
            </div>
          </div>
          <figure>
            <img src={articleImg} alt="Empty city street" width={1280} height={768} className="w-full aspect-[16/9] object-cover" />
            <figcaption className="text-xs text-muted-foreground mt-2 italic">
              Caption: Michael Chen / Getty — Downtown stands quiet at dawn, six months on.
            </figcaption>
          </figure>
          <div className="prose prose-lg max-w-none mt-8 font-body text-lg leading-[1.8] text-foreground space-y-5">
            <p>
              <span className="font-serif text-6xl float-left leading-[0.85] pr-3 pt-1 text-primary">A</span>
              little before sunrise on a Tuesday in May, the city's emergency operations director walked the length of Market Street alone. The lights were back on. The water mains held. But the storefronts were still papered over, and the sidewalks bore the chalk outlines of debris piles long since hauled away.
            </p>
            <p>
              "You think the hard part is the first week," she said later, in an interview at her office above the courthouse. "It isn't. The hard part is month four, month five, when the cameras are gone and the federal money slows down and you still have nine thousand people who can't go home."
            </p>
            <p>
              Across the country, cities battered by extreme weather are confronting a new and uncomfortable reality: recovery is not a moment, but a long arc. It is measured not in news cycles but in permits issued, contracts let, and the slow, unglamorous work of putting a place back together.
            </p>
            <h2 className="font-serif text-3xl font-bold mt-10 mb-2">The arithmetic of rebuilding</h2>
            <p>
              The numbers are formidable. Officials estimate the total cost of repair at just over $4.2 billion — a figure that includes infrastructure, housing assistance, small-business grants, and the quiet, ongoing expense of keeping displaced families in temporary shelter.
            </p>
            <p>
              Roughly two-thirds of that figure is expected to come from federal sources, with the remainder split between state allocations, insurance recovery, and a municipal bond issue that voters approved in March by a margin of seven points.
            </p>
          </div>
          {/* Sticky social */}
          <div className="flex items-center gap-4 border-y border-border mt-10 py-4">
            {[
              { I: Heart, n: "1.2k" },
              { I: MessageCircle, n: "284" },
              { I: Share2, n: "Share" },
              { I: Bookmark, n: "Save" },
            ].map(({ I, n }, i) => (
              <button key={i} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
                <I className="h-4 w-4" /> {n}
              </button>
            ))}
          </div>
          {/* Comments */}
          <section className="mt-10">
            <div className="section-rule">Comments (284)</div>
            <div className="border border-border p-4 bg-card">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-muted flex-shrink-0" />
                <div className="flex-1">
                  <div className="text-sm"><span className="font-semibold">Top comment</span> · 3 hours ago</div>
                  <p className="text-sm mt-1 text-foreground/90">
                    The piece I keep coming back to is the part about month four. Anyone who's lived through one of these knows it's true. The hardest stretch is when the country has already moved on.
                  </p>
                  <div className="flex gap-4 text-xs text-muted-foreground mt-2">
                    <button>Reply</button><button>♥ 142</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Related */}
          <section className="mt-12">
            <div className="section-rule">Read Next</div>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { i: politicsImg, t: "How federal disaster aid actually flows — and where it gets stuck" },
                { i: worldImg, t: "Three cities abroad that rebuilt smarter after their own storms" },
                { i: articleImg, t: "The volunteer corps that became a permanent part of city life" },
              ].map((c) => (
                <Link key={c.t} to="/article/$slug" params={{ slug: "next" }} className="group block">
                  <img src={c.i} alt="" loading="lazy" className="w-full aspect-[4/3] object-cover" />
                  <h4 className="font-serif text-lg leading-snug mt-2 group-hover:underline">{c.t}</h4>
                </Link>
              ))}
            </div>
          </section>
        </article>
        {/* Sidebar */}
        <aside className="space-y-8">
          <div>
            <div className="section-rule">Related Stories</div>
            <RelatedCard title="FEMA reorganization could speed disaster aid by months, report finds" />
            <RelatedCard title="Why insurance is leaving the storm coast — and who's stepping in" />
            <RelatedCard title="The contractors making — and breaking — local rebuilding efforts" />
            <RelatedCard title="A photo essay: the streets, six months on" />
          </div>
          <div className="bg-primary text-primary-foreground p-6">
            <div className="text-xs uppercase tracking-widest opacity-80">Newsletter</div>
            <h3 className="font-serif text-2xl font-bold mt-2">The Morning Brief</h3>
            <p className="text-sm opacity-90 mt-2">The day's biggest stories, hand-picked by our editors.</p>
            <input placeholder="you@example.com" className="w-full mt-4 px-3 py-2 text-sm text-foreground bg-background" />
            <button className="w-full mt-2 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider py-2.5">Subscribe</button>
          </div>
        </aside>
      </div>
      <SiteFooter />
    </div>
  );
}
