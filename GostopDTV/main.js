

//--dtvButton_0_onclick - start
function dtvButton_0_onclick(e, index) {
	sf.scene.hide("start_page");
	sf.scene.show("game_page");
	sf.scene.focus("game_page");
}
//--dtvButton_0_onclick - end

//--dtvButton_1_onclick - start
function dtvButton_1_onclick(e, index) {
	player1cardlist.addPlayer1Card();
}
//--dtvButton_1_onclick - end

//--dtvButton_4_onclick - start
function dtvButton_4_onclick(e, index) {
	player1cardlist.removePlayer1Card(0);
}
//--dtvButton_4_onclick - end

//--dtvButton_2_onclick - start
function dtvButton_2_onclick(e, index) {
	player1cardlist.removeAllPlayer1Card();
}
//--dtvButton_2_onclick - end

//--dtvButton_3_onclick - start
function dtvButton_3_onclick(e, index) {
	player1EatCardList.addCardInMyDeck(2);
}
//--dtvButton_3_onclick - end

//--dtvButton_9_onclick - start
function dtvButton_9_onclick(e, index) {
	player1EatCardList.addCardInMyDeck(3);
}
//--dtvButton_9_onclick - end

//--dtvButton_5_onclick - start
function dtvButton_5_onclick(e, index) {
	player2cardlist.addPlayer2Card();
	
}
//--dtvButton_5_onclick - end

//--dtvButton_6_onclick - start
function dtvButton_6_onclick(e, index) {
	player2cardlist.removePlayer2Card(0);
}
//--dtvButton_6_onclick - end

//--dtvButton_7_onclick - start
function dtvButton_7_onclick(e, index) {
	player2cardlist.removeAllPlayer2Card();
}
//--dtvButton_7_onclick - end

//--dtvButton_8_onclick - start
function dtvButton_8_onclick(e, index) {
	player2EatCardList.addCardInYourDeck(2);
}
//--dtvButton_8_onclick - end

//--dtvButton_10_onclick - start
function dtvButton_10_onclick(e, index) {
	player2EatCardList.addCardInYourDeck(3);
}
//--dtvButton_10_onclick - end