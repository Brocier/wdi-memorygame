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
	this.setAttribute('src', cards.cardImage);
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");
		} else {
		console.log("Sorry, try again.")
}}};
//function to simulate a user flipping a card
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	console.log ("User flipped" + cards[cardId].rank);
	console.log (cards[cardId].cardImage);
	console.log (cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
};
var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
			cardElement.setAttribute('src', "images/back.png");
			cardElement.setAttribute('data-id', i);
			cardElement.addEventListener('click', flipCard);
			document.getElementById("game-board").appendChild(cardElement);
	}
};

createBoard();
