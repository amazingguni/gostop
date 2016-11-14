var playercardArray = new Array;
var playerscorecardArray = new Array;
var cardImageFilename = ['0.png', '1-1.png', '1-2.png', '1-3.png', '1-4.png', 
                         '2-1.png', '2-2.png', '2-3.png', '2-4.png', 
                         '3-1.png', '3-2.png', '3-3.png', '3-4.png',
                         '4-1.png', '4-2.png', '4-3.png', '4-4.png',
                         '5-1.png', '5-2.png', '5-3.png', '5-4.png',
                         '6-1.png', '6-2.png', '6-3.png', '6-4.png',
                         '7-1.png', '7-2.png', '7-3.png', '7-4.png',
                         '8-1.png', '8-2.png', '8-3.png', '8-4.png',
                         '9-1.png', '9-2.png', '9-3.png', '9-4.png',
                         '10-1.png', '10-2.png', '10-3.png', '10-4.png',
                         '11-1.png', '11-2.png', '11-3.png', '11-4.png',
                         '12-1.png', '12-2.png', '12-3.png', '12-4.png',
                         '13-1.png', '13-2.png', 
                         '14-1.png'];

var page_main = {
	addPlayerCard : function(index){
		var card;
		
		card = $("<div class='gostopcard-container'><img class='gostopcard' src='./images/page_main/gostop_card/"+cardImageFilename[index]+"'></div>");
		$('#main-left-bottom-card-container').append(card);
		card.bind('click', page_main_playercard_onclick);
		playercardArray.push({index:index});
		
	},
	addPlayerScoreCard : function(){
		
	},
	setScorePoint : function(score, goCount, shakeCount, shitCount){
		$('#label-player-score').text(score);
	},
	setMission : function(){
		
	},
	setMoney : function(title, totalmoney, profitmoney){
		
	}
}

function page_main_playercard_onclick(evt){
	var card_index = $(this).index();
	$(this).addClass('remove');
	
	var $this = $(this);
	$this.unbind();
	nserviceModule.sendMessageToDTV("type=throwcard&index="+playercardArray[card_index].index+"&id="+playerID+"&arrindex="+card_index );
	console.log('[in page_main_playercard_onclick] throwcard index:'+playercardArray[card_index].index);
	setTimeout(function(){
		$this.remove();
		playercardArray.splice(card_index,1);
		
		}, 500);
}
function page_main_setScore(){
	var score = prompt();
	$('#label-player-score').text(score);
}
function page_main_addCard(){

}

