function createDropdown() {
   const mainNavItems = document.querySelectorAll(".main-navbar__link--dropdown");
   const subNavItems = document.querySelectorAll(".secondary-navbar__item");

   for (let i = 0; i < mainNavItems.length; i++) {

      mainNavItems[i].addEventListener("click", (e) => {
         e.preventDefault();
         const activeNavbar = document.querySelectorAll(".secondary-navbar--active");

         const target = e.target;
         const secondaryNav = target.nextElementSibling;

         if (secondaryNav !== null && secondaryNav.classList.contains("secondary-navbar--active"))
            secondaryNav.classList.remove("secondary-navbar--active");
         else {
            if (activeNavbar.length)
               activeNavbar[0].classList.remove("secondary-navbar--active");
            if (secondaryNav !== null)
               secondaryNav.classList.add("secondary-navbar--active");
         }
      });
   }

   for (let i = 0; i < subNavItems.length; i++) {

      subNavItems[i].addEventListener("click", (e) => {
         e.preventDefault;

         const target = e.target;
         const secondaryNav = target.closest(".secondary-navbar");

         secondaryNav.classList.remove("secondary-navbar--active");
      })
   }
}

document.addEventListener("DOMContentLoaded", createDropdown);