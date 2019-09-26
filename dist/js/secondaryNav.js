function createDropdown() {
   const mainNavItems = document.querySelectorAll(".main-navbar__link--dropdown");

   for (let i = 0; i < mainNavItems.length; i++) {

      mainNavItems[i].addEventListener("click", (e) => {
         e.preventDefault();
         const activeNavbar = document.querySelectorAll(".secondary-navbar--active");

         const secondaryNav = e.target;
         const target = secondaryNav.nextElementSibling;

         if (target !== null && target.classList.contains("secondary-navbar--active"))
            target.classList.remove("secondary-navbar--active");
         else {
            if (activeNavbar.length)
               activeNavbar[0].classList.remove("secondary-navbar--active");
            if (target !== null)
               target.classList.add("secondary-navbar--active");
         }
      });
   }
}

document.addEventListener("DOMContentLoaded", createDropdown);