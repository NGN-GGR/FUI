# Right-Sidebar Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructure the freelance landing page to use a fixed right-side sidebar (brand, nav with scrollspy, CTA, theme toggle, social) on desktop, falling back to the existing top navbar below 768px. Section content unchanged.

**Architecture:** Single-file HTML / CSS / vanilla JS. The fixed `<aside>` sits in the right gutter via `position: fixed`; `<body>` reserves space with `padding-right: 280px` at the `md` breakpoint and up. Bootstrap 5.3's native scrollspy (data-attribute driven, no JS code) drives `.active` state on sidebar links.

**Tech Stack:** Bootstrap 5.3 (CDN), Bootstrap Icons (CDN), vanilla JS, Python 3 `http.server`. No build step.

**Project context:**
- Working directory: `/Users/gavingriffith/code/experiments`
- Spec: `docs/superpowers/specs/2026-05-04-right-sidebar-layout-design.md`
- Files in scope: `index.html`, `styles.css` (no `main.js` changes)
- Server: `python3 -m http.server 8000` already running in this session as background task
- Project is **not** git-tracked (per env). Commit steps below are intentionally omitted; verification is by `curl` against the running server + browser inspection.

---

## File Structure

| File | Responsibility | This plan |
|---|---|---|
| `index.html` | Page markup, theme bootstrap script, asset includes | Modify: wrap content in `<main>`, append `<aside class="sidebar">`, add scrollspy attrs on `<body>`, hide top nav + page footer on `d-md-none` |
| `styles.css` | All custom theme + component styles (onelim) | Append: `.sidebar`, `.sidebar-*`, `.main-pane`, body right-padding @ md+ |
| `main.js` | Theme toggle, scroll-class, mobile-nav-collapse, form validation | **No change** — scrollspy is data-attribute driven; theme-toggle ID is preserved |

---

## Task 1: Append sidebar CSS to `styles.css`

**Files:**
- Modify: `/Users/gavingriffith/code/experiments/styles.css` (append at the end of the Components section, before the Responsive section)

CSS-only change first so that when the markup lands in Task 2, the visual lands cleanly. Until the markup exists, these rules are dormant.

- [ ] **Step 1: Read the current end-of-Components marker**

Find the last component block (`.footer-link:hover { color: var(--accent-dark); }`) and the dark-mode tweaks block right after it. New CSS goes after the dark-mode tweaks but before the `/* ====== Responsive ======*/` divider.

- [ ] **Step 2: Append the sidebar / main-pane block**

Use the Edit tool to insert this block immediately before the `/* ============================================================\n   Responsive\n   ============================================================ */` divider in `styles.css`:

```css
/* ============================================================
   Right sidebar (≥ md) + reading-pane wrapper
   ============================================================ */
.sidebar {
  position: fixed; top: 0; right: 0;
  width: 280px; height: 100vh;
  border-left: 1px solid var(--border);
  background: var(--bg);
  padding: 32px 24px;
  display: flex; flex-direction: column;
  z-index: 1030;
}

.sidebar-brand-name {
  color: var(--ink);
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
}
.sidebar-tagline {
  color: var(--muted);
  font-size: .9rem;
  margin: 4px 0 0;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 32px;
}
.sidebar-link {
  color: var(--muted);
  text-decoration: none;
  padding: 8px 12px;
  border-left: 2px solid transparent;
  transition: color .15s ease, border-color .15s ease;
}
.sidebar-link:hover { color: var(--ink); }
.sidebar-link.active {
  color: var(--ink);
  font-weight: 600;
  border-left-color: var(--accent);
}

.sidebar-cta { margin-top: 24px; }

.sidebar-foot {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
}
.sidebar-social { display: flex; gap: 16px; }
.sidebar-social a {
  color: var(--muted);
  font-size: 1.2rem;
  text-decoration: none;
}
.sidebar-social a:hover { color: var(--accent-dark); }
.sidebar-copyright { color: var(--muted); }

/* Reading pane: cap content width, breathing room from sidebar */
.main-pane > * > .container { max-width: 760px; margin-left: 0; }

/* Reserve right gutter for the fixed sidebar at md+ */
@media (min-width: 768px) {
  body { padding-right: 280px; }
  .main-pane > section,
  .main-pane > header,
  .main-pane > footer {
    padding-left: clamp(24px, 6vw, 96px);
  }
}
```

