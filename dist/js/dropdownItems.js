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