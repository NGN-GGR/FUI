(() => {
  const THEME_KEY = 'theme';
  const root = document.documentElement;

  // ---------- Theme ----------
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

  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  mq.addEventListener?.('change', (e) => {
    let stored = null;
    try { stored = localStorage.getItem(THEME_KEY); } catch (_) {}
    if (!stored) applyTheme(e.matches ? 'dark' : 'light');
  });

  // ---------- Footer year(s) ----------
  const year = String(new Date().getFullYear());
  ['year', 'sidebarYear'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = year;
  });

  // ---------- Nav: subtle border on scroll ----------
  const nav = document.getElementById('siteNav');
  const onScroll = () => {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 4);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---------- Mobile nav: collapse after clicking an anchor link ----------
  const navCollapse = document.getElementById('navMenu');
  if (navCollapse) {
    navCollapse.querySelectorAll('a.nav-link').forEach((a) => {
      a.addEventListener('click', () => {
        if (navCollapse.classList.contains('show')) {
          const inst = bootstrap.Collapse.getOrCreateInstance(navCollapse, { toggle: false });
          inst.hide();
        }
      });
    });
  }

  // ---------- Contact form: validation + success state ----------
  const form = document.getElementById('contactForm');
  const success = document.getElementById('contactSuccess');
  if (!form) return;

  const fields = ['name', 'email', 'message'].map((id) => document.getElementById(id));

  const validateField = (el) => {
    if (!el) return true;
    let ok = el.checkValidity();
    if (el.id === 'message' && el.value.trim().length < 20) ok = false;
    el.classList.toggle('is-invalid', !ok);
    el.classList.toggle('is-valid', ok && el.value.length > 0);
    return ok;
  };

  fields.forEach((el) => {
    if (!el) return;
    el.addEventListener('blur', () => validateField(el));
    el.addEventListener('input', () => {
      if (el.classList.contains('is-invalid')) validateField(el);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const results = fields.map(validateField);
    const allValid = results.every(Boolean);
    if (!allValid) {
      const firstBad = fields.find((el) => el && el.classList.contains('is-invalid'));
      if (firstBad) firstBad.focus();
      return;
    }
    form.hidden = true;
    if (success) success.hidden = false;
  });
})();
