function createDropdown() {
   const dropdowns = document.querySelectorAll(".main-navbar__link--dropdown");
   console.log("Navigation dropdown menus to be open-able: ", dropdowns);
   for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener("click", displaySecondaryNav)
   };
}

function displaySecondaryNav() {
   const nav = document.querySelector(".secondary-navbar");
   console.log("To be displayed", nav);
   nav.style.display = "flex";
   const dropdowns = document.querySelectorAll(".main-navbar__link--dropdown, .secondary-navbar__item");
   console.log("Navigation menus and items to be close-able: ", dropdowns);
   for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].removeEventListener("click", displaySecondaryNav)
      dropdowns[i].addEventListener("click", hideSecondaryNav)
   };
}

function hideSecondaryNav() {
   const nav = document.querySelector(".secondary-navbar");
   console.log("To be hidden", nav);
   nav.style.display = "none";
   const dropdowns = document.querySelectorAll(".main-navbar__link--dropdown, .secondary-navbar__item");
   console.log("Navigation dropdown menus reset: ", dropdowns);
   for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].removeEventListener("click", hideSecondaryNav)
      dropdowns[i].addEventListener("click", displaySecondaryNav)
   };
}


document.addEventListener("DOMContentLoaded", createDropdown);