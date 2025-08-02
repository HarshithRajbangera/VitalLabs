// index.js
 const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Animate once
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll(".impact-list li").forEach(li => {
      observer.observe(li);
    });
  });

  
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".team-approach");
  const cards = document.querySelectorAll(".approach-block");
  let currentIndex = 0;

  // Fade-in on scroll using IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  cards.forEach((card) => observer.observe(card));

  // Auto carousel (scroll)
  const carouselSlide = () => {
    currentIndex = (currentIndex + 1) % cards.length;
    const offset = cards[currentIndex].offsetLeft;
    track.style.transform = `translateX(-${offset}px)`;
  };

  // Start timer
  setInterval(carouselSlide, 4000); // Slide every 4 seconds
});

document.addEventListener("DOMContentLoaded", () => {
  const featureRows = document.querySelectorAll(".about-feature-row");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  featureRows.forEach(row => observer.observe(row));
});


  const scrollFadeElements = document.querySelectorAll('.scroll-fade');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      } else {
        entry.target.classList.remove('fade-in-visible');
      }
    });
  }, { threshold: 0.2 });

  scrollFadeElements.forEach(el => observer.observe(el));



