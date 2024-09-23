const footer = document.getElementById("footer");
document
  .getElementById("main-donation-btn")
  .addEventListener("click", function () {
    showSectionByButtonClick("donation-btn section");
    // show footer bg for donation button
    footer.classList.add("bg-navBg");
  });

document.getElementById("history-btn").addEventListener("click", function () {
  showSectionByButtonClick("history-btn-section");
  // hide footer bg for history button
  footer.classList.remove("bg-navBg");
});
