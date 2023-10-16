
var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomImageSource = "images/dice"  + randomNumber1 + ".png"; //dice1.png - dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

// var randomNumber1 = Math.floor((Math.random()*6)+1)
// var randomNumber2 = Math.floor((Math.random()*6)+1)

// rollDiceLeft();
// rollDiceRight();
// result();

// function rollDiceLeft(){
//   if (randomNumber1 === 1){
//     document.querySelector(".js-left-dice-image").setAttribute('src', "./images/dice1.png");
//   } else if (randomNumber1 === 2){
//     document.querySelector(".js-left-dice-image").setAttribute('src', "./images/dice2.png");
//   } else if (randomNumber1 === 3){
//     document.querySelector(".js-left-dice-image").setAttribute('src', "./images/dice3.png");
//   } else if (randomNumber1 === 4){
//     document.querySelector(".js-left-dice-image").setAttribute('src', "./images/dice4.png");
//   } else if (randomNumber1 === 5){
//     document.querySelector(".js-left-dice-image").setAttribute('src', "./images/dice5.png");
//   } else {
//     document.querySelector(".js-left-dice-image").setAttribute('src', "./images/dice6.png");
//   }
  
// }

// function rollDiceRight(){
//   if (randomNumber2 === 1){
//     document.querySelector(".js-right-dice-image").setAttribute('src', "./images/dice1.png");
//   } else if (randomNumber2 === 2){
//     document.querySelector(".js-right-dice-image").setAttribute('src', "./images/dice2.png");
//   } else if (randomNumber2 === 3){
//     document.querySelector(".js-right-dice-image").setAttribute('src', "./images/dice3.png");
//   } else if (randomNumber2 === 4){
//     document.querySelector(".js-right-dice-image").setAttribute('src', "./images/dice4.png");
//   } else if (randomNumber2 === 5){
//     document.querySelector(".js-right-dice-image").setAttribute('src', "./images/dice5.png");
//   } else {
//     document.querySelector(".js-right-dice-image").setAttribute('src', "./images/dice6.png");
//   }
  
// }

// function result(){
//   if (randomNumber1 === randomNumber2){
//     document.querySelector(".js-result").innerHTML = "Draw!"
//   } else if (randomNumber1 > randomNumber2){
//     document.querySelector('.js-result').textContent= 'Player 1 wins!';
//   } else{
//     document.querySelector('.js-result').textContent='Player 2 wins!' ;
//   }
// } 
