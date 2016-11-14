var ADDCARD_MATCH_TRUE = true;
var ADDCARD_MATCH_FALSE = false;

$.fn.extend($.fn, {
	cardCanBeAteAdapter:function(){
		
		//var iterator = 0;
		
		var cardsArrayInCanGetCardView = Array();
		
		var div_height = $('#can_get_card_view').height();
		var div_width = $('#can_get_card_view').width();

		var cardHeight = div_height / 10;
		var cardWidth = div_width / 10;

		var card = $("<div class='div-card'><img class='img-card'></div>");
		card.width(cardWidth);
		card.height(cardHeight);

		// img 매칭 작업 해줘야함
		card.find('.img-card').attr('src', 'images/cardImage/10-1.png');
		
		this.addCardInCanGetCardView=function(index, flag){
			
			var place =$('#can_get_card_view').children();
			
			if(flag == ADDCARD_MATCH_TRUE){
				for(var i in place){
					
					var card_cnt = $(place[i]).children().length;
					if($(place[i]).children().length>0){
						/*if ($(place[i]).data('month')==month){
						 * 	var card;
						 * card.data('month', month);
						 * card.data('type', type);
						 * card.data('special', special);
						 * card.css({'left': card_cnt*어느정도 ' top: card_cnt*어느정도}
						 * $(place[i]).append(card);
						 * 
						 * }
						*/
					}
				}
			}else if(flag == ADDCARD_MATCH_FALSE){
				for(var i in place){
					if($(place[i]).children().length==0){
						/*$(place[i]).data('month', '몇얼');
						 * card 객체 생성
						 * var card ;
						 * card.data('month', month);
						 * card.data('type', type);
						 * card.data('special', special);
						 * $(place[i]).append(card);
						  */
						 
						break;
					}
				}
			}
			
			
			card.css({
				'left' : x * cardWidth / 2,
				'position' : 'absolute'
			});
			
			
			
			$('#my_get_card_view_tengg').append(card);

		}
	}
});
alert("############################ CardCanBeAteAdapter class");