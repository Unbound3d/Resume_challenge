// Add your javascript here

// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

// Counter code — write to all counter-number elements
async function updateCounter() {
    const els = document.querySelectorAll(".counter-number");
    try {
        let response = await fetch(
            "https://l55bixbqlzqd6xzxq5iy56nwoe0geyzn.lambda-url.us-east-1.on.aws/"
        );
        let data = await response.json();
        els.forEach(el => { el.textContent = `👀 Views: ${data}`; });
    } catch (e) {
        els.forEach(el => { el.textContent = ""; });
    }
}

updateCounter();




// Active nav highlighting
(function () {
  const navLinks = Array.from(
    document.querySelectorAll('.navbar-nav .nav-link[href^="#"]')
  );
  const sections = navLinks
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
          link.classList.toggle(
            'nav-active',
            link.getAttribute('href') === '#' + entry.target.id
          );
        });
      });
    },
    { rootMargin: '-60px 0px -60% 0px', threshold: 0 }
  );

  sections.forEach(s => observer.observe(s));
})();

// Dark mode toggle
(function () {
  const toggle = document.getElementById('darkModeToggle');
  const icon = document.getElementById('darkModeIcon');

  function applyTheme(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    icon.className = dark ? 'fa fa-sun-o' : 'fa fa-moon-o';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }

  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved ? saved === 'dark' : false);

  toggle.addEventListener('click', function () {
    applyTheme(document.documentElement.getAttribute('data-theme') !== 'dark');
  });
})();
