# Portfolio Improvements Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement six portfolio improvements: certifications anchor, skills pill tags, portfolio card hover overlays, active nav highlighting, dark mode toggle, and SEO/performance quick wins.

**Architecture:** All changes are to a static HTML/CSS/JS site. HTML changes go in `website/index.html`, new styles in `website/css/main2.css` (appended), JS additions to `website/scripts/main.js`. No build step required — open `website/index.html` in a browser to verify.

**Tech Stack:** HTML5, CSS3 (no preprocessor), vanilla JS (ES6), Bootstrap 4, jQuery 3.2.1, Font Awesome 4/5

---

## Task 1: Certifications anchor + CDP cert + nav link

**Files:**
- Modify: `website/index.html`

- [ ] **Step 1: Rename the certifications section ID**

Find the second `<div class="section" id="skill">` (the one with the heading "CERTIFICATIONS & AWARDS", around line 219) and change its `id` to `certifications`:

```html
<div class="section" id="certifications">
```

- [ ] **Step 2: Add "Certs" nav link**

In the navbar `<ul class="navbar-nav ml-auto">`, add a new `<li>` between the Skills and Portfolio links:

```html
<li class="nav-item"><a class="nav-link smooth-scroll" href="#certifications">Certs</a></li>
```

The full nav order should be: About · Skills · Certs · Portfolio · Experience · Contact · Blog · Walkthroughs · [dark toggle — added in Task 5]

- [ ] **Step 3: Add CDP cert to top of certifications list**

Inside the `<ul class="fa-ul ...">` in the certifications section, add as the first `<li>`:

```html
<li><i class="fa-li fa fa-trophy text-warning"></i>Certified DevSecOps Professional (CDP) – Practical DevSecOps</li>
```

- [ ] **Step 4: Verify in browser**

Open `website/index.html`. Check:
- Navbar has a "Certs" link between Skills and Portfolio
- Clicking "Certs" smooth-scrolls to the Certifications section
- CDP cert appears at the top of the certifications list

- [ ] **Step 5: Commit**

```bash
git add website/index.html
git commit -m "feat: give certifications its own nav anchor, add CDP cert"
```

---

## Task 2: Skills section — grouped pill tags

**Files:**
- Modify: `website/index.html`
- Modify: `website/css/main2.css`

- [ ] **Step 1: Add pill CSS to main2.css**

Append to `website/css/main2.css`:

```css
/* ── Skills pill tags ── */
.skills-group-container {
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 4px 0;
}

.skill-group-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #64748b;
  margin-bottom: 8px;
}

.skill-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-pill {
  padding: 5px 14px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  display: inline-block;
}

.pill-offensive {
  background: #dcfce7;
  color: #166534;
}

.pill-appsec {
  background: #dbeafe;
  color: #1e40af;
}

.pill-defensive {
  background: #fef3c7;
  color: #92400e;
}
```

- [ ] **Step 2: Replace skills card body content in index.html**

Find the skills section card body (the one with `id="skill"` and heading "TOP SKILLS"). Replace everything inside `<div class="card-body">` with the new pills markup.

Replace this block (the entire `<!-- My code snippet -->` div through `<!-- end of snippet -->`):

```html
        <!-- My code snippet  -->
        <div class="w-100">
            <div class="row justify-content-center">
              <div class="col-md-6">
                <ul class="fa-ul mb-0 font-ram font-size-16 text-black-50 pb-3">
                  <li class="mb-2">
                    <i class="fa-li fas fa-check text-success"></i>
                    Red/Purple team operations
                  </li>
                  <li class="mb-2">
                    <i class="fa-li fas fa-check text-success"></i>
                    Vulnerability Assessments and Penetration Testing (VAPT)
                  </li>
                  <li class="mb-2">
                    <i class="fa-li fas fa-check text-success"></i>
                    Threat Intelligence and advisories
                  </li>
                  <li class="mb-2">
                    <i class="fa-li fas fa-check text-success"></i>
                    Incident Response
                  </li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="fa-ul mb-0 font-ram font-size-16 text-black-50 pb-3">
                  <li class="mb-2">
                    <i class="fa-li fas fa-check text-success"></i>
                    Cloud penetration testing
                  </li>
                  <li class="mb-2">
                    <i class="fa-li fas fa-check text-success"></i>
                    Cybersecurity Audit
                  </li>
                  <li class="mb-2">
                    <i class="fa-li fas fa-check text-success"></i>
                    Implementing and Configuring Security Solutions
                  </li>
                  <li class="mb-2">
                    <i class="fa-li fas fa-check text-success"></i>
                    Developing and Implementing Security Policies and Measures
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <!-- end of snippet  -->
```

