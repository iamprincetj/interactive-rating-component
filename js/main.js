const rateButtons = document.querySelectorAll(".btn-rate button");
const submitBtn = document.querySelector(".submit-btn");
const rateContainer = document.querySelector(".rate-container");
const thankyouContainer = document.querySelector(".thankyou-container");
const spanRate = document.querySelector("#rate");
let rate = "";

rateButtons.forEach((val) => {
  val.addEventListener("click", () => {
    rate = val.textContent;
  });
});

submitBtn.addEventListener("click", () => {
    if (!rate) {
        alert('Please select a rate!')
    } else {
        rateContainer.style.display = 'none';
        spanRate.innerHTML = rate;
        thankyouContainer.style.display = 'block';
    }
});
