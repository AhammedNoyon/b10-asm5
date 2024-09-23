document
  .getElementById("main-donation-btn")
  .addEventListener("click", function () {
    // console.log("hello i am main donation button");
    showSectionByButtonClick("donation-btn section");
    // showSectionByButtonClick("main-donation-btn");
  });

document.getElementById("history-btn").addEventListener("click", function () {
  showSectionByButtonClick("history-btn-section");
});
