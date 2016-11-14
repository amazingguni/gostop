//**************************************************
//***** game manager class
//**************************************************
var WAITING_CONNECTION = 0;
var PLAYING_GAME = 1;
var RESULTING_GAME = 2;
var ENDING_GAME = 3;

var gameManager = null;

var GameManager = function() {
	var players = new Array();
	var currentPlayer = new Player();
	var currentPlayerIndex = 0;
	
	var deckInCenter = new CardSet();
	var deckInBottom = new CardSet();
	
	var gameState = WAITING_CONNECTION;
	var sunIndex = 0;
	
	var cardForChooseTheOne = new Card();
	var chooseTheOneFlag = false;
	
	this.getGameState = function() {
		alert("gameManager.getGameState() : current game state - " + gameState);
		
		return gameState;
	}
	
	this.setGameState = function(newGameState) {
		alert("gameManager.setGameState() : new game state - " + newGameState);
		
		gameState = newGameState;
	}
	
	this.addTwoPlayers = function(firstId, secondId) {
		alert("gameManager.addTwoPlayers() : start");
		alert("gameManager.addTwoPlayers() : first id - " + firstId + " second id - " + secondId);
		
		sunIndex = 0;
		
		players[0] = new Player();
		players[1] = new Player();
		
		players[0].setId(firstId);
		players[1].setId(secondId);
		
		alert("gameManager.addTwoPlayers() : start");
	}
	
	this.getCurrentPlayer = function() {
		return currentPlayer;
	}
	
	this.exitPlayer = function(playerIndex){
		console.log("### exitPlayer() ###");
		
		for(var i=playerIndex; i<players.length-1; i++){
			players[i] = players[i+1];
		}
		
		players.pop();
	}
	
	this.randomShakingInitializeDeck = function(){
		alert("gameManager.randomShakingInitializedDeck() : start");
		 
		var copyInitializedDeck = new CardSet();
		
		for(var i=0; i<50; i++){
			copyInitializedDeck.insertCard(initializedDeck[i], 0);
		}
		
		for(var i=0; i<50; i++){
			var randomIndex = Math.floor(Math.random()*(50 - i));
			var randomCard = copyInitializedDeck.getCard(randomIndex); 
			
			deckInCenter.insertCard(randomCard, 0);
			copyInitializedDeck.removeCard(randomIndex);
		}
		
		alert("gameManager.randomShakingInitializedDeck() : see the random shaked card set");
		alert(deckInCenter.toStringForCardSet());
		
		alert("gameManager.randomShakingInitializedDeck() : end");
	}

	this.initGame = function(){
		alert("gameManager.initGame() : start");
		
		var notSunIndex;
		if(sunIndex == 0) notSunIndex = 1;
		else notSunIndex = 0;
		
		this.randomShakingInitializeDeck();
		
		for(var i=0; i<4; i++) {
			var lastIndex = deckInCenter.getCardSetLength() - 1;
			var newCard = deckInCenter.removeCard(lastIndex);
					
			deckInBottom.insertCard(newCard, 0);
			nserviceModule.sendMessageToEverybody("type=sendbottomcard&index=" + newCard.getId());
			
			alert("gameManager.initGame() : give card to bottom - card id - " + newCard.getId());
		}
		
		for(var i=0; i<5; i++) {
			var lastIndex = deckInCenter.getCardSetLength() - 1;
			var newCard = deckInCenter.removeCard(lastIndex);
			
			players[notSunIndex].getMyDeck(newCard);
			nserviceModule.sendMessageWithDeviceId(players[notSunIndex].getId(), "type=sendcard&index=" + newCard.getId());
			
			alert("gameManager.initGame() : give card to player id - " + players[notSunIndex].getId() + " and card id - " + newCard.getId());
		}
		
		for(var i=0; i<5; i++) {
			var lastIndex = deckInCenter.getCardSetLength() - 1;
			var newCard = deckInCenter.removeCard(lastIndex);
			
			players[sunIndex].getMyDeck(newCard);
			nserviceModule.sendMessageWithDeviceId(players[sunIndex].getId(), "type=sendcard&index=" + newCard.getId());
			
			alert("gameManager.initGame() : give card to player id - " + players[sunIndex].getId() + " and card id - " + newCard.getId());
		}
		
		for(var i=0; i<4; i++) {
			var lastIndex = deckInCenter.getCardSetLength() - 1;
			var newCard = deckInCenter.removeCard(lastIndex);
			
			deckInBottom.insertCard(newCard, 0);
			nserviceModule.sendMessageToEverybody("type=sendbottomcard&index=" + newCard.getId());
			
			alert("gameManager.initGame() : give card to bottom - card id - " + newCard.getId());
		}
		
		for(var i=0; i<5; i++) {
			var lastIndex = deckInCenter.getCardSetLength() - 1;
			var newCard = deckInCenter.removeCard(lastIndex);
			
			players[notSunIndex].getMyDeck(newCard);
			nserviceModule.sendMessageWithDeviceId(players[notSunIndex].getId(), "type=sendcard&index=" + newCard.getId());
			
			alert("gameManager.initGame() : give card to player id - " + players[notSunIndex].getId() + " and card id - " + newCard.getId());
		}
		
		for(var i=0; i<5; i++) {
			var lastIndex = deckInCenter.getCardSetLength() - 1;
			var newCard = deckInCenter.removeCard(lastIndex);
			
			players[sunIndex].getMyDeck(newCard);
			nserviceModule.sendMessageWithDeviceId(players[sunIndex].getId(), "type=sendcard&index=" + newCard.getId());
			
			alert("gameManager.initGame() : give card to player id - " + players[sunIndex].getId() + " and card id - " + newCard.getId());
		}
		
		alert("gameManager.initGame() : end of giving cards");
		alert("gameManager.initGame() : see the deck In bottom card set");
		alert(deckInBottom.toStringForCardSet());
		alert("gameManager.initGame() : see the sun player's card set");
		players[sunIndex].showMyCardsInHand();
		alert("gameManager.initGame() : see the not sun players's card set");
		players[notSunIndex].showMyCardsInHand();
		
		alert("gameManager.initGame() : give turn to sun player and start game");
		this.setGameState(PLAYING_GAME);
		this.startGame();
		
		alert("gameManager.initGame() : end");
	}
	
	this.startGame = function(){
		alert("gameManager.startGame() : start");
		
		currentPlayerIndex = sunIndex - 1;
		this.nextTurn();
		
		alert("gameManager.startGame() : end");
	}
	
	this.nextTurn = function(){
		alert("gameManager.nextTurn() : start");
		
		currentPlayerIndex++;
		currentPlayerIndex = currentPlayerIndex%players.length;
		currentPlayer = players[currentPlayerIndex];
		
		alert("gameManager.nextTurn() : current player is - " + currentPlayer.getId());
		
		nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=yourturn");
		
		alert("gameManager.nextTurn() : end");
	}
	
	this.finishGame = function(){
		alert("gameManager.finishGame() : start");
		
		alert("gameManager.finishGame() : end");
	}
	
	this.matchAtBottomWithThrowingCard = function(index) {
		alert("gameManager.matchAtBottomWithThrowingCard() : start");
		alert("gameManager.matchAtBottomWithThrowingCard() : current player - " + currentPlayer.getId());
		
		var throwingCard = currentPlayer.throwMyCard(index);
		var sameCardsForThrowingCard = deckInBottom.findSameCard(throwingCard);

		if(throwingCard.getMonth() == 13) {
			currentPlayer.eatMyCard(throwingCard);
			
			alert("gameManager.matchAtBottomWithThrowingCard() : eat " + currentPlayer.getId() +
																 "'s card - " + throwingCard.getId());
			
			nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=eatcard&index=" + throwingCard.getId());
			
			// 조커를 먹는 모션

			this.steelBloodFromEveryone();
			
			nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=throwonemore");
			
			return;
		}
		else {
			// 바닥으로 날아가는 모션
			// 같은 카드가 바닥에 깔려있으면 그 옆에 붙어야 한다
		}
		
		for(var i=0; i<sameCardsForThrowingCard.length; i++) {
			deckInBottom.removeCardWithCard(sameCardsForThrowingCard[i]);
		}
		
		alert("gameManager.matchAtBottomWithThrowingCard() : throwing card - " + throwingCard.getId());
		for(var i=0; i<sameCardsForThrowingCard.legnth; i++) {
			alert("gameManager.matchAtBottomWithThrowingCard() : same cards with throwing card - " + sameCardsForThrowingCard[i].getId());	
		}
		
		var openedCard = this.openDeckInCenter();
		var openedJokers = new Array();
		var jokerFlag = false;
		
		while(openedCard.getMonth() == 13) {
			openedJokers.push(openedCard);
			openedCard = this.openDeckInCenter();
			jokerFlag = true;
			
			// 던젔던 카드가 있는 곳으로 붙음
		}

		var sameCardsForOpenedCard = deckInBottom.findSameCard(openedCard);
		// 연 카드가 바닥으로 날아가는 모션
		// 같은 카드가 바닥에 깔려 있으면 그 옆에 붙어야 한다
		
		for(var i=0; i<sameCardsForOpenedCard.length; i++) {
			deckInBottom.removeCardWithCard(sameCardsForOpenedCard[i]);
		}
		
		alert("gameManager.matchAtBottomWithThrowingCard() : opened card - " + openedCard.getId());
		for(var i=0; i<sameCardsForOpenedCard.legnth; i++) {
			alert("gameManager.matchAtBottomWithThrowingCard() : same cards with opened card - " + sameCardsForOpenedCard[i].getId());	
		}		
		
		if(sameCardsForThrowingCard.length == 0) {
			if(openedCard.getMonth() == throwingCard.getMonth()){
				this.kissing(throwingCard, openedCard);
			}
			else{
				deckInBottom.insertCard(throwingCard, 0);
				
				this.matchAtBottomWithOpenedCard(openedCard, sameCardsForOpenedCard);
			}
		}
		else if(sameCardsForThrowingCard.length == 1) {			
			if(openedCard.getMonth() == throwingCard.getMonth()) {
				this.shitting(throwingCard, openedCard, sameCardsForThrowingCard);
			}
			else {
				currentPlayer.eatMyCard(throwingCard);
				currentPlayer.eatMyCard(sameCardsForThrowingCard[0]);
				
				alert("gameManager.matchAtBottomWithThrowingCard() : eat " + currentPlayer.getId() +
																	 "'s card - " + throwingCard.getId());
				alert("gameManager.matchAtBottomWithThrowingCard() : eat " + currentPlayer.getId() +
						 											 "'s card - " + sameCardsForThrowingCard[0].getId());
				
				nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=eatcard&index=" + throwingCard.getId());
				nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=eatcard&index=" + sameCardsForThrowingCard[0].getId());
				
				// 던진 카드 먹는 모션
				
				this.matchAtBottomWithOpenedCard(openedCard, sameCardsForOpenedCard);
			}
		}
		else if(sameCardsForThrowingCard.length == 2) {			
			if(openedCard.getMonth() == throwingCard.getMonth()) {
				this.fourCardsAttaching(throwingCard, openedCard, sameCardsForThrowingCard);
			}
			else {
				cardForChooseTheOne = openedCard;
				
				this.chooseTheOne(sameCardsForOpenedCard);
				
				// 던진 카드 먹는 모션
				
				this.matchAtBottomWithOpenedCard(openedCard, sameCardsForOpenedCard);
			}
		}
		else if(sameCardsForThrowingCard.length == 3) {
			this.eatTheShit(throwingCard, sameCardsForThrowingCard);
		
			this.matchAtBottomWithOpenedCard(openedCard, sameCardsForOpenedCard);
		}
		else {
			alert("gameManager.matchAtBottomWithThrowingCard() : what the fuck? it makes no sense");
		}
		
		if(jokerFlag) {
			for(var i=0; i<openedJokers.length; i++) {
				currentPlayer.eatMyCard(openedJokers[i]);
				
				alert("gameManager.matchAtBottomWithThrowingCard() : eat " + currentPlayer.getId() +
						 											 "'s card - " + openedJokers[i].getId());

				nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=eatcard&index=" + openedJokers[i].getId());
		
				// 조커 먹는 모션
			}
		}
		
		alert("gameManager.matchAtBottomWithThrowingCard() : end");
	}
	
	this.matchAtBottomWithOpenedCard = function(openedCard, sameCardsForOpenedCard){
		alert("gameManager.matchAtBottomWithOpenedCard() : start");;
	
		if(sameCardsForOpenedCard.length == 0) {
			deckInBottom.insertCard(openedCard, 0);
		}
		else if(sameCardsForOpenedCard.length == 1){
			currentPlayer.eatMyCard(openedCard);
			currentPlayer.eatMyCard(sameCardsForOpenedCard[0]);
			
			alert("gameManager.matchAtBottomWithOpenedCard() : eat " + currentPlayer.getId() +
															   "'s card - " + openedCard.getId());
			alert("gameManager.matchAtBottomWithOpenedCard() : eat " + currentPlayer.getId() +
															   "'s card - " + sameCardsForOpenedCard[0].getId());
			
			nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=eatcard&index=" + openedCard.getId());
			nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=eatcard&index=" + sameCardsForOpenedCard[0].getId());
			
			// 연 카드 먹는 모션
		}
		else if(sameCardsForOpenedCard.length == 2){
			cardForChooseTheOne = openedCard;
			
			this.chooseTheOne(sameCardsForOpenedCard);
		}
		else if(sameCardsForOpenedCard.length == 3){
			this.eatTheShit(openedCard, sameCardsForOpenedCard);
		}
		else {
			alert("gameManager.matchAtBottomWithOpenedCard() : what the fuck? it makes no sense");
		}
		
		if(deckInBottom.length == 0) {
			this.bottomClearing();
		}
		
		this.nextTurn();
		
		alert("gameManager.matchAtBottomWithOpenedCard() : end");;
	}
	
	this.openDeckInCenter = function() {
		var lastIndex = deckInCenter.getCardSetLength() - 1;
		
		return deckInCenter.removeCard(lastIndex);
	}
	
	this.chooseTheOne = function(sameCards) {
		alert("gameManager.chooseTheOne() : start");
		
		nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=choicepopup" +
																	 "&firstid=" + sameCards[0].getId() +
																	 "&secondid=" + sameCards[1].getId());
		
		alert("gameManager.chooseTheOne() : end");
	}
	
	this.setCardForChooseFromPhone = function(index) {
		alert("gameManager.setCardForChooseFromPhone() : start");
		
		var cardForChooseFromPhone = initializedDeck[index - 1];
		
		alert("gameManager.setCardForChooseFromPhone() : choosed card from phone is - " + cardForChooseFromPhone.getId());
		
		currentPlayer.eatMyCard(cardForChooseTheOne);
		currentPlayer.eatMyCard(cardForChooseFromPhone);
		
		alert("gameManager.setCardForChooseFromPhone() : eat " + currentPlayer.getId() +
				   								         "'s card - " + cardForChooseTheOne.getId());
		alert("gameManager.setCardForChooseFromPhone() : eat " + currentPlayer.getId() +
												         "'s card - " + cardForChooseFromPhone.getId());
		
		nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=eatcard&index=" + cardForChooseTheOne.getId());
		nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=eatcard&index=" + cardForChooseFromPhone.getId());

		// 선택한 카드 먹는 모션
		
		if(chooseTheOneFlag) {
			this.nextTurn();	
		}
		
		alert("gameManager.setCardForChooseFromPhone() : end");
	}
	
	this.steelBloodFromEveryone = function() {
		alert("gameManager.steelBloodFromEveryone() : start");
		
		for(var i=0; i<players.length; i++) {
			if(currentPlayer == players[i]) {
				continue;
			}
			
			var vomitedBlood = players[i].vomitMyBlood();
			
			currentPlayer.eatMyCard(vomitedBlood);
			
			alert("gameManager.steelBloodFromEveryone() : vomit " + players[i].getId() +
														  "'s card - " + vomitedBlood.getId());
			alert("gameManager.steelBloodFromEveryone() : eat " + currentPlayer.getId() +
														  "'s card - " + vomitedBlood.getId());
			
			nserviceModule.sendMessageWithDeivceId(players[i].getId(), "type=vomitblood");
			nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=eatcard&index=" + vomitedBlood.getId());
			
			// 피 뺏는 모션
		}
		
		alert("gameManager.steelBloodFromEveryone() : end");
	}
	
	this.kissing = function(throwingCard, openedCard) {
		alert("gameManager.kissing() : start");
		
		// 쪽 모션
		
		currentPlayer.eatMyCard(throwingCard);
		currentPlayer.eatMyCard(openedCard);
		
		alert("gameManager.kissing() : eat " + currentPlayer.getId() + "'s card - " + throwingCard.getId());
		alert("gameManager.kissing() : eat " + currentPlayer.getId() + "'s card - " + openedCard.getId());
		
		nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=eatcard&index=" + throwingCard.getId());
		nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=eatcard&index=" + openedCard.getId());
		
		// 먹는 모션
		
		this.steelBloodFromEveryone();
		
		alert("gameManager.kissing() : end");
	}
	
	this.shitting = function(throwingCard, openedCard, sameCardsForThrowingCard) {
		alert("gameManager.shitting() : start");
		
		// 뻑 모션
		
		deckInBottom.insertCard(ThrowingCard, 0);
		deckInBottom.insertCard(openedCard, 0);
		
		for(var i=0; i<sameCardsForThrowingCard.length; i++) {
			deckInBottom.insertCard(sameCardsForThrowingCard[i], 0);	
		}
		
		alert("gameManager.shitting() : end");
	}
	
	this.eatTheShit = function(card, sameCards) {
		alert("gameManager.eatTheShit() : start");
		
		// 뻑 먹기 모션
		
		currentPlayer.eatMyCard(card);
		for(var i=0; i<sameCards.length; i++) {
			currentPlayer.eatMyCard(sameCards[i]);
		}
		
		alert("gameManager.kissing() : eat " + currentPlayer.getId() + "'s card - " + card.getId());
		for(var i=0; i<sameCards.length; i++) {
			alert("gameManager.kissing() : eat " + currentPlayer.getId() + "'s card - " + sameCards[i].getId());
		}
		
		nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=eatcard&index=" + card.getId());
		for(var i=0; i<sameCards.length; i++) {
			nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=eatcard&index=" + sameCards[i].getId());
		}
		
		this.steelBloodFromEveryone();
		
		alert("gameManager.eatTheShit() : end");
	}
	
	this.fourCardsAttaching = function(throwingCard, openedCard, sameCardsForThrowingCard) {
		alert("gameManager.fourCardsAttaching() : start");
		
		// 따닥 모션
		
		currentPlayer.eatMyCard(throwingCard);
		currentPlayer.eatMyCard(openedCard);
		for(var i=0; i<sameCardsForThrowingCard.length; i++) {
			currentPlayer.eatMyCard(sameCardsForThrowingCard[i]);
		}
		
		alert("gameManager.kissing() : eat " + currentPlayer.getId() + "'s card - " + throwingCard.getId());
		alert("gameManager.kissing() : eat " + currentPlayer.getId() + "'s card - " + openedCard.getId());
		for(var i=0; i<sameCardsForThrowingCard.length; i++) {
			alert("gameManager.kissing() : eat " + currentPlayer.getId() + "'s card - " + sameCardsForThrowingCard[i].getId());
		}
		
		nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=eatcard&index=" + throwingCard.getId());
		nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=eatcard&index=" + openedCard.getId());
		for(var i=0; i<sameCardsForThrowingCard.length; i++) {
			nserviceModule.sendMessageWithDeviceId(currentPlayer.getId(), "type=eatcard&index=" + sameCardsForThrowingCard[i].getId());
		}
		
		this.steelBloodFromEveryone();
		
		alert("gameManager.fourCardsAttaching() : end");
	}

	this.bottomClearing = function() {
		alert("gameManager.bottomClearing() : start");
		
		// 쓸 모션
		
		this.steelBloodFromEveryone();
		
		alert("gameManager.bottomClearing() : end");
	}
	
	this.bombing = function() {
		alert("gameManager.boming() : start");
		
		// 폭탄 모션
		
		this.steelBloodFromEveryone();
		
		alert("gameManager.boming() : end");
	}
	
	this.shaking = function() {
		alert("gameManager.shaking() : start");
		
		// 흔들기 모션
		
		currentPlayer.setMyScoreTwice();
		
		alert("gameManager.shaking() : end");
	}
}

gameManager = new GameManager();
alert("############################ game manager class");