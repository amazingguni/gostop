// Get[$MANAGER_WIDGET/Common/webapi/1.0/webapis.js]

var webapis = window.webapis || {};

window.webapis.tv = {
	info : {
		PRODUCT_TYPE_TV : 0,
		PRODUCT_TYPE_BD : 1,
		PRODUCT_TYPE_MONITOR : 2,
		TIMEZONE_USA_NEWFOUNDLAND : 0,
		TIMEZONE_USA_ATLANTIC : 1,
		TIMEZONE_USA_EASTERN : 2,
		TIMEZONE_USA_CENTRAL : 3,
		TIMEZONE_USA_MOUNTAIN : 4,
		TIMEZONE_USA_PACIFIC : 5,
		TIMEZONE_USA_ALASKA : 6,
		TIMEZONE_USA_HAWAII : 7,
		TIMEZONE_KOR_SEOUL : 8,
		TIMEZONE_DVB_REGION_0 : 9,
		TIMEZONE_DVB_REGION_1 : 10,
		TIMEZONE_DVB_REGION_2 : 11,
		TIMEZONE_DVB_REGION_3 : 12,
		TIMEZONE_DVB_REGION_4 : 13,
		TIMEZONE_DVB_REGION_5 : 14,
		TIMEZONE_DVB_REGION_6 : 15,
		TIMEZONE_DVB_REGION_7 : 16,
		TIMEZONE_DVB_REGION_8 : 17,
		TIMEZONE_DST_ON : 1,
		TIMEZONE_DST_OFF : 2,
		TIMEZONE_DST_AUTO : 3,
		getProduct : function () {
		
				return sf.env.getProductType();//new implementation

		},
		getModel : function () {
				return sf.env.getModelID();
		},
		getFirmware : function () {
			return 'TINFOLINK2012-1000';
		},
		getVersion : function () {
			return sf.env.getAppVersion();

		},
		getCountry : function () {
			return sf.env.getCountryCode();
		},
		getLanguage : function () {
			return sf.env.getLanguageCode();
		},
		getDeviceID : function () {
			
			return "MTCA3KZXYQG2W"
		},

		getTick : function () {
			return 14938484;

		},
		getEpochTime : function () {
			return 1354873034;
		},
		convertEpochToTime : function (d) {
			return 'This is date object';

		},
		convertTimeToEpoch : function (a) {
			return 12467845;
		},
		getTimeZone : function () {
			return {timezone:"",dst:"",offset:""};
		},
		TimeZone : function (a, b, c) {	//not applicable in Webapis
			this.__defineGetter__("timezone", function () {
				return a
			});
			this.__defineGetter__("offset", function () {
				return b
			});
			this.__defineGetter__("dst", function () {
				return c
			})
		}
	},
	channel : {
		NAVIGATOR_MODE_ALL : 0,
		NAVIGATOR_MODE_DIGITAL : 1,
		NAVIGATOR_MODE_ANALOG : 2,
		NAVIGATOR_MODE_FAVORITE : 3,
		tune : function (b, d, j, e) {
			d({});

		},
		tuneUp : function (b, f, j, c) { 
			b();

		},
		tuneDown : function (b, f, j, c) { 
			b();

		},
		getChannelList : function (g, l, t, B, d) { 
			g([])

		},
		getCurrentChannel : function (e) {	
				return {"ptc":1,"major":1,"minor":1,"lcn":1,"sourceID":10000,"programNumber":1,"transportStreamID":0,"originalNetworkID":0,"serviceName":"","channelName":"samsung channel 1-1"};

		},
		findChannel : function (s, e, f, h) {
				f([]);
				

		},
		getCurrentProgram : function (d) {  
			 return {"title":"","startTime":"","duration":0,"detailedDescription":"","language":"","rating":""};

		},
		getProgramList : function (y, u, c, g, a) { 
			var result=[{"title":"samsung news 14","startTime":1354822200,"duration":5400,"detailedDescription":null,"language":null,"rating":null},{"title":"samsung news 15","startTime":1354822200,"duration":5400,"detailedDescription":null,"language":null,"rating":null}]
			c(result);

		},
		getNumOfAvailableTuner : function () { 
			return 1;
		},
		TuneCallback : function (c, b, a, d) { 
			this.onsuccess = null;
			this.onnosignal = null;
			this.onresolutionchanged = null;
			this.onaudiomodechanged = null
		},
		ChannelListSuccuessCallback : function (a) {
			this.onsuccess = a
		},
		ProgramListSuccuessCallback : function (a) {
			this.onsuccess = a
		},
		TuneOption : function (b, a, e, d, c, h, g, f) {
			this.ptc = b;
			this.major = a;
			this.minor = e;
			this.sourceID = d;
			this.programNumber = c;
			this.transportStreamID = h;
			this.originalNetworkID = g;
			this.tunecallback = f
		},
		ChannelInfo : function (h, j, f, b, c, d, a, e, g, k) { 

		},
		ProgramInfo : function (e, b, d, c, f, a) {
		}
	},
	window: {
		SOURCE_MODE_TV : 0,
		SOURCE_MODE_AV : 1,
		SOURCE_MODE_SVIDEO : 2,
		SOURCE_MODE_COMP : 3,
		SOURCE_MODE_PC : 4,
		SOURCE_MODE_HDMI : 5,
		SOURCE_MODE_SCART : 6,
		SOURCE_MODE_DVI : 7,
		SOURCE_MODE_MEDIA : 8,
		SOURCE_MODE_IPTV : 9,
		SOURCE_MODE_RVU : 10,
		SOURCE_MODE_RUI : 11,
		SOURCE_MODE_ISP : 12,
		getAvailableWindow : function (a, b) {
			a(0);

			
		},
		_tvPlugin : null,
		setSource : function (sourceInfo, successCallback, errorCallback, windowID) {
				successCallback({"type":0,"number":0})
	
		},
		_sourcePLMap : null,
		getSource : function (b) {
			return {"type":0,"number":null};
		},
		_sourceAPIMap : null,
		_coldSetOnHideFlag : false,
		setRect : function (m, c) {
		return true;
		},
		show : function (a) {
			return true;

		},
		hide : function (a) { 
			return true;
		},
		SourceInfo : function (b, a) {
			this.type = b;
			this.number = a
		},
		SubWindow : function (a) {
			this.prototype.id = a;
			this.prototype.show = function () {};
			this.prototype.hide = function () {};
			this.prototype.setRect = function (b, c) {};
			this.prototype.setSource = function (c, b) {};
			this.prototype.getSource = function () {}
			
		},
		SuccessSubWindowArrayCallback : function () {}
		
	}
};
window.webapis.imageview = {
	id:-1,
	EFFECT_INIT : -1,
	EFFECT_FADE_1 : 0,
	EFFECT_FADE_2 : 1,
	EFFECT_BLIND : 2,
	EFFECT_SPIRAL : 3,
	EFFECT_CHECKER : 4,
	EFFECT_LINEAR : 5,
	EFFECT_STAIRS : 6,
	EFFECT_WIPE : 7,
	EFFECT_RANDOM : 8,
	EFFECT_NORMAL : 9,
	IMAGEVIEW_STATE_IDLE : 0,
	IMAGEVIEW_STATE_INITIALIZED : 1,
	IMAGEVIEW_STATE_PREPARED : 3,
	IMAGEVIEW_STATE_DRAWN : 4,
	IMAGEVIEW_STATE_STOPPED : 5,
	aImageViewList:[],
	getImageView: function(su,er){
		try{
			var id = ++window.webapis.imageview.id; 
			var s = "<div style='position:absolute;left:0px;top:0px;width:200px;height:150px;z-index:200;display:none;background:#000;' id='imagePlayer_"+id+"' data-role='dtvImageViewer' data-fullscreen='false' data-visible='show'><img src='none' style='width:100%;height:100%;min-width:30px;min-height:30px;' waper_focus='false'></img><div style='display:none;' waper_focus='false' data-role='temp'></div></div>";
			$("body").find('#imagePlayer_'+id).remove();
			$("body").append(s);
			var _object = new window.webapis.imageview.imageview(id);
			window.webapis.imageview.aImageViewList.push(_object);
			su(_object);
		}catch(e){
			er({name:e});
		}
	},
	imageview: function(id){
		var id=id;
		var temp_url="";
		var temp_imageWidth=0;
		var temp_imageHeight=0;
		var temp_displayRect={};
		var temp_containerID=0;            
		var temp_zIndex=1;
		var temp_effect=window.webapis.imageview.EFFECT_FADE_1;
		var temp_status=false;
		var temp_imageInterval=null;
		var temp_start=0;
		this.__defineGetter__("id", function () {
			return id
		});
		this.__defineGetter__("url", function () {
			return temp_url;
		});
		this.__defineGetter__("imageWidth", function () {
			return temp_imageWidth;
		});
		this.__defineGetter__("imageHeight", function () {
			return temp_imageHeight;
		});
		this.__defineGetter__("displayRect", function () {
			return temp_displayRect;
		});
		this.__defineGetter__("containerID", function () {
			return temp_containerID;
		});
		this.__defineGetter__("zIndex", function () {
			return temp_zIndex;
		});
		this.__defineGetter__("effect", function () {
			return temp_effect;
		});
		this.__defineGetter__("status", function () {
			return temp_status;
		});
		this.init = function(o){
			try{
				if(o.id){
					this.id = o.id;
				}
				if(o.url){
					this.temp_url = o.url;
				}
				if(o.imageWidth){
					this.temp_imageWidth = o.imageWidth;
				}
				$("body").find('#imagePlayer_'+this.id).css('width',this.temp_imageWidth);
				if(o.imageHeight){
					this.temp_imageHeight = o.imageHeight;
				}
				$("body").find('#imagePlayer_'+this.id).css('height',this.temp_imageHeight);
				
				if(o.displayRect){
					this.setDisplayRect(o.displayRect);
				}
				if(o.containerID){
					this.temp_containerID = o.containerID;
				}else{
					this.temp_containerID = window.webapis.imageview.id;
				}
				if(o.zIndex){
					this.temp_zIndex = o.zIndex;
				}
				$("body").find('#imagePlayer_'+this.id).css('z-index',this.temp_zIndex);
				if(o.effect){
					this.temp_effect = o.effect;
				}
				if(o.status){
					this.temp_status = o.status;
				}
				this.temp_status = true;
				return true;
			}catch(e){
				this.temp_status = false;	
				return false;
				console.log(" Error init : "+e);
			}	
		};
		this.prepare = function(url, successCallback, errorCallback, option){
			try{
				if(url){
					this.temp_url = url;
					$("body").find('#imagePlayer_'+this.id).find('img').attr('src',this.temp_url);	
				}else{
					errorCallback({name:"image path not found."})
				}
				if(option.effect){
					this.temp_effect = option.effect;
				}
				if(option.width){
					this.temp_imageWidth = option.width;
					$("body").find('#imagePlayer_'+this.id).css('width',this.temp_imageWidth+'px');	
				}
				if(option.height){
					this.temp_imageHeight = option.height;
					$("body").find('#imagePlayer_'+this.id).css('height',this.temp_imageHeight+'px');
				}
				if (typeof successCallback == "function") {
					successCallback();
				}
			}catch(e){
				errorCallback({name:e});
			}	
		};
		this.draw = function(successCallback, errorCallback){
			try{
				if(this.temp_url){
					this.show();
					successCallback();
				}else{
					errorCallback({name:"Parameter is Invalid."})
				}
			}catch(e){
				errorCallback({name:e});
			}
		};
		this.setSlideShow = function(f){
			try{
				if(f){ //window.webapis.imageview.aImageViewList[obj].id
					if(this.imageInterval){
						clearInterval(this.imageInterval);
					}else{
						$("body").find('#imagePlayer_0').show();
					}
					this.imageInterval = setInterval(function(){
						if(!this.start || this.start>=window.webapis.imageview.aImageViewList.length){
							this.start = 0; 
						}
						var id = window.webapis.imageview.aImageViewList[this.start].id;
						if(window.webapis.imageview.aImageViewList.length==1){
							$("body").find('#imagePlayer_'+id).hide("slow",function(){
								$("body").find('#imagePlayer_'+id).show('slow');
							});
						}else{
							for(obj in window.webapis.imageview.aImageViewList){
								if(window.webapis.imageview.aImageViewList[obj].id == id){
									$("body").find('#imagePlayer_'+window.webapis.imageview.aImageViewList[obj].id).show();
								}else{
									$("body").find('#imagePlayer_'+window.webapis.imageview.aImageViewList[obj].id).hide();
								}
							}
						}
						
						this.start++;
					},5000);
				}else{
					clearInterval(this.imageInterval);
				}
				return true;
			}catch(e){
				return false;
			}	
		};
		this.setDisplayRect = function(rect){ //x,y aixs, width and heigth
			try{
				if (!_isType(rect, "object") || !_isType(rect.top, "number") || !_isType(rect.left, "number") || !_isType(rect.width, "number") || !_isType(rect.height, "number")) {
					return false;
				}
				temp_displayRect.top = (rect.top)?rect.top:0;
				temp_displayRect.left = (rect.left)?rect.left:0;
				$("body").find('#imagePlayer_'+this.id).css('top',rect.top);
				$("body").find('#imagePlayer_'+this.id).css('left',rect.left);
				this.temp_imageWidth = (rect.width)?rect.width:this.temp_imageWidth;
				temp_displayRect.width = this.temp_imageWidth;
				$("body").find('#imagePlayer_'+this.id).css('width',this.temp_imageWidth+"px");
				this.temp_imageHeight = (rect.height)?rect.height:this.temp_imageHeight;
				temp_displayRect.height = this.temp_imageHeight;
				$("body").find('#imagePlayer_'+this.id).css('height',this.temp_imageHeight+"px");
				return true;
			}catch(e){
				return false;
			}	
		};
		this.clear = function(){
			try{
				clearInterval(this.imageInterval);
				if(window.webapis.imageview.aImageViewList.length){
					for(obj in window.webapis.imageview.aImageViewList){
						$("body").find('#imagePlayer_'+window.webapis.imageview.aImageViewList[obj].id).remove();	
					}
					window.webapis.imageview.aImageViewList = [];
					window.webapis.imageview.id = -1;
					return true;
				}else{
					return false;
				}
			}catch(e){
				return false;
			}
		};
		this.show = function(){
			try{
				this.hide();
				$("body").find('#imagePlayer_'+this.id).show();
				return true;
			}catch(e){
				return false;
			}	
		};
		this.hide = function(){
			try{
				for(obj in window.webapis.imageview.aImageViewList){
					$("body").find('#imagePlayer_'+window.webapis.imageview.aImageViewList[obj].id).hide();
				}
				return true;
			}catch(e){
				return false;
			}	
		};
		this.getTransitionEffectList = function(){
			return [-1,1,2,3,4,5,6,7,8,9,0];
		};
	} 	
};
function _isType(c, a) {
	var b = "";
	if (c === null) {
		b = "null"
	} else {
		b = typeof c
	}
	return a.indexOf(b) != -1
}

window.webapis.displaycontrol = {
	MODE_3D_EFFECT_OFF : 0,
	MODE_3D_EFFECT_TOP_BOTTOM : 1,
	MODE_3D_EFFECT_SIDE_BY_SIDE : 2,
	MODE_3D_EFFECT_LINE_BY_LINE: 3,
	MODE_3D_EFFECT_VERTICAL_STRIPE  : 4,
	MODE_3D_EFFECT_FRAME_SEQUENCE : 5,
	MODE_3D_EFFECT_CHECKER_BD : 6,
	MODE_3D_EFFECT_FROM_2D_TO_3D : 7,
	MODE_3D_DEVICE_NOT_CONNECTED : -1,
	MODE_3D_NOT_SUPPORTED :  0,
	MODE_3D_ENABLE_OK :  1,
	get3DEffectMode :function(){
		return this.MODE_3D_EFFECT_OFF;
	}, 
	check3DModeEnable :function(){
		return this.MODE_3D_NOT_SUPPORTED;
	},
	get3DModeSupportList :function(successCallback, errorCallback){
		successCallback([]);
	}
};


function SRect(d, c, b, a) {
  this.left = d;
  this.top = c;
  this.width = b;
  this.height = a
}
SRect.prototype.toString = function () {
  return "SRect(left:" + this.left + ", top:" + this.top + ", width:" + this.width + ", height:" + this.height + ")"
};
function PlayTime(b) {
  this.millisecond = b;
  var a = parseInt(b / (3600 * 1000), 10);
  b -= a * (3600 * 1000);
  var c = parseInt(b / (60 * 1000), 10);
  b -= c * (60 * 1000);
  var d = parseInt(b / (1000), 10);
  this.timeString = (a > 9 ? a : "0" + a) + ":" + (c > 9 ? c : "0" + c) + ":" + (d > 9 ? d : "0" + d)
}
PlayTime.prototype.toString = function () {
  return this.timeString
};
(function () {
  var b = [];
  function a() {
    alert("[deviceapis] " + b.length + " onHide functions.");
    for (var e = 0; e < b.length; e++) {
      if (typeof b[e] == "function") {
        b[e]()
      }
    }
  }
  if (typeof window.onHide == "function") {
    b.push(window.onHide)
  }
  window.__defineGetter__("onHide", function () {
    return a
  });
  window.__defineSetter__("onHide", function (e) {
    //LDW> alert("[deviceapis] onHide function added.");
    console.log("[deviceapis] onHide function added.");
    b.push(e)
  });
  var c = [];
  function d() {
    alert("[deviceapis] " + c.length + " onShow functions.");
    for (var e = 0; e < c.length; e++) {
      if (typeof c[e] == "function") {
        c[e]()
      }
    }
  }
  if (typeof window.onShow == "function") {
    c.push(window.onShow)
  }
  window.__defineGetter__("onShow", function () {
    return d
  });
  window.__defineSetter__("onShow", function (e) {
    alert("[deviceapis] onShow function added.");
    c.push(e)
  })
})();
window.webapis.audiocontrol = {
	dtv_audio_volume : 10, //SISC
	dtv_audio_mute : false, //SISC
    dtv_audio_outputmode_index : 0, //SISC
	AUDIO_MODE_PCM : 0,
	AUDIO_MODE_DOLBY : 1,
	AUDIO_MODE_DTS : 2,
	AUDIO_SOUND_TYPE_UP : 1,
	AUDIO_SOUND_TYPE_DOWN : 2,
	AUDIO_SOUND_TYPE_LEFT : 3,
	AUDIO_SOUND_TYPE_RIGHT : 4,
	AUDIO_SOUND_TYPE_PAGE_LEFT : 5,
	AUDIO_SOUND_TYPE_PAGE_RIGHT : 6,
	AUDIO_SOUND_TYPE_BACK : 7,
	AUDIO_SOUND_TYPE_SELECT : 8,
	AUDIO_SOUND_TYPE_CANCEL : 9,
	AUDIO_SOUND_TYPE_WARNING : 10,
	AUDIO_SOUND_TYPE_KEYPAD : 11,
	AUDIO_SOUND_TYPE_KEYPAD_ENTER : 12,
	AUDIO_SOUND_TYPE_KEYPAD_DEL : 13,
	AUDIO_SOUND_TYPE_SMARTCONTROL_MOVE : 14,
	AUDIO_SOUND_TYPE_SMARTCONTROL_SELECT : 15,
	AUDIO_SOUND_TYPE_MOVE : 16,
	AUDIO_SOUND_TYPE_PREPARING : 17,
	AUDIO_SOUND_TYPE_SHUTTER_PICTURE : 18,
	AUDIO_SOUND_TYPE_SHUTTER_VIDEO : 19,
	setMute : function (mute) {
		//parent._system.audio_control.setMute(mute);
		if (typeof(isMute) == "boolean") this.dtv_audio_mute = isMute;
		return true;
	},
	getMute : function () {
		//return parent._system.audio_control.getMute();
		return this.dtv_audio_mute;
	},
	getVolume : function () {
		//return parent._system.audio_control.getVolume();
		return parseInt(this.dtv_audio_volume);
	},
	setVolume : function (volume) {
		//parent._system.audio_control.setVolume(volume);
		if (typeof(volume) == "number" && volume >= 0 && volume <= 100) this.dtv_audio_volume = volume;
		return true;
	},
	setVolumeUp : function () {
		//return parent._system.audio_control.setVolume(parent._system.audio_control.getVolume()+1);
		return this.setVolume(this.getVolume()+1);
	},
	setVolumeDown : function () {
		//return parent._system.audio_control.setVolume(parent._system.audio_control.getVolume()-1);
		return this.setVolume(this.getVolume()-1);
	},
	getOutputMode : function () {
		//return parent._system.audio_control.getOutputMode();
		return parseInt(this.dtv_audio_outputmode_index);
	},
	playSound : function () {
		alert('sound played');
	}
};


