// card 3
document
  .getElementById("third-card-donate-btn")
  .addEventListener("click", function () {
    const thirdCardInputValue = getInputValueById("card-three-input");
    const thirdCardBDT = getTextValueById("card-bdt-3");
    const navbarBDTForCard3 = getTextValueById("nav-bdt");

    if (isNaN(thirdCardInputValue) || thirdCardInputValue < 0) {
      return alert("Invalid Donation Amount");
    }
    const updateCard3BDT = thirdCardBDT + thirdCardInputValue;
    document.getElementById("card-bdt-3").innerText = updateCard3BDT;

    const updateNavBDTByCard3 = navbarBDTForCard3 - thirdCardInputValue;
    document.getElementById("nav-bdt").innerText = updateNavBDTByCard3;
    // modal
    document.getElementById("my_modal_1").showModal();
    document.getElementById("card-three-input").value = "";

    // add transaction by third card
    const thirdCardHeader =
      document.getElementById("third-card-header").innerText;
    const div = document.createElement("div");
    div.classList.add("border");
    div.classList.add("p-8");
    div.classList.add("rounded-2xl");
    div.classList.add("mt-8");

    div.innerHTML = `
    <h1 class = 'text-xl font-bold text-secondary'>${thirdCardInputValue} taka is ${thirdCardHeader}</h1>
    <p class = 'text-base font-light text-descColor mt-4'>${currentDateTime}</p>
    `;
    document.getElementById("history-btn-section").appendChild(div);
  });
