document.addEventListener("DOMContentLoaded", function() {
  const readMoreButton = document.querySelector(".about_read_more");
  const hiddenText = document.getElementById("hidden-text");

  readMoreButton.addEventListener("click", function() {
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
