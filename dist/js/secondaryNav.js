function createDropdown() {
   const dropdowns = document.querySelectorAll(".main-navbar__link--dropdown, .secondary-navbar__item");
   const allSubNavs = document.querySelectorAll(".secondary-navbar");
   console.log("Navigation dropdown menu links: ", dropdowns);
   console.log(allSubNavs);
   for (let i = 0; i < dropdowns.length; i++) {
      dropdowns[i].addEventListener("click", function switchSecondaryNav(ev) {
         const clicked = ev.target;
         let subNav;
         switch (clicked.classList.contains("main-navbar__link--dropdown")) {
            case true:
               for (let j = 0; j < allSubNavs.length; j++) {
                  allSubNavs[j].classList.remove("secondary-navbar--active");
                  console.log("skryto");
               };
               console.log("Main menu item clicked");
               subNav = clicked.nextElementSibling;
               if (subNav != null) {
                  console.log("To be displayed or hid", subNav);
                  switch (subNav.classList.contains("secondary-navbar--active")) {
                     case true:
                        subNav.classList.remove("secondary-navbar--active");
                        console.log("Subnav hid thru main nav item");
                        break;
                     case false:
                        subNav.classList.add("secondary-navbar--active");
                        console.log("Subnav displayed");
                        break;
                     default:
                        alert("Could not switch any submenu");
                        break;
                  };
               }
               else {
                  alert("Could not switch any submenu, no submenu included");
               };
               break;
            case false:
               console.log("Not a main menu item clicked");
               subNav = clicked.parentElement;
               while (subNav.classList.contains("secondary-navbar") == false) {
                  subNav = subNav.parentElement;
               };
               switch (subNav.classList.contains("secondary-navbar--active")) {
                  case true:
                     subNav.classList.remove("secondary-navbar--active");
                     console.log("Subnav hid thru subnav item");
                     break;
                  case false:
                     subNav.classList.add("secondary-navbar--active");
                     console.log("Subnav displayed");
                     break;
                  default:
                     alert("Could not switch any submenu");
                     break;
               };
               break;
            default:
               console.log("Ambiguos");
               break;
         };

      });
   };
}

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