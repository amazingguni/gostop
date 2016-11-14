//**************************************************
//***** player class
//**************************************************
var Player = function(){
	var id = "";
	var myScore = 0;
	var goCount = 0;
	var cardsInHand = new CardSet();
	var cardsForScore = new CardSet();
	
	this.setId = function(newId) {
		id = newId;
	}
	
	this.getId = function() {
		return id;
	}
	
	this.initMe = function() {
		myScore = 0;
		goCount = 0;
		cardsInHand = new CardSet();
		cardsForScore = new CardSet();
	}
	
	// get player's card when the game is initializing
	this.getMyDeck = function(newCard){
		cardsInHand.insertCard(newCard, 0);
	}

	// throw player's card to bottom when his turn
	this.throwMyCard = function(cardIndex){
		return cardsInHand.removeCard(cardIndex);
	}
	
	// if cards are match, player eat that
	this.eatMyCard = function(newCard){
		cardsForScore.insertCard(newCard, 2);
	}
	
	// if you should give the blood to other player 
	this.vomitMyBlood = function(){
		return cardsForScore.removeCardBlood();
	}
	
	// calculate my score
	this.calculateMyCardsForScore = function(){
		myScore = cardsForScore.calculateScore();
	}
	
	this.calculateMyScore = function() {
		myScore = cardsForScore.calculateScore();
		
		if(goCount < 3) {
			myScore += goCount;
		}
		
		if(goCount >= 3) {
			
		}
	}
	
	this.getMyScore = function(){
		return myScore;
	}
	
	this.setMyScoreTwice = function(){
		myScore *= 2;
	}
	
	this.setMyScoreIncrease = function(){
		myScore++;
	}
	
	this.letsGo = function() {
		goCount++;
	}
	
	this.showMyCardsInHand = function(){
		alert(cardsInHand.toStringForCardSet());
	}
	
	this.showMyCardsForScore = function(){
		alert(cardsForScore.toStringForCardSet());
	}
}

alert("############################ player class");