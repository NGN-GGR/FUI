# frolloDemo — Frollo CDR Consent Replica — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build `frolloDemo/index.html` — a Bootstrap-idiomatic adaptation of the Frollo CDR consent page, styled by the project's existing brand bridge with no new bridge work.

**Architecture:** CSS Grid outer shell (`<body>` is the grid; 240px / 1fr / 320px columns; auto / 1fr / auto rows). Bootstrap 5.3.8 components inside the panes (cards, accordion, btn-group with btn-check radios, btn-primary, link-primary). Custom CSS in `frolloDemo/layout.css` handles macro layout, dark rail, stepper, top-bar chrome, sticky action bar, and brand-coloured dividers. Shared styles via a copy of the project's `styles.css`.

**Tech Stack:** Bootstrap 5.3.8 (CDN), Bootstrap Icons (CDN), Google Fonts (DM Sans + Inter), Python 3 `http.server`. No build step, no JS we write — Bootstrap bundle handles accordion + btn-check toggle.

**Project context:**
- Working directory: `/Users/gavingriffith/code/experiments`
- Spec: `docs/superpowers/specs/2026-05-07-frolloDemo-consent-design.md`
- Existing token system: `styles.css` at project root (primitive → semantic → bridge)
- Server: `python3 -m http.server 8000` already running in this session
- Project is **not** git-tracked. Per-task git-commit steps below are intentionally omitted; verification is by `curl` against the running server + browser inspection.

---

## File Structure

| File | Responsibility |
|---|---|
| `frolloDemo/styles.css` | Verbatim copy of `/styles.css` so the brand tokens + Bootstrap bridge propagate |
| `frolloDemo/layout.css` | frolloDemo-only CSS: grid shell, dark rail, stepper, top-bar chrome, sticky action bar, brand-coloured divider, responsive |
| `frolloDemo/index.html` | The page itself — Bootstrap markup with inline SVG marks |

---

## Task 1: Create directory + copy shared stylesheet

**Files:**
- Create: `/Users/gavingriffith/code/experiments/frolloDemo/`
- Create: `/Users/gavingriffith/code/experiments/frolloDemo/styles.css`

- [ ] **Step 1: Create the directory**

Run:
```bash
mkdir -p /Users/gavingriffith/code/experiments/frolloDemo
```
Expected: no output, directory exists.

- [ ] **Step 2: Copy the brand stylesheet verbatim**

Run:
```bash
cp /Users/gavingriffith/code/experiments/styles.css /Users/gavingriffith/code/experiments/frolloDemo/styles.css
```
Expected: no output. The file at `frolloDemo/styles.css` is byte-identical to the project root copy.

- [ ] **Step 3: Verify it serves**

Run:
```bash
curl -sS -o /dev/null -w "HTTP %{http_code} size=%{size_download}\n" "http://localhost:8000/frolloDemo/styles.css?v=$(date +%s)"
```
Expected: `HTTP 200 size=N` where N matches the project root `styles.css` byte size.

---

## Task 2: Create layout.css with grid shell + dark rail + topbar chrome

**Files:**
- Create: `/Users/gavingriffith/code/experiments/frolloDemo/layout.css`

- [ ] **Step 1: Write the file**

Use the Write tool to create `/Users/gavingriffith/code/experiments/frolloDemo/layout.css` with this content:

