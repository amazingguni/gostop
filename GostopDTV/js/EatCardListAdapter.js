var SCORECARD_PI = 0;
var SCORECARD_GWANG = 1;
var SCORECARD_BAND = 2;
var SCORECARD_ANIMAL = 3;

$.fn.extend($.fn, {
	eatCardListAdapter : function(type) {
		this.addCardInMyDeck = function(index) {
			
			var div_height = $('#my_get_card_view_pi').height();
			var div_width = $('#my_get_card_view_pi').width();

			var cardHeight = div_height / 4;
			var cardWidth = div_width / 4;

			var card = $("<div class='div-card'><img class='img-card'></div>");
			card.width(cardWidth);
			card.height(cardHeight);

			// img ¸ÅÄª ÀÛ¾÷ ÇØÁà¾ßÇÔ
			card.find('.img-card').attr('src', 'images/cardImage/10-1.png');

			switch (index) {
			case SCORECARD_PI: {

				var piCnt = $('#my_get_card_view_pi').children().length;
				var x, y;
				x = parseInt(piCnt % 7);
				y = parseInt(piCnt / 7);
				card.css({
					'left' : x * cardWidth / 2,
					'bottom' : y * cardHeight / 2,
					'position' : 'absolute'
				});

				$('#my_get_card_view_pi').append(card);

				break;
			}
			case SCORECARD_GWANG: {

				var piCnt = $('#my_get_card_view_ggwang').children().length;
				var x, y;
				x = parseInt(piCnt % 5);
				card.css({
					'left' : x * cardWidth / 2,
					'position' : 'absolute'
				});

				$('#my_get_card_view_ggwang').append(card);
				break;
			}
			case SCORECARD_BAND: {
				var piCnt = $('#my_get_card_view_tengg').children().length;
				var x, y;
				x = parseInt(piCnt % 12);
				card.css({
					'left' : x * cardWidth / 2,
					'position' : 'absolute'
				});

				$('#my_get_card_view_tengg').append(card);
				break;
			}
			case SCORECARD_ANIMAL: {
				var piCnt = $('#my_get_card_view_ddi').children().length;
				var x, y;
				x = parseInt(piCnt % 12);
				card.css({
					'left' : x * cardWidth / 2,
					'position' : 'absolute'
				});

				$('#my_get_card_view_ddi').append(card);
				break;
			}
			}
		};

		this.addCardInYourDeck = function(index) {
			
			var div_height = $('#your_get_card_view_pi').height();
			var div_width = $('#your_get_card_view_pi').width();

			var cardHeight = div_height / 4;
			var cardWidth = div_width / 4;

			var card = $("<div class='div-card'><img class='img-card'></div>");
			card.width(cardWidth);
			card.height(cardHeight);

			// img ¸ÅÄª ÀÛ¾÷ ÇØÁà¾ßÇÔ
			card.find('.img-card').attr('src', 'images/cardImage/10-1.png');
			
			switch (index) {
			case SCORECARD_PI: {

				var piCnt = $('#your_get_card_view_pi').children().length;
				var x, y;
				x = parseInt(piCnt % 7);
				y = parseInt(piCnt / 7);
				card.css({
					'left' : x * cardWidth / 2,
					'bottom' : y * cardHeight / 2,
					'position' : 'absolute'
				});

				$('#your_get_card_view_pi').append(card);

				break;
			}
			case SCORECARD_GWANG: {

				var piCnt = $('#your_get_card_view_ggwang').children().length;
				var x, y;
				x = parseInt(piCnt % 5);
				card.css({
					'left' : x * cardWidth / 2,
					'position' : 'absolute'
				});

				$('#your_get_card_view_ggwang').append(card);
				break;
			}
			case SCORECARD_BAND: {
				var piCnt = $('#your_get_card_view_tengg').children().length;
				var x, y;
				x = parseInt(piCnt % 12);
				card.css({
					'left' : x * cardWidth / 2,
					'position' : 'absolute'
				});

				$('#your_get_card_view_tengg').append(card);
				break;
			}
			case SCORECARD_ANIMAL: {
				var piCnt = $('#your_get_card_view_ddi').children().length;
				var x, y;
				x = parseInt(piCnt % 12);
				card.css({
					'left' : x * cardWidth / 2,
					'position' : 'absolute'
				});

				$('#your_get_card_view_ddi').append(card);
				break;
			}
			}

		};

		return this;

	},

});
alert("############################ EatCardListAdapter class");