//initial console logs to know that JS is working
console.log("Up and stunning!");
//array with my cards in it
var cards = [
 {
 	rank: "queen",
 	suit: "hearts",
 	cardImage: "images/queen-of-hearts.png"
 },
 {
 	rank: "queen",
 	suit: "diamonds",
 	cardImage: "images/queen-of-diamonds.png"
 },
 {
 	rank: "king",
 	suit: "hearts",
 	cardImage: "images/king-of-hearts.png"
 },
 {
 	rank: "king",
 	suit: "diamonds",
 	cardImage: "images/king-of-diamonds.png"
 }]; 
//empty array that is essential for the game logic
var cardsInPlay = []
//function to check for match
var checkForMatch = function(){
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
		} else {
		console.log("Sorry, try again.")
}}};
//function to simulate a user flipping a card
var flipCard = function (cardId) {
	console.log ("User flipped" + cards[cardId].rank);
	console.log (cards[cardId].cardImage);
	console.log (cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
};

flipCard(0);
flipCard(2);

