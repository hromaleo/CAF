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
   const navStyle = getComputedStyle(nav);
   const navDelay = navStyle.transitionDuration;
   const delayMs = cssTimeToMilliseconds(navDelay);
   setTimeout(stretchIt, 0);
   function stretchIt() { nav.style.height = "15rem" };
   setTimeout(showIt, delayMs);
   function showIt() { nav.style.opacity = "1"; }
   setTimeout(changeTimeDown, delayMs * 2);
   function changeTimeDown() {
      const newNavDurationMs = delayMs / 2;
      const newNavDuration = newNavDurationMs.toString() + "ms";
      nav.style.transitionDuration = newNavDuration; //in order hiding to be faster
   }
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
   nav.style.opacity = "0";
   const navStyle = getComputedStyle(nav);
   const navDelay = navStyle.transitionDuration;
   const delayMs = cssTimeToMilliseconds(navDelay);
   setTimeout(collapseIt, delayMs);
   function collapseIt() { nav.style.height = "0"; }
   setTimeout(changeTimeUp, delayMs * 2);
   setTimeout(hideIt, delayMs * 2);
   function changeTimeUp() {
      const newNavDurationMs = delayMs * 2;
      const newNavDuration = newNavDurationMs.toString() + "ms";
      nav.style.transitionDuration = newNavDuration; //in order displaing to be slower
   }
   function hideIt() { nav.style.display = "none" }
   const dropdowns = document.querySelectorAll(".main-navbar__link--dropdown, .secondary-navbar__item");
   console.log("Navigation dropdown menus reset: ", dropdowns);
   for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].removeEventListener("click", hideSecondaryNav)
      dropdowns[i].addEventListener("click", displaySecondaryNav)
   };
}

function cssTimeToMilliseconds(timeString) {
   var num = parseFloat(timeString, 10),
      unit = timeString.match(/m?s/),
      milliseconds;

   if (unit) {
      unit = unit[0];
   }

   switch (unit) {
      case "s": // seconds
         milliseconds = num * 1000;
         break;
      case "ms": // milliseconds
         milliseconds = num;
         break;
      default:
         milliseconds = 0;
         break;
   }

   return milliseconds;
}


document.addEventListener("DOMContentLoaded", createDropdown);