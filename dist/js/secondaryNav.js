function createDropdown() {
   const mainNavItems = document.querySelectorAll(".main-navbar__link--dropdown");
   const subNavItems = document.querySelectorAll(".secondary-navbar__item");
   const allSubNavs = document.querySelectorAll(".secondary-navbar");
   console.log("Navigation dropdown menu links: ", mainNavItems);
   console.log("All submenus items closing opened submenu: ", subNavItems);
   console.log("Submenus: ", allSubNavs);

   for (let i = 0; i < mainNavItems.length; i++) {
      mainNavItems[i].addEventListener("click", function switchSecondaryNav(event) {
         const clicked = event.target;
         let toHideSubNav;
         let toShowSubNav;
         console.log("Main menu item clicked: ", clicked);

         for (let j = 0; j < allSubNavs.length; j++) {
            if (allSubNavs[j].classList.contains("secondary-navbar--active")) { /* hide any previosuly displayed subnav */
               toHideSubNav = allSubNavs[j]; /* and remember which one it was for the next FOR loop */
               console.log("Submenu already displayed, hiding it: ", toHideSubNav);
               toHideSubNav.classList.remove("secondary-navbar--active");
            }
            else {
               console.log("Submenu already hidden: ", allSubNavs[j]);
            };
         };

         if (clicked.nextElementSibling) {
            for (let k = 0; k < allSubNavs.length; k++) {
               if (allSubNavs[k] != toHideSubNav) { /* in order not to display the same in previous FOR loop hidden submenu again */
                  if (allSubNavs[k] == clicked.nextElementSibling) { /* display this one clicked on */
                     toShowSubNav = allSubNavs[k];
                     console.log("Submenu to display: ", toShowSubNav);
                     toShowSubNav.classList.add("secondary-navbar--active");
                  };
               };
            }
         }
         else {
            alert("Dropdown item clicked, but no submenu defined!")
         };
      });
   };

   for (let i = 0; i < subNavItems.length; i++) {
      subNavItems[i].addEventListener("click", function hideSecondaryNav() {
         let toHideSubNav;
         console.log("Sub menu item clicked");

         for (let j = 0; j < allSubNavs.length; j++) {
            if (allSubNavs[j].classList.contains("secondary-navbar--active"))   /* hide any displayed subnav */ {
               toHideSubNav = allSubNavs[j];
               console.log("Hiding this submenu: ", toHideSubNav);
               toHideSubNav.classList.remove("secondary-navbar--active");
            }
            else {
               console.log("Submenu already hidden: ", allSubNavs[j]);
            };
         };
      });
   }
};

// function displaySecondaryNav() {
//    const nav = document.querySelector(".secondary-navbar__inner");
//    console.log("To be displayed", nav);
//    nav.style.display = "flex";
//    const navStyle = getComputedStyle(nav);
//    const navDelay = navStyle.transitionDuration;
//    const delayMs = cssTimeToMilliseconds(navDelay);
//    setTimeout(stretchIt, 0);
//    function stretchIt() { nav.style.height = "15rem" };
//    setTimeout(showIt, delayMs);
//    function showIt() { nav.style.opacity = "1"; }
//    setTimeout(changeTimeDown, delayMs * 2);
//    function changeTimeDown() {
//       const newNavDurationMs = delayMs / 2;
//       const newNavDuration = newNavDurationMs.toString() + "ms";
//       nav.style.transitionDuration = newNavDuration; //in order hiding to be faster
//    }
//    const dropdowns = document.querySelectorAll(".main-navbar__link--dropdown, .secondary-navbar__item");
//    console.log("Navigation menus and items to be close-able: ", dropdowns);
//    for (let i = 0; i < dropdowns.length; i++) {
//       dropdowns[i].removeEventListener("click", displaySecondaryNav);
//       dropdowns[i].addEventListener("click", hideSecondaryNav);
//    };
// }

// function hideSecondaryNav() {
//    const nav = document.querySelector(".secondary-navbar__inner");
//    console.log("To be hidden", nav);
//    nav.style.opacity = "0";
//    const navStyle = getComputedStyle(nav);
//    const navDelay = navStyle.transitionDuration;
//    const delayMs = cssTimeToMilliseconds(navDelay);
//    setTimeout(collapseIt, delayMs);
//    function collapseIt() { nav.style.height = "0"; }
//    setTimeout(changeTimeUp, delayMs * 2);
//    setTimeout(hideIt, delayMs * 2);
//    function changeTimeUp() {
//       const newNavDurationMs = delayMs * 2;
//       const newNavDuration = newNavDurationMs.toString() + "ms";
//       nav.style.transitionDuration = newNavDuration; //in order displaing to be slower
//    }
//    function hideIt() { nav.style.display = "none" }
//    const dropdowns = document.querySelectorAll(".main-navbar__link--dropdown, .secondary-navbar__item");
//    console.log("Navigation dropdown menus reset: ", dropdowns);
//    for (let i = 0; i < dropdowns.length; i++) {
//       dropdowns[i].removeEventListener("click", hideSecondaryNav);
//       dropdowns[i].addEventListener("click", displaySecondaryNav);
//    };
// }

// function cssTimeToMilliseconds(timeString) {
//    var num = parseFloat(timeString, 10),
//       unit = timeString.match(/m?s/),
//       milliseconds;

//    if (unit) {
//       unit = unit[0];
//    }

//    switch (unit) {
//       case "s": // seconds
//          milliseconds = num * 1000;
//          break;
//       case "ms": // milliseconds
//          milliseconds = num;
//          break;
//       default:
//          milliseconds = 0;
//          break;
//    }

//    return milliseconds;
// }

document.addEventListener("DOMContentLoaded", createDropdown);