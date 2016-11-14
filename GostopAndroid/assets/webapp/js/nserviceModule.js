var nserviceModule = {
	dtvAppID : "GostopDTV",
	dtvIpAddress : "",
	dtvPortNumber : "",
	deviceId : "12345",
	
	connect: function(ip, port, id){
		nserviceModule.dtvIpAddress = ip;
		nserviceModule.dtvPortNumber = port;
		nserviceModule.deviceId = id;
		
		var URL = "http://" + ip + ":" + port + "/ws/apps/" + nserviceModule.dtvAppID + "/connect";
		
		$.ajax({
			type:"POST",
			url: URL,
		
			headers:{
				SLDeviceID : nserviceModule.deviceId,
				VendorID : "VenderMe",
				DeviceName : "IE-Client",
				ProductID : "SMARTDev",
				connectoin : "close"
			},
			
			async: false,
			cache: false,
			timeout: 3000,
			success: nserviceModule.connectSuccessCallback,
			
			statusCode: {
				404: function () {
	                console.log("404 TV application not running. ");
	            },
	            409 : function () {
	            	console.log("409 conflict on device ID. ");
	            },
	            500 : function () {
	            	console.log("500 server internal error 500 ");
	            },
	            503 : function () {
	            	console.log("503 server may reach maximum connections ");
	            }
	        }
		});
	},
	
	connectSuccessCallback : function(){
		console.log("Connect Success!!");
		
		setTimeout(nserviceModule.longpolling(), 10);
	},
	
	sendMessageToDTV: function(msg) {
		var URL = "http://" + nserviceModule.dtvIpAddress + ":" + nserviceModule.dtvPortNumber + "/ws/apps/" + nserviceModule.dtvAppID + "/queue"; 
		//console.log(URL);
		//var message = "action=flickrdata&token="+flickrData.auth_token+"&nsid="+flickrData.nsid+"&username="+flickrData.username+"&mybuddyiconurl="+flickrData.mybuddyiconurl;
		//type, content
		$.ajax({
			type :"POST",
			url : URL,
			data : msg,
			contentType : "text/plain",
			
			headers : {
				SLDeviceID : nserviceModule.deviceId,
				VendorID : "VenderMe",
				ProductID : "SMARTDev"
			},
			
			async : false,
			cache : false,
			timeout : 3000,
			
			success : function() {
				//console.log("send success : " + msg);
			},
			
			error : function() {
				console.log("send error : " + msg);
			}
		});
	},
	
	longpolling : function() {
		var URL = "http://" + nserviceModule.dtvIpAddress + ":" + nserviceModule.dtvPortNumber + "/ws/app/" + nserviceModule.dtvAppID + "/queue/device/" + nserviceModule.deviceId; 
		//console.log(URL);
		
		$.ajax({
			type : "GET",
			url : URL,
			
			headers : {
				SLDeviceID : nserviceModule.deviceId,
			},
			
			async : true,
			cache : false,
			timeout : 50000,
			
			statusCode : {
				404 : function () {
	                console.log("404 TV application not running. ");
	            },
	            408 : function () {
	                console.log("longpolling timeout 408, start again... ");
	                setTimeout('nserviceModule.longpolling()', 0);
	            },
	            500 : function () {
	                console.log("longpolling error 500, start again in 5s");
	                setTimeout('nserviceModule.longpolling()', 5000);
	            },
	            503 : function () {
	                console.log("longpolling error 503, start again in 5s");
	                setTimeout('nserviceModule.longpolling()', 5000);
	            }
			},
			
			success : function(data) {
				console.log("longpolling send success");
				
				try {
					if(data.search("widgetInfo") != -1) {
						var recv_msg = eval('(' + data + ')');
						
						if(recv_msg.widgetInfo.Status == "TERMINATED") {
							console.log("TV application terminated, quit");
						}
						else {
							nserviceModule.longpolling();
						}
					}
					else {
						nserviceModule.onMessageReceived(data);
						nserviceModule.longpolling();
					}
				}
				catch(e) {
					nserviceModule.longpolling();
				}
			},
			
			error : function(responce, status, error) {
				console.log(responce.responseText+", "+status+", "+error);
			}
		});
	},
	onMessageReceived:function(message){
		console.log("nserviceModule.onMessageReceived:"+message);
		try{
			var queries={};
			var data = decodeURIComponent(message.replace(/\+/g, " "));
			
			$.each(data.split('&'), function(c, q){
				var i = q.split('=');
				queries[i[0].toString()]=i[1].toString().replace(/(%26)/g, '&');
			});
			
			
			
			if(queries.type == 'startgame'){
				$.mobile.changePage('#page_main', 'slide, false, true');
			
			}else if(queries.type=='sendcard'){
				
				var card = queries.index;
			
				page_main.addPlayerCard(card);
			}else if(queries.type=='eatcard'){
				var card = queries.index;
			
				
			}else if(queries.type == 'choicepopup'){
				
			}else if(queries.type == 'fuck'){
				
			}
		}catch(e){
			console.log('error:'+e);
		}
	}
	
}