With:

```html
        <div class="skills-group-container">
          <div class="skill-group">
            <div class="skill-group-label">Offensive Security</div>
            <div class="skill-pills">
              <span class="skill-pill pill-offensive">Red/Purple Team Ops</span>
              <span class="skill-pill pill-offensive">VAPT</span>
              <span class="skill-pill pill-offensive">Cloud Penetration Testing</span>
            </div>
          </div>
          <div class="skill-group">
            <div class="skill-group-label">AppSec &amp; DevSecOps</div>
            <div class="skill-pills">
              <span class="skill-pill pill-appsec">Application Security</span>
              <span class="skill-pill pill-appsec">DevSecOps</span>
              <span class="skill-pill pill-appsec">Secure Code Review</span>
            </div>
          </div>
          <div class="skill-group">
            <div class="skill-group-label">GRC &amp; Defensive</div>
            <div class="skill-pills">
              <span class="skill-pill pill-defensive">Incident Response</span>
              <span class="skill-pill pill-defensive">Threat Intelligence</span>
              <span class="skill-pill pill-defensive">Security Audit</span>
              <span class="skill-pill pill-defensive">Security Policies &amp; Measures</span>
              <span class="skill-pill pill-defensive">Implementing Security Solutions</span>
            </div>
          </div>
        </div>
```

- [ ] **Step 3: Verify in browser**

Open `website/index.html`. Check:
- Skills section shows three labelled groups with coloured pill tags
- Pills wrap correctly at narrow widths (resize to 375px wide)

- [ ] **Step 4: Commit**

```bash
git add website/index.html website/css/main2.css
git commit -m "feat: replace skills bullet list with grouped pill tags"
```

---

## Task 3: Portfolio cards — hover overlay

**Files:**
- Modify: `website/index.html`
- Modify: `website/css/main2.css`

**Context:** The existing `.cc-effect` system already fades in `.h4`, `p`, and `button` elements inside `<figcaption>` on hover. The `figcaption::before` pseudo-element creates the dark background overlay. We just need to add content and handle the tag chips layout.

- [ ] **Step 1: Add `.cc-tags` CSS to main2.css**

Append to `website/css/main2.css`:

```css
/* ── Portfolio card hover overlay extras ── */
.cc-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  margin: 6px 0;
  opacity: 0;
  transition: opacity 0.35s, transform 0.35s;
  transform: translate3d(0, 10px, 0);
}

.gallery figure.cc-effect:hover .cc-tags {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.cc-tag {
  background: rgba(255, 255, 255, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: #fff;
  padding: 2px 9px;
  border-radius: 12px;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.3px;
}

/* Keep figcaption content centred vertically */
.gallery .cc-porfolio-image figcaption {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
}

/* Override h4 margin so flex gap handles spacing */
.gallery figure.cc-effect .h4 {
  margin-top: 0;
}

/* GitHub / Live link button inside overlay */
.cc-overlay-link {
  display: inline-block;
  margin-top: 4px;
  padding: 4px 14px;
  border: 1px solid rgba(255,255,255,0.6);
  border-radius: 20px;
  color: #fff !important;
  font-size: 0.7rem;
  font-weight: 600;
  text-decoration: none;
  opacity: 0;
  transition: opacity 0.35s, transform 0.35s, background 0.2s;
  transform: translate3d(0, 10px, 0);
}

.gallery figure.cc-effect:hover .cc-overlay-link {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.cc-overlay-link:hover {
  background: rgba(255,255,255,0.2);
  color: #fff !important;
  text-decoration: none;
}
```

