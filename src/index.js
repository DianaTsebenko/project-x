document.addEventListener("DOMContentLoaded", function() {
  const readMoreButtons = document.querySelectorAll(".read_more");
  readMoreButtons.forEach(function (readMoreButton) {
    const hiddenText = document.getElementById(readMoreButton.getAttribute("for"));

    readMoreButton.addEventListener("click", function () {
      if (hiddenText.classList.contains("visible-text")) {
        hiddenText.classList.remove("visible-text");
        hiddenText.classList.add("hidden-text");
        readMoreButton.querySelector("span").textContent = "Read more";
      } else {
        hiddenText.classList.remove("hidden-text");
        hiddenText.classList.add("visible-text");
        readMoreButton.querySelector("span").textContent = "Less";
      }
    });
  });
 
  const openMenuBtn = document.querySelector("[data-menu-open]");
  const closeMenuBtn = document.querySelector("[data-menu-close]");
  const menu = document.querySelector("[data-menu]");

  openMenuBtn.addEventListener("click", ToggleMenu);
  closeMenuBtn.addEventListener("click", ToggleMenu);

  function ToggleMenu() {
    menu.classList.toggle("is-open");
  }
});