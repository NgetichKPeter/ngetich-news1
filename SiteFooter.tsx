
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
