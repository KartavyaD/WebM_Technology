// Header scroll shadow
        window.addEventListener('scroll', () => {
            document.querySelector('header').classList.toggle('scrolled', window.scrollY > 0);
        });

        // Accordion
        document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                item.classList.toggle('active');
                const content = item.querySelector('.accordion-content');
                if (item.classList.contains('active')) {
                    content.style.maxHeight = content.scrollHeight + 'px';
                } else {
                    content.style.maxHeight = '0';
                }
            });
        });

        // Mobile menu
        document.querySelector('.hamburger').addEventListener('click', () => {
            document.querySelector('nav ul').classList.toggle('active');
        });

        document.addEventListener("DOMContentLoaded", () => {
  // ======= Accordion =======
  const accordions = document.querySelectorAll(".accordion-item");
  accordions.forEach(item => {
    item.querySelector(".accordion-header").addEventListener("click", () => {
      item.classList.toggle("active");
      const content = item.querySelector(".accordion-content");
      if (item.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0px";
      }
    });
  });

  // ======= Mobile Menu =======
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("nav ul");
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  // ======= Scroll Animations =======
  const faders = document.querySelectorAll(".features, .products, .pricing, .optimise, .platforms, .trust, .trends, .onboarding, footer");
  const appearOptions = { threshold: 0.15, rootMargin: "0px 0px -50px 0px" };
  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("fade-in");
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  faders.forEach(fader => appearOnScroll.observe(fader));

  // ======= Hero Entrance =======
  const heroText = document.querySelector(".hero-text");
  const heroMockup = document.querySelector(".hero-mockup");
  heroText.classList.add("slide-left");
  heroMockup.classList.add("slide-right");
});