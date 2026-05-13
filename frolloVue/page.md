# Page structure — `frolloVue/index.html`

```yaml
page:
  title: "Dashboard · Frollo"
  lang: en
  framework: tailwind-cdn
  stylesheets:
    - tokens.css
    - app.css
  scripts:
    - https://cdn.tailwindcss.com
    - tailwind-frollo.js
  body:
    classes: [font-frollo, bg-background-app, text-text-default]

  layout:
    type: app-shell
    root: div.app-shell

    regions:

      sidebar:
        element: aside.app-sidebar
        children:
          - id: brand
            element: a.brand
            href: index.html
            content:
              - span.brand-dot
              - text: Frollo

          - id: primary-nav
            element: nav.app-nav
            icon_style: inline-svg
            items:
              - { href: index.html,        label: Dashboard,    icon: home,        active: true }
              - { href: transactions.html, label: Transactions, icon: list }
              - { href: goals.html,        label: Goals,        icon: target }
              - { href: accounts.html,     label: Accounts,     icon: card }
              - { href: insights.html,     label: Insights,     icon: line-chart }
              - spacer: div.app-nav-spacer
              - label: Account
              - { href: settings.html,     label: Settings,     icon: gear }
              - { href: signin.html,       label: Sign out,     icon: logout }
              - { href: components.html,   label: Components,   icon: grid }

          - id: user
            element: div.user
            children:
              - avatar: { text: GG }
              - name: Gavin Griffith
              - role: Member · Frollo Plus

      main:
        element: div.app-main
        children:

          - id: topbar
            element: header.app-topbar
            children:
              - heading:
                  crumbs: "Home · Dashboard"
                  h1: "Good morning, Gavin"
              - search:
                  element: label.search
                  icon: search
                  placeholder: "Search transactions, goals, accounts"
                  kbd: "⌘ K"
              - actions:
                  element: div.actions
                  items:
                    - { type: icon-button, aria: Notifications, icon: bell, badge: dot }
                    - { type: button, variant: primary, classes: "rounded-full bg-primary text-white", label: "+ New transfer" }

          - id: content
            element: main.app-content.space-y-6
            sections:

              - id: hero-metric-cards
                element: section
                layout: { grid: { cols: 1, md: 3, gap: 4 } }
                cards:
                  - id: total-balance
                    classes: [rounded-lg, bg-white, shadow-card, p-5]
                    label: Total balance
                    value: "$24,820.36"
                    delta: { direction: up, tone: state-success, text: "+$420.12 this week" }
                  - id: saved-this-month
                    classes: [rounded-lg, bg-white, shadow-card, p-5]
                    label: Saved this month
                    value: "$1,148.00"
                    subtext: "of $1,500 target · 76%"
                    progress: { value: 76, max: 100, height: h-1, fill: bg-primary, track: bg-grey-40 }
                  - id: spending-this-month
                    classes: [rounded-lg, bg-white, shadow-card, p-5]
                    label: Spending this month
                    value: "$3,212.48"
                    delta: { direction: down, tone: state-error, text: "+12% vs. last month" }

              - id: goal-and-insights
                element: section
                layout: { grid: { cols: 1, lg: 3, gap: 4 } }
                cards:
                  - id: active-goal
                    span: { lg: 2 }
                    classes: [rounded-lg, bg-white, shadow-card, p-5]
                    badge: { classes: "rounded-full bg-background-button-secondary text-primary", text: "Active goal" }
                    title: "Holiday in Japan"
                    subtitle: "$3,200 saved of $5,000 · target Sep 2026"
                    action: { type: button, variant: ghost, label: "Top up" }
                    progress: { value: 64, max: 100, height: h-2, fill: bg-frollo-gradient, track: bg-grey-40 }
                    stats:
                      layout: { grid: { cols: 3, gap: 3 } }
                      tiles:
                        - { classes: "rounded-md bg-grey-10 p-3", label: Monthly,   value: "$450" }
                        - { classes: "rounded-md bg-grey-10 p-3", label: Round-ups, value: "$18.40" }
                        - { classes: "rounded-md bg-grey-10 p-3", label: On track,  value: "Yes", tone: state-success }
                  - id: this-week
                    classes: [rounded-lg, bg-white, shadow-card, p-5]
                    title: "This week"
                    subtitle: "Spending across 7 days"
                    chart:
                      type: bar-chart
                      element: div.fw-bar-chart
                      bars: 7
                      height: 140px
                      values: [30, 55, 80, 45, 70, 35, 50]
                      active_index: 2
                      axis_labels: [M, T, W, T, F, S, S]

              - id: transactions-and-alerts
                element: section
                layout: { grid: { cols: 1, lg: 3, gap: 4 } }
                children:
                  - id: recent-transactions
                    span: { lg: 2 }
                    classes: [rounded-lg, bg-white, shadow-card, p-5]
                    header:
                      title: "Recent transactions"
                      link: { href: transactions.html, label: "See all" }
                    list:
                      element: ul.divide-y.divide-grey-30
                      items:
                        - { icon: "🛒", tint: bg-background-sky,             merchant: "Coles Norwood",       meta: "Today · Groceries",      amount: "-$84.20",    tone: state-error }
                        - { icon: "💵", tint: bg-state-success-bg,           merchant: "Salary — Acme Co.",   meta: "10 May · Income",        amount: "+$3,420.00", tone: state-success }
                        - { icon: "🎵", tint: bg-background-coral,           merchant: "Spotify Premium",     meta: "09 May · Entertainment", amount: "-$14.99",    tone: state-error }
                        - { icon: "📈", tint: bg-background-button-secondary, merchant: "Round-up to savings", meta: "08 May · Savings",       amount: "$2.36" }
                        - { icon: "⛽", tint: bg-background-pink,            merchant: "BP Glenelg",          meta: "07 May · Transport",     amount: "-$62.10",    tone: state-error }
                  - id: side-alerts
                    element: div.space-y-4
                    alerts:
                      - id: cdr-consent
                        classes: "rounded-md bg-background-sky text-text-default p-4"
                        icon: info
                        title: "CDR consent expires soon"
                        body: "Your bank-data sharing expires 14 Aug 2026. Renew anytime."
                        action: { type: button, variant: primary, label: Review }
                      - id: on-track
                        classes: "rounded-md bg-state-success-bg text-state-success p-4"
                        icon: check
                        title: "You're on track this month"
                        body: "Holiday goal will hit target 12 days early at current pace."

              - id: quick-actions
                element: section
                classes: [rounded-lg, bg-white, shadow-card, p-5]
                title: "Quick actions"
                actions:
                  - { variant: primary,      classes: "rounded-full bg-primary text-white",                            label: "Transfer money" }
                  - { variant: secondary,    classes: "rounded-full bg-background-button-secondary text-secondary",    label: "Add an account" }
                  - { variant: tertiary,     classes: "rounded-full bg-transparent text-primary",                      label: "Create a goal" }
                  - { variant: quaternary,   classes: "rounded-full bg-border-accent text-background-dark",            label: "Export statement" }
```