```css
/* ============================================================
   frolloDemo — page-only chrome on top of the brand stylesheet.
   Macro layout: CSS Grid outer shell with three columns and
   three rows. Brand tokens come from the imported styles.css.
   ============================================================ */

/* Outer grid shell */
body {
  margin: 0;
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr) 320px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  background: var(--bg-alt);
}

/* Dark rail (column 1, full height) */
.demo-rail {
  grid-column: 1;
  grid-row: 1 / 4;
  background: var(--color-secondary);
  color: var(--color-tertiary);
  padding: var(--space-5) var(--space-5);
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  align-self: start;
  height: 100vh;
}
.demo-rail .demo-brand-mark { color: var(--accent); margin-bottom: var(--space-8); }

/* Top bar — single grid item spanning columns 2-3 with flex inside */
.demo-topbar {
  grid-column: 2 / 4;
  grid-row: 1;
  display: flex;
  align-items: center;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}
.demo-topbar-left {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  padding: var(--space-3) var(--space-5);
  flex: 1;
}
.demo-topbar-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-5);
}
.demo-topbar-right .demo-avatar {
  width: 40px; height: 40px;
  border-radius: 50%;
  background: var(--accent-tint);
  color: var(--accent);
  display: inline-flex; align-items: center; justify-content: center;
  border: none;
}

/* Bank chip (logo + name) */
.demo-bank-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-weight: var(--weight-emphasis);
  color: var(--ink);
}
.demo-bank-chip svg { flex-shrink: 0; }

/* Main column (column 2, row 2) */
.demo-main {
  grid-column: 2;
  grid-row: 2;
  padding: var(--space-7) var(--space-7);
  background: var(--bg);
  min-width: 0;
}

/* Sticky action bar (column 2, row 3) */
.demo-actionbar {
  grid-column: 2;
  grid-row: 3;
  position: sticky;
  bottom: 0;
  background: var(--bg);
  border-top: 1px solid var(--border);
  padding: var(--space-4) var(--space-7);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-5);
  z-index: 10;
}
.demo-actionbar-prompt { font-weight: var(--weight-emphasis); color: var(--ink); margin: 0; }

/* Info column (column 3, rows 2-3) */
.demo-info {
  grid-column: 3;
  grid-row: 2 / 4;
  padding: var(--space-5);
  background: var(--bg-alt);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

/* Stepper (inside .demo-rail) */
.demo-stepper { list-style: none; margin: auto 0 0; padding: 0; display: flex; flex-direction: column; gap: var(--space-4); }
.demo-stepper-heading { font-size: var(--fs-card-heading); font-weight: var(--weight-emphasis); color: var(--color-tertiary); margin-bottom: var(--space-4); }
.demo-stepper li { display: flex; align-items: center; gap: var(--space-3); color: var(--color-grey-light); }
.demo-stepper-num {
  width: 28px; height: 28px; border-radius: 50%;
  border: 1px solid var(--color-grey-light);
  display: inline-flex; align-items: center; justify-content: center;
  font-size: var(--fs-small); flex-shrink: 0;
}
.demo-stepper li.is-done .demo-stepper-num { background: var(--accent); border-color: var(--accent); color: var(--accent-ink); }
.demo-stepper li.is-current { color: var(--color-tertiary); }
.demo-stepper li.is-current .demo-stepper-num { border-color: var(--color-tertiary); color: var(--color-tertiary); }

/* Brand-coloured horizontal divider (used between sections in main) */
.demo-rule { height: 1px; background: var(--accent); opacity: 0.5; margin: var(--space-6) 0; border: 0; }

/* Page-specific: Your consent heading */
.demo-page-title { font-size: clamp(40px, 5vw, 64px); font-weight: var(--weight-hero); letter-spacing: var(--heading-tracking); margin: 0 0 var(--space-6); color: var(--ink); }

/* Section labels in main */
.demo-section-label { font-size: var(--fs-card-heading); font-weight: var(--weight-emphasis); margin-bottom: var(--space-4); color: var(--ink); }

/* Duration btn-group: enlarge for prominence (matches source) */
.demo-duration-group .btn { padding: var(--space-3) var(--space-7); border-radius: 999px; min-width: 180px; }

/* "What we collect" accordion: flush + brand-purple toggles */
.demo-collect .accordion-button {
  color: var(--accent);
  font-weight: var(--weight-emphasis);
  background: transparent;
  padding-left: 0;
  padding-right: 0;
}
.demo-collect .accordion-button:not(.collapsed) {
  color: var(--accent-emphasis);
  background: transparent;
}
.demo-collect .accordion-button:focus { box-shadow: none; }

/* Info-card emphasis */
.demo-info .card-body { font-size: var(--fs-small); color: var(--ink); line-height: var(--lh-base); }
.demo-info .card-body p { margin: 0; }
.demo-info-cdr-logo { color: var(--accent); }

/* Continue-to-bank button: ensure brand purple + external-link icon spacing */
.demo-actionbar .btn-primary { padding-left: var(--space-5); padding-right: var(--space-5); border-radius: 999px; }
.demo-actionbar .btn-outline-secondary { border-radius: 999px; padding-left: var(--space-5); padding-right: var(--space-5); }

/* ============================================================
   Responsive
   ============================================================ */

/* Tablet (768–1199px): rail shrinks to icon strip; info moves under main */
@media (max-width: 1199.98px) {
  body {
    grid-template-columns: 64px minmax(0, 1fr);
    grid-template-rows: auto 1fr auto auto;
  }
  .demo-rail { padding: var(--space-3); grid-row: 1 / 5; }
  .demo-rail .demo-brand-mark svg text { display: none; } /* hide letterforms */
  .demo-stepper li span:not(.demo-stepper-num) { display: none; } /* hide labels */
  .demo-stepper-heading { display: none; }
  .demo-topbar { grid-column: 2; }
  .demo-main { grid-column: 2; grid-row: 2; }
  .demo-info { grid-column: 2; grid-row: 3; flex-direction: row; flex-wrap: wrap; padding: var(--space-5) var(--space-7); }
  .demo-info > .card { flex: 1 1 240px; }
  .demo-actionbar { grid-column: 2; grid-row: 4; }
}

/* Mobile (<768px): dark rail collapses; stepper goes horizontal at top of main */
@media (max-width: 767.98px) {
  body {
    grid-template-columns: minmax(0, 1fr);
    grid-template-rows: auto auto 1fr auto auto;
  }
  .demo-rail { display: none; }
  .demo-topbar { grid-column: 1; }
  .demo-topbar-left { padding-left: var(--space-4); }
  .demo-topbar-right { padding-right: var(--space-4); }
  .demo-main { grid-column: 1; grid-row: 3; padding: var(--space-5) var(--space-4); }
  .demo-info { grid-column: 1; grid-row: 4; flex-direction: column; padding: var(--space-5) var(--space-4); }
  .demo-actionbar { grid-column: 1; grid-row: 5; padding: var(--space-3) var(--space-4); flex-direction: column; align-items: stretch; }
  .demo-actionbar .btn { width: 100%; }
  /* Horizontal stepper between topbar and main */
  .demo-stepper-mobile {
    grid-column: 1; grid-row: 2;
    display: flex; align-items: center; justify-content: space-between;
    padding: var(--space-4) var(--space-4) 0;
    gap: var(--space-2);
  }
}

/* Always hide the mobile stepper on desktop/tablet */
.demo-stepper-mobile { display: none; }

@media (max-width: 767.98px) {
  .demo-stepper-mobile { display: flex; }
}

/* Page-title shrinks on small screens */
@media (max-width: 767.98px) {
  .demo-page-title { font-size: clamp(28px, 7vw, 40px); }
}
```

