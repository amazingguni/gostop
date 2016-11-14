//**************************************************
//***** card class
//**************************************************
var Card = function(pid, pmonth, ptype, pspecial){
	var id = pid;
	var month = pmonth;
	var type = ptype;
	var special = pspecial;
	
	this.getId = function(){
		return id;
	}
	
	this.getMonth = function(){
		return month;
	}
	
	this.getType = function(){
		return type;
	}
	
	this.getSpecial = function(){
		return special;
	}

	// compare the card's month with other card
	this.isEqual = function(newCard){
		if(newCard.getMonth() == month) return 0;
		else if(month > newCard.getMonth()) return 1;
		else if(month < newCard.getMonth()) return -1;
	}
	
	this.toStringForCard = function(){
		return id + ' : ' + month + ',' + type + ',' + special;
	}
}

//**************************************************
//***** enum for type of card
//**************************************************
var CardTypeEnum = { "CARD_TYPE_BLOOD" : 0, "CARD_TYPE_LIGHT" : 1,
					 "CARD_TYPE_BAND" : 2, "CARD_TYPE_ANIMAL" : 3,
					 "CARD_TYPE_NONE" : 4 }

//**************************************************
//***** enum for special type of card
//**************************************************
var CardSpecialEnum = { "CARD_SPECIAL_NONE" : 0, "CARD_SPECIAL_DOUBLEBLOOD" : 1,
						"CARD_SPECIAL_JOKER2" : 2, "CARD_SPECIAL_JOKER3" : 3,
						"CARD_SPECIAL_NOTLIGHT" : 4, "CARD_SPECIAL_BLUEBAND" : 5,
						"CARD_SPECIAL_REDBAND" : 6, "CARD_SPECIAL_CHOBAND" : 7,
						"CARD_SPECIAL_GODORI" : 8, "CARD_SPECIAL_GOOK" : 9 }

//**************************************************
//***** whole card set list
//**************************************************
var initializedDeck = [new Card(1, 1, CardTypeEnum.CARD_TYPE_LIGHT, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(2, 1, CardTypeEnum.CARD_TYPE_BAND, CardSpecialEnum.CARD_SPECIAL_REDBAND),
                       new Card(3, 1, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(4, 1, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                     
                       new Card(5, 2, CardTypeEnum.CARD_TYPE_ANIMAL, CardSpecialEnum.CARD_SPECIAL_GODORI),
                       new Card(6, 2, CardTypeEnum.CARD_TYPE_BAND, CardSpecialEnum.CARD_SPECIAL_REDBAND),
                       new Card(7, 2, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(8, 2, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                     
                       new Card(9, 3, CardTypeEnum.CARD_TYPE_LIGHT, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(10, 3, CardTypeEnum.CARD_TYPE_BAND, CardSpecialEnum.CARD_SPECIAL_REDBAND),
                       new Card(11, 3, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(12, 3, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                     
                       new Card(13, 4, CardTypeEnum.CARD_TYPE_ANIMAL, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(14, 4, CardTypeEnum.CARD_TYPE_BAND, CardSpecialEnum.CARD_SPECIAL_CHOBAND),
                       new Card(15, 4, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(16, 4, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),

                       new Card(17, 5, CardTypeEnum.CARD_TYPE_ANIMAL, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(18, 5, CardTypeEnum.CARD_TYPE_BAND, CardSpecialEnum.CARD_SPECIAL_CHOBAND),
                       new Card(19, 5, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(20, 5, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                     
                       new Card(21, 6, CardTypeEnum.CARD_TYPE_ANIMAL, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(22, 6, CardTypeEnum.CARD_TYPE_BAND, CardSpecialEnum.CARD_SPECIAL_BLUEBAND),
                       new Card(23, 6, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(24, 6, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                     
                       new Card(25, 7, CardTypeEnum.CARD_TYPE_ANIMAL, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(26, 7, CardTypeEnum.CARD_TYPE_BAND, CardSpecialEnum.CARD_SPECIAL_CHOBAND),
                       new Card(27, 7, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(28, 7, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                     
                       new Card(29, 8, CardTypeEnum.CARD_TYPE_LIGHT, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(30, 8, CardTypeEnum.CARD_TYPE_ANIMAL, CardSpecialEnum.CARD_SPECIAL_GODORI),
                       new Card(31, 8, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(32, 8, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                     
                       new Card(33, 9, CardTypeEnum.CARD_TYPE_ANIMAL, CardSpecialEnum.CARD_SPECIAL_GOOK),
                       new Card(34, 9, CardTypeEnum.CARD_TYPE_BAND, CardSpecialEnum.CARD_SPECIAL_BLUEBAND),
                       new Card(35, 9, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(36, 9, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                     
                       new Card(37, 10, CardTypeEnum.CARD_TYPE_ANIMAL, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(38, 10, CardTypeEnum.CARD_TYPE_BAND, CardSpecialEnum.CARD_SPECIAL_BLUEBAND),
                       new Card(39, 10, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(40, 10, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                     
                       new Card(41, 11, CardTypeEnum.CARD_TYPE_LIGHT, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(42, 11, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_DOUBLEBLOOD),
                       new Card(43, 11, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(44, 11, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_NONE),
                     
                       new Card(45, 12, CardTypeEnum.CARD_TYPE_LIGHT, CardSpecialEnum.CARD_SPECIAL_NOTLIGHT),
                       new Card(46, 12, CardTypeEnum.CARD_TYPE_ANIMAL, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(47, 12, CardTypeEnum.CARD_TYPE_BAND, CardSpecialEnum.CARD_SPECIAL_NONE),
                       new Card(48, 12, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_DOUBLEBLOOD),
                     
                       new Card(49, 13, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_JOKER2),
                       new Card(50, 13, CardTypeEnum.CARD_TYPE_BLOOD, CardSpecialEnum.CARD_SPECIAL_JOKER3),
                       new Card(51, 14, CardTypeEnum.CARD_TYPE_NONE, CardSpecialEnum.CARD_SPECIAL_NONE)
                       ]

alert("############################ card class");