function _isType(c, a) {
  var b = "";
  if (c === null) {
    b = "null"
  } else {
    b = typeof c
  }
  return a.indexOf(b) != -1
}

(function () {
	window.webapis.avplay = {
		CONNECTION_FAILED : 1,
		AUTHENTICATION_FAILED : 2,
		STREAM_NOT_FOUND : 3,
		NETWORK_DISCONNECTED : 4,
		NETWORK_SLOW : 5,
		RENDER_ERROR : 6,
		RENDERING_START : 7,
		RENDERING_COMPLETE : 8,
		STREAM_INFO_READY : 9,
		DECODING_COMPLETE : 10,
		BUFFERING_START : 11,
		BUFFERING_COMPLETE : 12,
		BUFFERING_PROGRESS : 13,
		CURRENT_DISPLAY_TIME : 14,
		CURRENT_PLAYBACK_TIME : 14,
		AD_START : 15,
		AD_END : 16,
		RESOLUTION_CHANGED : 17,
		BITRATE_CHANGED : 18,
		SUBTITLE : 19,
		CUSTOM : 20,
		UNKNOWN_ERROR : 0,
		UNSUPPORTED_CONTAINER : 1,
		UNSUPPORTED_VIDEO_CODEC : 2,
		UNSUPPORTED_AUDIO_CODEC : 3,
		UNSUPPORTED_VIDEO_RESOLUTION : 4,
		UNSUPPORTED_VIDEO_FRAMERATE : 5,
		CURRUPTED_STREAM : 6,
		PLAY_STATE_IDLE : 0,
		PLAY_STATE_INITIALIZED : 1,
		PLAY_STATE_STOPPED : 2,
		PLAY_STATE_PREPARED : 3,
		PLAY_STATE_STARTED : 4,
		PLAY_STATE_PAUSED : 5,
		getAVPlay : function (successCallback, errorCallback) {
			if (!_isType(successCallback, "function") || !_isType(errorCallback, "undefined|function|null")) {
				throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
			}
			var iAVPlay = new _AVPlay(nId);
			alert("[AVPlay] getAVPlay() succeeded. -> " + nId + "th " + iAVPlay);
			aAVPlayInstance[nId] = iAVPlay;
			nId++;
			successCallback(iAVPlay)
		},
		_getAllInstance : function () {
			return aAVPlayInstance
		},
		_destroyAll : function () {
			var aInstance = window.webapis.avplay._getAllInstance();
			alert("[AVPlay] _destroyAll() with " + aInstance.length + " instances.");
			for (var i = 0; i < aInstance.length; i++) {
				alert("[AVPlay] Destroy " + i + "th avplay.");
				aInstance[i].destroy()
			}
		}
	};
	var nId = 0,
	aAVPlayInstance = [];
	window.onHide = window.webapis.avplay._destroyAll;
	function _setDefaultRect() {
		var rect = new SRect(0, 0, curWidget.width, curWidget.height);
		return rect
	}
	function _AVPlay(id) {
		var sName = "AVPlay" + id;
		var sVersion = "3.0";
		var tempUrl = 'url';
		var tempDuration = 0;
		var tempVideoWidth = 0;
		var tempVideoHeight = 0;
		var tempDisplayRect = null;
		var tempZIndex = 0;
		var tempContainerID = '0';
		var tempTotalNumOfVideo = 1;
		var tempTotalNumOfAudio = 1;
		var tempTotalNumOfSubtitle = 0;
		this.__defineGetter__("id", function () {
			return id
		});
		this.__defineGetter__("url", function () {
			return tempUrl
		});
		this.__defineGetter__("duration", function () {
			return tempDuration
		});
		this.__defineGetter__("videoWidth", function () {
			return tempVideoWidth;
		});
		this.__defineGetter__("videoHeight", function () {
			return tempVideoHeight;
		});
		this.__defineGetter__("displayRect", function () {
			return iDisplayRect
		});
		this.__defineGetter__("displayArea", function () {
			return null
		});
		this.__defineGetter__("containerID", function () {
			return tempContainerID
		});
		this.__defineGetter__("zIndex", function () {
			return tempZIndex;
		});
		this.__defineGetter__("cropArea", function () {
			return null
		});
		this.__defineGetter__("totalNumOfVideo", function () {
			return tempTotalNumOfVideo
		});
		this.__defineGetter__("totalNumOfAudio", function () {
			return tempTotalNumOfAudio
		});
		this.__defineGetter__("totalNumOfSubtitle", function () {
			return tempTotalNumOfSubtitle
		});
		this.__defineGetter__("mode3D", function () {
			return null
		});
		this.__defineGetter__("totalBufferSize", function () {
			return -1
		});
		this.__defineGetter__("pendingBufferSize", function () {
			return -1
		});
		this.__defineGetter__("initialBufferSize", function () {
			return -1
		});
		this.__defineGetter__("macrovision", function () {
			return false
		});
		this.__defineGetter__("status", function () {
			return window.webapis.avplay.PLAY_STATE_IDLE
		});
		this.__defineGetter__("authHeader", function () {
			return "basic"
		});
		var avUrl = '';
		/*var displayRect = {
			left : 0,
			top : 0,
			width : 960,
			height : 540
		};*/
		this.init = function (option) {
			alert("[AVPlay" + id + "] init(" + option + ")");
			option = option || {};
			sf.service.VideoPlayer.init({
				onend : function(){
					sf.service.VideoPlayer.stop();
				}
			});
			if(option.displayRect){
				this.displayRect.width = option.displayRect.width;
				this.displayRect.height = option.displayRect.height;
				this.displayRect.left = option.displayRect.left;
				this.displayRect.top = option.displayRect.top;
			}else{
				this.displayRect.width = 960;
				this.displayRect.height = 540;
				this.displayRect.left = 0;
				this.displayRect.top = 0;
			}
			if(option.containerID){
				tempContainerID = option.containerID;
			}else{
				tempContainerID = '0';
			}
			
			if(option.zIndex){
				tempZIndex = option.zIndex;
			}else{
				tempZIndex = 0;
			}
			alert('****************************this.containerID = '+this.containerID+' test = '+(!!option.containerID));
			sf.service.VideoPlayer.show();
			$('div[data-role="dtvVideoPlayer"]').css('background','#000');
			oInitOption = option || {};
			return true;
		};
		this.open = function (url, option) {
			alert("[AVPlay" + id + "] open(" + url + "," + (option ? option : "") + ")");
			alert('url = '+avUrl);
			avUrl = url;
			alert('url = '+avUrl);
			return true;
		};
		this.play = function (succCB, errCB, sec) {
			alert("[AVPlay" + id + "] play(" + typeof succCB + "," + typeof errCB + "," + (sec !== undefined ? sec : "") + ")");
			sf.service.VideoPlayer.play({
				url:avUrl
			});
			alert('this.displayRect = '+JSON.stringify(this.displayRect));
			this.setDisplayRect(this.displayRect);
			html5VideoObj = document.querySelectorAll("div[data-role='dtvVideoPlayer'] video")[0];
			tempDuration = html5VideoObj.duration;
			html5VideoCurrTimeInterval = setInterval(_html5VideoCurrPlayTime,1000);
			succCB();
		};
		this.stop = function () {
			alert("[AVPlay" + id + "] stop()");
			clearInterval(html5VideoCurrTimeInterval);
			sf.service.VideoPlayer.stop();
			return true;
		};
		this.pause = function () {
			alert("[AVPlay" + id + "] pause()");
			html5VideoObj.pause();
			return true;
		};
		this.resume = function () {
			alert("[AVPlay" + id + "] resume()");
			html5VideoObj.play();
			return true;
		};
		this.jumpForward = function (sec) {
			alert("[AVPlay" + id + "] jumpForward(" + sec + ")");
			if(html5VideoObj != null){
			if( html5VideoObj.currentTime+sec < html5VideoObj.duration )
				html5VideoObj.currentTime = parseInt(html5VideoObj.currentTime+sec);
				return true;
			}
			else{
				return false;
			}
			
		};
		this.jumpBackward = function (sec) {
			alert("[AVPlay" + id + "] jumpBackward(" + sec + ")");
			if(html5VideoObj != null){
				if( html5VideoObj.currentTime-sec > 0 )
					html5VideoObj.currentTime = parseInt(html5VideoObj.currentTime-sec);
				else html5VideoObj.currentTime = 0;
				return true;
			}
			else{
				return false;
			}	
		};
		this.setSpeed = function (speed) {
			alert("[AVPlay" + id + "] setSpeed(" + speed + ")");
		};
		this.setAudioStreamID = function (index) {
			alert("[AVPlay" + id + "] setAudioStreamID(" + index + ")");
		};
		this.setSubtitleStreamID = function (index) {
			alert("[AVPlay" + id + "] setSubtitleStreamID(" + index + ")");
		};
		this.getCurrentBitrate = function () {
			alert("[AVPlay" + id + "] getCurrentBitrate()");
			return 128;
		};
		this.getAvailableBitrates = function () {
			alert("[AVPlay" + id + "] getAvailableBitrates()");
			return [128,346];
		};
		this.startSubtitle = function (option) {
			alert("[AVPlay" + id + "] startSubtitle(" + option + ")");
		};
		this.stopSubtitle = function () {
			alert("[AVPlay" + id + "] stopSubtitle()");
		};
		this.setSubtitleSync = function (millisec) {
			alert("[AVPlay" + id + "] setSubtitleSync(" + millisec + ")");
		};
		this.setDisplayRect = function (rect) {
			alert("[AVPlay" + id + "] setDisplayRect(" + JSON.stringify(rect) + ")");
			//this.displayRect = rect;
			this.displayRect.width = rect.width;
			this.displayRect.height = rect.height;
			this.displayRect.left = rect.left;
			this.displayRect.top = rect.top;
			$('div[data-role="dtvVideoPlayer"] video').css({'width':this.displayRect.width+'px','height':this.displayRect.height+'px'});
			$('div[data-role="dtvVideoPlayer"]').css({'left':this.displayRect.left+'px','top':this.displayRect.top+'px'});
			return true;
		};
		this.clear = function () {
			alert("[AVPlay" + id + "] clear()");
		};
		this.show = function () {
			alert("[AVPlay" + id + "] show()");
			sf.service.VideoPlayer.show();
		};
		this.hide = function () {
			alert("[AVPlay" + id + "] hide()");
			sf.service.VideoPlayer.hide();
		};
		this.getZIndex = function () {
			alert("[AVPlay" + id + "] getZIndex()");
			if (!bInitialize) {
				alert("[AVPlay" + id + "] Do init() first..");
				return false
			}
			alert("[AVPlay" + id + "] getZIndex() returns " + this.zIndex);
			return this.zIndex
		};
		this.setZIndex = function (zIndex) {
			alert("[AVPlay" + id + "] setZIndex(" + zIndex + ")");
			if (!bInitialize) {
				alert("[AVPlay" + id + "] Do init() first..");
				return false
			}
			if (!_isType(zIndex, "number")) {
				throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
			}
			document.getElementById(PLAYER_CONTAINER_DIV_ID + id).style.zIndex = zIndex
		};
		this.getVolume = function () {
			alert("[AVPlay" + id + "] getVolume()");
			if (!bInitialize) {
				alert("[AVPlay" + id + "] Do init() first..");
				return false
			}
			if (this.status != window.webapis.avplay.PLAY_STATE_STARTED && this.status != window.webapis.avplay.PLAY_STATE_PAUSED) {
				alert("[AVPlay" + id + "] getVolume() is available on PLAY_STATE_STARTED or PLAY_STATE_PAUSED.");
				return false
			}
			alert("[AVPlay" + id + "] getVolume() returns " + nVolume);
			return nVolume
		};
		this.setVolume = function (volume) {
			alert("[AVPlay" + id + "] setVolume(" + volume + ")");
			if (!_isType(volume, "number")) {
				throw ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.TYPE_MISMATCH_ERR)
			}
			if (!bInitialize) {
				alert("[AVPlay" + id + "] Do init() first..");
				return false
			}
			if (this.status != window.webapis.avplay.PLAY_STATE_STARTED && this.status != window.webapis.avplay.PLAY_STATE_PAUSED) {
				alert("[AVPlay" + id + "] setVolume() is available on PLAY_STATE_STARTED or PLAY_STATE_PAUSED.");
				return false
			}
			var retValue = window.webapis._plugin(ePlayerPlugin, "SetVolume", volume);
			if (retValue == 1) {
				nVolume = volume
			}
			alert("[AVPlay" + id + "] setVolume(" + volume + ") returns " + (retValue == 1));
			return retValue == 1
		};
		this.setCropArea = function (successCallback, errorCallback, rect) {
			alert("[AVPlay" + id + "] setCropArea(" + typeof successCallback + "," + typeof errorCallback + "," + rect + ")");
			if (!bInitialize) {
				alert("[AVPlay" + id + "] Do init() first..");
				return false
			}
			var retValue = window.webapis._plugin(ePlayerPlugin, "SetCropArea", rect.left, rect.top, rect.width, rect.height);
			if (retValue == window.webapis._pluginDef.PLR_NOT_IMPLEMENT) {
				alert("[AVPlay" + id + "] Not support API : setCropArea()");
				errorCallback(new ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_SUPPORTED_ERR))
			} else {
				alert("[AVPlay" + id + "] setCropArea(" + rect + ") returns " + (retValue == 1));
				this.__defineGetter__("cropArea", function () {
					return rect
				});
				successCallback()
			}
			alert("[AVPlay" + id + "] setCropArea() returns " + (retValue == 1));
			return retValue == 1
		};
		this.setDisplayArea = function (rect) {
			alert("[AVPlay" + id + "] setDisplayArea(" + rect + ")");
			if (!bInitialize) {
				alert("[AVPlay" + id + "] Do init() first..");
				return false
			}
			var retValue = null;
			if (oPluginVer.isSEF) {
				retValue = window.webapis._plugin(ePlayerPlugin, "SetDisplayArea", rect.left, rect.top, rect.width, rect.height, curWidget.height)
			} else {
				var resolutionConstant;
				if (curWidget.height == 540) {
					resolutionConstant = 1
				} else {
					if (curWidget.height == 720) {
						resolutionConstant = 0.75
					} else {
						if (curWidget.height == 1080) {
							resolutionConstant = 0.5
						} else {
							resolutionConstant = 1
						}
					}
				}
				var nLeft = Math.round(rect.left * resolutionConstant);
				var nTop = Math.round(rect.top * resolutionConstant);
				var nWidth = Math.round(rect.width * resolutionConstant);
				var nHeight = Math.round(rect.height * resolutionConstant);
				retValue = window.webapis._plugin(ePlayerPlugin, "SetDisplayArea", nLeft, nTop, nWidth, nHeight)
			}
			this.__defineGetter__("displayArea", function () {
				return rect
			});
			return retValue
		};
		this.getDuration = function () {
			var retValue = window.webapis._plugin(ePlayerPlugin, "GetDuration");
			alert("[AVPlay" + id + "] getDuration() returns " + retValue);
			this.__defineGetter__("duration", function () {
				return retValue
			});
			return retValue
		};
		this.getVideoResolution = function () {
			var retValue = null;
			if (oPluginVer.isSEF) {
				retValue = window.webapis._plugin(ePlayerPlugin, "GetVideoResolution")
			} else {
				retValue = ePlayerPlugin.GetVideoWidth() + "|" + ePlayerPlugin.GetVideoHeight()
			}
			alert("[AVPlay" + id + "] getVideoResolution() returns " + retValue);
			return retValue
		};
		this.getTotalNumOfStreamID = function (streamType) {
			var retValue = window.webapis._plugin(ePlayerPlugin, "GetTotalNumOfStreamID", streamType);
			if (retValue == window.webapis._pluginDef.PLR_NOT_IMPLEMENT) {
				alert("[AVPlay" + id + "] Not support API : getTotalNumOfStreamID()")
			} else {
				alert("[AVPlay" + id + "] getTotalNumOfStreamID(" + streamType + ") returns " + retValue);
				return retValue
			}
		};
		this.setStreamID = function (streamType, index) {
			var retValue = window.webapis._plugin(ePlayerPlugin, "SetStreamID", streamType, index);
			if (retValue == window.webapis._pluginDef.PLR_NOT_IMPLEMENT) {
				alert("[AVPlay" + id + "] Not support API : setStreamID()")
			} else {
				alert("[AVPlay" + id + "] setStreamID(" + streamType + "," + index + ") returns " + (retValue == 1));
				return retValue == 1
			}
		};
		this.getStreamLanguageInfo = function (streamType, index) {
			var retValue = window.webapis._plugin(ePlayerPlugin, "GetStreamLanguageInfo", streamType, index);
			if (retValue == window.webapis._pluginDef.PLR_NOT_IMPLEMENT) {
				alert("[AVPlay" + id + "] Not support API : getStreamLanguageInfo()")
			} else {
				alert("[AVPlay" + id + "] getStreamLanguageInfo(" + streamType + "," + index + ") returns " + retValue);
				return retValue
			}
		};
		this.getStreamExtraData = function (streamType, index) {
			var retValue = window.webapis._plugin(ePlayerPlugin, "GetStreamExtraData", streamType, index);
			if (retValue == window.webapis._pluginDef.PLR_NOT_IMPLEMENT) {
				alert("[AVPlay" + id + "] Not support API : getStreamExtraData()")
			} else {
				alert("[AVPlay" + id + "] getStreamExtraData(" + streamType + "," + index + ") returns " + retValue);
				return retValue
			}
		};
		this.setPlayerProperty = function (propertyType, param1, param2) {
			var retValue = window.webapis._plugin(ePlayerPlugin, "SetPlayerProperty", propertyType, param1, param2);
			if (retValue == window.webapis._pluginDef.PLR_NOT_IMPLEMENT) {
				alert("[AVPlay" + id + "] Not support API : setPlayerProperty()")
			} else {
				alert("[AVPlay" + id + "] setPlayerProperty(" + propertyType + "," + param1 + "," + param2 + ") returns " + (retValue == 1));
				return retValue == 1
			}
		};
		this.setTotalBufferSize = function (bytes) {
			this.__defineGetter__("totalBufferSize", function () {
				return bytes
			});
			var retValue = window.webapis._plugin(ePlayerPlugin, "SetTotalBufferSize", bytes);
			alert("[AVPlay" + id + "] setTotalBufferSize(" + bytes + ") returns " + (retValue == 1));
			return retValue == 1
		};
		this.setInitialBufferSize = function (bytes) {
			this.__defineGetter__("initialBufferSize", function () {
				return bytes
			});
			var retValue = null;
			if (oPluginVer.isSEF) {
				retValue = window.webapis._plugin(ePlayerPlugin, "SetInitialBufferSize", bytes)
			} else {
				retValue = window.webapis._plugin(ePlayerPlugin, "SetInitialBuffer", bytes)
			}
			alert("[AVPlay" + id + "] setInitialBufferSize(" + bytes + ") returns " + (retValue == 1));
			return retValue == 1
		};
		this.setPendingBufferSize = function (bytes) {
			this.__defineGetter__("pendingBufferSize", function () {
				return bytes
			});
			var retValue = null;
			if (oPluginVer.isSEF) {
				retValue = window.webapis._plugin(ePlayerPlugin, "SetPendingBufferSize", bytes)
			} else {
				retValue = window.webapis._plugin(ePlayerPlugin, "SetPendingBuffer", bytes)
			}
			alert("[AVPlay" + id + "] setPendingBufferSize(" + bytes + ") returns " + (retValue == 1));
			return retValue == 1
		};
		this.setOutputDOT = function (disable) {
			var retValue = window.webapis._plugin(ePlayerPlugin, "SetOutputDOT", (disable ? 1 : 0));
			if (retValue == window.webapis._pluginDef.PLR_NOT_IMPLEMENT) {
				alert("[AVPlay" + id + "] Not support API : setOutputDOT()")
			} else {
				alert("[AVPlay" + id + "] setOutputDOT(" + disable + ") returns " + (retValue == 1));
				return retValue == 1
			}
		};
		this.setMacrovision = function (macrovisionLevel) {
			var retValue = window.webapis._plugin(ePlayerPlugin, "SetMacrovision", macrovisionLevel);
			alert("[AVPlay" + id + "] setMacrovision(" + macrovisionLevel + ") returns " + (retValue == 1));
			return retValue == 1
		};
		this.setVBIData = function (macrovisionType, cgmsType) {
			var retValue = window.webapis._plugin(ePlayerPlugin, "SetVBIData", macrovisionType, cgmsType);
			alert("[AVPlay" + id + "] setVBIData(" + macrovisionType + "," + cgmsType + ") returns " + (retValue == 1));
			return retValue == 1
		};
		this.setICT = function (on) {
			var retValue = window.webapis._plugin(ePlayerPlugin, "SetICT", on);
			alert("[AVPlay" + id + "] setICT(" + on + ") returns " + (retValue == 1));
			return retValue == 1
		};
		var html5VideoObj = null;
		var html5VideoCurrTimeInterval = null;
		function _html5VideoCurrPlayTime (){/*implementation of HTML5 video current time callback*/
			alert('[S1] currentPlayTime called  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'+html5VideoObj.currentTime);
			alert('[S1] html5VideoObj = '+html5VideoObj.tagName);
			alert("duration ============================================== "+html5VideoObj.duration);
			if( html5VideoObj.currentTime >= html5VideoObj.duration ){
				alert('[S1] playback completed..........');
				clearInterval(html5VideoCurrTimeInterval);
				oInitOption.playCallback.onstreamcompleted();
			}else{
				oInitOption.playCallback.oncurrentplaytime(_getFormattedDuration(parseInt(html5VideoObj.currentTime)));
			}
		}
		function _getFormattedDuration ( time ) {
			var mh = ''+parseInt(time /(60*60));
			var mm = ''+parseInt((time %(60*60))/60);
			var ms = ''+(time %(60*60*60))%60;
			if(mh.length < 2) mh = 0+mh;
			if(mm.length < 2) mm = 0+mm;
			if(ms.length < 2) ms = 0+ms;
			return mh + ':' + mm + ':' + ms;
		}
		this.PROPERTY_TYPE_COOKIE = 1;
		this.PROPERTY_TYPE_3D = 2;
		this.PROPERTY_TYPE_PLAY_READY_CUSTOM_DATA = 3;
		this.PROPERTY_TYPE_PLAY_READY_LICENSE_SERVER = 4;
		this.PROPERTY_TYPE_MP3_LIVE_STREAM = 5;
		this.PROPERTY_TYPE_AUTH_BASIC = 7;
		this.APS_ALL_OFF = 0;
		this.APS_AGC_ON_ONLY = 1;
		this.APS_AGC_ON_CS_2L = 2;
		this.APS_AGC_ON_CS_4L = 3;
		this.CGMS_COPY_FREE = 0;
		this.CGMS_COPY_NO_MORE = 1;
		this.CGMS_COPY_ONCE = 2;
		this.CGMS_COPY_NEVER = 3;
		this.ICT_OFF = 0;
		this.ICT_ON = 1;
		var PLAYER_OBJECT_ID = "_plugin_Player_";
		var PLAYER_OBJECT_Z_INDEX = 10;
		var PLAYER_CONTAINER_DIV_ID = "_pluginObjectPlayerContainer_";
		var PLAYER_CONTAINER_DIV_Z_INDEX = 10;
		var self = this;
		var ePlayerPlugin = null;
		var eInnerContainerDiv = null;
		var bInitialize = false;
		var iDisplayRect = new _setDefaultRect();
		var bAutoRatio = true;
		var bFrontPanelLock = false;
		var cbOnSubtitle = null;
		var bBlockSubtitleEvent = false;
		var cbOnPlaySuccess = null;
		var oInitOption = {};
		var oPlayOption = {};
		var nSubtitleSyncTime = 0;
		var bSubtitleAvailable = null;
		var nFirmwareYear = null;
		var nFirmwareVer = null;
		var oPluginVer = null;
		var iFrontPanel = null;
		var bBDPlayer = null;
		var iCurrentPlayTime = null;
		var nVolume = 100;
		this.Event2String = {};
		this.Event2String[window.webapis.avplay.CONNECTION_FAILED] = "CONNECTION_FAILED";
		this.Event2String[window.webapis.avplay.AUTHENTICATION_FAILED] = "AUTHENTICATION_FAILED";
		this.Event2String[window.webapis.avplay.STREAM_NOT_FOUND] = "STREAM_NOT_FOUND";
		this.Event2String[window.webapis.avplay.NETWORK_DISCONNECTED] = "NETWORK_DISCONNECTED";
		this.Event2String[window.webapis.avplay.NETWORK_SLOW] = "NETWORK_SLOW";
		this.Event2String[window.webapis.avplay.RENDER_ERROR] = "RENDER_ERROR";
		this.Event2String[window.webapis.avplay.RENDERING_START] = "RENDERING_START";
		this.Event2String[window.webapis.avplay.RENDERING_COMPLETE] = "RENDERING_COMPLETE";
		this.Event2String[window.webapis.avplay.STREAM_INFO_READY] = "STREAM_INFO_READY";
		this.Event2String[window.webapis.avplay.DECODING_COMPLETE] = "DECODING_COMPLETE";
		this.Event2String[window.webapis.avplay.BUFFERING_START] = "BUFFERING_START";
		this.Event2String[window.webapis.avplay.BUFFERING_COMPLETE] = "BUFFERING_COMPLETE";
		this.Event2String[window.webapis.avplay.BUFFERING_PROGRESS] = "BUFFERING_PROGRESS";
		this.Event2String[window.webapis.avplay.CURRENT_PLAYBACK_TIME] = "CURRENT_PLAYBACK_TIME";
		this.Event2String[window.webapis.avplay.AD_START] = "AD_START";
		this.Event2String[window.webapis.avplay.AD_END] = "AD_END";
		this.Event2String[window.webapis.avplay.RESOLUTION_CHANGED] = "RESOLUTION_CHANGED";
		this.Event2String[window.webapis.avplay.BITRATE_CHANGED] = "BITRATE_CHANGED";
		this.Event2String[window.webapis.avplay.SUBTITLE] = "SUBTITLE";
		this.Event2String[window.webapis.avplay.CUSTOM] = "CUSTOM";
		this.State2String = {};
		this.State2String[window.webapis.avplay.PLAY_STATE_IDLE] = "PLAY_STATE_IDLE";
		this.State2String[window.webapis.avplay.PLAY_STATE_INITIALIZED] = "PLAY_STATE_INITIALIZED";
		this.State2String[window.webapis.avplay.PLAY_STATE_STOPPED] = "PLAY_STATE_STOPPED";
		this.State2String[window.webapis.avplay.PLAY_STATE_PREPARED] = "PLAY_STATE_PREPARED";
		this.State2String[window.webapis.avplay.PLAY_STATE_STARTED] = "PLAY_STATE_STARTED";
		this.State2String[window.webapis.avplay.PLAY_STATE_PAUSED] = "PLAY_STATE_PAUSED";
		function initialize(containerID, zIndex, pluginObjectID) {
			alert("[AVPlay" + id + "] initialize(" + (containerID || "") + "," + (zIndex || "") + "," + (pluginObjectID || "") + ")");
			var sFirmware = window.webapis._plugin("NNavi", "GetFirmware");
			alert("[AVPlay" + id + "] Firmware : " + sFirmware);
			var aResult = sFirmware.match(/(\d+)-(\d+)/);
			nFirmwareYear = aResult[1];
			nFirmwareVer = aResult[2];
			self.setPlayerPluginObject(containerID, zIndex, pluginObjectID);
			if (nFirmwareYear >= 2012) {
				window.addEventListener("unload", function () {
					alert("[AVPlay" + id + "] !!!WINDOW UNLOAD!!!");
					self.destroy()
				})
			} else {
				document.getElementsByTagName("body")[0].addEventListener("unload", self.destroy)
			}
			window.webapis._plugin("TVMW", "GetVersion");
			iFrontPanel = new FrontPanel();
			bBDPlayer = window.webapis.tv.info.getProduct() == window.webapis.tv.info.PRODUCT_TYPE_BD;
			oPluginVer = window.webapis._plugin(ePlayerPlugin, "GetVersion");
			bInitialize = true
		}
		function initializeEnv() {
			bBlockSubtitleEvent = false;
			this.__defineGetter__("url", function () {
				return null
			});
			this.__defineGetter__("duration", function () {
				return null
			});
			this.__defineGetter__("videoWidth", function () {
				return null
			});
			this.__defineGetter__("videoHeight", function () {
				return null
			});
			this.__defineGetter__("displayArea", function () {
				return null
			});
			this.__defineGetter__("cropArea", function () {
				return null
			});
			this.__defineGetter__("totalNumOfVideo", function () {
				return null
			});
			this.__defineGetter__("totalNumOfAudio", function () {
				return null
			});
			this.__defineGetter__("totalNumOfSubtitle", function () {
				return null
			});
			this.__defineGetter__("mode3D", function () {
				return null
			});
			this.__defineGetter__("totalBufferSize", function () {
				return -1
			});
			this.__defineGetter__("pendingBufferSize", function () {
				return -1
			});
			this.__defineGetter__("initialBufferSize", function () {
				return -1
			});
			this.__defineGetter__("macrovision", function () {
				return false
			})
		}
		this.destroy = function () {
			alert("[AVPlay" + id + "] destroy()");
			self.stop()
		};
		this._setStatus = function (status) {
			alert("[AVPlay" + id + "] _setStatus(" + status + ") -> " + this.State2String[status]);
			this.__defineGetter__("status", function () {
				return status
			})
		};
		this.setPlayerPluginObject = function (containerID, zIndex, pluginObjectID) {
			alert("[AVPlay" + id + "] setPlayerPluginObject(" + (containerID ? containerID : "") + "," + (zIndex ? zIndex : "") + "," + (pluginObjectID ? pluginObjectID : "") + ")");
			alert("[AVPlay" + id + "] old ePlayerPlugin : " + ePlayerPlugin);
			if (ePlayerPlugin) {
				this.stop();
				ePlayerPlugin.parentNode.removeChild(ePlayerPlugin);
				ePlayerPlugin = null
			}
			if (pluginObjectID) {
				var ePluginObject = document.getElementById(pluginObjectID);
				if (ePluginObject) {
					window.webapis._plugin(ePluginObject, "Stop");
					ePluginObject.parentNode.removeChild(ePluginObject)
				}
			}
			var innerContainer = document.createElement("div");
			innerContainer.id = PLAYER_CONTAINER_DIV_ID + id;
			innerContainer.style.position = "absolute";
			innerContainer.style.left = "0px";
			innerContainer.style.top = "0px";
			innerContainer.style.width = "0px";
			innerContainer.style.height = "0px";
			innerContainer.style.zIndex = (zIndex !== undefined && zIndex !== null) ? zIndex : PLAYER_CONTAINER_DIV_Z_INDEX;
			if (containerID) {
				var eContainerDiv = document.getElementById(containerID);
				if (eContainerDiv) {
					eContainerDiv.appendChild(innerContainer);
					this.__defineGetter__("containerID", function () {
						return containerID
					})
				} else {
					alert("[AVPlay" + id + "] !ERROR! cannot get " + containerID + " element.");
					ePlayerPlugin = null;
					return
				}
			} else {
				document.body.appendChild(innerContainer);
				this.__defineGetter__("containerID", function () {
					return innerContainer.id
				})
			}
			var bUseSEF = window.webapis._plugin.getSEFAvailable();
			var sPluginObjectId = pluginObjectID || PLAYER_OBJECT_ID;
			var sZIndex = "z-index:" + PLAYER_OBJECT_Z_INDEX + ";";
			eInnerContainerDiv = document.getElementById(PLAYER_CONTAINER_DIV_ID + id);
			eInnerContainerDiv.innerHTML = getPluginObjectHTML(bUseSEF, sPluginObjectId, sZIndex);
			ePlayerPlugin = document.getElementById(sPluginObjectId);
			this.__defineGetter__("zIndex", function () {
				return innerContainer.style.zIndex
			});
			if (ePlayerPlugin) {
				var strEval = "PlayerEventListener" + id + " = new _PlayerEventListener(" + id + ", this)";
				eval(strEval);
				if (bUseSEF) {
					ePlayerPlugin.Open("Player", "1.000", "Player");
					ePlayerPlugin.OnEvent = "PlayerEventListener" + id + ".onEvent"
				} else {
					ePlayerPlugin.OnBufferingStart = "PlayerEventListener" + id + ".onBufferingStart";
					ePlayerPlugin.OnBufferingComplete = "PlayerEventListener" + id + ".onBufferingComplete";
					ePlayerPlugin.OnBufferingProgress = "PlayerEventListener" + id + ".onBufferingProgress";
					ePlayerPlugin.OnRenderingComplete = "PlayerEventListener" + id + ".onRenderingComplete";
					ePlayerPlugin.OnStreamInfoReady = "PlayerEventListener" + id + ".onStreamInfoReady";
					ePlayerPlugin.OnCurrentPlayTime = "PlayerEventListener" + id + ".onCurrentPlayTime";
					ePlayerPlugin.OnRenderError = "PlayerEventListener" + id + ".onRenderError";
					ePlayerPlugin.OnNetworkDisconnected = "PlayerEventListener" + id + ".onNetworkDisconnected";
					ePlayerPlugin.OnConnectionFailed = "PlayerEventListener" + id + ".onConnectionFailed";
					ePlayerPlugin.OnStreamNotFound = "PlayerEventListener" + id + ".onStreamNotFound";
					ePlayerPlugin.OnAuthenticationFailed = "PlayerEventListener" + id + ".onAuthenticationFailed";
					ePlayerPlugin.OnResolutionChanged = "PlayerEventListener" + id + ".onResolutionChanged";
					ePlayerPlugin.OnAdStart = "PlayerEventListener" + id + ".onAdStart";
					ePlayerPlugin.OnAdEnd = "PlayerEventListener" + id + ".onAdEnd"
				}
			} else {
				alert("[AVPlay" + id + "] ! ERROR ! Fail to set Player plugin object.")
			}
			return ePlayerPlugin;
			function getPluginObjectHTML(useSEF, pluginObjectID, zIndex) {
				var sPluginObjectHTML = "";
				if (useSEF) {
					sPluginObjectHTML = '<OBJECT id="' + pluginObjectID + '" classid="clsid:SAMSUNG-INFOLINK-SEF" style="position:absolute;left:0px;top:0px;width:0px;height:0px;' + zIndex + 'display:block;"></OBJECT>'
				} else {
					sPluginObjectHTML = '<OBJECT id="' + pluginObjectID + '" classid="clsid:SAMSUNG-INFOLINK-PLAYER" style="position:absolute;left:0px;top:0px;width:0px;height:0px;' + zIndex + 'display:block;"></OBJECT>'
				}
				alert("[AVPlay" + id + "] getPluginObjectHTML(" + pluginObjectID + "," + zIndex + ") returns " + sPluginObjectHTML);
				return sPluginObjectHTML
			}
		};
		function getIPAddr() {
			var nNetworkInterface = window.webapis._plugin("Network", "GetActiveType");
			var sIPAddr = window.webapis._plugin("Network", "GetIP", nNetworkInterface);
			alert("getIPAddr() returns " + sIPAddr);
			return sIPAddr
		}
		this.getSubtitleAvailable = function () {
			if (bSubtitleAvailable === null) {
				if (nFirmwareYear == 2012 || (nFirmwareYear == 2011 && nFirmwareVer >= 1006)) {
					bSubtitleAvailable = true
				} else {
					bSubtitleAvailable = false
				}
			}
			if (!bSubtitleAvailable) {
				alert("[AVPlay" + id + '] Not Support Subtitle function! It is available with "T-INFOLINK2011-1006" or later.')
			}
			alert("[AVPlay" + id + "] getSubtitleAvailable() returns " + bSubtitleAvailable);
			return bSubtitleAvailable
		};
		this.onEvent = function (type, data) {
			switch (type) {
			case window.webapis.avplay.STREAM_INFO_READY:
				var resolution = this.getVideoResolution();
				if (typeof resolution == "string") {
					resolution = resolution.split("|");
					if (oPlayOption.displayArea) {
						this.setDisplayArea(oPlayOption.displayArea)
					} else {
						if (bAutoRatio) {
							var fitDisplayArea = this.getFitDisplayArea(resolution[0], resolution[1]);
							this.setDisplayArea(fitDisplayArea)
						}
					}
					this.__defineGetter__("videoWidth", function () {
						return resolution[0]
					});
					this.__defineGetter__("videoHeight", function () {
						return resolution[1]
					})
				} else {
					this.__defineGetter__("videoWidth", function () {
						return null
					});
					this.__defineGetter__("videoHeight", function () {
						return null
					})
				}
				var nDuration = this.getDuration();
				var nTotalNumOfAudio = this.getTotalNumOfStreamID(1);
				var nTotalNumOfSubtitle = this.getTotalNumOfStreamID(5);
				this.__defineGetter__("totalNumOfAudio", function () {
					return nTotalNumOfAudio
				});
				this.__defineGetter__("totalNumOfSubtitle", function () {
					return nTotalNumOfSubtitle
				});
				if (oPlayOption.macrovision && oPlayOption.macrovision.type !== undefined && oPlayOption.macrovision.ict !== undefined && oPlayOption.macrovision.vbi !== undefined) {
					this.setMacrovision(oPlayOption.macrovision.type);
					this.setVBIData(oPlayOption.macrovision.type, oPlayOption.macrovision.vbi);
					this.setICT(oPlayOption.macrovision.ict);
					this.__defineGetter__("macrovision", function () {
						return true
					})
				} else {
					this.__defineGetter__("macrovision", function () {
						return false
					})
				}
				if (oPlayOption.subtitle) {
					this.startSubtitle(oPlayOption.subtitle)
				}
				if (typeof cbOnPlaySuccess == "function") {
					cbOnPlaySuccess()
				}
				break;
			case window.webapis.avplay.BUFFERING_START:
				if (this.status == window.webapis.avplay.PLAY_STATE_STOPPED) {
					alert("[AVPlay" + id + "] This BUFFERING_START event occured after stop() call. skip.");
					return
				}
				this._setStatus(window.webapis.avplay.PLAY_STATE_STARTED);
				if (oInitOption.bufferingCallback) {
					if (typeof oInitOption.bufferingCallback.onbufferingstart == "function") {
						oInitOption.bufferingCallback.onbufferingstart()
					}
				}
				break;
			case window.webapis.avplay.BUFFERING_PROGRESS:
				if (this.status == window.webapis.avplay.PLAY_STATE_STOPPED) {
					alert("[AVPlay" + id + "] This BUFFERING_PROGRESS event occured after stop() call. skip.");
					return
				}
				if (oInitOption.bufferingCallback) {
					if (typeof oInitOption.bufferingCallback.onbufferingprogress == "function") {
						oInitOption.bufferingCallback.onbufferingprogress(data)
					}
				}
				break;
			case window.webapis.avplay.BUFFERING_COMPLETE:
				if (oInitOption.bufferingCallback) {
					if (typeof oInitOption.bufferingCallback.onbufferingcomplete == "function") {
						oInitOption.bufferingCallback.onbufferingcomplete()
					}
				}
				break;
			case window.webapis.avplay.RENDERING_START:
				if (this.status == window.webapis.avplay.PLAY_STATE_STOPPED) {
					alert("[AVPlay" + id + "] This RENDERING_START event occured after stop() call. skip.");
					return
				}
				break;
			case window.webapis.avplay.CURRENT_PLAYBACK_TIME:
				if (this.status != window.webapis.avplay.PLAY_STATE_STARTED) {
					alert("[AVPlay" + id + '] This CURRENT_PLAYBACK_TIME event is not occured on "PLAY_STATE_STARTED". skip..');
					return
				}
				iCurrentPlayTime = new PlayTime(data);
				if (!bFrontPanelLock && bBDPlayer) {
					iFrontPanel.setTime(iCurrentPlayTime)
				}
				if (oInitOption.playCallback) {
					if (typeof oInitOption.playCallback.oncurrentplaytime == "function") {
						oInitOption.playCallback.oncurrentplaytime(iCurrentPlayTime)
					}
				}
				break;
			case window.webapis.avplay.RENDERING_COMPLETE:
				setTimeout(function () {
					self.stop();
					if (oInitOption.playCallback) {
						if (typeof oInitOption.playCallback.onstreamcompleted == "function") {
							oInitOption.playCallback.onstreamcompleted()
						}
					}
				}, 0);
				break;
			case window.webapis.avplay.CONNECTION_FAILED:
			case window.webapis.avplay.STREAM_NOT_FOUND:
				this.stop();
				if (typeof oInitOption.playCallback.onerror == "function") {
					oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NOT_FOUND_ERR))
				}
				break;
			case window.webapis.avplay.AUTHENTICATION_FAILED:
				this.stop();
				if (typeof oInitOption.playCallback.onerror == "function") {
					oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.SECURITY_ERR))
				}
				break;
			case window.webapis.avplay.NETWORK_DISCONNECTED:
				this.stop();
				if (typeof oInitOption.playCallback.onerror == "function") {
					oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byLegacyCode(WebAPIException.NETWORK_ERR))
				}
				break;
			case window.webapis.avplay.NETWORK_SLOW:
				this.stop();
				if (typeof oInitOption.playCallback.onerror == "function") {
					oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("NetworkSlowError"))
				}
				break;
			case window.webapis.avplay.RENDER_ERROR:
				this.stop();
				if (oInitOption.playCallback) {
					if (typeof oInitOption.playCallback.onerror == "function") {
						switch (Number(data)) {
						case window.webapis.avplay.UNKNOWN_ERROR:
							oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("UnknownError"));
							break;
						case window.webapis.avplay.UNSUPPORTED_CONTAINER:
							oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("AvplayUnsupportedContainerError"));
							break;
						case window.webapis.avplay.UNSUPPORTED_VIDEO_CODEC:
							oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("AvplayUnsupportedVideoFormatError"));
							break;
						case window.webapis.avplay.UNSUPPORTED_AUDIO_CODEC:
							oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("AvplayUnsupportedAudioFormatError"));
							break;
						case window.webapis.avplay.UNSUPPORTED_VIDEO_RESOLUTION:
							oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("AvplayUnsupportedVideoResolutionError"));
							break;
						case window.webapis.avplay.UNSUPPORTED_VIDEO_FRAMERATE:
							oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("AvplayUnsupportedVideoFramerateError"));
							break;
						case window.webapis.avplay.CURRUPTED_STREAM:
							oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("AvplayCurruptedStreamError"));
							break;
						default:
							alert("[AVPlay" + id + "] !ERROR! No detail category..");
							oInitOption.playCallback.onerror(ErrorsHelper.createWebAPIException_byType("UnknownError"));
							break
						}
					}
				}
				break;
			case window.webapis.avplay.AD_START:
			case window.webapis.avplay.AD_END:
				break;
			case window.webapis.avplay.RESOLUTION_CHANGED:
				if (oInitOption.playCallback) {
					if (typeof oInitOption.playCallback.onresolutionchanged == "function") {
						var resolution = this.getVideoResolution().split("|");
						oInitOption.playCallback.onresolutionchanged(resolution[0], resolution[1])
					}
				}
				break;
			case window.webapis.avplay.BITRATE_CHANGED:
			case window.webapis.avplay.CUSTOM:
				break;
			case window.webapis.avplay.SUBTITLE:
				if (bBlockSubtitleEvent) {
					alert("[AVPlay" + id + "] stopSubtitle() was called. skip this event.");
					return
				} else {
					if (typeof cbOnSubtitle == "function") {
						cbOnSubtitle(nSubtitleSyncTime, data)
					}
				}
				break;
			default:
				break
			}
		};
		this.getFitDisplayArea = function (width, height) {
			var FRAME_LEFT = iDisplayRect.left,
			FRAME_TOP = iDisplayRect.top,
			FRAME_WIDTH = iDisplayRect.width,
			FRAME_HEIGHT = iDisplayRect.height,
			nLeft,
			nTop,
			nWidth,
			nHeight,
			retValue,
			fnRound = Math.round;
			if (width / height > FRAME_WIDTH / FRAME_HEIGHT) {
				nHeight = fnRound((FRAME_WIDTH * height) / width);
				nWidth = FRAME_WIDTH
			} else {
				nWidth = fnRound((FRAME_HEIGHT * width) / height);
				nHeight = FRAME_HEIGHT
			}
			nLeft = FRAME_LEFT + fnRound((FRAME_WIDTH - nWidth) / 2);
			nTop = FRAME_TOP + fnRound((FRAME_HEIGHT - nHeight) / 2);
			retValue = new SRect(nLeft, nTop, nWidth, nHeight);
			alert("[AVPlay" + id + "] getFitDisplayArea(" + width + "," + height + ") returns " + retValue);
			return retValue
		};
		function setScreenSaver(on, second) {
			alert("[AVPlay" + id + "] setScreenSaver(" + on + "," + (second ? second : "") + ")");
			if (on) {
				if (!second) {
					second = getAutoProtectionTime()
				}
				window.webapis._plugin("NNavi", "SendEventToDevice", 3, second)
			} else {
				window.webapis._plugin("NNavi", "SendEventToDevice", 4, 0)
			}
			function getAutoProtectionTime() {
				var second = 0;
				var profile = window.webapis._plugin("TVMW", "GetProfile", window.webapis._pluginDef.PL_PRFID_AUTO_PROTECTION_TIME);
				switch (parseInt(profile)) {
				case 0:
					second = 10 * 60;
					break;
				case 1:
					second = 20 * 60;
					break;
				case 2:
					second = 40 * 60;
					break;
				case 3:
					second = 1 * 60 * 60;
					break;
				case 4:
					second = 2 * 60 * 60;
					break;
				case 5:
					second = 4 * 60 * 60;
					break;
				case 6:
					second = 8 * 60 * 60;
					break;
				case 7:
					second = 10 * 60 * 60;
					break;
				case 8:
					alert("[AF service] PROFILE_DURATION_ALWAYS is set. do nothing..");
					return;
				default:
					second = 1 * 60 * 60;
					break
				}
				return second
			}
		}
		function FrontPanel() {
			this.Enum = {
				FRONT_DISPLAY_PLAY : 100,
				FRONT_DISPLAY_STOP : 101,
				FRONT_DISPLAY_PAUSE : 102,
				FRONT_DISPLAY_ONLINE : 200
			};
			this.setState = function (state) {
				alert("[FrontPanel] setState(" + state + ")");
				window.webapis._plugin("FrontPanel", "DisplayVFD_Show", state)
			};
			this.setTime = function (playTime) {
				alert("[FrontPanel] setTime(" + playTime + ")");
				var aTime = playTime.timeString.split(":");
				window.webapis._plugin("FrontPanel", "DisplayVFD_Time", aTime[0], aTime[1], aTime[2])
			}
		}
	}
	function _PlayerEventListener(id, avPlay) {
		var sName = "AVPlay" + id;
		this.iAVPlay = avPlay;
		this.setMasterObject = function (avPlay) {
			this.iAVPlay = avPlay
		};
		this.onBufferingStart = function () {
			alert("[AVPlay" + id + "] PlayerEventListener : onBufferingStart()");
			this.iAVPlay.onEvent(window.webapis.avplay.BUFFERING_START)
		};
		this.onBufferingComplete = function () {
			alert("[AVPlay" + id + "] PlayerEventListener : onBufferingComplete()");
			this.iAVPlay.onEvent(window.webapis.avplay.BUFFERING_COMPLETE)
		};
		this.onBufferingProgress = function (percent) {
			alert("[AVPlay" + id + "] PlayerEventListener : onBufferingProgress(" + percent + ")");
			this.iAVPlay.onEvent(window.webapis.avplay.BUFFERING_PROGRESS, percent)
		};
		this.onStreamInfoReady = function () {
			alert("[AVPlay" + id + "] PlayerEventListener : onStreamInfoReady()");
			this.iAVPlay.onEvent(window.webapis.avplay.STREAM_INFO_READY)
		};
		this.onCurrentPlayTime = function (ms) {
			alert("[AVPlay" + id + "] PlayerEventListener : onCurrentPlayTime(" + ms + ")");
			this.iAVPlay.onEvent(window.webapis.avplay.CURRENT_PLAYBACK_TIME, ms)
		};
		this.onRenderingComplete = function () {
			alert("[AVPlay" + id + "] PlayerEventListener : onRenderingComplete()");
			this.iAVPlay.onEvent(window.webapis.avplay.RENDERING_COMPLETE)
		};
		this.onConnectionFailed = function () {
			alert("[AVPlay" + id + "] PlayerEventListener : onConnectionFailed()");
			this.iAVPlay.onEvent(window.webapis.avplay.CONNECTION_FAILED)
		};
		this.onAuthenticationFailed = function () {
			alert("[AVPlay" + id + "] PlayerEventListener : onAuthenticationFailed()");
			this.iAVPlay.onEvent(window.webapis.avplay.AUTHENTICATION_FAILED)
		};
		this.onStreamNotFound = function () {
			alert("[AVPlay" + id + "] PlayerEventListener : onStreamNotFound()");
			this.iAVPlay.onEvent(window.webapis.avplay.STREAM_NOT_FOUND)
		};
		this.onNetworkDisconnected = function () {
			alert("[AVPlay" + id + "] PlayerEventListener : onNetworkDisconnected()");
			this.iAVPlay.onEvent(window.webapis.avplay.NETWORK_DISCONNECTED)
		};
		this.onRenderError = function (errorCode) {
			alert("[AVPlay" + id + "] PlayerEventListener : onRenderError(" + errorCode + ")");
			this.iAVPlay.onEvent(window.webapis.avplay.RENDER_ERROR, errorCode)
		};
		this.onAdStart = function () {
			alert("[AVPlay" + id + "] PlayerEventListener : onAdStart()");
			this.iAVPlay.onEvent(window.webapis.avplay.AD_START)
		};
		this.onAdEnd = function () {
			alert("[AVPlay" + id + "] PlayerEventListener : onAdEnd()");
			this.iAVPlay.onEvent(window.webapis.avplay.AD_END)
		};
		this.onResolutionChanged = function () {
			alert("[AVPlay" + id + "] PlayerEventListener : onResolutionChanged()");
			this.iAVPlay.onEvent(window.webapis.avplay.RESOLUTION_CHANGED)
		};
		this.onEvent = function (type, param) {
			alert("[AVPlay" + id + "] PlayerEventListener : onEvent(" + type + "," + param + ") -> " + this.iAVPlay.Event2String[type]);
			this.iAVPlay.onEvent(type, param)
		}
	}
})();