- [ ] **Step 2: Verify it serves**

Run:
```bash
curl -sS -o /dev/null -w "HTTP %{http_code} size=%{size_download}\n" "http://localhost:8000/frolloDemo/layout.css?v=$(date +%s)"
```
Expected: `HTTP 200 size=N` where N is roughly 4500+ bytes.

---

## Task 3: Skeleton index.html — head + grid container outline

**Files:**
- Create: `/Users/gavingriffith/code/experiments/frolloDemo/index.html`

- [ ] **Step 1: Write the skeleton**

Use the Write tool to create `/Users/gavingriffith/code/experiments/frolloDemo/index.html` with this content:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Frollo · Your consent</title>

  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&family=Inter:wght@400;500&display=swap">
  <link rel="stylesheet" href="styles.css">
  <link rel="stylesheet" href="layout.css">
</head>
<body>

  <!-- Dark rail (column 1, rows 1-3) -->
  <aside class="demo-rail">
    <!-- TASK 4 fills this -->
  </aside>

  <!-- Top bar — single grid item; flex layout inside with two halves -->
  <header class="demo-topbar">
    <div class="demo-topbar-left">
      <!-- TASK 5 fills the left side -->
    </div>
    <div class="demo-topbar-right">
      <!-- TASK 5 fills the right side -->
    </div>
  </header>

  <!-- Mobile-only horizontal stepper (above .demo-main on <768px) -->
  <nav class="demo-stepper-mobile" aria-label="Progress (mobile)">
    <!-- TASK 9 fills this -->
  </nav>

  <!-- Main consent body (column 2, row 2) -->
  <main class="demo-main">
    <!-- TASKS 6 fills this -->
  </main>

  <!-- Sticky action bar (column 2, row 3) -->
  <div class="demo-actionbar">
    <!-- TASK 7 fills this -->
  </div>

  <!-- Right info column (column 3, rows 2-3) -->
  <aside class="demo-info">
    <!-- TASK 8 fills this -->
  </aside>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