- [ ] **Step 2: Update Weather App card figcaption**

Find:
```html
<div class="col-md-4">
              <div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"><a href="https://github.com/Unbound3d/weatherApp">
                  <figure class="cc-effect"><img src="images/weather_app.png" alt="Image"/>
                    <figcaption>
                      <div class="h4">Weather App</div>
                    </figcaption>
                  </figure></a></div>
            </div>
```

Replace the entire `<div class="col-md-4">` block with:

```html
<div class="col-md-4">
  <div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <figure class="cc-effect">
      <img src="images/weather_app.png" alt="Weather App" loading="lazy"/>
      <figcaption>
        <div class="h4">Weather App</div>
        <p>Real-time weather forecasts fetched from OpenWeatherMap API.</p>
        <div class="cc-tags">
          <span class="cc-tag">Python</span>
          <span class="cc-tag">REST API</span>
        </div>
        <a class="cc-overlay-link" href="https://github.com/Unbound3d/weatherApp" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </figcaption>
    </figure>
  </div>
</div>
```

- [ ] **Step 3: Update URL Shortener card**

Find the URL shortener card block and replace with:

```html
<div class="col-md-4">
  <div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <figure class="cc-effect">
      <img src="images/url_shortener.png" alt="URL Shortener" loading="lazy"/>
      <figcaption>
        <div class="h4">URL Shortener</div>
        <p>Custom short-link generator with click tracking.</p>
        <div class="cc-tags">
          <span class="cc-tag">Python</span>
          <span class="cc-tag">Flask</span>
        </div>
        <a class="cc-overlay-link" href="https://github.com/Unbound3d/urlshortener" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </figcaption>
    </figure>
  </div>
</div>
```

- [ ] **Step 4: Update Weather Home card**

Find the card linking to `#web-development` (the third weather card) and replace with:

```html
<div class="col-md-4">
  <div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <figure class="cc-effect">
      <img src="images/weather_home.png" alt="Weather App Home Screen" loading="lazy"/>
      <figcaption>
        <div class="h4">Weather App UI</div>
        <p>Home screen and dashboard view for the weather application.</p>
        <div class="cc-tags">
          <span class="cc-tag">Python</span>
          <span class="cc-tag">UI Design</span>
        </div>
        <a class="cc-overlay-link" href="https://github.com/Unbound3d/weatherApp" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </figcaption>
    </figure>
  </div>
</div>
```

- [ ] **Step 5: Update Research Essays card**

```html
<div class="col-md-4">
  <div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <figure class="cc-effect">
      <img src="images/Research-essays.png" alt="Research Essays Capital" loading="lazy"/>
      <figcaption>
        <div class="h4">Client Website</div>
        <p>Full website build for Research Essays Capital.</p>
        <div class="cc-tags">
          <span class="cc-tag">HTML/CSS</span>
          <span class="cc-tag">Client Work</span>
        </div>
        <a class="cc-overlay-link" href="https://researchessayscapital.com/" target="_blank" rel="noopener noreferrer">Live ↗</a>
      </figcaption>
    </figure>
  </div>
</div>
```

- [ ] **Step 6: Update RISQ Pro card**

```html
<div class="col-md-4">
  <div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom">
    <figure class="cc-effect">
      <img src="images/risqpro.png" alt="RISQ Pro" loading="lazy"/>
      <figcaption>
        <div class="h4">Client Website 2</div>
        <p>Website development and deployment for RISQ Pro.</p>
        <div class="cc-tags">
          <span class="cc-tag">HTML/CSS</span>
          <span class="cc-tag">Client Work</span>
        </div>
        <a class="cc-overlay-link" href="https://risq.pro/" target="_blank" rel="noopener noreferrer">Live ↗</a>
      </figcaption>
    </figure>
  </div>
</div>
```

- [ ] **Step 7: Verify in browser**

