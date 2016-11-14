function Scenegame_page() {
}

Scenegame_page.prototype.initialize = function () {
	game_page_componentInitialize();
};
	
var player1cardlist;
var player2cardlist;
var player1EatCardList;
var player2EatCardList;

var cardCanBeAte;



function game_page_componentInitialize(){
	// Component is initialized in this function.
	var a  = 2;
	a = 3;
	
	player1cardlist = $("#my_state_view_current_state_rest_card").cardlistAdapter();
	player2cardlist = $("#your_state_view_current_state_rest_card").cardlistAdapter();
	player1EatCardList = $("#my_get_card_view_wrapper").eatCardListAdapter();
	player2EatCardList = $("#your_get_card_view_wrapper").eatCardListAdapter();

	var i = 1;
	
	//cardCanBeAte = $("#can_get_card_view").
	
	
	//-- DtvButton #dtvButton_1
	$('#dtvButton_1').sfButton({
		text:'myDecAdd'
	});
	$('#dtvButton_1').sfButton("addCallback", "clicked", dtvButton_1_onclick);

	//-- DtvButton #dtvButton_2
	$('#dtvButton_2').sfButton({
		text:'myDecRemoveAll'
	});
	$('#dtvButton_2').sfButton("addCallback", "clicked", dtvButton_2_onclick);

	//-- DtvButton #dtvButton_3
	$('#dtvButton_3').sfButton({
		text:'myEatPi'
	});
	$('#dtvButton_3').sfButton("addCallback", "clicked", dtvButton_3_onclick);

	//-- DtvButton #dtvButton_4
	$('#dtvButton_4').sfButton({
		text:'myDecRemove'
	});
	$('#dtvButton_4').sfButton("addCallback", "clicked", dtvButton_4_onclick);

	//-- DtvButton #dtvButton_5
	$('#dtvButton_5').sfButton({
		text:'UDecAdd'
	});
	$('#dtvButton_5').sfButton("addCallback", "clicked", dtvButton_5_onclick);

	//-- DtvButton #dtvButton_6
	$('#dtvButton_6').sfButton({
		text:'UDecRemove'
	});
	$('#dtvButton_6').sfButton("addCallback", "clicked", dtvButton_6_onclick);

	//-- DtvButton #dtvButton_7
	$('#dtvButton_7').sfButton({
		text:'UDecReAll'
	});
	$('#dtvButton_7').sfButton("addCallback", "clicked", dtvButton_7_onclick);

	//-- DtvButton #dtvButton_8
	$('#dtvButton_8').sfButton({
		text:'UEatPi'
	});
	$('#dtvButton_8').sfButton("addCallback", "clicked", dtvButton_8_onclick);

	//-- DtvButton #dtvButton_9
	$('#dtvButton_9').sfButton({
		text:'myEatGwang'
	});
	$('#dtvButton_9').sfButton("addCallback", "clicked", dtvButton_9_onclick);

	//-- DtvButton #dtvButton_10
	$('#dtvButton_10').sfButton({
		text:'UEatGwang'
	});
	$('#dtvButton_10').sfButton("addCallback", "clicked", dtvButton_10_onclick);


};

Scenegame_page.prototype.handleShow = function (data) {
	// this function will be called when the scene manager show this scene 
};

Scenegame_page.prototype.handleHide = function () {
	// this function will be called when the scene manager hide this scene  
};

Scenegame_page.prototype.handleFocus = function () {
	// this function will be called when the scene manager focus this scene
};

Scenegame_page.prototype.handleBlur = function () {
	// this function will be called when the scene manager move focus to another scene from this scene
};

Scenegame_page.prototype.handleKeyDown = function (keyCode) {
	// TODO : write an key event handler when this scene get focused
	switch (keyCode) {
	case sf.key.LEFT:
		break;
	case sf.key.RIGHT:
		break;
	case sf.key.UP:
		break;
	case sf.key.DOWN:
		break;
	case sf.key.ENTER:
		break;
	}
};