- [ ] **Step 2: Verify it serves and the grid skeleton is visible**

Run:
```bash
curl -sS -o /dev/null -w "HTTP %{http_code} size=%{size_download}\n" "http://localhost:8000/frolloDemo/index.html?v=$(date +%s)" && open "http://localhost:8000/frolloDemo/index.html?v=$(date +%s)"
```
Expected: HTTP 200. In the browser: dark left rail visible (240px wide), white top bars visible across the centre and right, light-grey-ish bg fills the main area, no content yet inside any of the panes. The right info column should appear as a slightly different shade (`--bg-alt`).

---

## Task 4: Fill the dark rail — FROL mark + stepper

**Files:**
- Modify: `/Users/gavingriffith/code/experiments/frolloDemo/index.html` (`<aside class="demo-rail">` block)

- [ ] **Step 1: Replace the empty `<aside class="demo-rail">` block**

Find:
```html
  <!-- Dark rail (column 1, rows 1-3) -->
  <aside class="demo-rail">
    <!-- TASK 4 fills this -->
  </aside>
```

Replace with:
```html
  <!-- Dark rail (column 1, rows 1-3) -->
  <aside class="demo-rail">
    <a class="demo-brand-mark" href="#" aria-label="Frollo home">
      <svg viewBox="0 0 40 40" width="40" height="40" aria-hidden="true">
        <g fill="currentColor" font-family="DM Sans, system-ui, sans-serif" font-weight="700" font-size="14" text-anchor="middle">
          <text x="10" y="18">F</text>
          <text x="30" y="18">R</text>
          <text x="10" y="36">O</text>
          <text x="30" y="36">L</text>
        </g>
      </svg>
    </a>

    <p class="demo-stepper-heading">Connect your account</p>
    <ol class="demo-stepper">
      <li class="is-done">
        <span class="demo-stepper-num"><i class="bi bi-check-lg" aria-hidden="true"></i></span>
        <span>Select your bank</span>
      </li>
      <li class="is-current">
        <span class="demo-stepper-num">2</span>
        <span>Provide your consent</span>
      </li>
      <li>
        <span class="demo-stepper-num">3</span>
        <span>Connect with your bank</span>
      </li>
    </ol>
  </aside>
```

- [ ] **Step 2: Reload and visual-check**

Run:
```bash
open "http://localhost:8000/frolloDemo/index.html?v=$(date +%s)"
```
Expected in browser:
- FROL letter grid visible in brand purple at top of dark rail.
- Three-step list at the bottom of the rail with light-grey "Connect your account" heading.
- Step 1: filled brand-purple circle with white check, label "Select your bank" in light text.
- Step 2: outlined circle with "2", label "Provide your consent" in white.
- Step 3: outlined circle with "3", label "Connect with your bank" in light grey.

---

## Task 5: Fill the top bars — back link, bank chip, help/about, avatar

**Files:**
- Modify: `/Users/gavingriffith/code/experiments/frolloDemo/index.html` (both `.demo-topbar-*` blocks)

- [ ] **Step 1: Fill the left side of the topbar**

Find:
```html
    <div class="demo-topbar-left">
      <!-- TASK 5 fills the left side -->
    </div>
```

