// login blog html file
document.getElementById("blog-btn").addEventListener("click", function () {
  // console.log("hello i am blog button");
  window.location.href = "blog.html";
});

const firstCardHeader = document.getElementById("first-card-header").innerText;
const currentDateTime = new Date().toString();
console.log(currentDateTime);
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
    // add transaction by first card
    const div = document.createElement("div");
    div.classList.add("border");
    div.classList.add("p-8");
    div.classList.add("rounded-2xl");
    div.classList.add("mt-8");

    div.innerHTML = `
    <h1 class = 'text-xl font-bold text-secondary'>${firstCardInputAmount} taka is ${firstCardHeader}</h1>
    <p class = 'text-base font-light text-descColor mt-4'>${currentDateTime}</p>
    `;
    document.getElementById("history-btn-section").appendChild(div);
  });
