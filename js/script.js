// login blog html file
document.getElementById("blog-btn").addEventListener("click", function () {
  // console.log("hello i am blog button");
  window.location.href = "blog.html";
});
// card 1
document
  .getElementById("first-card-donate-btn")
  .addEventListener("click", function () {
    const firstCardInputAmount = getInputValueById("card-one-input");
    const firstCardBDT = getTextValueById("card-bdt");
    const navbarBDT = getTextValueById("nav-bdt");

    if (isNaN(firstCardInputAmount) || firstCardInputAmount < 0) {
      return alert("Invalid Donation Amount");
    }

    const updateCardBln = firstCardBDT + firstCardInputAmount;
    document.getElementById("card-bdt").innerText = updateCardBln;

    const updateNavbarBDT = navbarBDT - firstCardInputAmount;
    document.getElementById("nav-bdt").innerText = updateNavbarBDT;

    document.getElementById("card-one-input").value = "";
  });
