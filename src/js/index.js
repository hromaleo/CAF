function createDropdownSecNav() {
	const mainNavItems = document.querySelectorAll(".main-navbar__link--dropdown");
	const subNavItems = document.querySelectorAll(".secondary-navbar__link");

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
			// e.preventDefault();

			const target = e.target;
			const secondaryNav = target.closest(".secondary-navbar");

			secondaryNav.classList.remove("secondary-navbar--active");
		})
	}
}

document.addEventListener("DOMContentLoaded", createDropdownSecNav);

function createDropdownListItems() {
	const dropdowns = document.querySelectorAll(".dropdown-list__link");

	for (let i = 0; i < dropdowns.length; i++) {
		dropdowns[i].addEventListener("click", (e) => {
			e.preventDefault();
			const activeListItems = document.querySelectorAll(".dropdown-list__content--active");

			const target = e.target;
			const listItem = target.nextElementSibling;

			if (listItem !== null && listItem.classList.contains("dropdown-list__content--active"))
				listItem.classList.remove("dropdown-list__content--active");
			else {
				if (activeListItems.length)
					activeListItems[0].classList.remove("dropdown-list__content--active");
				if (listItem !== null)
					listItem.classList.add("dropdown-list__content--active");
			}
			return false;
		})
	}
}



document.addEventListener("DOMContentLoaded",
	createDropdownListItems);


function createDropdownMenuBlocks() {
	const dropdowns = document.querySelectorAll(".aside-menu__block-title");

	for (let i = 0; i < dropdowns.length; i++) {
		dropdowns[i].addEventListener("click", (e) => {
			e.preventDefault();

			const target = e.target;
			const listItem = target.nextElementSibling;

			if (listItem !== null && listItem.classList.contains("aside-menu__content--active")) {
				listItem.classList.remove("aside-menu__content--active");
				target.classList.remove("aside-menu__block-title--active");
			}
			else {
				if (listItem !== null) {
					listItem.classList.add("aside-menu__content--active");
					target.classList.add("aside-menu__block-title--active");
				}
			}
			return false;
		})
	}
}



document.addEventListener("DOMContentLoaded",
	createDropdownMenuBlocks);