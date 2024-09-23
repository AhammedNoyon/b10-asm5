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
    // modal
    document.getElementById("my_modal_1").showModal();
    document.getElementById("card-two-input").value = "";

    // add transaction by second card
    const secondCardHeader =
      document.getElementById("second-card-header").innerText;
    const div = document.createElement("div");
    div.classList.add("border");
    div.classList.add("p-8");
    div.classList.add("rounded-2xl");
    div.classList.add("mt-8");

    div.innerHTML = `
    <h1 class = 'text-xl font-bold text-secondary'>${secondCardInputValue} taka is ${secondCardHeader}</h1>
    <p class = 'text-base font-light text-descColor mt-4'>${currentDateTime}</p>
    `;
    document.getElementById("history-btn-section").appendChild(div);
  });
