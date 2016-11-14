var nservice = window.webapis.nservice || {};

var WAITING_CONNECTION = 0;
var PLAYING_GAME = 1;
var RESULTING_GAME = 2;
var ENDING_GAME = 3;

var nserviceModule = {
	nserviceInstance : [],
	
	start : function() {
		alert("[nserviceModule] in start");

		nservice.registerManagerCallback(nserviceModule.onDeviceStatusChange);
		nservice.getNServiceDevices(nserviceModule.onNserviceObtained);
	},

	onDeviceStatusChange : function(sParam) {
		alert("[nserviceModule] in onDeviceStatusChange : event type - "
				+ sParam.eventType + ", device name - " + sParam.deviceName
				+ ", device type - " + sParam.deviceType);

		switch (Number(sParam.eventType)) {
		case nservice.MGR_EVENT_DEV_CONNECT:
			if (sParam.deviceType == nservice.DEV_SMART_DEVICE) {
				alert("[nserviceModule] in onDevicestatusChange : MGR_EVENT_DEV_CONNECT");
			}
			break;
		case nservice.MGR_EVENT_DEV_DISCONNECT:
			alert("[nserviceModule] in onDevicestatusChange : MGR_EVENT_DEV_DISCONNECT");
			break;
		default:
			alert("[nserviceModule] in onDevicestatusChange : unknown event");
			break;
		}

		nservice.getNServiceDevices(nserviceModule.onNserviceObtained);
	},

	onNserviceObtained : function(nservices) {
		if (nservices.length > 0) {
			alert("[nserviceModule] in onNserviceObtained : found "
				  + nservices.length + " nservice devices");
			nserviceModule.nserviceInstance = [];

			for ( var i in nservices) {
				if (nservices[i] != null /*&& nservices[i].getType() == nservice.DEV_SMART_DEVICE*/) {
					alert("[nserviceModule] in onNserviceObtained : " + i + "st get device instance");

					nserviceModule.nserviceInstance[i] = { deviceId : parsingDeviceID(nservices[i].getUniqueID()), 
														   nservice : nservices[i] };
					
					alert("[nserviceModule] in onNserviceObtained : " +
							"device id : " + nserviceModule.nserviceInstance[i].deviceId +
							"nservice object : " + nserviceModule.nserviceInstance[i].nservice);
					
					nservices[i].registerDeviceCallback(nserviceModule.onDeviceEvent);
				}
			}
			
			if(gameManager.getGameState() == WAITING_CONNECTION && nservices.length == 2) {
				alert("[nserviceModule] in onNserviceObtained : broadcastMessage('type=startgame')");
				
				nservice.broadcastMessage("type=startgame");
				
				gameManager.addTwoPlayers(nserviceModule.nserviceInstance[0].deviceId, 
										  nserviceModule.nserviceInstance[1].deviceId);
				gameManager.initGame();
			}
			else if(nservices.length == 3) {
				
			}
			else {
				alert("[nserviceModule] in onNserviceObtained : nserviceLength " + nservices.length);
			}
		}
		else {
			alert("[nserviceModule] in onNserviceObtained : no nservice device found");
		}
	},

	onDeviceEvent : function(sParam) {
		alert("[nserviceModule] in onDeviceEvent");

		switch (Number(sParam.eventType)) {
		case nservice.DEV_EVENT_MESSAGE_RECEIVED:
			alert("[nserviceModule] in onDeviceEvent : DEV_EVENT_MESSAGE_RECEIVED - "
					+ sParam.eventData.message);
			
			nserviceModule.onMessageReceived(sParam.eventData.message, sParam.eventData.context);
			
			break;
		case nservice.DEV_EVENT_JOINED_GROUP:
			alert("[nserviceModule] in onDeviceEvent : DEV_EVENT_JOINED_GROUP");
			
			break;
		case nservice.DEV_EVENT_LEFT_GROUP:
			alert("[nserviceModule] in onDeviceEvent : DEV_EVENT_LEFT_GROUP");
			
			break;
		default:
			alert("[nserviceModule] in onDeviceEvent : Unknown event");
		}
	},

	onMessageReceived : function(message, context) {
		alert("[nserviceModule] in onMessageReceived : start");

		try {
			var queries = {};
			var data = decodeURIComponent(message.replace(/\+/g, " "));

			$.each(data.split('&'), function(c, q) {
				var i = q.split('=');
				queries[i[0].toString()] = i[1].toString().replace(/(%26)/g, '&');
			});

			if (queries.type == "joingame") {
				alert("[nserviceModule] in onMessageReceived : type=joingame" +
													       " & id=" + queries.id);
			}
			else if(queries.type == "throwcard") {
				alert("[nserviceModule] in onMessageReceived : type=throwcard" + 
														   " & id=" + queries.id +
														   " & index=" + queries.index);
				
				gameManager.matchAtBottomWithThrowingCard(queries.index);
			}
			else if(queries.type == "choiceresult") {
				alert("[nserviceModule] in onMessageReceived : type=choiceresult" +
														   " & index=" + queries.index);
				
				gameManager.setCardForChooseFromPhone(queries.index);
			}
			else {
				alert("[nserviceModule] in onMessageReceived : unknown message type - " + data);	
			}
		}
		catch(e) {
			alert("SISC Error onMessageReceived " + e);
		}
	},
	
	sendMessageWithDeviceId : function(id, message) {
		var currentNservice = null;
		
		for(var i in nserviceModule.nserviceInstance) {
			if(id == nserviceModule.nserviceInstance[i].deviceId) {
				currentNservice = nserviceModule.nserviceInstance[i].nservice;
				currentNservice.sendMessage(message);
				
				break;
			}
		}
	},
	
	sendMessageToEverybody : function(message) {
		nservice.broadcastMessage(message);
	},
}

function parsingDeviceID(uniqueID) {
	return uniqueID.substring(18);
}

alert("############################ nservice module class");