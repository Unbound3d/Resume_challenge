// Typing animation — no external dependency
(function () {
  var el = document.getElementById('typed');
  if (!el) return;

  var strings = [
    'Cyber Security Specialist',
    'Penetration Tester',
    'Python Software Developer',
    'DevSecOps Engineer'
  ];
  var typeSpeed = 60;
  var backSpeed = 35;
  var pauseMs  = 1800;
  var si = 0, ci = 0, deleting = false;

  function tick() {
    var current = strings[si];
    if (deleting) {
      ci--;
    } else {
      ci++;
    }
    el.textContent = current.slice(0, ci);

    var delay = deleting ? backSpeed : typeSpeed;

    if (!deleting && ci === current.length) {
      delay = pauseMs;
      deleting = true;
    } else if (deleting && ci === 0) {
      deleting = false;
      si = (si + 1) % strings.length;
      delay = 350;
    }
    setTimeout(tick, delay);
  }

  setTimeout(tick, 800);
})();
