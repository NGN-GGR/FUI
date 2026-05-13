# Page structure — `frolloBs/index.html`

```yaml
page:
  title: "Dashboard · Frollo"
  lang: en
  theme: light
  framework: bootstrap-5
  stylesheets:
    - https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css
    - https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css
    - tokens.css
    - bootstrap-bridge.css
    - app.css
  scripts:
    - https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js

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
            items:
              - { href: index.html,        label: Dashboard,    icon: bi-house-door,            active: true }
              - { href: transactions.html, label: Transactions, icon: bi-list-ul }
              - { href: goals.html,        label: Goals,        icon: bi-bullseye }
              - { href: accounts.html,     label: Accounts,     icon: bi-credit-card-2-front }
              - { href: insights.html,     label: Insights,     icon: bi-bar-chart-line }
              - spacer: div.app-nav-spacer
              - label: Account
              - { href: settings.html,     label: Settings,     icon: bi-gear }
              - { href: signin.html,       label: Sign out,     icon: bi-box-arrow-right }
              - { href: components.html,   label: Components,   icon: bi-grid-3x3-gap }

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
                  icon: bi-search
                  placeholder: "Search transactions, goals, accounts"
                  kbd: "⌘ K"
              - actions:
                  - { type: icon-button, aria: Notifications, icon: bi-bell, badge: dot }
                  - { type: button, variant: primary, size: sm, icon: bi-plus-lg, label: "New transfer" }

          - id: content
            element: main.app-content
            sections:

              - id: kpi-row
                element: div.row.g-3.mb-4
                layout: { cols: 3, breakpoint: md }
                cards:
                  - id: total-balance
                    label: Total balance
                    value: "$24,820.36"
                    delta: { direction: up, tone: success, text: "+$420.12 this week" }
                  - id: saved-this-month
                    label: Saved this month
                    value: "$1,148.00"
                    subtext: "of $1,500 target · 76%"
                    progress: { value: 76, max: 100, thickness: 4px }
                  - id: spending-this-month
                    label: Spending this month
                    value: "$3,212.48"
                    delta: { direction: up, tone: error, text: "+12% vs. last month" }

              - id: goal-and-week
                element: div.row.g-3.mb-4
                layout: { cols: [8, 4], breakpoint: lg }
                cards:
                  - id: active-goal
                    span: 8
                    badge: { variant: primary, text: "Active goal" }
                    title: "Holiday in Japan"
                    subtitle: "$3,200 saved of $5,000 · target Sep 2026"
                    action: { type: button, variant: link, size: sm, label: "Top up" }
                    progress: { value: 64, max: 100, variant: progress-thick, fill: bg-frollo-gradient }
                    stats:
                      layout: { cols: 3 }
                      tiles:
                        - { label: Monthly,    value: "$450" }
                        - { label: Round-ups,  value: "$18.40" }
                        - { label: On track,   value: "Yes", tone: success }
                  - id: this-week
                    span: 4
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
                element: div.row.g-3.mb-4
                layout: { cols: [8, 4], breakpoint: lg }
                children:
                  - id: recent-transactions
                    span: 8
                    type: card
                    header:
                      title: "Recent transactions"
                      link: { href: transactions.html, label: "See all" }
                    list:
                      element: ul.list-unstyled
                      items:
                        - { icon: "🛒", tint: sky,       merchant: "Coles Norwood",       meta: "Today · Groceries",      amount: "-$84.20",    tone: error }
                        - { icon: "💵", tint: success,   merchant: "Salary — Acme Co.",   meta: "10 May · Income",        amount: "+$3,420.00", tone: success }
                        - { icon: "🎵", tint: coral,     merchant: "Spotify Premium",     meta: "09 May · Entertainment", amount: "-$14.99",    tone: error }
                        - { icon: "📈", tint: secondary, merchant: "Round-up to savings", meta: "08 May · Savings",       amount: "$2.36" }
                        - { icon: "⛽", tint: pink,      merchant: "BP Glenelg",          meta: "07 May · Transport",     amount: "-$62.10",    tone: error }
                  - id: side-alerts
                    span: 4
                    element: div.vstack.gap-3
                    alerts:
                      - id: cdr-consent
                        variant: info
                        icon: bi-info-circle
                        title: "CDR consent expires soon"
                        body: "Your bank-data sharing expires 14 Aug 2026. Renew anytime."
                        action: { type: button, variant: primary, size: sm, label: Review }
                      - id: on-track
                        variant: success
                        icon: bi-check-circle
                        title: "You're on track this month"
                        body: "Holiday goal will hit target 12 days early at current pace."

              - id: quick-actions
                element: div.card
                title: "Quick actions"
                actions:
                  - { variant: primary,          label: "Transfer money" }
                  - { variant: secondary,        label: "Add an account" }
                  - { variant: outline-primary,  label: "Create a goal" }
                  - { variant: light,            label: "Export statement" }
```