- [ ] **Step 3: Verify the file parses (no CSS syntax errors) by serving and checking for parse warnings**

Run: `curl -sS -o /dev/null -w "HTTP %{http_code}  size=%{size_download}\n" "http://localhost:8000/styles.css?v=$(date +%s)"`
Expected: `HTTP 200  size=` followed by a number larger than the previous `5744`.

- [ ] **Step 4: Verify the existing page still renders unchanged**

Run: `open "http://localhost:8000/index.html?v=$(date +%s)"`
Expected: page looks **identical** to before. The new rules are dormant because no `.sidebar` or `.main-pane` element exists yet. Body padding-right is the only rule that matches an existing element — it adds 280px on desktop, but with no sidebar in the DOM yet, the right gutter just sits empty. (This is expected — Task 2 fills it.)

---

## Task 2: Wrap section content in `<main class="main-pane">`

**Files:**
- Modify: `/Users/gavingriffith/code/experiments/index.html`

- [ ] **Step 1: Open `<main>` after the existing top navbar's closing `</nav>`**

Use the Edit tool. Locate this block (lines ~50 in the current file):

```html
    </div>
  </nav>

  <!-- Hero -->
  <header class="hero" id="top">
```

Replace with:

```html
    </div>
  </nav>

  <main class="main-pane">

  <!-- Hero -->
  <header class="hero" id="top">
```

- [ ] **Step 2: Close `</main>` after the page-bottom `<footer>` element**

Locate the closing of the page footer:

```html
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

Replace with:

```html
  </footer>

  </main>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
```

- [ ] **Step 3: Verify served HTML contains exactly one `<main class="main-pane">` and one matching `</main>`**

Run: `curl -sS "http://localhost:8000/index.html?v=$(date +%s)" | grep -c -E '<main class="main-pane">|</main>'`
Expected output: `2`

- [ ] **Step 4: Verify the page still renders correctly in the browser**

Run: `open "http://localhost:8000/index.html?v=$(date +%s)"`
Expected: visually identical to Task 1's output. The `<main>` wrapper has no styling effect yet beyond the dormant `.main-pane` rules in CSS. The right gutter (280px on desktop) is still empty — fills in Task 3.

---

## Task 3: Add `<aside class="sidebar">` markup

**Files:**
- Modify: `/Users/gavingriffith/code/experiments/index.html`

- [ ] **Step 1: Insert the sidebar element directly after the closing `</nav>` of the top navbar and before `<main class="main-pane">`**

Use the Edit tool. Locate:

```html
    </div>
  </nav>

  <main class="main-pane">
```

Replace with:

```html
    </div>
  </nav>

  <aside class="sidebar d-none d-md-flex">
    <div class="sidebar-brand">
      <a class="sidebar-brand-name" href="#top">Alex Rivera</a>
      <p class="sidebar-tagline">Freelance Web Developer</p>
    </div>

    <nav class="sidebar-nav" id="sidebarNav" aria-label="Site navigation">
      <a class="sidebar-link" href="#services">Services</a>
      <a class="sidebar-link" href="#work">Work</a>
      <a class="sidebar-link" href="#about">About</a>
      <a class="sidebar-link" href="#testimonials">Testimonials</a>
      <a class="sidebar-link" href="#contact">Contact</a>
    </nav>

    <a class="btn btn-accent sidebar-cta" href="#contact">Contact me</a>

    <div class="sidebar-foot">
      <button id="sidebarThemeToggle" type="button" class="btn btn-link p-0 align-self-start" aria-label="Toggle dark mode" aria-pressed="false">
        <i class="bi bi-sun-fill" data-theme-icon="light"></i>
        <i class="bi bi-moon-stars-fill" data-theme-icon="dark" hidden></i>
      </button>
      <div class="sidebar-social">
        <a href="#" aria-label="GitHub"><i class="bi bi-github"></i></a>
        <a href="#" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
      </div>
      <small class="sidebar-copyright">© <span id="sidebarYear"></span> Alex Rivera</small>
    </div>
  </aside>

  <main class="main-pane">
