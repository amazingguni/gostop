//**************************************************
//***** card set class
//**************************************************
var CardSet = function(){
	var cards = new Array();
	var cardsBlood = new Array();
	var cardsLight = new Array();
	var cardsBand = new Array();
	var cardsAnimal = new Array();
	
	var scoreBlood;
	var scoreLight;
	var scoreBand;
	var scoreAnimal;
	var TotalScore;

	this.toStringForCardSet = function(){
		var cardsString = '';
		
		for(var i=0; i<cards.length; i++){
			if(i != 0 && i%5 == 0){
				cardsString += '\n';
			}
			
			cardsString += cards[i].toStringForCard() + "     ";
		}
		
		return cardsString;
	}
	
	// insert card in array
	// and sort card with card's month
	this.insertCard = function(newCard, sortOption){
		cards.push(newCard);
		
		if(cards.length == 1){
			return;
		}
		
		if(sortOption == 0){
			
		}
		else if(sortOption == 1){
			this.sortCardSet();
		}
		else if(sortOption == 2){
			this.sortCardSetForScore(newCard);
		}
	}
	
	this.insertCardBlood = function(newCard){
		cardsBlood.push(newCard);
	}
	
	this.insertCardLight = function(newCard){
		cardsLight.push(newCard);
	}
	
	this.insertCardBand = function(newCard){
		cardsBand.push(newCard);
	}
	
	this.insertCardAnimal = function(newCard){
		cardsAnimal.push(newCard);
	}

	this.sortCardSet = function(){
		cards = cards.sort(
			function(a,b){
				return a.getId()-b.getId(); 
			}
		);
	}
	
	this.sortCardSetForScore = function(newCard){
		switch(newCard.getType()){
		case CardTypeEnum.CARD_TYPE_BLOOD: this.insertCardBlood(newCard); break;
		case CardTypeEnum.CARD_TYPE_LIGHT: this.insertCardLight(newCard); break;
		case CardTypeEnum.CARD_TYPE_BAND: this.insertCardBand(newCard); break;
		case CardTypeEnum.CARD_TYPE_ANIMAL: this.insertCardAnimal(newCard); break;
		}
	}
	
	this.calculateScoreBlood = function(){
		scoreBlood = 0;
		var tempScore = cardsBlood.length - 10;
		
		if(tempScore < 0){
			scoreBlood = 0;
		}
		else{
			scoreBlood = tempScore;
		}
	}
	
	this.calculateScoreLight = function(){
		scoreLight = 0;
		
		if(cardsLight.length == 3){
			var is12 = false;
			
			for(var i=0; i<3; i++){
				if(cardsLight[i].getMonth() == 12){
					is12 = true;
				}
			}
			
			if(is12){
				scoreLight = 2;
			}
			else{
				scoreLight = 3;
			}
		}
		else if(cardsLight.length == 4){
			scoreLight = 4;
		}
		else if(cardsLight.length == 5){
			scoreLight = 15;
		}
	}
	
	this.calculateScoreBand = function(){
		scoreBand = 0;
		var cardsBandCount = cardsBand.length;
		var red = 0, blue = 0, cho = 0;
		
		if(cardsBandCount >= 5){
			scoreBand += cardsBandCount - 4;
		}
		
		for(var i=0; i<cardsBand.length; i++){
			if(cardsBand[i].getSpecial() == CardSpecialEnum.CARD_SPECIAL_REDBAND) red++;
			else if(cardsBand[i].getSpecial() == CardSpecialEnum.CARD_SPECIAL_BLUEBAND) blue++;
			else if(cardsBand[i].getSpecial() == CardSpecialEnum.CARD_SPECIAL_CHOBAND) cho++;
			
			if(red == 3) scoreBand += 3;
			if(blue == 3) scoreBand += 3;
			if(cho == 3) scoreBand += 3;
		}
	}
	
	this.calculateScoreAnimal = function(){
		scoreAnimal = 0;
		var godori = 0;
		
		for(var i=0; i<cardsAnimal.length; i++){
			if(cardsAnimal[i].getSpecial() == CardSpecialEnum.CARD_SPECIAL_GODORI) godori++;
			if(godori == 3) scoreAnimal = 5;
		}
	}
	
	this.calculateScore = function(){
		this.calculateScoreBlood();
		this.calculateScoreLight();
		this.calculateScoreBand();
		this.calculateScoreAnimal();
		
		totalScore = scoreBlood + scoreLight + scoreBand + scoreAnimal;
		
		return totalScore;
	}

	// remove card with card's index
	// return the removed card
	this.removeCard = function(cardIndex){
		if(cards.length == 0){
			console.log('@@@@@ there is no card in this card set @@@@@');
			
			return;
		}

		
		var tempCard = null;
		var tempIndex = null;
		
		for(var i=0; i<cards.length; i++) {
			if(cardIndex == cards[i].getId()){
				tempCard = cards[i];
				tempIndex = i;
				
				break;
			}
		}
 
		for(var i=tempIndex; i<cards.length; i++){
			cards[i] = cards[i+1];
		}
		
		cards.pop();

		return tempCard;
	}
	
	this.removeCardWithCard = function(newCard){
		var cardIndex = cards.indexOf(newCard);
		
		if(cardIndex == null) {
			return;
		}
		
		this.removeCard(cardIndex);
	}

	// return the card with card's index
	// not remove
	this.getCard = function(cardIndex){
		if(cards.length == 0){
			console.log('@@@@@ there is no card in this card set @@@@@');
			
			return;
		}
		
		return cards[cardIndex];
	}
	
	// return the blood to vomit
	// and remove it
	this.removeCardBlood = function(){
		if(cardsBlood.length == 0){
			console.log('@@@@@ there is no blood to vomit @@@@@');
			
			return;
		}
		
		return cardsBlood.pop();
	}
	
	this.getCardSetLength = function(){
		return cards.length;
	}

	// find cards have same month as input card
	this.findSameCard = function(newCard){
		var cardsForReturn = new Array();
		
		for(var i=0; i<cards.length; i++){
			if(cards[i].getMonth() == newCard.getMonth()){
				cardsForReturn.push(cards[i]);
			}
		}
		
		return cardsForReturn;
	}
}

alert("############################ card set class");