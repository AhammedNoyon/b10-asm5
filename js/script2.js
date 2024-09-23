// card 2
document
  .getElementById("second-card-donate-btn")
  .addEventListener("click", function () {
    const secondCardInputValue = getInputValueById("card-two-input");
    const secondCardBDT = getTextValueById("card-bdt-2");
    const navbarBDTForCard2 = getTextValueById("nav-bdt");

    if (isNaN(secondCardInputValue) || secondCardInputValue < 0) {
      return alert("Invalid Donation Amount");
    }

    const updateCard2Bln = secondCardBDT + secondCardInputValue;
    document.getElementById("card-bdt-2").innerText = updateCard2Bln;

    const updateNavbarBDTByCard2 = navbarBDTForCard2 - secondCardInputValue;
    document.getElementById("nav-bdt").innerText = updateNavbarBDTByCard2;

    document.getElementById("card-two-input").value = "";
  });