/*
 *  AllShare API mockup
 */

function allshare_helper(){}


allshare_helper.setReadOnlyAttribute = function(obj, attrName, value)
{
    obj.__defineGetter__(attrName, function(){ return value; });
}


// set default flags for debug functions
allshare_helper.log = 
{
    flags :
        {
            print : false, // Special messages (versions info etc)
            nonimplemented : true, // marks for non implemented places
            trace : false, // information about entering to/from functions (huge volume)
            info : false, // more info(huge volume)
            debug : false, // debug info, important
            error : true // errors, exceptions
        }
}


allshare_helper.log.print = function(msg)
{
    if (this.flags.print)
        alert("Print: " + msg);
}

allshare_helper.log.nonimplemented = function(msg)
{
    if (this.flags.nonimplemented)
        alert("Not implemented: " + msg);
}

allshare_helper.log.trace = function(msg)
{
    if (this.flags.trace)
        alert("Trace: " + msg);
}

allshare_helper.log.info = function(msg)
{
    if (this.flags.info)
        alert("Info: " + msg);
}

allshare_helper.log.debug = function(msg)
{
    if (this.flags.debug)
        alert("Debug: " + msg);
}

allshare_helper.log.error = function(msg)
{
    if (this.flags.error)
        alert("Error: " + msg);
}


