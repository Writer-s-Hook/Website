(function () {
  var root = document.documentElement;
  var KEY = 'wh-theme';
  var mq = window.matchMedia('(prefers-color-scheme: dark)');
  var toggle = document.querySelector('.theme-toggle');

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }

  // What the reader is actually looking at: their choice, or the system.
  function resolved() {
    return stored() || (mq.matches ? 'dark' : 'light');
  }

  function sync() {
    var choice = stored();
    if (choice) { root.setAttribute('data-theme', choice); }
    else { root.removeAttribute('data-theme'); }

    if (!toggle) return;
    var now = resolved();
    toggle.setAttribute('data-resolved', now);
    toggle.setAttribute('aria-label',
      now === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = resolved() === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(KEY, next); } catch (e) {}
      sync();
    });
  }

  // Follow the system only while the reader hasn't overridden it.
  mq.addEventListener('change', function () { if (!stored()) sync(); });

  sync();

  // ---- navigation ----
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (navToggle && nav) {
    function isOpen() { return nav.classList.contains('is-open'); }

    function setOpen(open, moveFocus) {
      navToggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
      if (!moveFocus) return;
      if (open) {
        var first = nav.querySelector('a');
        if (first) first.focus();
      } else {
        navToggle.focus();
      }
    }

    navToggle.addEventListener('click', function () { setOpen(!isOpen(), true); });

    // Escape closes it and hands focus back to the button that opened it.
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen()) setOpen(false, true);
    });

    // Following a link should dismiss the menu behind it.
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a') && isOpen()) setOpen(false, false);
    });

    // A click outside the open menu dismisses it too.
    document.addEventListener('click', function (e) {
      if (!isOpen()) return;
      if (nav.contains(e.target) || navToggle.contains(e.target)) return;
      setOpen(false, false);
    });

    // Returning to desktop width should not leave stale open state behind.
    window.matchMedia('(min-width: 901px)').addEventListener('change', function (e) {
      if (e.matches && isOpen()) setOpen(false, false);
    });
  }
})();