Open `website/index.html`, scroll to Portfolio. Hover over each card and check:
- Title, description, tags, and button all appear
- Dark overlay covers the image
- Button is clickable (opens in new tab)
- On mobile (375px), the overlay still works on tap

- [ ] **Step 8: Commit**

```bash
git add website/index.html website/css/main2.css
git commit -m "feat: add hover overlay with description, tags, and links to portfolio cards"
```

---

## Task 4: Active nav highlighting

**Files:**
- Modify: `website/scripts/main.js`
- Modify: `website/css/main2.css`

- [ ] **Step 1: Add nav-active CSS to main2.css**

Append to `website/css/main2.css`:

```css
/* ── Active nav link ── */
.navbar-nav .nav-link.nav-active {
  color: #fff !important;
  border-bottom: 2px solid #4ade80;
  padding-bottom: 1px;
}
```

- [ ] **Step 2: Add IntersectionObserver to main.js**

Append to `website/scripts/main.js`:

```js
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
```

- [ ] **Step 3: Verify in browser**

Open `website/index.html`. Scroll slowly through the page and check:
- The nav link for the section currently in view has a green underline
- The underline moves to the next link as you scroll past each section
- The dark mode toggle button (added in Task 5) does not get an underline

- [ ] **Step 4: Commit**

```bash
git add website/scripts/main.js website/css/main2.css
git commit -m "feat: highlight active nav link on scroll using IntersectionObserver"
```

---

## Task 5: Dark mode toggle

**Files:**
- Modify: `website/index.html`
- Modify: `website/css/main2.css`
- Modify: `website/scripts/main.js`

- [ ] **Step 1: Add dark mode theme CSS to main2.css**

Append to `website/css/main2.css`:

```css
/* ── Dark mode toggle button ── */
.btn-dark-toggle {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  cursor: pointer;
  padding: 6px 8px;
  line-height: 1;
  transition: color 0.2s;
  vertical-align: middle;
}

.btn-dark-toggle:hover,
.btn-dark-toggle:focus {
  color: #fff;
  outline: none;
}

/* ── Dark theme ── */
[data-theme="dark"] body {
  background-color: #0f172a;
  color: #e2e8f0;
}

[data-theme="dark"] .page-content,
[data-theme="dark"] .section {
  background-color: #0f172a;
}

[data-theme="dark"] .card {
  background: #1e293b;
  border-color: #334155;
}

[data-theme="dark"] .card-body p,
[data-theme="dark"] .text-black-50 {
  color: #94a3b8 !important;
}

[data-theme="dark"] .h4.title,
[data-theme="dark"] .card-body h3,
[data-theme="dark"] .card-body h6,
[data-theme="dark"] .card-title {
  color: #f1f5f9;
}

[data-theme="dark"] .timeline {
  background: rgba(107, 244, 139, 0.05);
  border-left-color: #4ade80;
}

[data-theme="dark"] .timeline .event:before {
  color: #94a3b8;
}

[data-theme="dark"] .footer {
  background: #1e293b !important;
}

[data-theme="dark"] .footer .h4,
[data-theme="dark"] .counter-number,
[data-theme="dark"] .text-muted {
  color: #94a3b8 !important;
}

[data-theme="dark"] .footer a {
  color: #94a3b8;
}

[data-theme="dark"] .footer a:hover {
  color: #fff;
}

[data-theme="dark"] .divider {
  background-color: #334155 !important;
}

[data-theme="dark"] .form-control,
[data-theme="dark"] textarea.form-control {
  background: #1e293b;
  color: #e2e8f0;
  border-color: #334155;
}

[data-theme="dark"] .form-control::placeholder {
  color: #64748b;
}

[data-theme="dark"] .input-group-addon {
  background: #334155;
  border-color: #475569;
  color: #94a3b8;
}

[data-theme="dark"] .about-section img {
  opacity: 0.9;
}

/* Dark mode pill overrides */
[data-theme="dark"] .pill-offensive {
  background: #14532d;
  color: #86efac;
}

[data-theme="dark"] .pill-appsec {
  background: #1e3a5f;
  color: #93c5fd;
}

[data-theme="dark"] .pill-defensive {
  background: #451a03;
  color: #fcd34d;
}

[data-theme="dark"] .skill-group-label {
  color: #64748b;
}
```