//-----------------------------------------------------------------------------


allshare_helper.convertStrDurationToSec = function(str)
{
//  allshare_helper.log.trace("allshare_helper.convertStrDurationToSec() begin");
//  allshare_helper.log.trace("allshare_helper.convertStrDurationToSec(str:" + str + ")");

    // result true/false
    this.isNumberChar = function(s)
    {
      var charCode = s.charCodeAt(0);
    //alert("s:" +s+ "  code:"+charCode);
      if (charCode >= 48 && charCode <= 57)
        return true;
      else
        return false;
    }


    // {rez_num:, rez_ok:, rez_str:}
    this.getNumber = function(str)
    {
      var num = 0;  
      var ok = false;
      for (var i = 0; i < str.length; i++)
      {
         var ch = str.charAt(i);
         if (this.isNumberChar(ch))
         {
            num *= 10;
            num += parseInt(ch);
            ok = true;
         }
         else
            break;
      }
      return {rez_num: num, rez_ok:ok , rez_str:  str.substring(i)};
    }


    // {rez_ok:, rez_str:}
    this.getDelimiter = function(str, ch)
    {
      var rez = { rez_ok: false, rez_str: str};
      if (str.length > 0)
      {
        if (str.charAt(0) == ch)
        {
          rez.rez_ok = true;
          rez.rez_str = str.substring(1);
        }
      }
      return rez;
    }


    var hourRez = this.getNumber(str);
    if (! hourRez.rez_ok)
    {
        return 0;
    }

    var delimResult1 = this.getDelimiter(hourRez.rez_str, ":");
    if (! delimResult1.rez_ok)
    {
        return 0;
    }

    var minuteRez = this.getNumber(delimResult1.rez_str);
    if (! minuteRez.rez_ok)
    {
        return 0;
    }

    var delimResult2 = this.getDelimiter(minuteRez.rez_str, ":");
    if (! delimResult2.rez_ok)
    {
        return 0;
    }

    var secondRez = this.getNumber(delimResult2.rez_str);
    if (! secondRez.rez_ok)
    {
        return 0;
    }

    if (secondRez.rez_str.length  != 0)
    {
        var delimResult1 = this.getDelimiter(minuteRez.rez_str, ".");
        if (! delimResult1.rez_ok)
        {
            return 0;
        }
    }

//   allshare_helper.log.debug("str:" + str + "     " + hourRez.rez_num + "-" + minuteRez.rez_num +"-"+ secondRez.rez_num);

//    allshare_helper.log.trace("allshare_helper.convertStrDurationToSec() end");

    return hourRez.rez_num * 3600 + minuteRez.rez_num * 60 + secondRez.rez_num;
}


//-----------------------------------------------------------------------------


allshare_helper.createWebAPIError = function(name, message)
{
//    var webAPIError = new WebAPIError;
    var webAPIError = {};

    // readonly attribute DOMString name;
    // readonly attribute DOMString message;

    allshare_helper.setReadOnlyAttribute(webAPIError, "name", name || "UnknownError");
    allshare_helper.setReadOnlyAttribute(webAPIError, "message", message || "An unknown error has occurred");
//    allshare_helper.log.error("WebAPIError name:" + webAPIError.name + "  message:" + webAPIError.message);
    return webAPIError;
}


allshare_helper.createWebAPIException = function(name, message)
{
//    var webAPIException = new WebAPIException;
    var webAPIException = {};

    var code = 0; // default
    name = name || "UnknownError";
    message = message || "An unknown error has occurred";
    
    // webAPIException.code
    // webAPIException.name
    // webAPIException.message

    // set code attribute depends error 'name'
    switch(name)
    {
        case "IndexSizeError": code = 1; break; // INDEX_SIZE_ERR
//        case "": code = 2; break; // DOMSTRING_SIZE_ERR 
        case "HierarchyRequestError": code = 3; break; // HIERARCHY_REQUEST_ERR 
        case "WrongDocumentError": code = 4; break; // WRONG_DOCUMENT_ERR 
        case "InvalidCharacterError": code = 5; break; // INVALID_CHARACTER_ERR 
//        case "": code = 6; break; // NO_DATA_ALLOWED_ERR 
        case "NoModificationAllowedError": code = 7; break; // NO_MODIFICATION_ALLOWED_ERR 
        case "NotFoundError": code = 8; break; // NOT_FOUND_ERR 
        case "NotSupportedError": code = 9; break; // NOT_SUPPORTED_ERR 
//        case "": code = 10; break; // INUSE_ATTRIBUTE_ERR 
        case "InvalidStateError": code = 11; break; // INVALID_STATE_ERR 
        case "SyntaxError": code = 12; break; // SYNTAX_ERR 
        case "InvalidModificationError": code = 13; break; // INVALID_MODIFICATION_ERR 
        case "NamespaceError": code = 14; break; // NAMESPACE_ERR 
        case "InvalidAccessError": code = 15; break; // INVALID_ACCESS_ERR 
//        case "": code = 16; break; // VALIDATION_ERR 
        case "TypeMismatchError": code = 17; break; // TYPE_MISMATCH_ERR 
        case "SecurityError": code = 18; break; // SECURITY_ERR 
        case "NetworkError": code = 19; break; // NETWORK_ERR 
        case "AbortError": code = 20; break; // ABORT_ERR 
        case "URLMismatchError": code = 21; break; // URL_MISMATCH_ERR 
        case "QuotaExceededError": code = 22; break; // QUOTA_EXCEEDED_ERR 
        case "TimeoutError": code = 23; break; // TIMEOUT_ERR 
        case "InvalidNodeTypeError": code = 24; break; // INVALID_NODE_TYPE_ERR 
        case "DataCloneError": code = 25; break; // DATA_CLONE_ERR 
        default: break;
    }
    
    
    allshare_helper.setReadOnlyAttribute(webAPIException, "code", code);
    allshare_helper.setReadOnlyAttribute(webAPIException, "name", name);
    allshare_helper.setReadOnlyAttribute(webAPIException, "message", message);
//    allshare_helper.log.error("WebAPIError name:" + webAPIException.name + "  message:" + webAPIException.message);
    
    return webAPIException;
}



//=============================================================================
// Instantiation of 'WebAPIs webapis' object
if (window.webapis == null)
{
    allshare_helper.setReadOnlyAttribute(window, "webapis", {});
    allshare_helper.log.debug("added webapis object into window");
}


// It is not standard declaration, excluded
// is used for 2011 serviceapis.js
//window.webapis.platform = 'Samsung SmartTV';
//window.webapis.ver = '1.010';
//alert("\t[serviceapis.js] Version : " + webapis.ver);

window.webapis.VERSION_ALLSHARE_WEB_API = "1.3.0.8"; // non standard
allshare_helper.log.print("AllShare Web API  JS: " + window.webapis.VERSION_ALLSHARE_WEB_API);


//=============================================================================
// Instantiation of  'AllShare allshare' object
if (window.webapis.allshare == null)
{
    allshare_helper.setReadOnlyAttribute(window.webapis, "allshare", {});
    allshare_helper.log.debug("added allshare object into webapis");
}


//=============================================================================



//=============================================================================
// RequestsHelper
//=============================================================================

allshare_helper.RequestsHelper = function()
{
}


allshare_helper.RequestsHelper._requestsList = [];
allshare_helper.RequestsHelper._requestCounter = 0;

// This settings specify use uniqRequestId or not
// Current proxy support uniqRequestId for browse/search request responces but not for errors
allshare_helper.RequestsHelper._uniqRequestIdSupported = false;

allshare_helper.RequestsHelper.RequestInfo = function(id)
{
    this.id = id;

// fields added for Search
//    requestInfo.keyword = keyword;
//    requestInfo.startIndex = startIndex;
//    requestInfo.requestCount = requestCount;
//    requestInfo.successCallback = successCallback;
//    requestInfo.errorCallback = errorCallback;
//    requestInfo.provider = this;
//    requestInfo.callbackHandlers = SearchCallbackHandlers;

            
// fields added for Browse
//    requestInfo.parentFolderItem = paretnFolderItem;
//    requestInfo.startIndex = startIndex;
//    requestInfo.requestCount = requestCount;
//    requestInfo.successCallback = successCallback;
//    requestInfo.errorCallback = errorCallback;
//    requestInfo.provider = this;
//    requestInfo.callbackHandlers = BrowseCallbackHandlers;
            
}


// return RequestsHelper.RequestInfo object
allshare_helper.RequestsHelper.registerRequest = function()
{
    allshare_helper.log.trace("RequestsHelper.registerRequest() begin");

    var requestId = "reqId_" + this._requestCounter;
    var requestInfo = new allshare_helper.RequestsHelper.RequestInfo(requestId);
    allshare_helper.log.debug("RequestsHelper.registerRequest() requestCounter: " + this._requestCounter + "  requestId:" + requestId);
    this._requestCounter++;

    // needed if requestId is not supported
    if (this._uniqRequestIdSupported == false)
    {
        if (this._requestsList.length > 0) // means 1    
        {
            return null;
        }
    }
    
    this._requestsList.push(requestInfo);

    allshare_helper.log.trace("RequestsHelper.registerRequest() end");

    return requestInfo;
}


// return RequestsHelper.SearchRequestInfo object
allshare_helper.RequestsHelper.getRequest = function(requestId)
{
    allshare_helper.log.trace("RequestsHelper.getRequest()");
    allshare_helper.log.debug("RequestsHelper.getRequest(requestId:" + requestId + ")");

    // needed if requestId is not supported
    if (this._uniqRequestIdSupported == false)
    {
        if (this._requestsList.length > 0) // means 1    
        {
            return this._requestsList[0];
        }
        else
        {
            return null;
        }
    }

    for (var i = 0; i < this._requestsList.length; i++)
    {
        var requestInfo = this._requestsList[i];
        if (requestInfo.id == requestId)
        {
            return requestInfo;
        }
    }

    allshare_helper.log.debug("RequestsHelper.getRequest() Warning! Can't find search request with id:" + requestId);
    return null;
}


