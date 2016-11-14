$.fn.extend($.fn, {
	cardlistAdapter:function(type){
		this.addPlayer1Card = function(){
			var carddiv = document.createElement("div");
			$(carddiv).addClass("div-player1-card");
			
			var cardimg = document.createElement("img");
			$(cardimg).attr("src", "images/cardImage/1-1.png");
			
			carddiv.appendChild(cardimg);
			
			this.append(carddiv);
			
		};
		this.removePlayer1Card  = function(index){
			this.children()[index].remove();
		};
		
		this.removeAllPlayer1Card = function() {
			this.children().remove();
		};
		
		this.addPlayer2Card = function(){
			var carddiv = document.createElement("div");
			$(carddiv).addClass("div-player2-card");
			
			var cardimg = document.createElement("img");
			$(cardimg).attr("src", "images/cardImage/2-1.png");
			
			carddiv.appendChild(cardimg);
			
			this.append(carddiv);
			
		};
		this.removePlayer2Card  = function(index){
			this.children()[index].remove();
		};
		
		this.removeAllPlayer2Card = function() {
			this.children().remove();
		};
		
		return this;
		
	},
	
	
	
});
alert("############################ CardlistAdapter class");




	