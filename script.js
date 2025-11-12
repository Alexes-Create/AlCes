// js/script.js
// Basic interactions for James Cesar portfolio
document.addEventListener('DOMContentLoaded', () => {

  // 1) Contact form — non-functional sample behavior
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // don't actually submit
      const prev = contactForm.querySelector('.sample-msg');
      if (prev) prev.remove();
      const msg = document.createElement('div');
      msg.className = 'sample-msg';
      msg.textContent = 'This is a sample form — no messages are sent. Thank you!';
      msg.style.cssText = 'margin-top:12px;padding:10px;border-radius:6px;background:rgba(255,255,255,0.04);color:inherit';
      contactForm.appendChild(msg);
      contactForm.reset();
    });
  }

  // 2) Smooth scrolling for same-page anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // 3) Theme toggle support (call toggleTheme() from a button)
  function applyTheme(theme) {
    if (theme === 'light') document.documentElement.classList.add('light-theme');
    else document.documentElement.classList.remove('light-theme');
  }

  const stored = localStorage.getItem('jc_theme');
  applyTheme(stored === 'light' ? 'light' : 'dark');

  window.toggleTheme = function() {
    const isLight = document.documentElement.classList.toggle('light-theme');
    localStorage.setItem('jc_theme', isLight ? 'light' : 'dark');
  };
});

// 4) Project navigation (Next / Previous)
const projects = [
  "projects1.html",
  "projects2.html",
  "projects3.html",
  "projects4.html",
  "projects5.html"
];

// Detect current project index automatically
let currentFile = window.location.pathname.split("/").pop();
let currentIndex = projects.indexOf(currentFile);

// Functions for next and previous navigation
function nextProject() {
  if (currentIndex < projects.length - 1) {
    window.location.href = projects[currentIndex + 1];
  } else {
    window.location.href = projects[0]; // loop to first
  }
}

function previousProject() {
  if (currentIndex > 0) {
    window.location.href = projects[currentIndex - 1];
  } else {
    window.location.href = projects[projects.length - 1]; // loop to last
  }
}

// 5) Highlight active navigation link
const currentPage = window.location.pathname.split("/").pop();
document.querySelectorAll("nav a").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

// Make project navigation available globally
window.previousProject = previousProject;
window.nextProject = nextProject;