allshare_helper.RequestsHelper.removeRequest = function(requestId)
{
    allshare_helper.log.trace("RequestsHelper.removeRequest() begin");
    allshare_helper.log.debug("RequestsHelper.removeRequest(requestId:" + requestId + ")");

    // needed if requestId is not supported
    if (this._uniqRequestIdSupported == false)
    {
        if (this._requestsList.length > 0) // means 1    
        {
            this._requestsList.splice(0, 1);
        }
        return;
    }

    for (var i = 0; i < this._requestsList.length; )
    {
        var requestInfo = this._requestsList[i];
        if (requestInfo.id == requestId)
        {
            allshare_helper.log.debug("removed requestId:" + requestId);
            this._requestsList.splice(i, 1);
            continue;
        }
        i++;
    }
    allshare_helper.log.trace("RequestsHelper.removeRequest() end");
}

 

//=============================================================================
// Instantiation of 'ServiceConnector serviceconnector' object
allshare_helper.setReadOnlyAttribute(window.webapis.allshare, "serviceconnector", {});

window.webapis.allshare.serviceconnector._ServiceState = 
{
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
    UNKNOWN: "UNKNOWN"
};


window.webapis.allshare.serviceconnector._serviceProvider = null;


//=============================================================================
window.webapis.allshare.serviceconnector._ServiceProvider = {};


// prototype
// DeviceFinder getDeviceFinder() raises(WebAPIException);
window.webapis.allshare.serviceconnector._ServiceProvider.getDeviceFinder = function()
{
    allshare_helper.log.trace("window.webapis.allshare.serviceconnector._ServiceProvider.getDeviceFinder()");
    return window.webapis.allshare.serviceconnector._DeviceFinder;
}


// prototype
// ServiceState getServiceState() raises(WebAPIException); 
window.webapis.allshare.serviceconnector._ServiceProvider.getServiceState = function()
{
    allshare_helper.log.trace("window.webapis.allshare.serviceconnector._ServiceProvider.getServiceState()");

    var serviceState = "UNKNOWN";
    // if plugin object available then ServiceState ENABLED


    var allsharePlugin = new Object(); //window.webapis.allshare._plugin("AllShare");
    if(!allsharePlugin)
    {
        serviceState = "ENABLED";
    } 

    return serviceState;
}


//=============================================================================


// prototype
// void createServiceProvider(in ServiceProviderCreateSuccessCallback successCallback, 
//                            in optional ServiceProviderErrorCallback errorCallback) raises(WebAPIException);
window.webapis.allshare.serviceconnector.createServiceProvider = function(successCallback, errorCallback)
{
    allshare_helper.log.trace("window.webapis.allshare.serviceconnector.createServiceProvider() begin");

    if (typeof successCallback != 'function')
    {
        allshare_helper.log.error("Type of successCallback is not function");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of successCallback is not function");
    }

    if (errorCallback != null)
    {
        if (typeof errorCallback != 'function')
        {
            allshare_helper.log.error("Type of errorCallback is not function");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of errorCallback is not function");
        }
    }

    if (this._serviceprovider)
    {
        allshare_helper.log.error("connection with the allshare service alreday exists");
        throw allshare_helper.createWebAPIException("AlreadyConnectedError", "connection with the allshare service alreday exists");
    }
    else
    {
        this._serviceprovider = this._ServiceProvider; // like a static object

        try
        {
            successCallback(this._serviceprovider);
       }
       catch(e)
       {
           allshare_helper.log.error("exception during success callback");
            allshare_helper.log.error("e name:" + (e && (e.name || "")) + "   message:" + (e && (e.message || "")));
       }
    }

    allshare_helper.log.trace("window.webapis.allshare.serviceconnector.createServiceProvider() end");
}


// prototype
// void deleteServiceProvider(in SuccessCallback successCallback,
//                            in optional ServiceProviderErrorCallback errorCallback) raises(WebAPIException);
window.webapis.allshare.serviceconnector.deleteServiceProvider = function(successCallback, errorCallback)
{
    allshare_helper.log.trace("window.webapis.allshare.serviceconnector.deleteServiceProvider() begin");

    if (typeof successCallback != 'function')
    {
        allshare_helper.log.error("Type of successCallback is not function");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of successCallback is not function");
    }

    if (errorCallback != null)
    {
        if (typeof errorCallback != 'function')
        {
            allshare_helper.log.error("Type of errorCallback is not function");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of errorCallback is not function");
        }
    }

    if (this._serviceprovider)
    {
        var serviceProvider = this._serviceprovider;
        this._serviceprovider = null;
        try
        {
            successCallback(serviceProvider);
        }
        catch(e)
        {
            allshare_helper.log.error("exception during success callback");
            allshare_helper.log.error("e name:" + (e && (e.name || "")) + "   message:" + (e && (e.message || "")));
        }
    }
    else
    {
        try
        {
            var webAPIError = allshare_helper.createWebAPIError("NotFoundError", "serviceProvider does not exist.");
//            var serviceState = window.webapis.allshare.serviceconnector._ServiceProvider.getServiceState();
            var serviceState = this._ServiceState.UNKNOWN;  // ??? ServiceState value?
            if(errorCallback)
            {
                errorCallback(webAPIError, serviceState);
            }
        }
        catch(e)
        {
            allshare_helper.log.error("exception during error callback");
            allshare_helper.log.error("e name:" + (e && (e.name || "")) + "   message:" + (e && (e.message || "")));
        }
    }

    allshare_helper.log.trace("window.webapis.allshare.serviceconnector.deleteServiceProvider() end");
}


// prototype
// ServiceProvider getServiceProvider() raises(WebAPIException);
window.webapis.allshare.serviceconnector.getServiceProvider = function()
{
    allshare_helper.log.trace("window.webapis.allshare.serviceconnector.getServiceProvider()");
    return this._serviceprovider;
}


//=============================================================================

window.webapis.allshare.serviceconnector._DeviceFinder = function(){}


window.webapis.allshare.serviceconnector._DeviceFinder._listeners = [];
window.webapis.allshare.serviceconnector._DeviceFinder._listenersCounter = 0;

window.webapis.allshare.serviceconnector._DeviceFinder._ListenerInfo = function(discoveryCallback, listenerId)
{
    allshare_helper.log.debug("DeviceFinder._ListenerInfo(discoveryCallback, listenerId:" + listenerId + ")");
    this.discoveryCallback = discoveryCallback;
    this.listenerId = listenerId;
}


window.webapis.allshare.serviceconnector._DeviceFinder._addedDevice = function(device)
{
    allshare_helper.log.trace("DeviceFinder._addedDevice() begin");
    allshare_helper.log.debug("DeviceFinder._addedDevice(device.name:" + device.name + ") begin");

    for (var i = 0; i < this._listeners.length; i++)
    {
        allshare_helper.log.debug("DeviceFinder._addedDevice() call[" + i + "] listener id : " + this._listeners[i].listenerId);

        try
        {
            this._listeners[i].discoveryCallback.ondeviceadded(device);
        }
        catch(e)
        {
            allshare_helper.log.error("exception during ondeviceadded callback");
            allshare_helper.log.error("e name:" + (e && (e.name || "")) + "   message:" + (e && (e.message || "")));
        }
    }
    
    allshare_helper.log.trace("DeviceFinder._addedDevice() end");
}


window.webapis.allshare.serviceconnector._DeviceFinder._removedDevice = function(device)
{
    allshare_helper.log.trace("DeviceFinder._removedDevice() begin");
    allshare_helper.log.debug("DeviceFinder._removedDevice(device.name:" + device.name + ") begin");

    for (var i = 0; i < this._listeners.length; i++)
    {
        try
        {
            this._listeners[i].discoveryCallback.ondeviceremoved(device);
        }
        catch(e)
        {
            allshare_helper.log.error("exception during ondeviceremoved callback");
            allshare_helper.log.error("e name:" + (e && (e.name || "")) + "   message:" + (e && (e.message || "")));
        }
    }

    allshare_helper.log.trace("DeviceFinder._removedDevice() end");
}


// prototype
// Device getDevice(in DeviceType deviceType,
//                          in DeviceId id) raises(WebAPIException);
window.webapis.allshare.serviceconnector._DeviceFinder.getDevice = function(deviceType, id)
{
    allshare_helper.log.trace("DeviceFinder.getDevice() begin");
    // id is UDN
    allshare_helper.log.debug("DeviceFinder.getDevice(deviceType:" + deviceType + ", id:" + id + ")");

    if(typeof deviceType != 'string')
    {
        allshare_helper.log.error("Type of deviceType is not string");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of deviceType is not string");
    }

    if(deviceType != "MEDIAPROVIDER")
    {
        allshare_helper.log.print("Supported only deviceType == 'MEDIAPROVIDER'");
    }

    if(typeof id == 'object')
    {
        if (typeof id.ToString == 'function')
        {
            id = id.ToString();
        }
        else
        {
            allshare_helper.log.error("Type casting is not available for id argument");
            throw allshare_helper.createWebAPIException("InvalidValuesError", "Type casting is not available for id argument");
        }
    }

    if(typeof id != 'string')
    {
        allshare_helper.log.error("Type of id is not string");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of id is not string");
    }


    var allsharePlugin = new Object(); //window.webapis.allshare._plugin("AllShare");
    if(!allsharePlugin)
    {
        allshare_helper.log.error("AllShare plugin is not exist.");
        throw allshare_helper.createWebAPIException("InvalidStateError", "AllShare plugin is not exist.");
    } 

    var retValue = null;
    var json = '[  { deviceID : 0, deviceName : "Redwood" , deviceType : "AllShare", IPAddress : "192.168.0.4", ModelName : "WM Media Server", UDN : "uuid:825f6fa8-8700-43ab-9508-8713da441c73", Icons:[], isSearchable : true, Domain : "LOCAL_NETWORK", nic : null }  ,  { deviceID : 1, deviceName : "[PC]NO-HYUNGHUN-C02" , deviceType : "AllShare", IPAddress : "192.168.0.24", ModelName : "Samsung AllShare PC S/W Server", UDN : "uuid:068e7780-00a4-1000-8823-78e4004fd9ae", Icons:[ {IconURL : "http://192.168.0.24:17676/smp_4_", IconMimeType : "image/png", IconDepth : 24, IconWidth : 120, IconHeight : 120},  {IconURL : "http://192.168.0.24:17676/smp_3_", IconMimeType : "image/jpeg", IconDepth : 24, IconWidth : 120, IconHeight : 120},  {IconURL : "http://192.168.0.24:17676/smp_5_", IconMimeType : "image/png", IconDepth : 24, IconWidth : 48, IconHeight : 48},  {IconURL : "http://192.168.0.24:17676/smp_2_", IconMimeType : "image/jpeg", IconDepth : 24, IconWidth : 48, IconHeight : 48}], isSearchable : true, Domain : "LOCAL_NETWORK", nic : null } ]'; //window.webapis.allshare._plugin(allsharePlugin, "GetDeviceList", 0); 


    if(json && json != -1) // handle errors???
    {
        var obj = null;
        try
        {
            obj = eval("(" + json + ")");

            if(obj && obj.length)
            {
                for(var i=0; i<obj.length; i++)
                {
                    var device = allshare_helper.createDeviceFactory(obj[i]);
                    if (device && ((device.deviceType == deviceType) && (device.id == id)))
                    {
                        retValue = device;
                        break;
                    }
                }
            }
        }
        catch(e)
        {
            allshare_helper.log.error("eval failed");
            allshare_helper.log.error("exception e.name:" + e.name + "   e.message:" + e.message);
        }

    }
    else
    {
        allshare_helper.log.error("allshare plugin return error from GetDeviceList()");
    }

    allshare_helper.log.trace("DeviceFinder.getDevice() end");

    return retValue;
}


// prototype
//  DeviceArray getDeviceList(in DeviceType deviceType) raises(WebAPIException)
window.webapis.allshare.serviceconnector._DeviceFinder.getDeviceList = function(deviceType)
{
    allshare_helper.log.trace("DeviceFinder.getDeviceList() begin");
    allshare_helper.log.debug("DeviceFinder.getDeviceList(deviceType:" + deviceType + ")");

    if(typeof deviceType != 'string')
    {
        allshare_helper.log.error("Type of deviceType is not string");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of deviceType is not string");
    }

    if(deviceType != "MEDIAPROVIDER")
    {
        allshare_helper.log.print("Supported only deviceType == 'MEDIAPROVIDER'");
    }

    var allsharePlugin = new Object(); // window.webapis.allshare._plugin("AllShare");
    if(!allsharePlugin)
    {
        allshare_helper.log.error("AllShare plugin is not exist.");
        throw allshare_helper.createWebAPIException("InvalidStateError", "AllShare plugin is not exist.");
    } 

    var retValue = [];
    var json = '[  { deviceID : 0, deviceName : "Redwood" , deviceType : "AllShare", IPAddress : "192.168.0.4", ModelName : "WM Media Server", UDN : "uuid:825f6fa8-8700-43ab-9508-8713da441c73", Icons:[], isSearchable : true, Domain : "LOCAL_NETWORK", nic : null }  ,  { deviceID : 1, deviceName : "[PC]NO-HYUNGHUN-C02" , deviceType : "AllShare", IPAddress : "192.168.0.24", ModelName : "Samsung AllShare PC S/W Server", UDN : "uuid:068e7780-00a4-1000-8823-78e4004fd9ae", Icons:[ {IconURL : "http://192.168.0.24:17676/smp_4_", IconMimeType : "image/png", IconDepth : 24, IconWidth : 120, IconHeight : 120},  {IconURL : "http://192.168.0.24:17676/smp_3_", IconMimeType : "image/jpeg", IconDepth : 24, IconWidth : 120, IconHeight : 120},  {IconURL : "http://192.168.0.24:17676/smp_5_", IconMimeType : "image/png", IconDepth : 24, IconWidth : 48, IconHeight : 48},  {IconURL : "http://192.168.0.24:17676/smp_2_", IconMimeType : "image/jpeg", IconDepth : 24, IconWidth : 48, IconHeight : 48}], isSearchable : true, Domain : "LOCAL_NETWORK", nic : null } ]';// window.webapis.allshare._plugin(allsharePlugin, "GetDeviceList", 0);    

    if(json && json != -1) // handle errors???
    {
        var obj = null;
        try
        {
            obj = eval("(" + json + ")");

            if(obj && obj.length)
            {
                for(var i=0; i<obj.length; i++)
                {
                    var device = allshare_helper.createDeviceFactory(obj[i]);
                    if (device && (device.deviceType == deviceType))
                    {
                        retValue.push(device);
                    }
                }
            }
        }
        catch(e)
        {
            allshare_helper.log.error("eval failed");
            allshare_helper.log.error("exception e.name:" + e.name + "   e.message:" + e.message);
        }
    }
    else
    {
        allshare_helper.log.error("allshare plugin return error from GetDeviceList()");
    }

    allshare_helper.log.trace("DeviceFinder.getDeviceList() end");

    return retValue;
}


// prototype
// DeviceArray getDeviceListByDomain(in DeviceType deviceType,
//                               in DeviceDomain domain) raises(WebAPIException);
window.webapis.allshare.serviceconnector._DeviceFinder.getDeviceListByDomain = function(deviceType, domain)
{
    allshare_helper.log.trace("DeviceFinder.getDeviceListByDomain() begin");
    allshare_helper.log.debug("DeviceFinder.getDeviceListByDomain(deviceType:" + deviceType + ", domain: " + domain + ")");

    if(typeof deviceType != 'string')
    {
        allshare_helper.log.error("Type of deviceType is not string");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of deviceType is not string");
    }

    if(deviceType != "MEDIAPROVIDER")
    {
        allshare_helper.log.print("Supported only deviceType == 'MEDIAPROVIDER'");
    }

    if(typeof domain != 'string')
    {
        allshare_helper.log.error("Type of domain is not string");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of domain is not string");
    }


    var allsharePlugin = new Object(); //window.webapis.allshare._plugin("AllShare");
    if(!allsharePlugin)
    {
        allshare_helper.log.error("AllShare plugin is not exist.");
        throw allshare_helper.createWebAPIException("InvalidStateError", "AllShare plugin is not exist.");
    } 

    var retValue = [];
    var json = '[  { deviceID : 0, deviceName : "Redwood" , deviceType : "AllShare", IPAddress : "192.168.0.4", ModelName : "WM Media Server", UDN : "uuid:825f6fa8-8700-43ab-9508-8713da441c73", Icons:[], isSearchable : true, Domain : "LOCAL_NETWORK", nic : null }  ,  { deviceID : 1, deviceName : "[PC]NO-HYUNGHUN-C02" , deviceType : "AllShare", IPAddress : "192.168.0.24", ModelName : "Samsung AllShare PC S/W Server", UDN : "uuid:068e7780-00a4-1000-8823-78e4004fd9ae", Icons:[ {IconURL : "http://192.168.0.24:17676/smp_4_", IconMimeType : "image/png", IconDepth : 24, IconWidth : 120, IconHeight : 120},  {IconURL : "http://192.168.0.24:17676/smp_3_", IconMimeType : "image/jpeg", IconDepth : 24, IconWidth : 120, IconHeight : 120},  {IconURL : "http://192.168.0.24:17676/smp_5_", IconMimeType : "image/png", IconDepth : 24, IconWidth : 48, IconHeight : 48},  {IconURL : "http://192.168.0.24:17676/smp_2_", IconMimeType : "image/jpeg", IconDepth : 24, IconWidth : 48, IconHeight : 48}], isSearchable : true, Domain : "LOCAL_NETWORK", nic : null } ]'; //window.webapis.allshare._plugin(allsharePlugin, "GetDeviceList", 0); 

    if(json && json != -1) // handle errors???
    {
        var obj = null;
        try
        {
            obj = eval("(" + json + ")");

            if(obj && obj.length)
            {
                for(var i=0; i<obj.length; i++)
                {
                    var device = allshare_helper.createDeviceFactory(obj[i]);
                    if (device && (device.deviceDomain == domain))
                    {
                        retValue.push(device);
                    }
                }
            }
        }
        catch(e)
        {
            allshare_helper.log.error("eval failed");
            allshare_helper.log.error("exception e.name:" + e.name + "   e.message:" + e.message);
        }
    }
    else
    {
        allshare_helper.log.error("allshare plugin return error from GetDeviceList()");
    }

    allshare_helper.log.trace("DeviceFinder.getDeviceListByDomain() end");

    return retValue;
}


// prototype
// DeviceArray getDeviceListByNIC(in DeviceType deviceType, in DOMString nic) raises(WebAPIException);
window.webapis.allshare.serviceconnector._DeviceFinder.getDeviceListByNIC = function(deviceType, nic)
{
    allshare_helper.log.trace("DeviceFinder.getDeviceListByNIC() begin");
    allshare_helper.log.debug("DeviceFinder.getDeviceListByNIC(deviceType:" + deviceType + ", nic: " + nic + ")");

    if(typeof deviceType != 'string')
    {
        allshare_helper.log.error("Type of deviceType is not string");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of deviceType is not string");
    }

    if(deviceType != "MEDIAPROVIDER")
    {
        allshare_helper.log.print("Supported only deviceType == 'MEDIAPROVIDER'");
    }

    if(typeof nic != 'string')
    {
        allshare_helper.log.error("Type of nic is not string");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of nic is not string");
    }


    var allsharePlugin = new Object(); //window.webapis.allshare._plugin("AllShare");
    if(!allsharePlugin)
    {
        allshare_helper.log.error("AllShare plugin is not exist.");
        throw allshare_helper.createWebAPIException("InvalidStateError", "AllShare plugin is not exist.");
    } 

    var retValue = [];
    var json = '[  { deviceID : 0, deviceName : "Redwood" , deviceType : "AllShare", IPAddress : "192.168.0.4", ModelName : "WM Media Server", UDN : "uuid:825f6fa8-8700-43ab-9508-8713da441c73", Icons:[], isSearchable : true, Domain : "LOCAL_NETWORK", nic : null }  ,  { deviceID : 1, deviceName : "[PC]NO-HYUNGHUN-C02" , deviceType : "AllShare", IPAddress : "192.168.0.24", ModelName : "Samsung AllShare PC S/W Server", UDN : "uuid:068e7780-00a4-1000-8823-78e4004fd9ae", Icons:[ {IconURL : "http://192.168.0.24:17676/smp_4_", IconMimeType : "image/png", IconDepth : 24, IconWidth : 120, IconHeight : 120},  {IconURL : "http://192.168.0.24:17676/smp_3_", IconMimeType : "image/jpeg", IconDepth : 24, IconWidth : 120, IconHeight : 120},  {IconURL : "http://192.168.0.24:17676/smp_5_", IconMimeType : "image/png", IconDepth : 24, IconWidth : 48, IconHeight : 48},  {IconURL : "http://192.168.0.24:17676/smp_2_", IconMimeType : "image/jpeg", IconDepth : 24, IconWidth : 48, IconHeight : 48}], isSearchable : true, Domain : "LOCAL_NETWORK", nic : null } ]'; //window.webapis.allshare._plugin(allsharePlugin, "GetDeviceList", 0);    


    if(json && json != -1) // handle errors???
    {
        var obj = null;
        try
        {
            obj = eval("(" + json + ")");

            if(obj && obj.length)
            {
                for(var i=0; i<obj.length; i++)
                {
                    var device = allshare_helper.createDeviceFactory(obj[i]);
                    if (device && (device.nic == nic))
                    {
                        retValue.push(device);
                    }
                }
            }
        }
        catch(e)
        {
            allshare_helper.log.error("eval failed");
            allshare_helper.log.error("exception e.name:" + e.name + "   e.message:" + e.message);
        }
    }
    else
    {
        allshare_helper.log.error("allshare plugin return error from GetDeviceList()");
    }

    allshare_helper.log.trace("DeviceFinder.getDeviceListByNIC() end");

    return retValue;
}


