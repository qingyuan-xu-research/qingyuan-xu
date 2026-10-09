const siteHeader = document.querySelector('.site-header');

if (siteHeader) {
  const syncHeader = () => {
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 8);
  };

  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });
}

const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (siteHeader && menuToggle && siteNav) {
  const setMenuOpen = (open) => {
    siteHeader.classList.toggle('menu-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
  });
  siteNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });
  document.addEventListener('click', (event) => {
    if (!siteHeader.contains(event.target)) setMenuOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 700) setMenuOpen(false);
  });
}

if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches && 'IntersectionObserver' in window) {
  const sections = document.querySelectorAll('.section');
  document.documentElement.classList.add('js-reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  sections.forEach((section) => observer.observe(section));
}

async function copyText(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch { /* Fall back to selection below. */ }
  }
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.position = 'fixed';
  field.style.opacity = '0';
  document.body.appendChild(field);
  let copied = false;
  try {
    field.select();
    copied = document.execCommand('copy');
  } finally {
    field.remove();
  }
  if (!copied) throw new Error('Copy failed');
}

// Assemble the address only after a visitor asks to use it. This deters
// simple static-page harvesters, though it cannot stop script-aware crawlers.
const emailAddress = () => String.fromCharCode(
  113, 121, 120, 117, 64, 117, 109, 105, 99, 104, 46, 101, 100, 117
);

document.querySelectorAll('[data-email-open]').forEach((button) => {
  button.addEventListener('click', () => {
    window.location.href = `mailto:${emailAddress()}`;
  });
});

document.querySelectorAll('[data-email-copy]').forEach((button) => {
  button.addEventListener('click', async () => {
    const status = document.getElementById('copy-status');
    try {
      await copyText(emailAddress());
      button.textContent = 'Copied!';
      if (status) status.textContent = 'Email address copied to clipboard';
    } catch {
      button.textContent = 'Copy unavailable';
      if (status) status.textContent = 'Clipboard copy unavailable';
    }
    button.focus();
    window.setTimeout(() => {
      button.textContent = 'Copy email address';
    }, 2000);
  });
});

document.querySelectorAll('.cite-button').forEach((button) => {
  const originalLabel = button.getAttribute('aria-label');
  button.addEventListener('click', async () => {
    const citation = document.getElementById(button.dataset.citation);
    if (!citation) return;
    const status = document.getElementById('copy-status');
    try {
      await copyText(citation.textContent.trim());
      button.textContent = 'Copied!';
      button.setAttribute('aria-label', 'BibTeX citation copied');
      if (status) status.textContent = 'BibTeX citation copied to clipboard';
    } catch {
      button.textContent = 'Copy unavailable';
      button.setAttribute('aria-label', 'Clipboard copy unavailable');
      if (status) status.textContent = 'Clipboard copy unavailable';
    }
    button.focus();
    window.setTimeout(() => {
      button.textContent = 'Cite';
      button.setAttribute('aria-label', originalLabel);
    }, 2000);
  });
});
