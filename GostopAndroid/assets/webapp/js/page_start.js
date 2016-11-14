var playerID = null;

function page_start_startgame(){
	var ip = '192.168.10.105';//prompt('ip', '');
	
	playerID= prompt('id');
	nserviceModule.connect(ip, '8008', playerID);
	// "action=flickrdata&token="+flickrData.auth_token+"&nsid="+flickrData.nsid+"&username="+flickrData.username+"&mybuddyiconurl="+flickrData.mybuddyiconurl;
	nserviceModule.sendMessageToDTV("type=joingame&id="+playerID);
};