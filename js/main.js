//initial console logs to know that JS is working
console.log("Up and stunning!");
//array with my cards in it
var cards = ["queen", "queen", "king", "king"]; 
//empty array that is essential for the game logic
var cardsInPlay = []

var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[3];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	}else {
		alert("Sorry, try again.")
	}
}


console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);