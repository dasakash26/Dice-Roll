var randomNumber1 = Math.floor(6 * Math.random() + 1);
var randomNumber2 = Math.floor(6 * Math.random() + 1);

$(".img1").attr("src", "./images/dice" + randomNumber1 + ".png");
$(".img2").attr("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  $(".container h1").text("🥳Player 1 has won");
} else if (randomNumber1 < randomNumber2) {
  $(".container h1").text("Player 2 has won🥳");
} else {
  $(".container h1").text("Draw!");
}
