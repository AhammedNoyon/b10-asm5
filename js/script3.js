// card 3
document
  .getElementById("third-card-donate-btn")
  .addEventListener("click", function () {
    // console.log("i am card third btn");
    const thirdCardInputValue = getInputValueById("card-three-input");
    const thirdCardBDT = getTextValueById("card-bdt-3");
    const navbarBDTForCard3 = getTextValueById("nav-bdt");
    // console.log(thirdCardInputValue, thirdCardBDT, navbarBDTForCard3);
    if (isNaN(thirdCardInputValue) || thirdCardInputValue < 0) {
      return alert("Invalid Donation Amount");
    }
    const updateCard3BDT = thirdCardBDT + thirdCardInputValue;
    document.getElementById("card-bdt-3").innerText = updateCard3BDT;

    const updateNavBDTByCard3 = navbarBDTForCard3 - thirdCardInputValue;
    document.getElementById("nav-bdt").innerText = updateNavBDTByCard3;

    document.getElementById("card-three-input").value = "";
  });