Replace with:
```html
    <div class="demo-topbar-left">
      <a href="#" class="link-primary text-decoration-none d-inline-flex align-items-center gap-2">
        <i class="bi bi-arrow-left" aria-hidden="true"></i>
        <span>Back</span>
      </a>
      <span class="demo-bank-chip">
        <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
          <rect x="6" y="6" width="12" height="12" rx="1.5" fill="#FFCC00" transform="rotate(45 12 12)"/>
        </svg>
        CommBank
      </span>
    </div>
```

- [ ] **Step 2: Fill the right side of the topbar**

Find:
```html
    <div class="demo-topbar-right">
      <!-- TASK 5 fills the right side -->
    </div>
```

Replace with:
```html
    <div class="demo-topbar-right">
      <a href="#" class="nav-link">Help</a>
      <a href="#" class="nav-link">About</a>
      <button class="demo-avatar" type="button" aria-label="Account">
        <i class="bi bi-person-fill" aria-hidden="true"></i>
      </button>
    </div>
```

- [ ] **Step 3: Reload and visual-check**

Run:
```bash
open "http://localhost:8000/frolloDemo/index.html?v=$(date +%s)"
```
Expected:
- Top-bar left: "← Back" in brand purple, then a tilted yellow CommBank diamond + "CommBank" text in dark.
- Top-bar right: "Help" and "About" links in default text colour, then a circular brand-tinted avatar with a person icon in brand purple.
- Both top-bar halves sit on a 1px bottom border.

---

## Task 6: Fill the main consent body

**Files:**
- Modify: `/Users/gavingriffith/code/experiments/frolloDemo/index.html` (`<main class="demo-main">` block)

- [ ] **Step 1: Replace the empty `<main>` block**

Find:
```html
  <!-- Main consent body (column 2, row 2) -->
  <main class="demo-main">
    <!-- TASKS 6 fills this -->
  </main>
```

Replace with:
```html
  <!-- Main consent body (column 2, row 2) -->
  <main class="demo-main">
    <h1 class="demo-page-title">Your consent:</h1>

    <!-- Who collects card -->
    <div class="card">
      <div class="card-body">
        <p class="demo-section-label mb-3">Who will collect and use your data:</p>
        <div class="d-inline-flex align-items-center gap-3">
          <span style="color: var(--accent);">
            <svg viewBox="0 0 40 40" width="32" height="32" aria-hidden="true">
              <g fill="currentColor" font-family="DM Sans, system-ui, sans-serif" font-weight="700" font-size="11" text-anchor="middle">
                <text x="10" y="16">F</text>
                <text x="30" y="16">R</text>
                <text x="10" y="32">O</text>
                <text x="30" y="32">L</text>
              </g>
            </svg>
          </span>
          <span class="fw-semibold">Frollo</span>
        </div>
      </div>
    </div>

    <hr class="demo-rule">

    <!-- Duration selector -->
    <p class="demo-section-label">How long can your data be accessed?</p>
    <div class="btn-group demo-duration-group" role="group" aria-label="Duration">
      <input type="radio" class="btn-check" name="duration" id="duration-3" autocomplete="off">
      <label class="btn btn-outline-primary" for="duration-3">3 Months</label>
      <input type="radio" class="btn-check" name="duration" id="duration-6" autocomplete="off">
      <label class="btn btn-outline-primary" for="duration-6">6 Months</label>
      <input type="radio" class="btn-check" name="duration" id="duration-12" autocomplete="off" checked>
      <label class="btn btn-outline-primary" for="duration-12">12 Months</label>
    </div>
    <p class="text-body mt-3 mb-0">From 07 May 2026 - 07 May 2027, multiple times each day to ensure it is up to date.</p>

    <hr class="demo-rule">

    <!-- What we collect — accordion -->
    <p class="demo-section-label">What we will collect and share:</p>
    <div class="accordion accordion-flush demo-collect" id="collectAccordion">
      <div class="accordion-item">
        <h3 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collect-1">
            Account balance and details
          </button>
        </h3>
        <div id="collect-1" class="accordion-collapse collapse" data-bs-parent="#collectAccordion">
          <div class="accordion-body text-body">
            Account name, type, balance, available funds, account number, and BSB. Used to display your accounts and balances inside Frollo.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h3 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collect-2">
            Transaction details
          </button>
        </h3>
        <div id="collect-2" class="accordion-collapse collapse" data-bs-parent="#collectAccordion">
          <div class="accordion-body text-body">
            Incoming and outgoing transactions, amounts, descriptions, and timestamps. Used to power categorisation and insights.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h3 class="accordion-header">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collect-3">
            Name, occupation, contact details
          </button>
        </h3>
        <div id="collect-3" class="accordion-collapse collapse" data-bs-parent="#collectAccordion">
          <div class="accordion-body text-body">
            Your registered name, occupation, and contact details from your bank profile. Used to verify your identity.
          </div>
        </div>
      </div>
    </div>

    <hr class="demo-rule">

    <p class="text-body">
      Your data will <strong>ONLY</strong> be used for delivering real-time personal finance management features, personalised insights, and connecting you with trusted advisers to help you achieving your financial goals. You will be securely transferred to CommBank to authorise this before your data can be accessed.
    </p>

    <p class="text-body">
      Enter your registered mobile number to receive a One-Time Password via CommBank app notifications or your NetBank inbox.
    </p>
  </main>
```