- [ ] **Step 2: Add toggle button to navbar**

In `website/index.html`, add as the last `<li>` inside `<ul class="navbar-nav ml-auto">` (just before `</ul>`):

```html
<li class="nav-item">
  <button class="btn-dark-toggle nav-link" id="darkModeToggle" aria-label="Toggle dark mode" title="Toggle dark mode">
    <i class="fa fa-moon-o" id="darkModeIcon"></i>
  </button>
</li>
```

- [ ] **Step 3: Add dark mode JS to main.js**

Append to `website/scripts/main.js`:

```js
// Dark mode toggle
(function () {
  const toggle = document.getElementById('darkModeToggle');
  const icon = document.getElementById('darkModeIcon');

  function applyTheme(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    icon.className = dark ? 'fa fa-sun-o' : 'fa fa-moon-o';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }

  // Restore saved preference, fall back to OS preference
  const saved = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(saved ? saved === 'dark' : prefersDark);

  toggle.addEventListener('click', function () {
    applyTheme(document.documentElement.getAttribute('data-theme') !== 'dark');
  });
})();
```

- [ ] **Step 4: Verify in browser**

Open `website/index.html`. Check:
- Moon icon appears as the last item in the navbar
- Clicking it switches to dark mode (dark page background, light text, dark cards)
- Icon changes to a sun in dark mode
- Refreshing the page preserves the dark mode setting
- Clicking again restores light mode
- On mobile, the toggle is accessible inside the hamburger menu

- [ ] **Step 5: Commit**

```bash
git add website/index.html website/css/main2.css website/scripts/main.js
git commit -m "feat: add dark mode toggle to navbar with localStorage persistence"
```

---

## Task 6: SEO meta tags, lazy loading, .gitignore

**Files:**
- Modify: `website/index.html`
- Modify: `.gitignore` (create if absent)

- [ ] **Step 1: Add SEO meta tags to index.html `<head>`**

After the existing `<meta name="viewport" ...>` line (line 6), add:

```html
    <meta name="description" content="Erick Mutisya – Cyber Security Specialist and Python Developer specialising in penetration testing, application security, DevSecOps, and cloud security. Based in Nairobi, Kenya.">
    <meta property="og:title" content="Erick Mutisya – Cyber Security Specialist">
    <meta property="og:description" content="Penetration tester and DevSecOps engineer with 3+ years of experience in offensive security, AppSec, and cloud security.">
    <meta property="og:image" content="images/dp.jpg">
    <meta property="og:type" content="website">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Erick Mutisya – Cyber Security Specialist">
    <meta name="twitter:description" content="Penetration tester and DevSecOps engineer with 3+ years of experience in offensive security, AppSec, and cloud security.">
    <meta name="twitter:image" content="images/dp.jpg">
```

- [ ] **Step 2: Add lazy loading to below-fold images**

Add `loading="lazy"` to these images in `website/index.html` (the hero profile photo is above-fold and should stay eager):

1. About section banner: `<img src="images/banner.png" ...>` → add `loading="lazy"`

The portfolio images were already updated with `loading="lazy"` in Task 3.

- [ ] **Step 3: Add .superpowers/ to .gitignore**

Check if `.gitignore` exists at the repo root:

```bash
cat .gitignore 2>/dev/null || echo "(no .gitignore yet)"
```

If it exists, append to it. If not, create it. Either way, ensure it contains:

```
.superpowers/
```

- [ ] **Step 4: Verify meta tags**

Open `website/index.html` in browser, open DevTools → Elements and confirm the meta tags are present in `<head>`.

To test OG tags locally: use the [Open Graph Debugger](https://developers.facebook.com/tools/debug/) after the next deploy, or inspect the `<head>` source directly.

- [ ] **Step 5: Commit**

```bash
git add website/index.html .gitignore
git commit -m "feat: add SEO meta tags, lazy loading on images, gitignore .superpowers"
```
