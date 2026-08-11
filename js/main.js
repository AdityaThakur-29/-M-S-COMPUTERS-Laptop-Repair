(function () {
  'use strict';

  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('nav-links');

  function setMenu(open) {
    hamburger.setAttribute('aria-expanded', String(open));
    navLinks.classList.toggle('open', open);
    hamburger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      setMenu(hamburger.getAttribute('aria-expanded') !== 'true');
    });

    navLinks.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });

    document.addEventListener('click', function (e) {
      if (!e.target.closest('.nav') && navLinks.classList.contains('open')) setMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  var header = document.querySelector('.site-header');
  var onScroll = function () {
    if (window.scrollY > 10) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var track = document.querySelector('.marquee-track');
  if (track) {
    track.innerHTML = track.innerHTML + track.innerHTML;
  }

  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }
})();