- [ ] **Step 2: Verify the accordion + btn-check work**

Run:
```bash
open "http://localhost:8000/frolloDemo/index.html?v=$(date +%s)"
```
Expected:
- Large bold "Your consent:" heading in heavy weight.
- White card showing "Who will collect…" with FROL mark inline + "Frollo" label.
- Brand-purple horizontal rule below.
- Three pill buttons: 3 Months / 6 Months / 12 Months. The 12-Months option is filled brand purple by default; clicking another pill shifts the active state and brand purple moves with it.
- Subtitle date range below.
- Accordion: three rows, each with a brand-purple header text and chevron. Clicking a row expands it (Bootstrap-handled).
- Two body paragraphs at the bottom, dark text.

---

## Task 7: Fill the sticky action bar

**Files:**
- Modify: `/Users/gavingriffith/code/experiments/frolloDemo/index.html` (`.demo-actionbar` block)

- [ ] **Step 1: Replace the empty `.demo-actionbar` block**

Find:
```html
  <!-- Sticky action bar (column 2, row 3) -->
  <div class="demo-actionbar">
    <!-- TASK 7 fills this -->
  </div>
```

Replace with:
```html
  <!-- Sticky action bar (column 2, row 3) -->
  <div class="demo-actionbar">
    <p class="demo-actionbar-prompt">Do you consent to these terms?</p>
    <div class="d-flex gap-3">
      <button type="button" class="btn btn-outline-secondary">No, cancel</button>
      <button type="button" class="btn btn-primary d-inline-flex align-items-center gap-2">
        Yes, continue to bank
        <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i>
      </button>
    </div>
  </div>
```

- [ ] **Step 2: Reload and check stickiness + brand colours**

Run:
```bash
open "http://localhost:8000/frolloDemo/index.html?v=$(date +%s)"
```
Expected:
- A bar pinned to the bottom of the centre column (sticky), containing "Do you consent to these terms?" on the left and two buttons on the right.
- "No, cancel" — outline button with brand-purple text on hover.
- "Yes, continue to bank" — solid **brand purple** (proves Layer B bridge) with white text and an external-link icon.
- Scrolling the main content keeps the bar visible at the bottom.

---

## Task 8: Fill the right info column

**Files:**
- Modify: `/Users/gavingriffith/code/experiments/frolloDemo/index.html` (`<aside class="demo-info">` block)

- [ ] **Step 1: Replace the empty `.demo-info` block**

Find:
```html
  <!-- Right info column (column 3, rows 2-3) -->
  <aside class="demo-info">
    <!-- TASK 8 fills this -->
  </aside>
```

