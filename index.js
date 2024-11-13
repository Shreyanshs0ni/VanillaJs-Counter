btnDec = document.getElementById("buttonDecrease");
btnRes = document.getElementById("buttonReset");
btnInc = document.getElementById("buttonIncrease");

number = document.querySelector(".number");

let numberText = 0;

btnInc.addEventListener("click", function() {
  numberText += 1;
  number.textContent = numberText;
})

btnDec.addEventListener("click", function() {
numberText -= 1;
number.textContent = numberText;
})

btnRes.addEventListener("click", function () {
numberText = 0;
number.textContent = numberText;
})