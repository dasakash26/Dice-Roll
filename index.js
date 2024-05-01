var randomNumber1 = Math.floor(6 * Math.random() + 1);
var randomNumber2 = Math.floor(6 * Math.random() + 1);

document
  .querySelector(".img1")
  .setAttribute("src", "./images/dice" + randomNumber1 + ".png");
document
  .querySelector(".img2")
  .setAttribute("src", "./images/dice" + randomNumber2 + ".png");

var win = document.querySelector(".container h1");
if (randomNumber1 > randomNumber2) {
  win.innerHTML = "🥳Player 1  has won ";
} else if (randomNumber1 < randomNumber2) {
  win.textContent = "Player 2  has won🥳";
} else {
  win.textContent = "Its a draw";
}