// prototype
// void refresh() raises(WebAPIException);
window.webapis.allshare.serviceconnector._DeviceFinder.refresh = function()
{
    allshare_helper.log.trace("DeviceFinder.refresh()");

    var allsharePlugin = new Object(); //window.webapis.allshare._plugin("AllShare");
    if(!allsharePlugin)
    {
        allshare_helper.log.error("AllShare plugin is not exist.");
        throw allshare_helper.createWebAPIException("InvalidStateError", "AllShare plugin is not exist.");
    }

    // return boolean type, result ignored
    //window.webapis.allshare._plugin(allsharePlugin, "RefreshDMS");    
}


// prototype
// long addDeviceDiscoveryListener(in DeviceDiscoveryCallback deviceDiscoveryCallback) raises(WebAPIException);
window.webapis.allshare.serviceconnector._DeviceFinder.addDeviceDiscoveryListener = function(deviceDiscoveryCallback)
{
    allshare_helper.log.trace("DeviceFinder.addDeviceDiscoveryListener() begin");

    // check argument
    if (deviceDiscoveryCallback == null || (typeof deviceDiscoveryCallback != 'object'))
    {
        allshare_helper.log.error("Type check for deviceDiscoveryCallback is failed: (deviceDiscoveryCallback == null || (typeof deviceDiscoveryCallback != 'object')");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type check for deviceDiscoveryCallback is failed: (deviceDiscoveryCallback == null || (typeof deviceDiscoveryCallback != 'object')");
    }

    if (typeof deviceDiscoveryCallback.ondeviceadded != 'function')
    {
        allshare_helper.log.error("deviceDiscoveryCallback.ondeviceadded != 'function'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "deviceDiscoveryCallback.ondeviceadded != 'function'");
    }

    if (typeof deviceDiscoveryCallback.ondeviceremoved != 'function')
    {
        allshare_helper.log.error("typeof deviceDiscoveryCallback.ondeviceremoved != 'function'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof deviceDiscoveryCallback.ondeviceremoved != 'function'");
    }    

    // processing
    this._listenersCounter++;
    this._listeners.push(new this._ListenerInfo(deviceDiscoveryCallback, this._listenersCounter));
    allshare_helper.log.debug("DeviceFinder.addDeviceDiscoveryListener() added listenersId:" + this._listenersCounter);

    allshare_helper.log.trace("DeviceFinder.addDeviceDiscoveryListener() end");
    
    return this._listenersCounter;
}


// prototype
// void removeDeviceDiscoveryListener(in long deviceDiscoveryListener) raises(WebAPIException);
window.webapis.allshare.serviceconnector._DeviceFinder.removeDeviceDiscoveryListener = function(deviceDiscoveryListenerId)
{
    allshare_helper.log.trace("DeviceFinder.removeDeviceDiscoveryListener() begin");

    // check argument
    if (deviceDiscoveryListenerId == null)
    {
        allshare_helper.log.error("deviceDiscoveryListenerId == null");
        throw allshare_helper.createWebAPIException("InvalidValuesError", "deviceDiscoveryListenerId == null");
    }    

    if (typeof deviceDiscoveryListenerId == 'boolean')
    {
        allshare_helper.log.error("typeof deviceDiscoveryListenerId == 'boolean'");
        throw allshare_helper.createWebAPIException("InvalidValuesError", "typeof deviceDiscoveryListenerId != 'boolean'");
    }    

    if (typeof deviceDiscoveryListenerId != 'number')
    {
        allshare_helper.log.error("typeof deviceDiscoveryListenerId != 'number'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof deviceDiscoveryListenerId != 'number'");
    }    

    // processing
    var fRemoved = false;
    for (var i = 0; i < this._listeners.length; i++)
    {
        if (this._listeners[i].listenerId == deviceDiscoveryListenerId)
        {
            // remove element from array
            allshare_helper.log.debug("DeviceFinder.removeDeviceDiscoveryListener() remove listenerId:" + this._listeners[i].listenerId);
            this._listeners.splice(i, 1);
            fRemoved = true;
            break;
        }
    }

    if (! fRemoved)
    {
        // no found deviceDiscoveryListener - 'id'
        allshare_helper.log.error("deviceDiscoveryListenerId:" + deviceDiscoveryListenerId + " unknown");
        throw allshare_helper.createWebAPIException("InvalidValuesError", "deviceDiscoveryListenerId:" + deviceDiscoveryListenerId + " unknown");
    }

    allshare_helper.log.trace("DeviceFinder.removeDeviceDiscoveryListener() end");
}


 
//=============================================================================
// 
//=============================================================================

//=============================================================================
// AbstractFilter
window.webapis.AbstractFilter = function()
{}


//=============================================================================
// [Constructor(CompositeFilterType type, optional AbstractFilter[] filters)]
window.webapis.CompositeFilter = function(type, filters)
{
    this.setType = function(type)
    {
        if(typeof type != 'string')
        {
            allshare_helper.log.error("Type of 'type' argument is not string");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of 'type' argument is not string");
        }

        switch(type)
        {
            case "UNION": break;
            case "INTERSECTION": break;
            default: 
                allshare_helper.log.error("Only 'UNION' and 'INTERSECTION' values of 'type' argument is supported");
                throw allshare_helper.createWebAPIException("TypeMismatchError", "Only 'UNION' and 'INTERSECTION' values of 'type' argument is supported");
                break;
        }
        this.type_ = type;
    }

    // attribute CompositeFilterType type;
    this.__defineGetter__("type", function(){ return this.type_; });
    this.__defineSetter__("type", function(type){ this.setType(type); });

    this.setType(type);

    this.filters = filters; // could be null or array
}


//=============================================================================

// [Constructor(DOMString attributeName, optional FilterMatchFlag matchFlag, optional any matchValue)]
window.webapis.AttributeFilter = function(attributeName, matchFlag, matchValue)
{
    this.setAttributeName = function(attributeName)
    {
        if(typeof attributeName != 'string')
        {
            allshare_helper.log.error("Type of 'attributeName' argument is not string");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of 'attributeName' argument is not string");
        }

/*
        switch(attributeName)
        {
            case "albumTitle": break;
            case "artist": break;
            case "date": break;
            case "duration": break;
            case "extension": break;
            case "fileSize": break;
            case "genre": break;
            case "location": break;
            case "mimeType": break;
            case "width": break;
            case "height": break;
            case "subtitleUri": break;
            case "thumbnailUri": break;
            case "title": break;
            case "itemType": break;
            case "itemUri": break;
            case "isRootFolder": break;
            case "contentBuildType": break;

            default: 
                allshare_helper.log.error("Value of 'atributeName' argument is not supported");
                throw allshare_helper.createWebAPIException("TypeMismatchError", "Value of 'atributeName' argument is not supported");
                break;
        }
*/
        this.attributeName_ = attributeName;
    }

  
    // attribute DOMString attributeName;
    this.__defineGetter__("attributeName", function(){ return this.attributeName_; });
    this.__defineSetter__("attributeName", function(attributeName){ this.setAttributeName(attributeName); });


    this.setMatchFlag = function(matchFlag)
    {
        if (matchFlag)
        {
            if(typeof matchFlag != 'string')
            {
                allshare_helper.log.error("Type of 'matchFlag' argument is not string");
                throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of 'matchFlag' argument is not string");
            }

            switch(matchFlag)
            {
                case "EXACTLY": break;
                case "FULLSTRING": break;
                case "CONTAINS": break;
                case "STARTSWITH": break;
                case "ENDSWITH": break;
                case "EXISTS": break;

                default: 
                    allshare_helper.log.error("Value of 'matchFlag' argument is not supported");
                    throw allshare_helper.createWebAPIException("TypeMismatchError", "Value of 'matchFlag' argument is not supported");
                    break;
            }
        }
        else
        {
            matchFlag = "EXACTLY";
        }

        this.matchFlag_ = matchFlag;
    }
    
    // attribute FilterMatchFlag matchFlag setraises(WebAPIException);
    this.__defineGetter__("matchFlag", function(){ return this.matchFlag_; });
    this.__defineSetter__("matchFlag", function(matchFlag){ this.setMatchFlag(matchFlag); });


    this.setAttributeName(attributeName);     
    this.setMatchFlag(matchFlag);

    // attribute any matchValue;
    this.matchValue = matchValue;
}


//=============================================================================

// [Constructor(DOMString attributeName, optional any initialValue, optional any endValue)]
window.webapis.AttributeRangeFilter = function(attributeName, initialValue, endValue)
{
    this.setAttributeName = function(attributeName)
    {
        if(typeof attributeName != 'string')
        {
            allshare_helper.log.error("Type of 'attributeName' argument is not string");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of 'attributeName' argument is not string");
        }

        this.attributeName_ = attributeName;
    }


    // attribute DOMString attributeName;
    this.__defineGetter__("attributeName", function(){ return this.attributeName_; });
    this.__defineSetter__("attributeName", function(attributeName){ this.setAttributeName(attributeName); });

    this.setAttributeName(attributeName); 

    // attribute any initialValue;
    this.initialValue = initialValue;

    // attribute any endValue;
    this.endValue = endValue;
    
}


 //=============================================================================

// [Constructor(DOMString attributeName, optional SortModeOrder order)] 
window.webapis.SortMode = function(attributeName, order)
{
    this.setAttributeName = function(attributeName)
    {
        if(typeof attributeName != 'string')
        {
            allshare_helper.log.error("Type of 'attributeName' argument is not string");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of 'attributeName' argument is not string");
        }

        this.attributeName_ = attributeName;
    }


    this.setOrder = function(order)
    {
        if (order != null)
        {
            if(typeof order != 'string')
            {
                allshare_helper.log.error("Type of 'order' argument is not string");
                throw allshare_helper.createWebAPIException("TypeMismatchError", "Type of 'order' argument is not string");
            }

            switch(order)
            {
                case "ASC": break;
                case "DESC": break;

                default: 
                    allshare_helper.log.error("Value of 'order' argument is not supported, expected ASC or DESC");
                    throw allshare_helper.createWebAPIException("TypeMismatchError", "Value of 'order' argument is not supported, expected ASC or DESC");
                    break;
            }
        }
        else
        {
            order = "ASC";
        }
        
        this.order_ = order;
    }    


    // attribute DOMString attributeName;
    this.__defineGetter__("attributeName", function(){ return this.attributeName_; });
    this.__defineSetter__("attributeName", function(attributeName){ this.setAttributeName(attributeName); });


    // attribute SortModeOrder order setraises(WebAPIException);
    this.__defineGetter__("order", function(){ return this.order_; });
    this.__defineSetter__("order", function(order){ this.setOrder(order); });


    this.setAttributeName(attributeName);
    this.setOrder(order);

}


// return boolean 
allshare_helper.doCompositeFiltering = function(item, filter)
{
    allshare_helper.log.trace("doCompositeFiltering()");

    if (filter.filters)
    {
        for (var i = 0; i < filter.filters.length; i++)
        {
            var result = allshare_helper.doFiltering(item, filter.filters[i]);

            if (filter.type == "UNION")
            {
                if (result)
                    return true;
            }
            else
            if (filter.type == "INTERSECTION")
            {
                if (! result)
                    return false;
            }
            else
            {
                allshare_helper.log.error("Value of CompositeFilter 'type' is not supported, expected UNION or INTERSECTION");
            }
        }

        if (filter.filters.length > 0)
        {
            if (filter.type == "UNION")
            {
                return false;
            }
            else
            if (filter.type == "INTERSECTION")
            {
                return true;
            }
            else
            {
                allshare_helper.log.error("Value of CompositeFilter 'type' is not supported, expected UNION or INTERSECTION");
            }
        }
    }
    return true;
}


// return boolean 
allshare_helper.doAttributeFiltering = function(item, filter)
{
    allshare_helper.log.trace("doAttributeFiltering()");

    var itemAttrValue = item[filter.attributeName];
    switch(filter.matchFlag)
    {
        case "EXACTLY":
            if (itemAttrValue === filter.matchValue)
                return true;
            else
                return false;
        break;

        case "FULLSTRING":
            if (typeof itemAttrValue == 'string' && typeof filter.matchValue == 'string')
            {
                if (itemAttrValue.toLowerCase() === filter.matchValue.toLowerCase())
                    return true;
            }
            return false;
        break;

        case "CONTAINS":
            if (typeof itemAttrValue == 'string' && typeof filter.matchValue == 'string')
            {
                if (itemAttrValue.toLowerCase().indexOf(filter.matchValue.toLowerCase()) >= 0)
                    return true;
            }
            return false;
        break;

        case "STARTSWITH":
            if (typeof itemAttrValue == 'string' && typeof filter.matchValue == 'string')
            {
                if (itemAttrValue.toLowerCase().indexOf(filter.matchValue.toLowerCase()) == 0)
                    return true;
            }
            return false;
        break;

        case "ENDSWITH":
            if (typeof itemAttrValue == 'string' && typeof filter.matchValue == 'string')
            {
                var str1 = itemAttrValue.toLowerCase();
                var str2 = filter.matchValue.toLowerCase();
                if (str1.lastIndexOf(str2) == -1)
                    return false;
                if (str1.lastIndexOf(str2) + str2.length == str1.length)
                    return true;
            }
            return false;
        break;

        case "EXISTS":
            if (itemAttrValue != null)
                return true
        break;

        default:
            allshare_helper.log.error("Value of AttributeFilter 'type' is not supported, expected 'EXACTLY', 'FULLSTRING', 'CONTAINS', 'STARTSWITH', 'ENDSWITH', 'EXISTS'");
            break;

    }

    return false;
}


// return boolean 
allshare_helper.doAttributeRangeFiltering = function(item, filter)
{
    allshare_helper.log.trace("doAttributeRangeFiltering()");

    var itemAttrValue = item[filter.attributeName];
    if (itemAttrValue)
    {
        if (filter.initialValue)
        {
            if (typeof itemAttrValue == 'number' && typeof filter.initialValue == 'number')
            {
                if (filter.initialValue > itemAttrValue)
                    return false;
            }
            else
            if (itemAttrValue instanceof Date && filter.initialValue instanceof Date)
            {
                if (filter.initialValue.valueOf() > itemAttrValue.valueOf())
                    return false;
            }
            else
            {
                allshare_helper.log.error("AttributeRangeFilter supported only number and Date attribute");
                return false;
            }
        }

        if (filter.endValue)
        {
            if (typeof itemAttrValue == 'number' && typeof filter.endValue == 'number')
            {
                if (filter.endValue <= itemAttrValue)
                    return false;
            }
            else
            if (itemAttrValue instanceof Date && filter.endValue instanceof Date)
            {
                if (filter.endValue.valueOf() > itemAttrValue.valueOf())
                    return false;
            }
            else
            {
                allshare_helper.log.error("AttributeRangeFilter supported only number and Date attribute");
                return false;
            }
        }
        return true;
    }

    return false;
}


// return boolean 
allshare_helper.doFiltering = function(item, filter)
{
    allshare_helper.log.trace("doFiltering()");

    if (filter == null)
    {
    }
    else
    if (filter instanceof window.webapis.CompositeFilter)
    {
        return allshare_helper.doCompositeFiltering(item, filter);
    }
    else
    if (filter instanceof window.webapis.AttributeFilter)
    {
        return allshare_helper.doAttributeFiltering(item, filter);
    }
    else
    if (filter instanceof window.webapis.AttributeRangeFilter)
    {
        return allshare_helper.doAttributeRangeFiltering(item, filter);
    }
    else
    if (filter instanceof window.webapis.AbstractFilter)
    {
    }
    else
    {
        allshare_helper.log.error("Find filter of unknown type - ignored");
    }

    return true;
}


//=============================================================================
// function Icon
window.webapis.allshare.Icon = function()
{
}


allshare_helper.initIcon = function(iconJson, icon)
{
    allshare_helper.log.trace("initIcon() begin");

    if (iconJson == null)
    {
        allshare_helper.log.debug("iconJson == null");
        return null;
    }

    if (icon == null)
    {
        allshare_helper.log.debug("icon == null");
        return null;
    }

    // readonly attribute long depth;
    var depth = 0;
    if (typeof iconJson.IconDepth == 'number')
    {
        depth = iconJson.IconDepth;
    }
    allshare_helper.setReadOnlyAttribute(icon, "depth", depth);
    allshare_helper.log.info("added icon.depth:" + depth);


    // readonly attribute long height;
    var height = 0;
    if (typeof iconJson.IconHeight == 'number')
    {
        height = iconJson.IconHeight;
    }
    allshare_helper.setReadOnlyAttribute(icon, "height", height);
    allshare_helper.log.info("added icon.height:" + height);


    // readonly attribute long width;
    var width = 0;
    if (typeof iconJson.IconWidth == 'number')
    {
        width = iconJson.IconWidth;
    }
    allshare_helper.setReadOnlyAttribute(icon, "width", width);
    allshare_helper.log.info("added icon.width:" + width);


    // readonly attribute DOMString mimeType;
    var mimeType = "";
    if (typeof iconJson.IconMimeType == 'string')
    {
        mimeType = iconJson.IconMimeType;
    }
    allshare_helper.setReadOnlyAttribute(icon, "mimeType", mimeType);
    allshare_helper.log.info("added icon.mimeType:" + mimeType);


    // readonly attribute DOMString iconUri;
    var iconUri = "";
    if (typeof iconJson.IconURL == 'string')
    {
        iconUri = iconJson.IconURL;
    }
    allshare_helper.setReadOnlyAttribute(icon, "iconUri", iconUri);
    allshare_helper.log.info("added icon.iconUri:" + iconUri);

    allshare_helper.log.trace("initIcon() end");

    return icon;
}


 
//=============================================================================
// Device 
window.webapis.allshare.Device = function()
{
}


allshare_helper.initDevice = function(deviceJson, deviceType, device)
{
    allshare_helper.log.trace("initDevice() begin");

    if (deviceJson == null)
    {
        allshare_helper.log.debug("deviceJson == null");
        return null;
    }

    if (device == null)
    {
        allshare_helper.log.debug("device == null");
        return null;
    }


    //readonly attribute DeviceId id;  // string
    var id = null;
    if (typeof deviceJson.deviceID == 'number')
    {
        device._deviceID = deviceJson.deviceID; // keeps deviceID in form of below level
        allshare_helper.log.info("added device._deviceID:" + device._deviceID);
        id = deviceJson.UDN || ("" + deviceJson.deviceID); //'id' should be UDN
    }
    allshare_helper.setReadOnlyAttribute(device, "id", id);
    allshare_helper.log.info("added device.id:" + id);


    // readonly attribute DeviceDomain deviceDomain;
    var deviceDomain = "";
    if (typeof deviceJson.Domain == 'string')
    {
        deviceDomain = deviceJson.Domain;
    }
    allshare_helper.setReadOnlyAttribute(device, "deviceDomain", deviceDomain);
    allshare_helper.log.info("added device.deviceDomain:" + deviceDomain);


    //readonly attribute DeviceType deviceType;

    // plugin may return info only about MediaServers 
    // deviceType == 'AllShare' - samsung DMS devices
    // deviceType == 'Network' - other DMS devices
/*
    var deviceType = "UNKNOWN";
    if (typeof deviceJson.deviceType == 'string')
    {
        switch(deviceJson.deviceType)
        {
            case "AllShare": ;
            case "Network": deviceType = "MEDIAPROVIDER"; break;

            default: deviceType = "UNKNOWN"; break;
        }
    }
*/    
    allshare_helper.setReadOnlyAttribute(device, "deviceType", deviceType);
    allshare_helper.log.info("added device.deviceType:" + deviceType);


    // readonly attribute IconArray iconArray;
    var iconArray = [];
    if (deviceJson.Icons != null && (typeof deviceJson.Icons == 'object'))
    {
        for (var i = 0; i < deviceJson.Icons.length; i++)
        {
            var icon = allshare_helper.initIcon(deviceJson.Icons[i], new window.webapis.allshare.Icon);
            iconArray.push(icon);
        }
    }
    allshare_helper.setReadOnlyAttribute(device, "iconArray", iconArray);
    allshare_helper.log.info("added device.iconArray: number:" + iconArray.length);


    // readonly attribute DOMString ipAddress;
    var ipAddress = "";
    if (typeof deviceJson.IPAddress == 'string')
    {
        ipAddress = deviceJson.IPAddress;
    }
    allshare_helper.setReadOnlyAttribute(device, "ipAddress", ipAddress);
    allshare_helper.log.info("added device.ipAddress:" + ipAddress);


    // readonly attribute DOMString modelName;
    var modelName = "";
    if (typeof deviceJson.ModelName == 'string')
    {
        modelName = deviceJson.ModelName;
    }
    allshare_helper.setReadOnlyAttribute(device, "modelName", modelName);
    allshare_helper.log.info("added device.modelName:" + modelName);


    // readonly attribute DOMString name;
    var name = "";
    if (typeof deviceJson.deviceName == 'string')
    {
        name = deviceJson.deviceName;
    }
    allshare_helper.setReadOnlyAttribute(device, "name", name);
    allshare_helper.log.info("added device.name:" + name);


    // readonly attribute DOMString nic;
    var nic = deviceJson.nic;
    if (typeof nic != 'string')
    {
        nic = "";
    }
    allshare_helper.setReadOnlyAttribute(device, "nic", nic);
    allshare_helper.log.info("added device.nic:" + nic);


    allshare_helper.log.trace("initDevice() end");

    return device;
}


 
//=============================================================================
// 
//=============================================================================


//=============================================================================
window.webapis.allshare.MediaProvider = function()
{
    allshare_helper.log.trace("function MediaProvider()");
    window.webapis.allshare.Device.call(this);
}


// ??? is this right hierarcy?
window.webapis.allshare.MediaProvider.prototype = new window.webapis.allshare.Device();
window.webapis.allshare.MediaProvider.prototype.constructor = window.webapis.allshare.MediaProvider;


allshare_helper.initMediaProvider = function(mediaProviderJson, mediaProvider)
{
    allshare_helper.log.trace("initMediaProvider() begin");

    if (mediaProviderJson == null)
    {
        allshare_helper.log.debug("mediaProviderJson == null");
        return null;
    }

    if (mediaProvider == null)
    {
        allshare_helper.log.debug("mediaProvider == null");
        return null;
    }

    var deviceType = "MEDIAPROVIDER";
    allshare_helper.initDevice(mediaProviderJson, deviceType, mediaProvider);
 
    allshare_helper.setReadOnlyAttribute(mediaProvider, "rootFolder", mediaProvider.getRootFolder());


    // readonly attribute boolean isSearchable;
    var isSearchable = false;
    if (typeof mediaProviderJson.isSearchable == 'boolean')
    {
        isSearchable = mediaProviderJson.isSearchable;
    }
    allshare_helper.setReadOnlyAttribute(mediaProvider, "isSearchable", isSearchable);
    allshare_helper.log.info("added mediaProvider.isSearchable:" + isSearchable);

    allshare_helper.log.trace("initMediaProvider() end");

    return mediaProvider;
}


allshare_helper.createDeviceFactory = function(deviceJson)
{
    allshare_helper.log.trace("allshare_helper.createDevices() begin");

    if (deviceJson == null)
    {
        allshare_helper.log.debug("deviceJson == null");
        return null;
    }


    // plugin may return info only about MediaServers 
    // deviceType == 'AllShare' - samsung DMS devices
    // deviceType == 'Network' - other DMS devices
    var deviceType = "UNKNOWN";
    if (typeof deviceJson.deviceType == 'string')
    {
        switch(deviceJson.deviceType)
        {
            case "AllShare": ;
            case "Network": deviceType = "MEDIAPROVIDER"; break;

            default: deviceType = "UNKNOWN"; break;
        }
    }
    
    var device = null;
    
    switch(deviceType)
    {
        case "MEDIAPROVIDER":
            device = allshare_helper.initMediaProvider(deviceJson, new window.webapis.allshare.MediaProvider);
        break;

        default:
        break;
    }

    allshare_helper.log.trace("allshare_helper.createDevices() end");

    return device;
}


window.webapis.allshare.MediaProvider.prototype.getMediaReceiver = function()
{
    allshare_helper.log.trace("MediaProvider.prototype.getMediaReceiver()");

    allshare_helper.log.error("This feature is not supported");
    throw allshare_helper.createWebAPIException("NotSupportedError", "This feature is not supported");
}


window.webapis.allshare.MediaProvider.prototype.getRootFolder = function()
{
    allshare_helper.log.trace("MediaProvider.prototype.getRootFolder() begin");
    allshare_helper.log.debug("MediaProvider.prototype.getRootFolder() for device id:" + this._deviceID);

    var retValue = null;
    var json = "hyunghun.cho::set dummy data for root folder"; //window.webapis.allshare._plugin("AllShare", "GetRootFolder", this._deviceID, 0) || '';
    
	retValue = {
		mimeType : "application/folder",
		title : "root",
		itemType : "FOLDER",
		itemUri : "http://127.0.0.1/",
		isRootFolder : true,
		contentBuildType : "MEDIAPROVIDER"
	};

	return retValue;

	// below code will be ignored
    if(json)
    {
        var obj = null;
        try
        {
            obj = eval("(" + json + ")");

            obj.type = "folder";
            retValue = allshare_helper.initItem(obj, new window.webapis.allshare.Item(null, null, obj.title));
        }
        catch(e)
        {
            allshare_helper.log.error("eval failed");
            allshare_helper.log.error("exception e.name:" + e.name + "   e.message:" + e.message);
        }
    }

    allshare_helper.log.trace("MediaProvider.prototype.getRootFolder() end");

    return retValue;
}


// prototype
// long addMediaProviderEventListener(MediaProviderEventCallback eventCallback)
window.webapis.allshare.MediaProvider.prototype.addMediaProviderEventListener = function(eventCallback)
{
    allshare_helper.log.trace("MediaProvider.prototype.addMediaProviderEventListener()");
    
    allshare_helper.log.nonimplemented("MediaProvider.prototype.addMediaProviderEventListener()");

    throw allshare_helper.createWebAPIException("NotSupportedError", "this feature is not supported");
    return 0;
}


// prototype
// void removeMediaProviderEventListener(long eventCallbackId)
window.webapis.allshare.MediaProvider.prototype.removeMediaProviderEventListener = function(eventCallbackId)
{
    allshare_helper.log.trace("MediaProvider.prototype.removeMediaProviderEventListener()");

    allshare_helper.log.nonimplemented("MediaProvider.prototype.removeMediaProviderEventListener()");

    if (typeof eventCallbackId != 'number')
    {
        allshare_helper.log.error("typeof eventCallbackId != 'number'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof eventCallbackId != 'number'");
    }

    throw allshare_helper.createWebAPIException("NotSupportedError", "this feature is not supported");
}


// prototype
// void browse(Item folderItem, unsigned long startIndex, unsigned long requestCount,
//                      MediaProviderSuccessCallback browseCallback, MediaProviderErrorCallback errorCallback,
//                      AbstractFilter browseFilter, SortMode sortMode)
window.webapis.allshare.MediaProvider.prototype.browse = function(parentFolderItem, startIndex, requestCount, successCallback, errorCallback, browseFilter, sortMode)
{
    allshare_helper.log.trace("MediaProvider.prototype.browse() begin");
    allshare_helper.log.debug("  startIndex:" + startIndex + "   requestCount:" + requestCount);
    
    // check parentFolderItem
    if (parentFolderItem == null || (typeof parentFolderItem != 'object'))
    {
        allshare_helper.log.error("Type check for parentFolderItem failed: (parentFolderItem == null || (typeof parentFolderItem != 'object'))");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "Type check for parentFolderItem failed: (parentFolderItem == null || (typeof parentFolderItem != 'object'))");
    }
    

    // check startIndex
    if (typeof startIndex != 'number')
    {
        allshare_helper.log.error("typeof startIndex != 'number'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof startIndex != 'number'");
    }

    if (startIndex < 0)
    {
        allshare_helper.log.error("startIndex is out of range.");
        throw allshare_helper.createWebAPIException("InvalidValuesError", "startIndex is out of range.");
    }

    
    // check requestCount
    if (typeof requestCount != 'number')
    {
        allshare_helper.log.error("typeof requestCount != 'number'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof requestCount != 'number'");
    }

    if (requestCount < 0)
    {
        allshare_helper.log.error("requestCount is out of range.");
        throw allshare_helper.createWebAPIException("InvalidValuesError", "requestCount is out of range.");
    }


    // check successCallback
    if (typeof successCallback != 'function')
    {
        allshare_helper.log.error("typeof successCallback != 'function'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof successCallback != 'function'");
    }

    
    // check errorCallback
    if (typeof errorCallback != 'function')
    {
        allshare_helper.log.error("typeof errorCallback != 'function'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof errorCallback != 'function'");
    }


    // check searchFilter
    if (browseFilter != null)
    {
        if (typeof browseFilter != 'object')
        {
            allshare_helper.log.error("typeof browseFilter != 'object'");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof browseFilter != 'object'");
        }
        else
        {
            allshare_helper.log.error("browseFilter parameter is not supported - ignored");
//            throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof errorCallback != 'function'");
        }
    }

    // check sortMode
    if (sortMode != null)
    {
        if (typeof sortMode != 'object')
        {
            allshare_helper.log.error("typeof sortMode != 'object'");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof sortMode != 'object'");
        }

        if ((sortMode.attributeName == null) ||(sortMode.order == null))
        {
            allshare_helper.log.error("Contents of sortMode is wrong");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "Contents of sortMode is wrong");
        }
    }

	// invoke success callback with dummy item list
	var itemList = [];

	var dummyImageItem = {
		albumTitle : "dummy audio",
		artist : "dummy",
		date : new Date(),
		duration : 360000,
		extension : "mp3",
		fileSize : 10000,
		genre : "POP",
		mimeType : "audio/mpeg",
		location : null, 
		thumbnailUri : null,
		title : "dummy song",
		itemType : "AUDIO",
		itemUri : "http://127.0.0.1/dummy.mp3",
		isRootFolder : false,
		contentBuildType : "MEDIAPROVIDER"
	};

	var dummyFolderItem = {
		mimeType : "application/folder",
		title : "dummy folder",
		itemType : "FOLDER",
		itemUri : "http://127.0.0.1/dummy/",
		isRootFolder : false,
		contentBuildType : "MEDIAPROVIDER"
	};

	itemList.push(dummyFolderItem);
	itemList.push(dummyImageItem);

	setTimeout(function () {
		successCallback(itemList);
		}, 40);
	return;
	// ignore below code

    var deviceId = this._deviceID;
    if (deviceId == null)
    {
        allshare_helper.log.error("can't found this._deviceID");
        throw allshare_helper.createWebAPIException("InvalidStateError", "can't found this._deviceID");
    }

    var allsharePlugin = new Object(); // window.webapis.allshare._plugin("AllShare");
    if(!allsharePlugin)
    {
        allshare_helper.log.error("AllShare plugin is not exist.");
        throw allshare_helper.createWebAPIException("InvalidStateError", "AllShare plugin is not exist.");
    } 

    var requestInfo = allshare_helper.RequestsHelper.registerRequest();
    if (requestInfo == null)
    {
        allshare_helper.log.error("Internal error SEF: request in processing already.");
        throw allshare_helper.createWebAPIException("UnknownError", "Internal error SEF: request in processing already.");
    }

    requestInfo.description = "BrowseItems request info";
    requestInfo.parentFolderItem = parentFolderItem;
    requestInfo.startIndex = startIndex;
    requestInfo.requestCount = requestCount;
    requestInfo.successCallback = successCallback;
    requestInfo.errorCallback = errorCallback;
    requestInfo.browseFilter = browseFilter;
    requestInfo.sortMode = sortMode;
    requestInfo.provider = this;
    requestInfo.callbackHandlers = window.webapis.allshare.MediaProvider.BrowseCallbackHandlers;

    // no support for sort mode ???
    // 'BrowseItems2' new API for 2013 with support of requestID, EndOfItems, sortMode

    // no arguments description
    // such "a" - ??

    var result;

    if (sortMode)
    {
        // hyunghun.cho::set dummy result data 
        result = true; //window.webapis.allshare._plugin(allsharePlugin, "BrowseItemsTitleSort", "a", deviceId, parentFolderItem._objectID, startIndex, requestCount, requestInfo.id);
    }
    else
    {
		// hyunghun.cho::set dummy result data"
        result = true;//window.webapis.allshare._plugin(allsharePlugin, "BrowseItems2", "a", deviceId, parentFolderItem._objectID, startIndex, requestCount, requestInfo.id);
    }

    if (!result)
    {
        // if error, clean requestinfo
        allshare_helper.RequestsHelper.removeRequest(requestInfo.id);
    }

    allshare_helper.log.trace("MediaProvider.prototype.browse() end");
}



