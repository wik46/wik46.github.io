document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.getElementById("nav-list");
  const dropdownToggle = document.querySelector(".dropdown-toggle");

  /* Mobile menu toggle */
  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("open");
  });

  /* Dropdown toggle (click-based, mobile-friendly) */
  dropdownToggle.addEventListener("click", (e) => {
    e.preventDefault();

    const parent = dropdownToggle.parentElement;
    parent.classList.toggle("show");

    const expanded =
      dropdownToggle.getAttribute("aria-expanded") === "true";
    dropdownToggle.setAttribute("aria-expanded", !expanded);
  });

});
