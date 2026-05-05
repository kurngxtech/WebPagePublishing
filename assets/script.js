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
            target.scrollIntoView({
               behavior: "smooth",
               block: "start",
            });

            // Close mobile menu if open
            if (navLinks.classList.contains("active")) {
               navLinks.classList.remove("active");
               hamburger.classList.remove("active");
            }
         }
      });
   });
});