//=============================================================================
// 
//=============================================================================


// prototype
// void search(DOMString keyword, unsigned long startIndex, unsigned long requestCount,
//                    MediaProviderSuccessCallback successCallback, MediaProviderErrorCallback errorCallback,
//                    AbstractFilter searchFilter)
window.webapis.allshare.MediaProvider.prototype.search = function(keyword, startIndex, requestCount, successCallback, errorCallback, searchFilter)
{
    allshare_helper.log.trace("MediaProvider.prototype.search() begin");
    allshare_helper.log.debug("  keyword:" + keyword + "   startIndex:" + startIndex + "   requestCount:" + requestCount);

    // check keyword
    if (typeof keyword != 'string')
    {
        allshare_helper.log.error("typeof keyword != 'string'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof keyword != 'string'");
    }


    // check startIndex
    if (typeof startIndex != 'number')
    {
        allshare_helper.log.error("typeof startIndex != 'number'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof startIndex != 'number'");
    }

    if (startIndex < 0)
    {
        allshare_helper.log.error("startIndex is out of range.");
        throw allshare_helper.createWebAPIException("InvalidValuesError", "startIndex is out of range.");
    }

    
    // check requestCount
    if (typeof requestCount != 'number')
    {
        allshare_helper.log.error("typeof requestCount != 'number'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof requestCount != 'number'");
    }

    if (requestCount < 0)
    {
        allshare_helper.log.error("requestCount is out of range.");
        throw allshare_helper.createWebAPIException("InvalidValuesError", "requestCount is out of range.");
    }

    
    // check successCallback
    if (typeof successCallback != 'function')
    {
        allshare_helper.log.error("typeof successCallback != 'function'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof successCallback != 'function'");
    }


    // check errorCallback
    if (typeof errorCallback != 'function')
    {
        allshare_helper.log.error("typeof errorCallback != 'function'");
        throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof errorCallback != 'function'");
    }

    // check searchFilter
    if (searchFilter != null)
    {
        if (typeof searchFilter != 'object')
        {
            allshare_helper.log.error("typeof searchFilter != 'object'");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof searchFilter != 'object'");
        }
        else
        {
            allshare_helper.log.error("searchFilter parameter is not supported - ignored");
//            throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof errorCallback != 'function'");
        }
    }

	// invoke success callback with dummy item list
	var itemList = [];

	var dummyImageItem = {
		albumTitle : "dummy image's album",
		date : new Date(),
		extension : "jpg",
		fileSize : 20000,
		mimeType : "image/jpeg",
		location : null, 
		width : 1024,
		height : 768,
		thumbnailUri : null,
		title : "dummy picture",
		itemType : "IMAGE",
		itemUri : "http://127.0.0.1/dummy.jpg",
		isRootFolder : false,
		contentBuildType : "MEDIAPROVIDER"
	};
	var dummyAudioItem = {
		albumTitle : "dummy audio",
		artist : "dummy",
		date : new Date(),
		duration : 360000,
		extension : "mp3",
		fileSize : 10000,
		genre : "POP",
		mimeType : "audio/mpeg",
		location : null, 
		thumbnailUri : null,
		title : "dummy song",
		itemType : "AUDIO",
		itemUri : "http://127.0.0.1/dummy.mp3",
		isRootFolder : false,
		contentBuildType : "MEDIAPROVIDER"
	};

	var dummyVideoItem = {
		albumTitle : "dummy video album",
		date : new Date(),
		duration : 360000,
		extension : "mp4",
		fileSize : 100000,
		mimeType : "video/mpeg",
		width : 640,
		height : 480,
		subtitleUri : "http://127.0.0.1/dummy.sub", 
		location : null, 
		thumbnailUri : null,
		title : "dummy video",
		itemType : "VIDEO",
		itemUri : "http://127.0.0.1/dummy.mp4",
		isRootFolder : false,
		contentBuildType : "MEDIAPROVIDER"
	};
	itemList.push(dummyImageItem);
	itemList.push(dummyAudioItem);
	itemList.push(dummyVideoItem);

	//allshare_helper.log.trace("search() will invoke sucessCallback after 40 msec later");
	setTimeout( function () { 
		successCallback(itemList);
		}, 40);
	return;
	// ignore below code

    var deviceId = this._deviceID;
    if (deviceId == null)
    {
        allshare_helper.log.error("can't found this._deviceID");
        throw allshare_helper.createWebAPIException("InvalidStateError", "can't found this._deviceID");
    }

    var allsharePlugin = new Object(); //window.webapis.allshare._plugin("AllShare");
    if(!allsharePlugin)
    {
        allshare_helper.log.error("AllShare plugin is not exist.");
        throw allshare_helper.createWebAPIException("InvalidStateError", "AllShare plugin is not exist.");
    } 
    
    var requestInfo = allshare_helper.RequestsHelper.registerRequest();
    if (requestInfo == null)
    {
        allshare_helper.log.error("Internal error SEF: request in processing already.");
        throw allshare_helper.createWebAPIException("UnknownError", "Internal error SEF: request in processing already.");
    }

    requestInfo.description = "SearchItems request info";
    requestInfo.keyword = keyword;
    requestInfo.startIndex = startIndex;
    requestInfo.requestCount = requestCount;
    requestInfo.successCallback = successCallback;
    requestInfo.errorCallback = errorCallback;
    requestInfo.searchFilter = searchFilter;
    requestInfo.provider = this;
    requestInfo.callbackHandlers = window.webapis.allshare.MediaProvider.SearchCallbackHandlers;
    
    // 'SearchItems2' new API for 2013 with support of requestID, EndOfItems
    
    // no arguments description
    // such 3 - ??,  "a" - ??

	// hyunghun.cho::set dummy data
    var result = true; 

    if (! result)
    {
        // if error, clean requestinfo
        allshare_helper.RequestsHelper.removeRequest(requestInfo.id);
    }
    
    allshare_helper.log.trace("MediaProvider.prototype.search() end");
}


//=============================================================================
// BrowseCallbackHandlers
//=============================================================================
window.webapis.allshare.MediaProvider.BrowseCallbackHandlers = {}


window.webapis.allshare.MediaProvider.BrowseCallbackHandlers.successCallback = function(requestInfo, obj)
{
    allshare_helper.log.trace("BrowseCallbackHandlers.successCallback() begin");

    var itemList = [];
    var EndOfItem = true;

    try
    {
		var dummyImageItem = {
			albumTitle : "dummy audio",
			artist : "dummy",
			date : new Date(),
			duration : 360000,
			extension : "mp3",
			fileSize : 10000,
			genre : "POP",
			mimeType : "audio/mpeg",
			location : null, 
			thumbnailUri : null,
			title : "dummy song",
			itemType : "AUDIO",
			itemUri : "http://127.0.0.1/dummy.mp3",
			isRootFolder : false,
			contentBuildType : "MEDIAPROVIDER"
		};
		itemList.push(dummyImageItem);
		// hyunghun.cho::above code replaces search results as dummy value

        requestInfo.successCallback(itemList, EndOfItem, requestInfo.provider.id);
    }
    catch(e)
    {
        allshare_helper.log.error("exception inside browse success callback handler");
        allshare_helper.log.error("e name:" + (e && (e.name || "")) + "   message:" + (e && (e.message || "")));
    }
    
    allshare_helper.log.trace("BrowseCallbackHandlers.successCallback() end");

}


window.webapis.allshare.MediaProvider.BrowseCallbackHandlers.errorCallback = function(requestInfo, webAPIError)
{
    allshare_helper.log.trace("BrowseCallbackHandlers.errorCallback()");

    try
    {
        requestInfo.errorCallback(webAPIError, requestInfo.provider.id);
    }
    catch(e)
    {
        allshare_helper.log.error("exception during browse error callback");
        allshare_helper.log.error("e name:" + (e && (e.name || "")) + "   message:" + (e && (e.message || "")));
    }
    
//    allshare_helper.RequestsHelper.removeRequest(requestInfo.id); // located in _onAllsharePluginEvent()
}


