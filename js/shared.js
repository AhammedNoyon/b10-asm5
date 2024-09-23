//collect input value
function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  if (isNaN(inputValue)) {
    return alert("Invalid Donation Amount");
  } else {
    const convertInputByParseFloat = parseFloat(inputValue);
    return convertInputByParseFloat;
  }
}
//collect text value
function getTextValueById(id) {
  const text = document.getElementById(id).innerText;
  const floatText = parseFloat(text);
  return floatText;
}

// hidden another section by click in right now button
function showSectionByButtonClick(id) {
  // hidden all section
  document.getElementById("donation-btn section").classList.add("hidden");
  document.getElementById("history-btn-section").classList.add("hidden");
  // showing section
  document.getElementById(id).classList.remove("hidden");

  // button background color condition
  const donationBtn = document.getElementById("main-donation-btn");
  const historyBtn = document.getElementById("history-btn");
  if (id === "donation-btn section") {
    const donationBtn = document.getElementById("main-donation-btn");
    donationBtn.classList.add("bg-primaryColor");
    historyBtn.classList.remove("bg-primaryColor");
  }
  if (id === "history-btn-section") {
    historyBtn.classList.add("bg-primaryColor");
    donationBtn.classList.remove("bg-primaryColor");
  }
}