Replace with:
```html
  <!-- Right info column (column 3, rows 2-3) -->
  <aside class="demo-info">
    <div class="card">
      <div class="card-body">
        <p>
          <a href="#" class="link-primary fw-semibold">1 supporting party</a> will have access to your information to help us deliver this service.
        </p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <p>Withdraw your consent at any time</p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <p class="mb-2 fw-semibold">Regulated by the:</p>
        <div class="d-flex align-items-center gap-2 mb-3">
          <span class="demo-info-cdr-logo">
            <svg viewBox="0 0 40 40" width="40" height="40" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true">
              <path d="M 8 20 A 12 12 0 1 1 20 32"/>
              <path d="M 14 20 A 6 6 0 1 1 20 26"/>
              <circle cx="20" cy="20" r="2" fill="currentColor" stroke="none"/>
            </svg>
          </span>
          <span class="fw-semibold">Consumer<br>Data Right</span>
        </div>
        <p class="mb-1"><a href="#" class="link-primary fw-semibold">Private, secure and trusted.</a></p>
        <p>
          <a href="https://cdr.gov.au" class="link-primary d-inline-flex align-items-center gap-1">
            cdr.gov.au <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <p class="mb-1">Frollo is CDR accredited</p>
        <p>
          <a href="#" class="link-primary d-inline-flex align-items-center gap-1">
            ADRBNK000002 <i class="bi bi-box-arrow-up-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  </aside>
```

- [ ] **Step 2: Reload and visual-check**

Run:
```bash
open "http://localhost:8000/frolloDemo/index.html?v=$(date +%s)"
```
Expected:
- Right column shows four cards, stacked, each with `--bg-alt` outside and white card surface inside.
- Card 1 references "1 supporting party" as a brand-purple link.
- Card 2: plain "Withdraw your consent at any time".
- Card 3: "Regulated by the:" header, brand-purple CDR spiral mark, "Consumer Data Right" label, "Private, secure and trusted." brand-purple link, "cdr.gov.au" with external-link icon.
- Card 4: "Frollo is CDR accredited" + "ADRBNK000002" with external-link icon, in brand purple.

---

## Task 9: Mobile horizontal stepper

**Files:**
- Modify: `/Users/gavingriffith/code/experiments/frolloDemo/index.html` (`.demo-stepper-mobile` block)

This stepper only renders on `<768px` (per `layout.css` rules). The desktop stepper inside `.demo-rail` already exists from Task 4.

- [ ] **Step 1: Replace the empty `.demo-stepper-mobile` block**

Find:
```html
  <!-- Mobile-only horizontal stepper (above .demo-main on <768px) -->
  <nav class="demo-stepper-mobile" aria-label="Progress (mobile)">
    <!-- TASK 9 fills this -->
  </nav>
```

Replace with:
```html
  <!-- Mobile-only horizontal stepper (above .demo-main on <768px) -->
  <nav class="demo-stepper-mobile" aria-label="Progress (mobile)">
    <span class="demo-stepper-num is-done" style="background: var(--accent); color: var(--accent-ink); border-color: var(--accent);">
      <i class="bi bi-check-lg" aria-hidden="true"></i>
    </span>
    <span style="flex: 1; height: 1px; background: var(--border);"></span>
    <span class="demo-stepper-num" style="border-color: var(--accent); color: var(--accent);">2</span>
    <span style="flex: 1; height: 1px; background: var(--border);"></span>
    <span class="demo-stepper-num" style="border-color: var(--border); color: var(--muted);">3</span>
  </nav>
```