```

> **Note on IDs:** The page already has `#themeToggle` (in the top navbar) and `#year` (in the page footer). The sidebar uses **different** IDs (`#sidebarThemeToggle`, `#sidebarYear`) so both copies coexist while we transition. Task 4 hides the top-nav versions on desktop. Task 5 wires `main.js` to drive both copies.

- [ ] **Step 2: Verify served HTML contains the sidebar with all expected sub-elements**

Run: `curl -sS "http://localhost:8000/index.html" | grep -oE 'sidebar-link|sidebarThemeToggle|sidebarYear|sidebar-cta|sidebar-brand-name|class="sidebar d-none d-md-flex"' | sort | uniq -c`

Expected:
```
   1 class="sidebar d-none d-md-flex"
   1 sidebar-brand-name
   1 sidebar-cta
   5 sidebar-link
   1 sidebarThemeToggle
   1 sidebarYear
```

- [ ] **Step 3: Visual check — sidebar appears on the right, top navbar still present**

Run: `open "http://localhost:8000/index.html?v=$(date +%s)"`
Expected at desktop width:
- Top navbar still visible (we'll hide it in Task 4)
- New right-side sidebar visible: brand "Alex Rivera" + tagline + 5 vertical nav links + green "Contact me" button + theme toggle icon + GitHub/LinkedIn icons + "© Alex Rivera" line
- Sidebar **copyright year is empty** (the `<span id="sidebarYear">` has no text yet — Task 5 wires it)

At < 768px width:
- Sidebar hidden (because of `d-none d-md-flex`)
- Top navbar visible (no change yet)

---

## Task 4: Hide top navbar and page footer on desktop

**Files:**
- Modify: `/Users/gavingriffith/code/experiments/index.html`

- [ ] **Step 1: Add `d-md-none` to the top navbar**

Locate (line ~30):

```html
  <nav class="navbar navbar-expand-md bg-body sticky-top" id="siteNav">
```

Replace with:

```html
  <nav class="navbar navbar-expand-md bg-body sticky-top d-md-none" id="siteNav">
```

- [ ] **Step 2: Add `d-md-none` to the page-bottom footer**

Locate:

```html
  <!-- Footer -->
  <footer class="footer">
```

Replace with:

```html
  <!-- Footer -->
  <footer class="footer d-md-none">
```

- [ ] **Step 3: Verify the served HTML carries the new classes**

Run: `curl -sS "http://localhost:8000/index.html" | grep -c -E 'class="navbar navbar-expand-md bg-body sticky-top d-md-none"|class="footer d-md-none"'`
Expected output: `2`

- [ ] **Step 4: Visual check at desktop width — only sidebar nav, no top nav, no bottom footer**

Run: `open "http://localhost:8000/index.html?v=$(date +%s)"`
Expected at ≥ 768px:
- No top navbar (hidden)
- Right sidebar visible with full chrome
- Hero and sections start at the top of the page
- No page-bottom footer (its content is in the sidebar foot)

Expected at < 768px (resize):
- Top navbar visible (hamburger collapse works as before)
- Sidebar hidden
- Page-bottom footer visible

---

## Task 5: Wire `main.js` to drive both `#themeToggle` and `#sidebarThemeToggle`, and both `#year` and `#sidebarYear`

**Files:**
- Modify: `/Users/gavingriffith/code/experiments/main.js`

The existing `main.js` queries by single IDs. With both top-nav and sidebar copies in the DOM (one hidden per breakpoint), each ID exists only once (good — IDs stay unique). But scripts only wire one of the two toggles. We need both wired so the visible one always works.

- [ ] **Step 1: Replace the single-ID theme-toggle wiring with a multi-ID approach**

Use the Edit tool. Locate (lines ~5–27):

```javascript
  const toggleBtn = document.getElementById('themeToggle');
  const sunIcon = toggleBtn?.querySelector('[data-theme-icon="light"]');
  const moonIcon = toggleBtn?.querySelector('[data-theme-icon="dark"]');

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-bs-theme', theme);
    if (toggleBtn) {
      toggleBtn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      if (sunIcon) sunIcon.hidden = theme === 'dark';
      if (moonIcon) moonIcon.hidden = theme !== 'dark';
    }
  };

  applyTheme(root.getAttribute('data-theme') || 'light');

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (_) {}
    });
  }
```

Replace with:

```javascript
  const toggleBtns = [
    document.getElementById('themeToggle'),
    document.getElementById('sidebarThemeToggle'),
  ].filter(Boolean);

  const applyTheme = (theme) => {
    root.setAttribute('data-theme', theme);
    root.setAttribute('data-bs-theme', theme);
    toggleBtns.forEach((btn) => {
      btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
      const sun = btn.querySelector('[data-theme-icon="light"]');
      const moon = btn.querySelector('[data-theme-icon="dark"]');
      if (sun) sun.hidden = theme === 'dark';
      if (moon) moon.hidden = theme !== 'dark';
    });
  };

  applyTheme(root.getAttribute('data-theme') || 'light');

  toggleBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(THEME_KEY, next); } catch (_) {}
    });
  });
```

- [ ] **Step 2: Replace the single-ID year wiring with a multi-ID approach**

Locate:

```javascript
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
```

Replace with:

```javascript
  // Footer year(s) — top-nav-era footer + sidebar copy
  const year = String(new Date().getFullYear());
  ['year', 'sidebarYear'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = year;
  });
```

- [ ] **Step 3: Verify the served `main.js` reflects both edits**

Run: `curl -sS "http://localhost:8000/main.js?v=$(date +%s)" | grep -c -E "sidebarThemeToggle|sidebarYear"`
Expected output: `2`

- [ ] **Step 4: Browser check — both toggles work, sidebar year is filled**

Run: `open "http://localhost:8000/index.html?v=$(date +%s)"`
Expected:
- Sidebar copyright reads `© 2026 Alex Rivera` (sidebarYear filled by JS)
- Click the sidebar's sun/moon icon → theme switches; reload → choice persists
- Resize to mobile (< 768px), click the top-nav's sun/moon icon → theme switches; both toggles' icons stay in sync

---

## Task 6: Enable Bootstrap scrollspy on `<body>`

**Files:**
- Modify: `/Users/gavingriffith/code/experiments/index.html`

Bootstrap 5.3 scrollspy is purely declarative. Adding the right `data-bs-*` attributes to `<body>` and giving it a `tabindex` is enough — `bootstrap.bundle.min.js` (already loaded) handles the rest.

- [ ] **Step 1: Add scrollspy attributes to `<body>`**

Locate:

```html
<body>
```

Replace with:

```html
<body data-bs-spy="scroll" data-bs-target="#sidebarNav" data-bs-offset="80" data-bs-smooth-scroll="true" tabindex="0">
```

> Bootstrap's scrollspy applies `.active` to descendant `<a>` elements of `#sidebarNav` whose `href` matches the section currently in view. The `.sidebar-link.active` rule from Task 1 styles the active state.

- [ ] **Step 2: Verify served HTML has the scrollspy attributes**

Run: `curl -sS "http://localhost:8000/index.html" | grep -c 'data-bs-spy="scroll"'`
Expected output: `1`

- [ ] **Step 3: Browser check — scrollspy highlights the current section**

Run: `open "http://localhost:8000/index.html?v=$(date +%s)"`
Expected:
- On load, no link is active (you're at `#top`/Hero, which isn't a sidebar entry — that's fine)
- Scroll down to "Services" section: `Services` sidebar link gets the lime left bar + bolder weight
- Continue scrolling: `Work`, `About`, `Testimonials`, `Contact` highlight in turn
- Click any sidebar link → smooth-scrolls to section + that link becomes active

---

## Task 7: Cross-cutting verification — onelim theme integrity, mobile fallback, form flow

This task has no code changes; it only confirms that prior behavior still works after the restructure.

- [ ] **Step 1: Onelim theme tokens still resolve correctly**

Run: `curl -sS http://localhost:8000/styles.css | grep -E "(Brand:|--accent:|--secondary:|--radius:)" | head -8`
Expected output:
```
   Tokens — Brand: onelim (DESIGN.md <theme name="onelim">)
  --accent: #1afb05;
  --secondary: #333333;
  --radius: 0px;
  --accent: #1afb05;
  --secondary: #b0b0b0;
```

- [ ] **Step 2: Browser visual check — onelim accents in the new sidebar chrome**

Run: `open "http://localhost:8000/index.html?v=$(date +%s)"`
Expected at desktop, light theme:
- "Contact me" CTA: lime background, deep-green text, sharp 0-radius corners
- Sidebar active link: lime left border + bold dark text (not lime text — lime fails AA on white)
- Sidebar social icons: muted on idle, `--accent-dark` lime on hover
- Service icons (in main pane): lime glyph on dark-gray (`#333`) square — unchanged

Dark theme (click sidebar theme toggle):
- Sidebar background flips to dark `#0f1216`
- Border-left of sidebar now uses dark `--border`
- Active link's lime bar still visible

- [ ] **Step 3: Mobile fallback works (resize to < 768px)**

In the browser, resize the window to < 768px width (or use devtools mobile emulation). Expected:
- Right sidebar fully hidden
- Top navbar visible with hamburger
- Hamburger opens the existing collapse menu; clicking a link auto-collapses it (existing `main.js` behavior)
- Page-bottom footer is visible
- Theme toggle in top navbar works; choice persists to desktop

- [ ] **Step 4: Contact form still validates and submits**

Resize back to desktop. Scroll to Contact section. Try:
1. Click Send with empty fields → all three fields show `.is-invalid` red borders + inline messages, focus jumps to Name
2. Fill Name → blur → green `.is-valid`; Email valid → green; Message < 20 chars → red; Message ≥ 20 chars → green
3. Click Send with all valid → form replaced by success state with lime check icon + "Thanks — I'll be in touch."

- [ ] **Step 5: Smooth-scroll works from sidebar links**

Click each of the five sidebar links in turn. Expected: page smooth-scrolls to the section anchor (CSS `scroll-behavior: smooth` already in `styles.css` :root).

---

## Done criteria

- [ ] Desktop (≥ 768px) shows fixed right sidebar; top navbar and page-bottom footer hidden
- [ ] Sidebar contains: brand + tagline, 5 nav links, "Contact me" CTA, theme toggle, GitHub + LinkedIn, copyright year
- [ ] Bootstrap scrollspy highlights the current section in the sidebar; active link has lime left bar
- [ ] Mobile (< 768px) shows top navbar + page-bottom footer; sidebar hidden
- [ ] Theme toggle works from either copy; preference persists; both icons stay in sync
- [ ] Contact form, smooth-scroll, mobile-collapse-on-click — all unchanged
- [ ] Onelim tokens (lime `#1afb05`, dark gray `#333`, 0px radius) untouched
