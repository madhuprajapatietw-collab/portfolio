/* =====================================================
   Priyanka Prajapati – Portfolio scripts (Vanilla JS)
   Features: theme toggle, mobile menu, active link on scroll,
   scroll-reveal animation, back-to-top, hide empty sections.
   ===================================================== */

(function () {
  'use strict';

  var root = document.documentElement;

  /* ---------- 1. THEME (light / dark) ---------- */
  var themeBtn = document.getElementById('theme-toggle');
  var themeIcon = themeBtn ? themeBtn.querySelector('.theme-icon') : null;

  // Safe wrappers: localStorage can be blocked in some browsers
  function saveTheme(value) {
    try { localStorage.setItem('theme', value); } catch (e) { /* ignore */ }
  }
  function readTheme() {
    try { return localStorage.getItem('theme'); } catch (e) { return null; }
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    if (themeIcon) themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  // Use saved choice, otherwise follow the device setting
  var saved = readTheme();
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved || (prefersDark ? 'dark' : 'light'));

  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      saveTheme(next);
    });
  }

  /* ---------- 2. MOBILE MENU ---------- */
  var menuBtn = document.getElementById('menu-toggle');
  var navLinks = document.getElementById('nav-links');

  function setMenu(open) {
    if (!menuBtn || !navLinks) return;
    navLinks.classList.toggle('open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      setMenu(!navLinks.classList.contains('open'));
    });
  }
  // Close the menu when a link is tapped, or Escape is pressed
  if (navLinks) {
    navLinks.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setMenu(false);
  });

  /* ---------- 3. HIDE EMPTY SECTIONS ---------- */
  // A section is hidden (and its menu link removed) when it has no entries.
  function hideIfEmpty(sectionId, itemSelector) {
    var section = document.getElementById(sectionId);
    if (!section) return;
    if (section.querySelectorAll(itemSelector).length === 0) {
      section.hidden = true;
      var link = document.querySelector('.nav-links a[href="#' + sectionId + '"]');
      if (link && link.parentElement) link.parentElement.remove();
    }
  }
  hideIfEmpty('experience', '.exp-item');       // Experience section
  hideIfEmpty('achievements', '.achv-item');    // Achievements block inside Certifications

  /* ---------- 4. ACTIVE NAV LINK ON SCROLL ---------- */
  var sections = document.querySelectorAll('main section[id]');
  var links = document.querySelectorAll('.nav-link');

  function setActive(id) {
    links.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
  }

  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { if (!s.hidden) spy.observe(s); });
  }

  /* ---------- 5. SCROLL REVEAL ANIMATION ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var revealer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { revealer.observe(el); });
  } else {
    // Old browsers: just show everything
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- 6. BACK TO TOP BUTTON ---------- */
  var toTop = document.getElementById('to-top');
  function onScroll() {
    if (toTop) toTop.classList.toggle('show', window.scrollY > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- 7. FOOTER YEAR ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
