document.addEventListener("DOMContentLoaded", () => {
   // 1. Sticky Navbar Logic
   const navbar = document.getElementById("navbar");
   const hamburger = document.querySelector(".hamburger");
   const navLinks = document.querySelector(".nav-links");

   // Add background to navbar on scroll
   window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
         navbar.classList.add("scrolled");
      } else {
         navbar.classList.remove("scrolled");
      }
   });

   // 2. Mobile Menu Toggle
   hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active");
   });

   // 3. Smooth Scrolling Logic
   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
         e.preventDefault();
         const targetId = this.getAttribute("href");
         if (targetId === "#") return; // Ignore placeholder links

         const target = document.querySelector(targetId);
         if (target) {
            const navbarHeight = navbar.getBoundingClientRect().height;
            const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

            window.scrollTo({
               top: targetTop,
               behavior: "smooth",
            });

            // Close mobile menu if open
            if (navLinks.classList.contains("active")) {
               navLinks.classList.remove("active");
               hamburger.classList.remove("active");
            }
         }
      });
   });

   // 4. Gallery Slider Logic
   const slider = document.getElementById('gallery-slider');
   if (slider) {
      const slides = slider.querySelectorAll('.gallery-slide');
      const prevBtn = document.querySelector('.prev-btn');
      const nextBtn = document.querySelector('.next-btn');
      
      let currentIndex = 0;
      const totalSlides = slides.length;
      let slideInterval;

      const updateSlider = () => {
         slider.style.transform = `translateX(-${currentIndex * 100}%)`;
      };

      const nextSlide = () => {
         currentIndex = (currentIndex + 1) % totalSlides;
         updateSlider();
      };

      const prevSlide = () => {
         currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
         updateSlider();
      };

      // Auto slide
      const startAutoSlide = () => {
         slideInterval = setInterval(nextSlide, 2500); // 2.5 seconds per slide
      };

      const stopAutoSlide = () => {
         clearInterval(slideInterval);
      };

      // Event Listeners for buttons
      nextBtn.addEventListener('click', () => {
         nextSlide();
         stopAutoSlide();
         startAutoSlide(); // Reset interval
      });

      prevBtn.addEventListener('click', () => {
         prevSlide();
         stopAutoSlide();
         startAutoSlide(); // Reset interval
      });

      // Pause on hover
      slider.addEventListener('mouseenter', stopAutoSlide);
      slider.addEventListener('mouseleave', startAutoSlide);

      // Initialize
      startAutoSlide();
   }
});