(Note: inline styles here because these are one-off layout primitives that don't warrant new classes; per DESIGN.md we avoid inline styles for *components*, but these are inert visual primitives in a single one-off element.)

- [ ] **Step 2: Verify mobile stepper appears below 768px**

Run:
```bash
open "http://localhost:8000/frolloDemo/index.html?v=$(date +%s)"
```
Then resize browser to <768px wide.
Expected: dark left rail disappears; a horizontal three-step strip appears above the main content (filled circle with check → connecting line → outlined circle "2" → connecting line → outlined circle "3"). Main content reflows full-width.

---

## Task 10: Cross-cutting verification

This task has no code changes; it confirms the page works end-to-end.

- [ ] **Step 1: All assets serve**

Run:
```bash
V=$(date +%s); for f in frolloDemo/index.html frolloDemo/styles.css frolloDemo/layout.css; do printf "%-30s " "$f"; curl -sS -o /dev/null -w "HTTP %{http_code}  size=%{size_download}\n" "http://localhost:8000/$f?v=$V"; done
```
Expected: all three return HTTP 200 with non-zero size.

- [ ] **Step 2: Visual sanity check at desktop (≥1200px)**

Run:
```bash
open "http://localhost:8000/frolloDemo/index.html?v=$(date +%s)"
```
Expected, all simultaneously:
- Three-column layout: dark left rail with FROL mark + stepper, white centre with consent body, light-grey right column with four info cards.
- "Your consent:" heading in heavy weight.
- "Who will collect…" card with FROL inline + "Frollo".
- Brand-purple horizontal rules between sections.
- Duration pill group with **12 Months** filled in brand purple by default. Clicking "3 Months" or "6 Months" moves the brand-purple fill to the clicked pill (Bootstrap btn-check radio behaviour).
- Three accordion rows with brand-purple-text headers; clicking each expands its body.
- Sticky action bar at bottom with "Do you consent to these terms?" and two buttons: outline secondary "No, cancel" + brand-purple "Yes, continue to bank" with external-link icon.
- Top utility bar with brand-purple "← Back", yellow CommBank diamond + "CommBank" label on the left; "Help", "About" + brand-tinted avatar on the right.

- [ ] **Step 3: Tablet check (768–1199px)**

Resize the window to ~1000px wide.
Expected:
- Dark rail collapses to ~64px wide icon strip; only FROL mark + numbered step circles visible (labels hidden, "Connect your account" heading hidden).
- Right info column moves *under* main content as a horizontal row of four cards.
- Top bar remains in place.
- Sticky action bar remains at bottom.

- [ ] **Step 4: Mobile check (<768px)**

Resize the window to ~400px wide.
Expected:
- Dark rail fully hidden.
- Horizontal stepper appears above main content (3 numbered circles connected by lines).
- Top bar remains, wrapping if needed.
- Main content reflows full-width.
- Info cards stack underneath main content.
- Sticky action bar full-width with both buttons stacked vertically (`width: 100%`).

- [ ] **Step 5: Theme robustness**

In DevTools console, run:
```js
document.documentElement.setAttribute('data-theme', 'dark');
document.documentElement.setAttribute('data-bs-theme', 'dark');
```
Expected: dark rail stays dark; main content surface flips to dark theme; cards become dark; brand-purple shifts to lighter purple (`#CDC3FF`); body text is light. Page remains coherent. (No toggle UI is provided per spec — this is a developer-driven check only.)

Reset:
```js
document.documentElement.setAttribute('data-theme', 'light');
document.documentElement.setAttribute('data-bs-theme', 'light');
```

- [ ] **Step 6: No console errors on load**

Open DevTools Console.
Expected: no red errors. Some Bootstrap deprecation warnings or 404s for favicons are acceptable; functional errors are not.

---

## Done criteria

- [ ] `frolloDemo/index.html`, `frolloDemo/styles.css`, `frolloDemo/layout.css` all serve `HTTP 200`
- [ ] Three-column desktop layout matches the source screenshot's structure (dark rail / main / info, with top utility bar and sticky action bar)
- [ ] All Bootstrap components used render in brand colours (purple primary, palette state colours) — proves the bridge is intact
- [ ] Duration pill selector is interactive (radio behaviour)
- [ ] Accordion rows expand and collapse
- [ ] Page is readable at desktop, tablet, and mobile widths (no horizontal scroll, no broken layout)
- [ ] Setting `data-theme="dark"` / `data-bs-theme="dark"` flips the page to dark theme without breaking layout
- [ ] No JavaScript files written by us (only Bootstrap bundle from CDN)
- [ ] No new tokens or selectors added to the project root `styles.css`
