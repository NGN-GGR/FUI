# SPEC: Freelance Web Dev Landing Page

## Goal
A single static HTML page that introduces a freelance web developer, showcases their work, and converts visitors via a contact form.

## Stack
Per `CLAUDE.md`:
- Static HTML, served by `python3 -m http.server`
- Bootstrap 5 via CDN for layout, components, and utilities
- Plain vanilla JavaScript (no frameworks, no build step)
- Optional: a single Google Font (e.g., Lato) loaded via CDN

## Files
- `index.html` — the landing page
- `styles.css` — minimal custom CSS (overrides and tweaks beyond Bootstrap)
- `main.js` — vanilla JS (smooth scroll, form validation, success state)

## Page Structure (single-page scroll, top to bottom)

### 1. Nav bar
- Sticky top, white background, subtle bottom border on scroll.
- Brand name (left) + anchor links (right): Services, Work, About, Testimonials, Contact.
- Bootstrap `navbar navbar-expand-md`; collapses to hamburger on small screens.

### 2. Hero
- Large headline (~48–56px desktop) communicating the value prop.
- One-line subheading underneath.
- Primary CTA button (`Contact me`) that smooth-scrolls to the contact form.
- Generous vertical padding; centered or left-aligned content with whitespace.

### 3. Services
- Section title + short intro line.
- 3-column grid (`row` + `col-md-4`), stacks on mobile.
- Each card: icon (Bootstrap Icons via CDN), title, 2–3 line description.
- Three services: **Frontend**, **Backend**, **Full-stack / APIs**.

### 4. Work / Portfolio
- Section title.
- 3-card grid using Bootstrap `card`.
- Each card: image placeholder (16:9), project title, 1-line summary, "View →" link (placeholder href).

### 5. About
- Two-column layout (`row` with `col-md-5` / `col-md-7`): photo placeholder on one side, bio text on the other.
- Bio: short paragraph + a small list of credentials (years of experience, core technologies, location / availability).

### 6. Testimonials
- Section title.
- 2–3 quote cards in a row (stacks on mobile).
- Each card: quote text, attribution (name, company / role).

### 7. Contact form
- Section title + one-line prompt ("Tell me about your project").
- Form fields:
  - **Name** (text, required)
  - **Email** (email, required)
  - **Project description** (textarea, required, min ~20 chars)
- Submit button (primary).
- On valid submit: show a "Thanks — I'll be in touch." success state in place of the form. No backend; submission is mocked client-side.
- A `mailto:` fallback link is acceptable as an alternative submit target — note the chosen approach in the implementation.

### 8. Footer
- Copyright line with current year.
- Optional inline links: GitHub, LinkedIn (placeholder hrefs).

## Visual Style
- **Direction:** Clean / minimal.
- **Palette:** White / off-white background, near-black body text (~#111), muted secondary text (~#555), one subtle accent color for buttons and links (builder's choice — e.g., a muted blue or green).
- **Typography:** System sans-serif stack, or a single Google Font (e.g., Inter) loaded via CDN.
- **Spacing:** Generous whitespace. Section vertical padding ≥ 80px desktop, ≥ 48px mobile.
- **Bootstrap utilities first.** Reach for custom CSS only when utilities can't express it.

## Behavior (vanilla JS)
- **Smooth scroll** for in-page anchor links (nav + hero CTA).
- **Form validation** (client-side):
  - Required-field checks
  - Email format check
  - Inline error messages below each invalid field
  - Submit no-ops (does not advance to success state) while the form is invalid
- **Submit flow:** On valid submit, replace the form with a success message ("Thanks — I'll be in touch.").
- **Mobile nav:** Bootstrap's collapsible navbar; closes after an anchor link is clicked.

## Responsiveness
- Bootstrap grid handles layout reflow.
- Verify breakpoints: ≥1200px (desktop), ~768px (tablet), ≤576px (mobile).
- All sections must remain readable and tap-friendly on mobile.

## CDN References
- Bootstrap 5 CSS: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css`
- Bootstrap 5 JS Bundle: `https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js`
- Bootstrap Icons (optional): `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css`
- Lato (optional): `https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap`

## Placeholder Content
The page is delivered with placeholder copy, images, and links. Real content (bio, project case studies, testimonials, social URLs, accent color) is filled in by the builder/owner.

## Out of Scope
- No backend, no real form submission to a server.
- No analytics, no tracking pixels, no CMS.
- No build tooling, no bundler, no JavaScript frameworks.
- No multi-page navigation — single page only.

## Acceptance Criteria
- Page loads from `python3 -m http.server` and renders correctly in a current Chrome / Safari / Firefox.
- All eight sections are present and reachable via the nav anchors.
- Contact form rejects invalid input with inline messages and shows the success state on a valid submit.
- Layout reflows cleanly at desktop, tablet, and mobile widths.
- No console errors on load or on form submission.
