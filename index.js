//RANDOM NUMBER
//var dice = [1, 2, 3, 4, 5, 6];
//var randomNumber1 = dice[Math.floor(Math.random() * dice.length)];
// console.log(randomNumber1);



//randomNumber1 VAR
var dice = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
var randomNumber1 = dice[Math.floor(Math.random() * dice.length)];

//randomNumber2 VAR
var randomNumber2 = dice[Math.floor(Math.random() * dice.length)];


//IMG 1 SOURCE RANDOM
document.querySelector("img.img1").setAttribute("src", randomNumber1);


//IMG 2 SOURCE RANDOM
document.querySelector("img.img2").setAttribute("src", randomNumber2);


//HEADING 1 RESULT LOGIC

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}

else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").textContent = "Draw!";
}
