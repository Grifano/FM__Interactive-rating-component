const msg = document.getElementById("msg");
const tooltip = document.getElementById("tooltip");
const btnSubmit = document.getElementById("btn-submit");
const ratingValue = document.querySelectorAll("input");
var resultString = document.getElementById("result-msg");

// Success message control
btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  // Display selected rating
  ratingValue.forEach((element) => {
    if (element.checked) {
      msg.classList.add("show");
      resultString.innerText = `You selected ${element.value} out of 5`;
    } else {
      tooltip.classList.add("show");
    }
  });
});