//=============================================================================
// SearchCallbackHandlers
//=============================================================================

 
window.webapis.allshare.MediaProvider.SearchCallbackHandlers = {}


window.webapis.allshare.MediaProvider.SearchCallbackHandlers.successCallback = function(requestInfo, obj)
{
    allshare_helper.log.trace("SearchCallbackHandlers.successCallback() begin");
    
    var itemList = [];
    var EndOfItem = true;
    
    try
    {
        allshare_helper.log.debug("obj.deviceID:" + obj.deviceID);
//            obj.deviceID = ;

        allshare_helper.log.debug("obj.EndOfItem:" + obj.EndOfItem);
        if (typeof obj.EndOfItem == 'boolean')
        {
            EndOfItem = obj.EndOfItem;
        }

        if(obj.Items && (obj.Items.length > 0))
        {
            for(var i=0; i<obj.Items.length; i++)
            {
                var item = allshare_helper.initItem(obj.Items[i], new window.webapis.allshare.Item);
                if (allshare_helper.doFiltering(item, requestInfo.searchFilter))
                {
                    itemList.push(item);
                }
            }
        }

        requestInfo.successCallback(itemList, EndOfItem, requestInfo.provider.id);
    }
    catch(e)
    {
        allshare_helper.log.error("exception inside search callback handler");
        allshare_helper.log.error("e name:" + (e && (e.name || "")) + "   message:" + (e && (e.message || "")));
    }

    allshare_helper.log.trace("SearchCallbackHandlers.successCallback() end");
}


window.webapis.allshare.MediaProvider.SearchCallbackHandlers.errorCallback = function(requestInfo, webAPIError)
{
    allshare_helper.log.trace("SearchCallbackHandlers.errorCallback()");
    
    try
    {
        requestInfo.errorCallback(webAPIError, requestInfo.provider.id);
    }
    catch(e)
    {
        allshare_helper.log.error("exception during search error callback");
        allshare_helper.log.error("e name:" + (e && (e.name || "")) + "   message:" + (e && (e.message || "")));
    }

//    allshare_helper.RequestsHelper.removeRequest(requestInfo.id); // located in _onAllsharePluginEvent()
}


//=============================================================================
// 
//=============================================================================
// prototype
// [Constructor(double latitude, double longitude)]
window.webapis.SimpleCoordinates = function(latitude_, longitude_)
{
    this.setLatitude(latitude_);
    this.setLongitude(longitude_);
}


window.webapis.SimpleCoordinates.prototype = 
{
    setLatitude : function(latitude_)
    {
        if (typeof latitude_ != 'number')
        {
            allshare_helper.log.error("typeof latitude != 'number'");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof latitude != 'number'");
        }
        this.latitude_ = latitude_;
    },
    setLongitude : function(longitude_)
    {
        if (typeof longitude_ != 'number')
        {
            allshare_helper.log.error("typeof longitude != 'number'");
            throw allshare_helper.createWebAPIException("TypeMismatchError", "typeof longitude != 'number'");
        }
        this.longitude_ = longitude_;
    },
    get latitude(){ return this.latitude_; },
    set latitude(latitude_){ this.setLatitude(latitude_); },
    get longitude(){ return this.longitude_; },
    set longitude(longitude_){ this.setLongitude(longitude_); }

};


//=============================================================================
// New declaration: Item
// Item
window.webapis.allshare.Item = function(uri, mimeType, title)
{
    allshare_helper.log.trace("Item() begin");

    allshare_helper.setReadOnlyAttribute(this, "itemUri", uri);
    allshare_helper.log.info("added item.itemUri:" + uri);

    allshare_helper.setReadOnlyAttribute(this, "mimeType", mimeType);
    allshare_helper.log.info("added item.mimeType:" + mimeType);

    allshare_helper.setReadOnlyAttribute(this, "title", title);
    allshare_helper.log.info("added item.title:" + title);


// attribute DOMString albumTitle
// attribute DOMString artist
// attribute Date date;
// attribute unsigned long long duration
// attribute DOMString extension
// attribute double fileSize; 
// attribute DOMString genre;
// attribute SimpleCoordinates? location;
// attribute DOMString mimeType;
// attribute unsigned long width; 
// attribute unsigned long height;
// attribute DOMString subtitleUri;
// attribute DOMString thumbnailUri;
// attribute DOMString title;
// attribute ItemType itemType;
// attribute DOMString itemUri;
// attribute boolean isRootFolder;
// attribute ItemContentBuildType contentBuildType;

    allshare_helper.log.trace("Item() end");
}


allshare_helper.initItem = function(itemJson, item)
{
    allshare_helper.log.trace("allshare_helper.initItem() begin");

    // attribute ItemType itemType;
    var itemTypeJson = itemJson.type; // 'folder'/'file'
    var itemType = null;
    switch(itemTypeJson)
    {
        case "folder": itemType = "FOLDER"; break;
        case "file":
        {
            var itemMediaTypeJson = itemJson.mediaType;
            switch(itemMediaTypeJson)
            {
                case "audio": itemType = "AUDIO"; break;
                case "video": itemType = "VIDEO"; break;
                case "image": itemType = "IMAGE"; break;
                default: itemType = "UNKNOWN"; break;
            }
        }
        break;
        default: itemType = "UNKNOWN"; break;
    }
    allshare_helper.setReadOnlyAttribute(item, "itemType", itemType);
    allshare_helper.log.info("added item.itemType:" + itemType);


    // attribute DOMString albumTitle
    var albumTitle = undefined;
    if (itemType == "AUDIO" || itemType == "VIDEO" || itemType == "IMAGE" || itemType == "UNKNOWN")
    {
        albumTitle = itemJson.album;
    }
    allshare_helper.setReadOnlyAttribute(item, "albumTitle", albumTitle);
    allshare_helper.log.info("added item.albumTitle:" + albumTitle);


    // attribute DOMString artist
    var artist = undefined;
    if (itemType == "AUDIO")
    {
        artist = null;
        if (typeof itemJson.artist == 'string')
        {
            artist = itemJson.artist;
        }
    }
    allshare_helper.setReadOnlyAttribute(item, "artist", artist);
    allshare_helper.log.info("added item.artist:" + artist);


    // attribute Date date;
    var date = undefined;
    if (itemType == "AUDIO" || itemType == "VIDEO" || itemType == "IMAGE" || itemType == "UNKNOWN")
    {
        date = itemJson.date;

        if (typeof date == 'string')
        {
            date = new Date(date);
        }
    }
    allshare_helper.setReadOnlyAttribute(item, "date", date);
    allshare_helper.log.info("added item.date:" + date);


    // attribute unsigned long long duration
    var duration = itemJson.totalplaytime;
    if (itemType != "AUDIO" || itemType != "VIDEO")
    {
        //convert from totalplaytime : "01:53:05" into seconds
        if (typeof duration == 'string')
        {
            duration = allshare_helper.convertStrDurationToSec(duration); // from string to number
        }
    }
    allshare_helper.setReadOnlyAttribute(item, "duration", duration);
    allshare_helper.log.info("added item.duration:" + duration);


    // attribute DOMString extension
    var extension = undefined;
    if (itemType == "AUDIO" || itemType == "VIDEO" || itemType == "IMAGE" || itemType == "UNKNOWN")
    {    
        extension = itemJson.extension;
    }
    allshare_helper.setReadOnlyAttribute(item, "extension", extension);
    allshare_helper.log.info("added item.extension:" + extension);


    // attribute double fileSize; 
    var fileSize = undefined;
    if (itemType == "AUDIO" || itemType == "VIDEO" || itemType == "IMAGE" || itemType == "UNKNOWN")
    {
        fileSize = itemJson.filesize;
    }
    allshare_helper.setReadOnlyAttribute(item, "fileSize", fileSize);
    allshare_helper.log.info("added item.fileSize:" + fileSize);


    // attribute DOMString genre;
    var genre = undefined;
    if (itemType == "AUDIO")
    {
        genre = itemJson.genre;
    }
    allshare_helper.setReadOnlyAttribute(item, "genre", genre);
    allshare_helper.log.info("added item.genre:" + genre);


    // attribute SimpleCoordinates location;
//    var location = itemJson.location; // ???
    var location = null; // not implemented
    if (itemType == "FOLDER")
    {
        location = undefined;
    }
    allshare_helper.setReadOnlyAttribute(item, "location", location);
    allshare_helper.log.info("added item.location:" + location);


    // attribute DOMString mimeType;
    var mimeType = itemJson.mimeType;
    allshare_helper.setReadOnlyAttribute(item, "mimeType", mimeType);
    allshare_helper.log.info("added item.mimeType:" + mimeType);


    // attribute unsigned long width;
    var width = undefined;
    if (itemType == "IMAGE" || itemType == "VIDEO")
    {
        width = itemJson.Width;
    }
    allshare_helper.setReadOnlyAttribute(item, "width", width);
    allshare_helper.log.info("added item.width:" + width);


    // attribute unsigned long height;
    var height = undefined;
    if (itemType == "IMAGE" || itemType == "VIDEO")
    {
        height = itemJson.Height;
    }
    allshare_helper.setReadOnlyAttribute(item, "height", height);
    allshare_helper.log.info("added item.height:" + height);


    // attribute DOMString subtitleUri;
    var subtitleUri = undefined;
    if (itemType == "VIDEO")
    {
        subtitleUri = null;
        var captions = itemJson.Captions;
        if (captions && captions.length)
        {
            subtitleUri = captions[0].subtitle;
        }
    }
    allshare_helper.setReadOnlyAttribute(item, "subtitleUri", subtitleUri);
    allshare_helper.log.info("added item.subtitleUri:" + subtitleUri);


    // attribute DOMString thumbnailUri;
    var thumbnailUri = itemJson.thumbnail;
    allshare_helper.setReadOnlyAttribute(item, "thumbnailUri", thumbnailUri);
    allshare_helper.log.info("added item.thumbnailUri:" + thumbnailUri);


    // attribute DOMString title;
    var title = itemJson.title;
    allshare_helper.setReadOnlyAttribute(item, "title", title);
    allshare_helper.log.info("added item.title:" + title);


    // attribute DOMString itemUri;
    var itemUri = itemJson.url;
    allshare_helper.setReadOnlyAttribute(item, "itemUri", itemUri);
    allshare_helper.log.info("added item.itemUri:" + itemUri);


    // attribute boolean isRootFolder;
    var objectIdJson = itemJson.objectID;
    item._objectID = objectIdJson;
    allshare_helper.log.info("added item._objectID:" + item._objectID);
    var isRootFolder = (objectIdJson == "0");
    allshare_helper.setReadOnlyAttribute(item, "isRootFolder", isRootFolder);
    allshare_helper.log.info("added item.isRootFolder:" + isRootFolder);


    // attribute ItemContentBuildType contentBuildType;
    var contentBuildType = itemJson.contentBuildType;
    if (typeof contentBuildType != 'string')
    {
        // LOCAL: the content is from the local device
        // MEDIAPROVIDER: the content is from a remote media provider
        // UNKNOWN: the content is from nowhere
        // WEB: the content is from internet
        contentBuildType = "UNKNOWN";
    }
    allshare_helper.setReadOnlyAttribute(item, "contentBuildType", contentBuildType);
    allshare_helper.log.info("added item.contentBuildType:" + contentBuildType);


    allshare_helper.log.trace("allshare_helper.initItem() end");

    return item;
}


//=============================================================================

window.webapis.allshare._bindAllshareEventHandler = function ()
{
    allshare_helper.log.trace("window.webapis.allshare._bindAllshareEventHandler()");

}


window.webapis.allshare._onAllsharePluginEvent = function(event, data1, data2)
{
    allshare_helper.log.trace("window.webapis.allshare._onAllsharePluginEvent() begin");

    var EDMSCP_MSG_BROWSEFOLDER_RESULT     = 200;          // result of BrowseItem 
    var EDMSCP_MSG_SEARCH_RESULT         = 201;          // result of SearchItem
    var EDMSCP_MSG_GETITEMINFO_RESULT     = 212;

    // Device add/delete
    var DMSCP_UPNP_DEVICEADDED    = 0;
    var DMSCP_UPNP_DEVICEDELETE    = 1;

    // Error Event
    var EDMSCP_MSG_NO_DATA             = -9;
    var EDMSCP_MSG_CANCEL             = -8;
    var EDMSCP_MSG_UNKNOWN             = -1;
    var EDMSCP_MSG_INVALID_SVC        = -17;    // added [Not searchable error]


    allshare_helper.log.print("_onAllsharePluginEvent()");
    allshare_helper.log.print("Event : " + event);
    allshare_helper.log.print("typeof data1:" + (typeof data1));

    allshare_helper.log.print("BT_Retrun : " + data1 + " => " + data2);  // data1: object name  data2: JSON format

    // 'data1' - includes trash on 2012
    
    switch(event)
    {
        case EDMSCP_MSG_BROWSEFOLDER_RESULT:
            var obj = null;
            var requestId = null;
            try
            {
                // data = data.replace(/mime-type/g, "mime_type");
                // allshare_helper.log.debug("data fixed");

                obj = eval("(" + data2 + ")");

                allshare_helper.log.debug("obj.UniqueRequestID:"+ obj.UniqueRequestID);
                requestId = obj.UniqueRequestID;
            }
            catch(e)
            {
                allshare_helper.log.error("Eval failed - browse responce return broken JSON");
                allshare_helper.log.error("Exception e.name:" + e.name + "   e.message:" + e.message);
            }

            var requestInfo = allshare_helper.RequestsHelper.getRequest(requestId);
            if (requestInfo)
            {
                allshare_helper.RequestsHelper.removeRequest(requestId);
                requestInfo.callbackHandlers.successCallback(requestInfo, obj);
            }

            break;
            
        case EDMSCP_MSG_SEARCH_RESULT:
            var obj = null;
            var requestId = null;
            try
            {
                obj = eval("(" + data2 + ")");

                allshare_helper.log.debug("obj.UniqueRequestID:"+ obj.UniqueRequestID);
                requestId = obj.UniqueRequestID;
            }
            catch(e)
            {
                allshare_helper.log.error("Eval failed - search responce return broken JSON");
                allshare_helper.log.error("Exception e.name:" + e.name + "   e.message:" + e.message);
            }

            var requestInfo = allshare_helper.RequestsHelper.getRequest(requestId);
            if (requestInfo)
            {
                allshare_helper.RequestsHelper.removeRequest(requestId);
                requestInfo.callbackHandlers.successCallback(requestInfo, obj);
            }

            break;
            
        case DMSCP_UPNP_DEVICEADDED:    // Device ADD
            allshare_helper.log.debug("DMSCP_UPNP_DEVICEADDED");
            var addedDevice = null;
            if(data2)
            {
                var deviceJson = null;
                try
                {
                    deviceJson = eval("(" + data2 + ")");
                }
                catch(e)
                {
                    allshare_helper.log.error("eval failed");
                    allshare_helper.log.error("exception e.name:" + e.name + "   e.message:" + e.message);
                }

                if (deviceJson)
                {
                    var device = allshare_helper.createDeviceFactory(deviceJson);
                    if (device)
                    {
                        window.webapis.allshare.serviceconnector._DeviceFinder._addedDevice(device);
                    }
                }
            }        
            break;
            
        case DMSCP_UPNP_DEVICEDELETE:    // Device DELETE
            allshare_helper.log.debug("DMSCP_UPNP_DEVICEDELETE");
            var deletedDevice = null;
            if(data2)
            {
                var deviceJson = null;
                try
                {
                    deviceJson = eval("(" + data2 + ")");
                }
                catch(e)
                {
                    allshare_helper.log.error("eval failed");
                    allshare_helper.log.error("exception e.name:" + e.name + "   e.message:" + e.message);
                }

                if (deviceJson)
                {
                    var device = allshare_helper.createDeviceFactory(deviceJson);
                    if (device)
                    {
                        window.webapis.allshare.serviceconnector._DeviceFinder._removedDevice(device);
                    }
                }
            }
            break;
            
        case EDMSCP_MSG_NO_DATA:
            allshare_helper.log.debug("EDMSCP_MSG_NO_DATA");
            // it is not error, just empty set?

            var requestId = null;
            try
            {
                obj = eval("(" + data2 + ")");

                allshare_helper.log.debug("obj.UniqueRequestID:"+ obj.UniqueRequestID);
                requestId = obj.UniqueRequestID;
            }
            catch(e)
            {
                allshare_helper.log.error("Eval failed - responce return broken JSON");
                allshare_helper.log.error("Exception e.name:" + e.name + "   e.message:" + e.message);
            }

            var requestInfo = allshare_helper.RequestsHelper.getRequest(requestId);
            if (requestInfo)
            {
                allshare_helper.RequestsHelper.removeRequest(requestId);
                var webAPIError = allshare_helper.createWebAPIError("NotFoundError", "No data");
                requestInfo.callbackHandlers.errorCallback(requestInfo, webAPIError);
            }

            break;
            
        case EDMSCP_MSG_CANCEL:
            allshare_helper.log.debug("EDMSCP_MSG_CANCEL");

            var requestId = null;
            try
            {
                obj = eval("(" + data2 + ")");

                allshare_helper.log.debug("obj.UniqueRequestID:"+ obj.UniqueRequestID);
                requestId = obj.UniqueRequestID;
            }
            catch(e)
            {
                allshare_helper.log.error("Eval failed - responce return broken JSON");
                allshare_helper.log.error("Exception e.name:" + e.name + "   e.message:" + e.message);
            }

            var requestInfo = allshare_helper.RequestsHelper.getRequest(requestId);
            if (requestInfo)
            {
                allshare_helper.RequestsHelper.removeRequest(requestId);
                var webAPIError = allshare_helper.createWebAPIError("UnknownError", "EDMSCP_MSG_CANCEL");
                requestInfo.callbackHandlers.errorCallback(requestInfo, webAPIError);
            }

            break;
            
        case EDMSCP_MSG_UNKNOWN:
            allshare_helper.log.debug("EDMSCP_MSG_UNKNOWN");

            var requestId = null;
            try
            {
                obj = eval("(" + data2 + ")");

                allshare_helper.log.debug("obj.UniqueRequestID:"+ obj.UniqueRequestID);
                requestId = obj.UniqueRequestID;
            }
            catch(e)
            {
                allshare_helper.log.error("Eval failed - responce return broken JSON");
                allshare_helper.log.error("Exception e.name:" + e.name + "   e.message:" + e.message);
            }

            var requestInfo = allshare_helper.RequestsHelper.getRequest(requestId);
            if (requestInfo)
            {
                allshare_helper.RequestsHelper.removeRequest(requestId);
                var webAPIError = allshare_helper.createWebAPIError("UnknownError", "EDMSCP_MSG_UNKNOWN");
                requestInfo.callbackHandlers.errorCallback(requestInfo, webAPIError);
            }

            break;
            
        case EDMSCP_MSG_INVALID_SVC:
            allshare_helper.log.debug("EDMSCP_MSG_INVALID_SVC");

            var requestId = null;
            try
            {
                obj = eval("(" + data2 + ")");

                allshare_helper.log.debug("obj.UniqueRequestID:"+ obj.UniqueRequestID);
                requestId = obj.UniqueRequestID;
            }
            catch(e)
            {
                allshare_helper.log.error("Eval failed - responce return broken JSON");
                allshare_helper.log.error("Exception e.name:" + e.name + "   e.message:" + e.message);
            }

            var requestInfo = allshare_helper.RequestsHelper.getRequest(requestId);
            if (requestInfo)
            {
                allshare_helper.RequestsHelper.removeRequest(requestId);
                var webAPIError = allshare_helper.createWebAPIError("NotSupportedError", "The operation is not supported.");
                requestInfo.callbackHandlers.errorCallback(requestInfo, webAPIError);
            }

            break;
            
        default:
            allshare_helper.log.debug("default");

            var requestId = null;
            try
            {
                obj = eval("(" + data2 + ")");

                allshare_helper.log.debug("obj.UniqueRequestID:"+ obj.UniqueRequestID);
                requestId = obj.UniqueRequestID;
            }
            catch(e)
            {
                allshare_helper.log.error("Eval failed - responce return broken JSON");
                allshare_helper.log.error("Exception e.name:" + e.name + "   e.message:" + e.message);
            }

            var requestInfo = allshare_helper.RequestsHelper.getRequest(requestId);
            if (requestInfo)
            {
                allshare_helper.RequestsHelper.removeRequest(requestId);
                var webAPIError = allshare_helper.createWebAPIError("UnknownError", "An unknown error has occurred.");
                requestInfo.callbackHandlers.errorCallback(requestInfo, webAPIError);
            }

            break;
    }

    allshare_helper.log.trace("window.webapis.allshare._onAllsharePluginEvent() end");
}
