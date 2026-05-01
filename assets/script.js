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


   // 5. Donation Form Logic
   const amountBtns = document.querySelectorAll(".amount-btn");
   const customAmountInput = document.getElementById("custom-amount");

   amountBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
         // Remove active class from all buttons
         amountBtns.forEach((b) => b.classList.remove("active"));
         // Add active class to clicked button
         btn.classList.add("active");
         // Clear custom amount input since predefined is selected
         customAmountInput.value = "";
      });
   });

   customAmountInput.addEventListener("input", () => {
      if (customAmountInput.value !== "") {
         // Remove active class from predefined buttons if custom is used
         amountBtns.forEach((b) => b.classList.remove("active"));
      }
   });

   // 6. Handle form submissions to prevent reload for demo purposes
   const donationForm = document.getElementById("donation-form");
   if (donationForm) {
      donationForm.addEventListener("submit", (e) => {
         e.preventDefault();

         // Get amount
         let amount = 0;
         const activeBtn = document.querySelector(".amount-btn.active");
         if (activeBtn) {
            amount = activeBtn.getAttribute("data-amount");
         } else if (customAmountInput.value) {
            amount = customAmountInput.value;
         }

         // Alert user (simulation)
         alert(
            `Thank you! Your donation request of Rp ${amount} is being processed.`,
         );
         donationForm.reset();
      });
   }

   const contactForm = document.getElementById("contact-form");
   if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
         e.preventDefault();
         alert("Thank you for your message! We will get back to you soon.");
         contactForm.reset();
      });
   }
});
