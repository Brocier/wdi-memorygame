//initial console logs to know that JS is working
console.log("Up and stunning!");
//array with my cards in it
var cards = ["queen", "queen", "king", "king"]; 
//empty array that is essential for the game logic
var cardsInPlay = []
//function to check for match
var checkForMatch = function(){
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		} else {
		alert("Sorry, try again.")
}}};
//function to simulate a user flipping a card
var flipCard = function (cardId) {
	console.log ("User flipped" + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();
};

flipCard(0);
flipCard(2);