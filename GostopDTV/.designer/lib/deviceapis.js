// Get[$MANAGER_WIDGET/Common/webapi/1.0/deviceapis.js]

var deviceapis = window.deviceapis || {};
console.log("[deviceapis.js] loaded");
deviceapis.platform = "Samsung SmartTV";
deviceapis.ver = "1.003";
console.log("\t[deviceapis.js] Version : " + deviceapis.ver);

var deviceapis_FeatureArray = new Array();
var deviceapis_ParamArray = new Array();
deviceapis_ParamArray.push(null, null);
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/deviceapis", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/network", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/filesystem", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/displaycontrol", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/audiocontrol", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/tv/info", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/tv/channel", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/tv/window", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/avplay", false, deviceapis_ParamArray));
deviceapis_FeatureArray.push(new Feature("http://samsungapps.com/api/imageplay", false, deviceapis_ParamArray));
deviceapis.listAvailableFeatures = function () {
  return deviceapis_FeatureArray
};
deviceapis.listActivatedFeatures = function () {
  return deviceapis_FeatureArray
};
function Feature(a, c, b) {
  this.uri = a;
  this.required = c;
  this.params = b
}
function Param(a, b) {
  this.name = a;
  this.value = b
}
function SDeviceAPIError(b, a) {
  this.__defineGetter__("code", function () {
    return b
  });
  this.__defineGetter__("message", function () {
    return a
  })
}
SDeviceAPIError.prototype.toString = function () {
  return "[deviceapis error(" + this.code + ")] : " + this.message
};
SDeviceAPIError.prototype.UNKNOWN_ERR = 0;
SDeviceAPIError.prototype.INDEX_SIZE_ERR = 1;
SDeviceAPIError.prototype.DOMSTRING_SIZE_ERR = 2;
SDeviceAPIError.prototype.HIERARCHY_REQUEST_ERR = 3;
SDeviceAPIError.prototype.WRONG_DOCUMENT_ERR = 4;
SDeviceAPIError.prototype.INVALID_CHARACTER_ERR = 5;
SDeviceAPIError.prototype.NO_DATA_ALLOWED_ERR = 6;
SDeviceAPIError.prototype.NO_MODIFICATION_ALLOWED_ERR = 7;
SDeviceAPIError.prototype.NOT_FOUND_ERR = 8;
SDeviceAPIError.prototype.NOT_SUPPORTED_ERR = 9;
SDeviceAPIError.prototype.INUSE_ATTRIBUTE_ERR = 10;
SDeviceAPIError.prototype.INVALID_STATE_ERR = 11;
SDeviceAPIError.prototype.SYNTAX_ERR = 12;
SDeviceAPIError.prototype.INVALID_MODIFICATION_ERR = 13;
SDeviceAPIError.prototype.NAMESPACE_ERR = 14;
SDeviceAPIError.prototype.INVALID_ACCESS_ERR = 15;
SDeviceAPIError.prototype.VALIDATION_ERR = 16;
SDeviceAPIError.prototype.TYPE_MISMATCH_ERR = 17;
SDeviceAPIError.prototype.SECURITY_ERR = 18;
SDeviceAPIError.prototype.NETWORK_ERR = 19;
SDeviceAPIError.prototype.ABORT_ERR = 20;
SDeviceAPIError.prototype.TIMEOUT_ERR = 21;
SDeviceAPIError.prototype.INVALID_VALUES_ERR = 22;
SDeviceAPIError.prototype.NETWORK_SLOW_ERR = 10000;
SDeviceAPIError.prototype.RENDER_ERR = 10001;
SDeviceAPIError.prototype.AVPLAY_UNSUPPORTED_CONTAINER_ERR = 10100;
SDeviceAPIError.prototype.AVPLAY_UNSUPPORTED_VIDEO_FORMAT_ERR = 10101;
SDeviceAPIError.prototype.AVPLAY_UNSUPPORTED_AUDIO_FORMAT_ERR = 10102;
SDeviceAPIError.prototype.AVPLAY_UNSUPPORTED_VIDEO_RESOLUTION_ERR = 10103;
SDeviceAPIError.prototype.AVPLAY_UNSUPPORTED_VIDEO_FRAMERATE_ERR = 10104;
SDeviceAPIError.prototype.AVPLAY_CURRUPTED_STREAM_ERR = 10105;

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

/* deviceapis.audiocontrol */
deviceapis.audiocontrol = {
  AUDIO_MODE_PCM: 0,
  AUDIO_MODE_DOLBY: 1,
  AUDIO_MODE_DTS: 2,
  AUDIO_SOUND_TYPE_UP: 1,
  AUDIO_SOUND_TYPE_DOWN: 2,
  AUDIO_SOUND_TYPE_LEFT: 3,
  AUDIO_SOUND_TYPE_RIGHT: 4,
  AUDIO_SOUND_TYPE_PAGE_LEFT: 5,
  AUDIO_SOUND_TYPE_PAGE_RIGHT: 6,
  AUDIO_SOUND_TYPE_BACK: 7,
  AUDIO_SOUND_TYPE_SELECT: 8,
  AUDIO_SOUND_TYPE_CANCEL: 9,
  AUDIO_SOUND_TYPE_WARNING: 10,
  AUDIO_SOUND_TYPE_KEYPAD: 11,
  AUDIO_SOUND_TYPE_KEYPAD_ENTER: 12,
  AUDIO_SOUND_TYPE_KEYPAD_DEL: 13,
  AUDIO_SOUND_TYPE_SMARTCONTROL_MOVE: 14,
  AUDIO_SOUND_TYPE_SMARTCONTROL_SELECT: 15,
  AUDIO_SOUND_TYPE_MOVE: 16,
  AUDIO_SOUND_TYPE_PREPARING: 17,
  AUDIO_SOUND_TYPE_SHUTTER_PICTURE: 18,
  AUDIO_SOUND_TYPE_SHUTTER_VIDEO: 19,
  setMute: function (b) {
    if (b === undefined || typeof b != "boolean") {
      throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
    }
    if (window.parent && window.parent._system) {
        var audio_module = window.parent._system.audio_control;
        audio_module.setMute(b);
    }
  },
  getMute: function () {
    if (window.parent && window.parent._system) {
        var audio_module = window.parent._system.audio_control;
        return audio_module.getMute();
    }
  },
  getVolume: function () {
    if (window.parent && window.parent._system) {
        var audio_module = window.parent._system.audio_control;
        return audio_module.getVolume();
    }
  },
  setVolume: function (a) {
    if (a === undefined || typeof a != "number") {
      throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
    } else {
      if (a < 0 || a > 100) {
        throw new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR")
      } else {
        if (window.parent && window.parent._system) {
            var audio_module = window.parent._system.audio_control;
            audio_module.setVolume(a);
        }
      }
    }
  },
  setVolumeUp: function () {
    if (window.parent && window.parent._system) {
        var audio_module = window.parent._system.audio_control;
        audio_module.setVolume(audio_module.getVolume() + 1);
    }
  },
  setVolumeDown: function () {
    if (window.parent && window.parent._system) {
        var audio_module = window.parent._system.audio_control;
        audio_module.setVolume(audio_module.getVolume() - 1);
    }
  },
  getOutputMode: function () {
    if (window.parent && window.parent._system) {
        var audio_module = window.parent._system.audio_control;
        return audio_module.getOutputMode();
    }
  },
  playSound: function (a) {
    if (typeof a != "number") {
      throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
    }
    if (1 > a && a > 19) {
      throw new SDeviceAPIError(SDeviceAPIError.prototype.INVALID_VALUES_ERR, "INVALID_VALUES_ERR")
    }
  }
};

/* deviceapis.displaycontrol */
deviceapis.displaycontrol = {
  MODE_3D_EFFECT_OFF: 0,
  MODE_3D_EFFECT_TOP_BOTTOM: 1,
  MODE_3D_EFFECT_SIDE_BY_SIDE: 2,
  MODE_3D_EFFECT_LINE_BY_LINE: 3,
  MODE_3D_EFFECT_VERTICAL_STRIPE: 4,
  MODE_3D_EFFECT_FRAME_SEQUENCE: 5,
  MODE_3D_EFFECT_CHECKER_BD: 6,
  MODE_3D_EFFECT_FROM_2D_TO_3D: 7,
  MODE_3D_DEVICE_NOT_CONNECTED: -1,
  MODE_3D_NOT_SUPPORTED: 0,
  MODE_3D_ENABLE_OK: 1,
  get3DEffectMode: function () {
  },
  check3DModeEnable: function () {
  },
  get3DModeSupportList: function (a, c) {
  }
};

/* deviceapis.application */
deviceapis.application = {
  getPopupOpacity: function () {
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

/* deviceapis.avplay */
deviceapis.avplay = new AVPlayFactory();
deviceapis.avplay.CONNECTION_FAILED = 1;
deviceapis.avplay.AUTHENTICATION_FAILED = 2;
deviceapis.avplay.STREAM_NOT_FOUND = 3;
deviceapis.avplay.NETWORK_DISCONNECTED = 4;
deviceapis.avplay.NETWORK_SLOW = 5;
deviceapis.avplay.RENDER_ERROR = 6;
deviceapis.avplay.RENDERING_START = 7;
deviceapis.avplay.RENDERING_COMPLETE = 8;
deviceapis.avplay.STREAM_INFO_READY = 9;
deviceapis.avplay.DECODING_COMPLETE = 10;
deviceapis.avplay.BUFFERING_START = 11;
deviceapis.avplay.BUFFERING_COMPLETE = 12;
deviceapis.avplay.BUFFERING_PROGRESS = 13;
deviceapis.avplay.CURRENT_DISPLAY_TIME = 14;
deviceapis.avplay.CURRENT_PLAYBACK_TIME = 14;
deviceapis.avplay.AD_START = 15;
deviceapis.avplay.AD_END = 16;
deviceapis.avplay.RESOLUTION_CHANGED = 17;
deviceapis.avplay.BITRATE_CHANGED = 18;
deviceapis.avplay.SUBTITLE = 19;
deviceapis.avplay.CUSTOM = 20;
deviceapis.avplay.UNKNOWN_ERROR = 0;
deviceapis.avplay.UNSUPPORTED_CONTAINER = 1;
deviceapis.avplay.UNSUPPORTED_VIDEO_CODEC = 2;
deviceapis.avplay.UNSUPPORTED_AUDIO_CODEC = 3;
deviceapis.avplay.UNSUPPORTED_VIDEO_RESOLUTION = 4;
deviceapis.avplay.UNSUPPORTED_VIDEO_FRAMERATE = 5;
deviceapis.avplay.CURRUPTED_STREAM = 6;
deviceapis.avplay.PLAY_STATE_IDLE = 0;
deviceapis.avplay.PLAY_STATE_INITIALIZED = 1;
deviceapis.avplay.PLAY_STATE_STOPPED = 2;
deviceapis.avplay.PLAY_STATE_PREPARED = 3;
deviceapis.avplay.PLAY_STATE_STARTED = 4;
deviceapis.avplay.PLAY_STATE_PAUSED = 5;
function AVPlayFactory() {
  var a = 0;
  var b = [];
  this.getAVPlay = function (c, d) {
    if (!_isType(c, "function") || !_isType(d, "undefined|function|null")) {
      throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
    }
    var e = new _AVPlay(a);
    b[a] = e;
    a++;
    c(e)
  };
}
function _AVPlay(id) {
  var sName = "AVPlay" + id;
  var sVersion = "3.0";
  this.__defineGetter__("id", function () {
    return id
  });
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
  this.__defineGetter__("displayRect", function () {
    return null
  });
  this.__defineGetter__("displayArea", function () {
    return null
  });
  this.__defineGetter__("containerID", function () {
    return null
  });
  this.__defineGetter__("zIndex", function () {
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
  });
  this.__defineGetter__("status", function () {
    return null
  });
  this.init = function (option) {
  };
  this.open = function (url, option) {
  };
  this.play = function (successCallback, errorCallback, sec) {
  };
  this.stop = function () {
  };
  this.pause = function () {
  };
  this.resume = function () {
  };
  this.jumpForward = function (sec) {
  };
  this.jumpBackward = function (sec) {
  };
  this.setSpeed = function (speed) {
  };
  this.setAudioStreamID = function (index) {
  };
  this.setSubtitleStreamID = function (index) {
  };
  this.getCurrentBitrates = function () {
  };
  this.getAvailableBitrates = function () {
  };
  this.startSubtitle = function (option) {
  };
  this.stopSubtitle = function () {
  };
  this.setSubtitleSync = function (millisec) {
  };
  this.setDisplayRect = function (rect) {
  };
  this.clear = function () {
  };
  this.show = function () {
  };
  this.hide = function () {
  };
  this.getZIndex = function () {
  };
  this.setZIndex = function (zIndex) {
  };
  this.getVolume = function () {
  };
  this.setVolume = function (volume) {
  };
  this.setCropArea = function (successCallback, errorCallback, rect) {
  };
  this.setDisplayArea = function (rect) {
  };
  this.getDuration = function () {
  };
  this.getVideoResolution = function () {
  };
  this.getTotalNumOfStreamID = function (streamType) {
  };
  this.setStreamID = function (streamType, index) {
  };
  this.getStreamLanguageInfo = function (streamType, index) {
  };
  this.getStreamExtraData = function (streamType, index) {
  };
  this.setPlayerProperty = function (propertyType, param1, param2) {
  };
  this.setTotalBufferSize = function (bytes) {
  };
  this.setInitialBufferSize = function (bytes) {
  };
  this.setPendingBufferSize = function (bytes) {
  };
  this.setOutputDOT = function (disable) {
  };
  this.setMacrovision = function (macrovisionLevel) {
  };
  this.setVBIData = function (macrovisionType, cgmsType) {
  };
  this.setICT = function (on) {
  };
  this.PROPERTY_TYPE_COOKIE = 1;
  this.PROPERTY_TYPE_3D = 2;
  this.PROPERTY_TYPE_PLAY_READY_CUSTOM_DATA = 3;
  this.PROPERTY_TYPE_PLAY_READY_LICENSE_SERVER = 4;
  this.PROPERTY_TYPE_MP3_LIVE_STREAM = 5;
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
  this.Event2String = {};
  this.Event2String[deviceapis.avplay.CONNECTION_FAILED] = "CONNECTION_FAILED";
  this.Event2String[deviceapis.avplay.AUTHENTICATION_FAILED] = "AUTHENTICATION_FAILED";
  this.Event2String[deviceapis.avplay.STREAM_NOT_FOUND] = "STREAM_NOT_FOUND";
  this.Event2String[deviceapis.avplay.NETWORK_DISCONNECTED] = "NETWORK_DISCONNECTED";
  this.Event2String[deviceapis.avplay.NETWORK_SLOW] = "NETWORK_SLOW";
  this.Event2String[deviceapis.avplay.RENDER_ERROR] = "RENDER_ERROR";
  this.Event2String[deviceapis.avplay.RENDERING_START] = "RENDERING_START";
  this.Event2String[deviceapis.avplay.RENDERING_COMPLETE] = "RENDERING_COMPLETE";
  this.Event2String[deviceapis.avplay.STREAM_INFO_READY] = "STREAM_INFO_READY";
  this.Event2String[deviceapis.avplay.DECODING_COMPLETE] = "DECODING_COMPLETE";
  this.Event2String[deviceapis.avplay.BUFFERING_START] = "BUFFERING_START";
  this.Event2String[deviceapis.avplay.BUFFERING_COMPLETE] = "BUFFERING_COMPLETE";
  this.Event2String[deviceapis.avplay.BUFFERING_PROGRESS] = "BUFFERING_PROGRESS";
  this.Event2String[deviceapis.avplay.CURRENT_PLAYBACK_TIME] = "CURRENT_PLAYBACK_TIME";
  this.Event2String[deviceapis.avplay.AD_START] = "AD_START";
  this.Event2String[deviceapis.avplay.AD_END] = "AD_END";
  this.Event2String[deviceapis.avplay.RESOLUTION_CHANGED] = "RESOLUTION_CHANGED";
  this.Event2String[deviceapis.avplay.BITRATE_CHANGED] = "BITRATE_CHANGED";
  this.Event2String[deviceapis.avplay.SUBTITLE] = "SUBTITLE";
  this.Event2String[deviceapis.avplay.CUSTOM] = "CUSTOM";
  this.State2String = {};
  this.State2String[deviceapis.avplay.PLAY_STATE_IDLE] = "PLAY_STATE_IDLE";
  this.State2String[deviceapis.avplay.PLAY_STATE_INITIALIZED] = "PLAY_STATE_INITIALIZED";
  this.State2String[deviceapis.avplay.PLAY_STATE_STOPPED] = "PLAY_STATE_STOPPED";
  this.State2String[deviceapis.avplay.PLAY_STATE_PREPARED] = "PLAY_STATE_PREPARED";
  this.State2String[deviceapis.avplay.PLAY_STATE_STARTED] = "PLAY_STATE_STARTED";
  this.State2String[deviceapis.avplay.PLAY_STATE_PAUSED] = "PLAY_STATE_PAUSED";
  this.destroy = function () {
  };
  this._setStatus = function (status) {
  };
  this.setPlayerPluginObject = function (containerID, zIndex, pluginObjectID) {
  };
  this.getSubtitleAvailable = function () {
  };
  this.addEventListener = function (type, listener) {
  };
  this.removeEventListener = function (type, listener) {
  };
  this.onEvent = function (type, data) {
  };
  this.getFitDisplayArea = function (width, height) {
  };
}


/* deviceapis.imageview */
deviceapis.imageview = new ImageViewFactory();
deviceapis.imageview.EFFECT_INIT = -1;
deviceapis.imageview.EFFECT_FADE1 = 0;
deviceapis.imageview.EFFECT_FADE2 = 1;
deviceapis.imageview.EFFECT_BLIND = 2;
deviceapis.imageview.EFFECT_SPIRAL = 3;
deviceapis.imageview.EFFECT_CHECKER = 4;
deviceapis.imageview.EFFECT_LINEAR = 5;
deviceapis.imageview.EFFECT_STAIR = 6;
deviceapis.imageview.EFFECT_WIPE = 7;
deviceapis.imageview.EFFECT_RANDOM = 8;
deviceapis.imageview.EFFECT_NONE = 9;
deviceapis.imageview.CONNECTION_FAILED = 1;
deviceapis.imageview.AUTHENTICATION_FAILED = 2;
deviceapis.imageview.STREAM_NOT_FOUND = 3;
deviceapis.imageview.NETWORK_DISCONNECTED = 4;
deviceapis.imageview.NETWORK_SLOW = 5;
deviceapis.imageview.RENDER_ERROR = 6;
deviceapis.imageview.RENDERING_START = 7;
deviceapis.imageview.RENDERING_COMPLETE = 8;
deviceapis.imageview.STREAM_INFO_READY = 9;
deviceapis.imageview.DECODING_COMPLETE = 10;
deviceapis.imageview.BUFFERING_START = 11;
deviceapis.imageview.BUFFERING_COMPLETE = 12;
deviceapis.imageview.BUFFERING_PROGRESS = 13;
deviceapis.imageview.CURRENT_DISPLAY_TIME = 14;
deviceapis.imageview.AD_START = 15;
deviceapis.imageview.AD_END = 16;
deviceapis.imageview.RESOLUTION_CHANGED = 17;
deviceapis.imageview.BITRATE_CHANGED = 18;
deviceapis.imageview.SUBTITLE = 19;
deviceapis.imageview.CUSTOM = 100;
deviceapis.imageview.IMAGEVIEW_STATE_IDLE = 0;
deviceapis.imageview.IMAGEVIEW_STATE_INITIALIZED = 1;
deviceapis.imageview.IMAGEVIEW_STATE_PREPARED = 3;
deviceapis.imageview.IMAGEVIEW_STATE_DRAWN = 4;
deviceapis.imageview.IMAGEVIEW_STATE_STOPPED = 5;
function ImageViewFactory() {
  var b = 0;
  var a = [];
  this.getImageView = function (f, h) {
    if (!_isType(f, "function") || !_isType(h, "undefined|function|null")) {
      throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
    }
    
    var g = new _ImageView(b);
    a[b] = g;
    b++;
    f(g);
  };
}
deviceapis.imageview.bSlideShowMode = false;
deviceapis.imageview.bCallSetEffectWithINIT = false;
deviceapis.imageview.setSlideShow = function (b, a) {
};
function _ImageView(id) {
  var sName = "ImageView" + id;
  var sVersion = "3.0";
  this.__defineGetter__("id", function () {
    return id
  });
  this.__defineGetter__("url", function () {
    return null
  });
  this.__defineGetter__("imageWidth", function () {
    return null
  });
  this.__defineGetter__("imageHeight", function () {
    return null
  });
  this.__defineGetter__("displayRect", function () {
    return null
  });
  this.__defineGetter__("displayArea", function () {
    return null
  });
  this.__defineGetter__("containerID", function () {
    return null
  });
  this.__defineGetter__("zIndex", function () {
    return null
  });
  this.__defineGetter__("effect", function () {
    return null
  });
  this.__defineGetter__("status", function () {
    return null
  });
  this.init = function (option) {
  };
  this.prepare = function (successCallback, errorCallback, url, option) {
  };
  this.draw = function (successCallback, errorCallback) {
  };
  this.clear = function () {
  };
  this.show = function () {
  };
  this.hide = function () {
  };
  this.setDisplayRect = function (rect) {
  };
  this.setSlideShow = function (on) {
  };
  this.getTransitionEffectList = function () {
  };
  this.getZIndex = function () {
  };
  this.setZIndex = function (zIndex) {
  };
  this.initPlayer = function (url) {
  };
  this.showImage = function () {
  };
  this.stop = function () {
  };
  this.setTransitionEffect = function (effect) {
  };
  this.setDisplayLock = function (bLock) {
  };
  this.setDisplayArea = function (rect) {
  };
  this.isTransitionEffectAvailable = function () {
  };
  this.setSlideShowStatus = function (on) {
  };
  this.getVideoResolution = function () {
  };
  this.Event2String = {};
  this.Event2String[deviceapis.imageview.STREAM_INFO_READY] = "STREAM_INFO_READY";
  this.Event2String[deviceapis.imageview.BUFFERING_START] = "BUFFERING_START";
  this.Event2String[deviceapis.imageview.BUFFERING_COMPLETE] = "BUFFERING_COMPLETE";
  this.Event2String[deviceapis.imageview.DECODING_COMPLETE] = "DECODING_COMPLETE";
  this.Event2String[deviceapis.imageview.RENDERING_COMPLETE] = "RENDERING_COMPLETE";
  this.Event2String[deviceapis.imageview.CONNECTION_FAILED] = "CONNECTION_FAILED";
  this.Event2String[deviceapis.imageview.AUTHENTICATION_FAILED] = "AUTHENTICATION_FAILED";
  this.Event2String[deviceapis.imageview.STREAM_NOT_FOUND] = "STREAM_NOT_FOUND";
  this.Event2String[deviceapis.imageview.NETWORK_DISCONNECTED] = "NETWORK_DISCONNECTED";
  this.Event2String[deviceapis.imageview.NETWORK_SLOW] = "NETWORK_SLOW";
  this.Event2String[deviceapis.imageview.RENDER_ERROR] = "RENDER_ERROR";
  this.State2String = {};
  this.State2String[deviceapis.imageview.IMAGEVIEW_STATE_IDLE] = "IMAGEVIEW_STATE_IDLE";
  this.State2String[deviceapis.imageview.IMAGEVIEW_STATE_INITIALIZED] = "IMAGEVIEW_STATE_INITIALIZED";
  this.State2String[deviceapis.imageview.IMAGEVIEW_STATE_PREPARED] = "IMAGEVIEW_STATE_PREPARED";
  this.State2String[deviceapis.imageview.IMAGEVIEW_STATE_DRAWN] = "IMAGEVIEW_STATE_DRAWN";
  this.State2String[deviceapis.imageview.IMAGEVIEW_STATE_STOPPED] = "IMAGEVIEW_STATE_STOPPED";
  this.destroy = function () {
  };
  this._setStatus = function (status) {
  };
  this.setImageViewerPluginObject = function (containerID, zIndex, pluginObjectID) {
  };
  this.addEventListener = function (type, listener) {
  };
  this.removeEventListener = function (type, listener) {
  };
  this.onEvent = function (type, data) {
  };
  this.getFitDisplayArea = function (width, height) {
  }
}

/* deviceapis.tv */
deviceapis.tv = {
  info: {
    PRODUCT_TYPE_TV: 0,
    PRODUCT_TYPE_BD: 1,
    PRODUCT_TYPE_MONITOR: 2,
    getProduct: function () {
    },
    getModel: function () {
    },
    getFirmware: function () {
    },
    getVersion: function () {
    },
    getCountry: function () {
    },
    getLanguage: function () {
    },
    getDeviceID: function () {
    },
    getESN: function (f) {
    },
    getTick: function () {
    },
    getEpochTime: function () {
    },
    convertEpochToTime: function (c) {
    },
    convertTimeToEpoch: function (a) {
    },
    getTimeZone: function () {
    },
    TimeZone: function (a, b, c) {
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
  channel: {
    NAVIGATOR_MODE_ALL: 0,
    NAVIGATOR_MODE_DIGITAL: 1,
    NAVIGATOR_MODE_ANALOG: 2,
    NAVIGATOR_MODE_FAVORITE: 3,
    tune: function (a, d, g, b) {
    },
    tuneUp: function (b, e, a, c) {
    },
    tuneDown: function (b, e, a, c) {
    },
    getChannelList: function (e, g, n, u, c) {
    },
    getCurrentChannel: function (e) {
    },
    findChannel: function (e, g, r, d) {
    },
    getCurrentProgram: function (a) {
    },
    getProgramList: function (e, k, o, d, f) {
    },
    getNumOfAvailableTuner: function () {
    },
    TuneCallback: function (c, b, a, d) {
    },
    ChannelListSuccuessCallback: function (a) {
    },
    ProgramListSuccuessCallback: function (a) {
    },
    TuneOption: function (b, a, e, d, c, h, g, f) {
    },
    ChannelInfo: function (a, i, j, g, c, d, e, b, f, h, k) {
      this.__defineGetter__("id", function () {
        return a
      });
      this.ptc = i;
      this.major = j;
      this.minor = g;
      this.__defineGetter__("lcn", function () {
        return c
      });
      this.__defineGetter__("sourceID", function () {
        return d
      });
      this.__defineGetter__("programNumber", function () {
        return e
      });
      this.__defineGetter__("transportStreamID", function () {
        return b
      });
      this.__defineGetter__("originalNetworkID", function () {
        return f
      });
      this.__defineGetter__("serviceName", function () {
        return h
      });
      this.__defineGetter__("channelName", function () {
        return k
      })
    },
    ProgramInfo: function (e, b, d, c, f, a) {
      this.__defineGetter__("title", function () {
        return e
      });
      this.__defineGetter__("startTime", function () {
        return b
      });
      this.__defineGetter__("duration", function () {
        return d
      });
      this.__defineGetter__("detailedDescription", function () {
        return c
      });
      this.__defineGetter__("language", function () {
        return f
      });
      this.__defineGetter__("rating", function () {
        return a
      })
    }
  },
  window: {
    SOURCE_MODE_TV: 0,
    SOURCE_MODE_AV: 1,
    SOURCE_MODE_SVIDEO: 2,
    SOURCE_MODE_COMP: 3,
    SOURCE_MODE_PC: 4,
    SOURCE_MODE_HDMI: 5,
    SOURCE_MODE_SCART: 6,
    SOURCE_MODE_DVI: 7,
    SOURCE_MODE_MEDIA: 8,
    SOURCE_MODE_IPTV: 9,
    getAvailableWindow: function (a, b) {
    },
    setSource: function (successCallback, errorCallback, sourceInfo, windowID) {
    },
    _sourcePLMap: null,
    getSource: function (a) {
    },
    _sourceAPIMap: null,
    setRect: function (j, c) {
    },
    preSource: null,
    show: function (a) {
    },
    hide: function (a) {
    },
    SourceInfo: function (b, a) {
    },
    SubWindow: function (a) {
    },
    SuccessSubWindowArrayCallback: function () {}
  }
};
deviceapis.tv.info.TimeZone.TIMEZONE_USA_NEWFOUNDLAND = 0;
deviceapis.tv.info.TimeZone.TIMEZONE_USA_ATLANTIC = 1;
deviceapis.tv.info.TimeZone.TIMEZONE_USA_EASTERN = 2;
deviceapis.tv.info.TimeZone.TIMEZONE_USA_CENTRAL = 3;
deviceapis.tv.info.TimeZone.TIMEZONE_USA_MOUNTAIN = 4;
deviceapis.tv.info.TimeZone.TIMEZONE_USA_PACIFIC = 5;
deviceapis.tv.info.TimeZone.TIMEZONE_USA_ALASKA = 6;
deviceapis.tv.info.TimeZone.TIMEZONE_USA_HAWAII = 7;
deviceapis.tv.info.TimeZone.TIMEZONE_KOR_SEOUL = 8;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_0 = 9;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_1 = 10;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_2 = 11;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_3 = 12;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_4 = 13;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_5 = 14;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_6 = 15;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_7 = 16;
deviceapis.tv.info.TimeZone.TIMEZONE_DVB_REGION_8 = 17;
deviceapis.tv.info.TimeZone.TIMEZONE_DST_ON = 1;
deviceapis.tv.info.TimeZone.TIMEZONE_DST_OFF = 2;
deviceapis.tv.info.TimeZone.TIMEZONE_DST_AUTO = 3;

/* deviceapis.network */
deviceapis.network = new getNetworkList();
var NetworkListLength = 2;
var networkPlugin = null;
function getNetworkList() {
  this.getAvailableNetworks = function (a, b) {
    if (typeof a != "function" || typeof b != "function") {
      throw new SDeviceAPIError(SDeviceAPIError.prototype.TYPE_MISMATCH_ERR, "TYPE_MISMATCH_ERR")
    }
    var d = new Array();
    for (var c = 0; c < NetworkListLength; c++) {
      d[c] = new _Network(c);
      alert("The available network interface is " + d[c].interfaceType)
    }
    if (!d[0].isActive && !d[1].isActive) {
      b(new SDeviceAPIError(SDeviceAPIError.prototype.NOT_SUPPORTED_ERR, "NOT_SUPPORTED_ERR"))
    } else {
      a(d)
    }
    return
  }
}
function ConnectonStatus(b, a) {
  this.__defineGetter__("code", function () {
    return b
  });
  this.__defineGetter__("message", function () {
    return a
  })
}
ConnectonStatus.prototype.toString = function () {
  return "(" + this.code + ") " + this.message
};
ConnectonStatus.DISCONNECT = 0;
ConnectonStatus.CONNECT = 1;
function _Network(a) {
  this.__defineGetter__("interfaceType", function () {
    return a
  });
  this.__defineGetter__("dns", function () {
    return null
  });
  this.__defineGetter__("dnsMode", function () {
    return null
  });
  this.__defineGetter__("gateway", function () {
    return null
  });
  this.__defineGetter__("subnetMask", function () {
    return null
  });
  this.__defineGetter__("ip", function () {
    return null
  });
  this.__defineGetter__("ipMode", function () {
    return null
  });
  this.__defineGetter__("mac", function () {
    return null
  });
  this.isActive = function () {
    return true;
  };
  this.watchConnectionStatus = function (b, c) {
  };
  this.stopWatchConnectionStatus = function () {
  }
}

/* deviceapis.filesystem */
deviceapis.filesystem = {
  util: {
    totalSpaceSize: function () {
    },
    freeSpaceSize: function () {
    },
    getFolderSize: function (a, c, d) {
    }
  },
  file: {
    createDirectory: function (c) {
    },
    deleteDirectory: function (b, d, c, e) {
    },
    copyTo: function (a, b, e, c) {
    },
    moveTo: function (a, b, f, d, c) {
    },
    createFile: function (e) {
    },
    deleteFile: function (b, c, d) {
    },
    getProperty: function (b) {
    }
  },
  resolve: function (a, b, d, e) {
  },
  fileStream: {
    readAsText: function (a) {
    },
    close: function () {
    },
    read: function () {
    },
    readBytes: function (a) {
    },
    write: function (a) {
    },
    writeBytes: function (a) {
    },
    readBase64: function (a) {
    },
    writeBase64: function (a) {
    }
  }
};

/* deviceapis.widgetevent */
deviceapis.widgetevent = {};
deviceapis.widgetevent.setEventListener = function (a, b) {
};

deviceapis._pluginDef = {
  PL_VIDEO_AUTO_MOTION_OFF: 1,
  PL_VIDEO_AUTO_MOTION_WEAK: 2,
  PL_VIDEO_AUTO_MOTION_MEDIUM: 3,
  PL_VIDEO_AUTO_MOTION_STRONG: 4,
  PL_VIDEO_AUTO_MOTION_CUSTOM: 5,
  PL_VIDEO_AUTO_MOTION_DEMO: 6,
  PL_VIDEO_AUTO_MOTION_RESET: 7,
  PL_VIDEO_AUTO_MOTION_CHECK: 8,
  PL_VIDEO_AUTO_MOTION_SUPPORT: 9,
  PL_DEVICE_DPT_LCD: 0,
  PL_DEVICE_DPT_PDP: 1,
  PL_DEVICE_DPT_DLP: 2,
  PL_DEVICE_DPT_LED: 3,
  PL_DEVICE_DPT_LED_EDGE: 4,
  PL_DEVICE_DPT_LED_DIRECT: 5,
  PL_DEVICE_DPT_CRT: 6,
  PL_DEVICE_DPT_UNKNOWN: 999,
  PL_DEVICE_DPT_MAX: 1000,
  PL_NT_WIRED: 0,
  PL_NT_WIRELESS: 1,
  PL_NT_UNKNOWN: 2,
  PL_ST_SERVICE: 0,
  PL_ST_DEVELOPMENT: 1,
  PL_ST_DEVELOPING: 2,
  PL_ST_UNKNOWN: 3,
  PL_TVUT_HOME: 0,
  PL_TVUT_SHOP: 1,
  PL_TVUT_UNKNOWN: 2,
  PL_PRFID_TICKER_ID: 0,
  PL_PRFID_CHILDLOCK_PIN: 1,
  PL_PRFID_HUB_TVID: 2,
  PL_PRFID_TICKER_AUTOBOOT: 3,
  PL_PRFID_TICKER_DURATION: 4,
  PL_PRFID_WIDGET_DPTIME: 5,
  PL_PRFID_CONTRACT: 6,
  PL_PRFID_TICKER_SAFE: 7,
  PL_PRFID_RESET: 8,
  PL_PRFID_PASSWD_RESET: 9,
  PL_PRFID_GEOIP_STATUS: 10,
  PL_PRFID_COUNTRY_CODE: 11,
  PL_PRFID_WLAN_DEFAULT_NETWORK: 12,
  PL_PRFID_AUTO_PROTECTION_TIME: 13,
  PL_PRFID_CHANNEL_BOUND_EXECUTE: 14,
  PL_PRFID_PASSWORD: 15,
  PL_PRFID_SOURCE_BOUND_WIDGET_ID: 16,
  PL_PRFID_SOURCE_BOUND_SOURCE_ID: 17,
  PL_PRFID_AUTOBOOT: 18,
  PL_PRFID_UNKNOWN: 19,
  PL_PRFID_MAX: 20,
  PL_TVMW_KEY_1: 0,
  PL_TVMW_KEY_2: 1,
  PL_TVMW_KEY_3: 2,
  PL_TVMW_KEY_4: 3,
  PL_TVMW_KEY_5: 4,
  PL_TVMW_KEY_6: 5,
  PL_TVMW_KEY_7: 6,
  PL_TVMW_KEY_8: 7,
  PL_TVMW_KEY_9: 8,
  PL_TVMW_KEY_0: 9,
  PL_TVMW_KEY_HYPHEN: 10,
  PL_TVMW_KEY_CH_UP: 100,
  PL_TVMW_KEY_CH_DOWN: 101,
  PL_TVMW_KEY_CH_PREV: 102,
  PL_TVMW_KEY_CH_FAV: 103,
  PL_TVMW_KEY_CH_LIST: 104,
  PL_TVMW_KEY_CH_PANNEL_UP: 105,
  PL_TVMW_KEY_CH_PANNEL_DOWN: 106,
  PL_TVMW_KEY_VOL_UP: 200,
  PL_TVMW_KEY_VOL_DOWN: 201,
  PL_TVMW_KEY_MUTE: 202,
  PL_TVMW_KEY_VOL_PANNEL_UP: 203,
  PL_TVMW_KEY_VOL_PANNEL_DOWN: 204,
  PL_TVMW_KEY_ENTER: 300,
  PL_TVMW_KEY_RETURN: 301,
  PL_TVMW_KEY_EXIT: 302,
  PL_TVMW_KEY_ARROW_UP: 303,
  PL_TVMW_KEY_ARROW_DOWN: 304,
  PL_TVMW_KEY_ARROW_LEFT: 305,
  PL_TVMW_KEY_ARROW_RIGHT: 306,
  PL_TVMW_KEY_WHEEL_LEFT: 307,
  PL_TVMW_KEY_WHEEL_RIGHT: 308,
  PL_TVMW_KEY_PANNEL_ENTER: 309,
  PL_TVMW_KEY_RED: 400,
  PL_TVMW_KEY_GREEN: 401,
  PL_TVMW_KEY_YELLOW: 402,
  PL_TVMW_KEY_CYAN: 403,
  PL_TVMW_KEY_REWARD: 500,
  PL_TVMW_KEY_PAUSE: 501,
  PL_TVMW_KEY_FOWARD: 502,
  PL_TVMW_KEY_PLAY: 503,
  PL_TVMW_KEY_STOP: 504,
  PL_TVMW_KEY_REC: 505,
  PL_TVMW_KEY_INFO: 600,
  PL_TVMW_KEY_TOOLS: 601,
  PL_TVMW_KEY_INFOLINK: 602,
  PL_TVMW_KEY_EMODE: 603,
  PL_TVMW_KEY_DATA: 604,
  PL_TVMW_KEY_DMA: 605,
  PL_TVMW_KEY_CONTENTS: 606,
  PL_TVMW_KEY_MENU: 607,
  PL_TVMW_KEY_WISELINK: 608,
  PL_TVMW_KEY_SOURCE: 609,
  PL_TVMW_KEY_POWER: 610,
  PL_TVMW_KEY_TV: 611,
  PL_TVMW_KEY_PANNEL_SOURCE: 612,
  PL_TVMW_KEY_PANNEL_MENU: 613,
  PL_TVMW_KEY_PANNEL_POWER: 614,
  PL_TVMW_KEY_LOCK: 1119,
  PL_TVMW_KEY_HDMI: 1139,
  PL_TVMW_KEY_GRP_ALL: 0,
  PL_TVMW_KEY_GRP_NUMBER: 1,
  PL_TVMW_KEY_GRP_CHANNEL: 2,
  PL_TVMW_KEY_GRP_VOLUME: 3,
  PL_TVMW_KEY_GRP_NAVI: 4,
  PL_TVMW_KEY_GRP_COLOR: 5,
  PL_TVMW_KEY_GRP_PLAYBACK: 6,
  PL_TVMW_KEY_GRP_ETC: 7,
  PL_TVMW_KEY_TTX_MIX: 650,
  PL_TVMW_KEY_GUIDE: 651,
  PL_TVMW_KEY_SUBTITLE: 652,
  PL_TVMW_KEY_ASPECT: 653,
  PL_TVMW_KEY_DOLBY_SRR: 654,
  PL_TVMW_KEY_MTS: 655,
  PL_TVMW_KEY_11: 11,
  PL_TVMW_KEY_REPEAT: 656,
  PL_TVMW_KEY_DISC_MENU: 1086,
  PL_TVMW_KEY_12: 1057,
  PL_TVMW_KEY_STEP: 1023,
  PL_TVMW_KEY_CALLER_ID: 1128,
  PL_TVMW_KEY_3D: 1219,
  PL_TVMW_KEY_ZOOM1: 1083,
  PL_TVMW_KEY_ANTENA: 1054,
  PL_APPCOMMON_KEY_DVR: 1114,
  PL_APPCOMMON_KEY_HOME: 1118,
  PL_APPCOMMON_KEY_TV_SNS: 1251,
  PL_APPCOMMON_KEY_SEARCH: 1252,
  PL_APPCOMMON_KEY_PIP_SCAN: 1049,
  PL_APPCOMMON_KEY_DEVICE_CONNECT: 1052,
  PL_APPCOMMON_KEY_DOTCOM: 1253,
  PL_TVMW_COUNTRY_USA: 0,
  PL_TVMW_COUNTRY_KOR: 1,
  PL_TVMW_COUNTRY_SPA: 2,
  PL_TVMW_COUNTRY_FRA: 3,
  PL_TVMW_COUNTRY_JPN: 4,
  PL_TVMW_COUNTRY_EU: 5,
  PL_TVMW_COUNTRY_UK: 6,
  PL_TVMW_COUNTRY_GERMANY: 7,
  PL_TVMW_COUNTRY_ITALY: 8,
  PL_TVMW_COUNTRY_SWEDEN: 9,
  PL_TVMW_COUNTRY_BULGARIA: 10,
  PL_TVMW_COUNTRY_CROATIA: 11,
  PL_TVMW_COUNTRY_CZECH: 12,
  PL_TVMW_COUNTRY_NETHERLANDS: 13,
  PL_TVMW_COUNTRY_GREECE: 14,
  PL_TVMW_COUNTRY_HUNGARY: 15,
  PL_TVMW_COUNTRY_POLAND: 16,
  PL_TVMW_COUNTRY_PORTUGAL: 17,
  PL_TVMW_COUNTRY_ROMANIA: 18,
  PL_TVMW_COUNTRY_RUSSIA: 19,
  PL_TVMW_COUNTRY_SWITZERLAND: 20,
  PL_TVMW_COUNTRY_TURKEY: 21,
  PL_TVMW_COUNTRY_AUSTRALIA: 22,
  PL_TVMW_COUNTRY_AUSTRIA: 23,
  PL_TVMW_COUNTRY_BELGIUM: 24,
  PL_TVMW_COUNTRY_DENMARK: 25,
  PL_TVMW_COUNTRY_FINLAND: 26,
  PL_TVMW_COUNTRY_NORWAY: 27,
  PL_TVMW_COUNTRY_CHINA: 28,
  PL_TVMW_COUNTRY_IRELAND: 29,
  PL_TVMW_COUNTRY_SERBIA: 30,
  PL_TVMW_COUNTRY_SAN_MARINO: 31,
  PL_TVMW_COUNTRY_MONACO: 32,
  PL_TVMW_COUNTRY_BRAZIL: 33,
  PL_TVMW_COUNTRY_HONGKONG: 34,
  PL_TVMW_COUNTRY_TAIWAN: 35,
  PL_TVMW_COUNTRY_NEWZEALAND: 36,
  PL_TVMW_COUNTRY_SLOVAKIA: 37,
  PL_TVMW_COUNTRY_SINGAPORE: 38,
  PL_TVMW_COUNTRY_GENERALCABLE: 39,
  PL_TVMW_COUNTRY_OTHER: 40,
  PL_TVMW_COUNTRY_ASIAWEUROPE_ANALOG: 41,
  PL_TVMW_COUNTRY_HONGKONG_UK_ANALOG: 42,
  PL_TVMW_COUNTRY_NZL_INDONESIA_ANALOG: 43,
  PL_TVMW_COUNTRY_SOUTH_AFRICA_ANALOG: 44,
  PL_TVMW_COUNTRY_AMERICA_ANALOG: 45,
  PL_TVMW_COUNTRY_CHINA_ANALOG: 46,
  PL_TV_COUNTRY_USA: 0,
  PL_TV_COUNTRY_KOR: 1,
  PL_TV_COUNTRY_SPA: 2,
  PL_TV_COUNTRY_FRA: 3,
  PL_TV_COUNTRY_JPN: 4,
  PL_TV_COUNTRY_EU: 5,
  PL_TV_COUNTRY_UK: 6,
  PL_TV_COUNTRY_GERMANY: 7,
  PL_TV_COUNTRY_ITALY: 8,
  PL_TV_COUNTRY_SWEDEN: 9,
  PL_TV_COUNTRY_BULGARIA: 10,
  PL_TV_COUNTRY_CROATIA: 11,
  PL_TV_COUNTRY_CZECH: 12,
  PL_TV_COUNTRY_NETHERLANDS: 13,
  PL_TV_COUNTRY_GREECE: 14,
  PL_TV_COUNTRY_HUNGARY: 15,
  PL_TV_COUNTRY_POLAND: 16,
  PL_TV_COUNTRY_PORTUGAL: 17,
  PL_TV_COUNTRY_ROMANIA: 18,
  PL_TV_COUNTRY_RUSSIA: 19,
  PL_TV_COUNTRY_SWITZERLAND: 20,
  PL_TV_COUNTRY_TURKEY: 21,
  PL_TV_COUNTRY_AUSTRALIA: 22,
  PL_TV_COUNTRY_AUSTRIA: 23,
  PL_TV_COUNTRY_BELGIUM: 24,
  PL_TV_COUNTRY_DENMARK: 25,
  PL_TV_COUNTRY_FINLAND: 26,
  PL_TV_COUNTRY_NORWAY: 27,
  PL_TV_COUNTRY_CHINA: 28,
  PL_TV_COUNTRY_IRELAND: 29,
  PL_TV_COUNTRY_SERBIA: 30,
  PL_TV_COUNTRY_SAN_MARINO: 31,
  PL_TV_COUNTRY_MONACO: 32,
  PL_TV_COUNTRY_BRAZIL: 33,
  PL_TV_COUNTRY_HONGKONG: 34,
  PL_TV_COUNTRY_TAIWAN: 35,
  PL_TV_COUNTRY_NEWZEALAND: 36,
  PL_TV_COUNTRY_SLOVAKIA: 37,
  PL_TV_COUNTRY_SINGAPORE: 38,
  PL_TV_COUNTRY_GENERALCABLE: 39,
  PL_TV_COUNTRY_NORTH_AFRICA: 40,
  PL_TV_COUNTRY_BELGIUM_FRENCH: 41,
  PL_TV_COUNTRY_BELGIUM_DUTCH: 42,
  PL_TV_COUNTRY_SOUTH_AFRICA: 43,
  PL_TV_COUNTRY_OTHER: 44,
  PL_TV_COUNTRY_ASIAWEUROPE_ANALOG: 45,
  PL_TV_COUNTRY_HONGKONG_UK_ANALOG: 46,
  PL_TV_COUNTRY_NZL_INDONESIA_ANALOG: 47,
  PL_TV_COUNTRY_SOUTH_AFRICA_ANALOG: 48,
  PL_TV_COUNTRY_AMERICA_ANALOG: 49,
  PL_TV_COUNTRY_CHINA_ANALOG: 50,
  PL_TV_COUNTRY_EASTEUROPE_ANALOG: 51,
  PL_TV_COUNTRY_CODE: new Array(),
  PL_TVMW_LANGUAGE_KOR: 0,
  PL_TVMW_LANGUAGE_ENG_US: 1,
  PL_TVMW_LANGUAGE_SPA_US: 2,
  PL_TVMW_LANGUAGE_FRA_US: 3,
  PL_TVMW_LANGUAGE_POR_US: 4,
  PL_TVMW_LANGUAGE_BUL: 5,
  PL_TVMW_LANGUAGE_CRO: 6,
  PL_TVMW_LANGUAGE_CZE: 7,
  PL_TVMW_LANGUAGE_DAN: 8,
  PL_TVMW_LANGUAGE_DUT: 9,
  PL_TVMW_LANGUAGE_FIN: 10,
  PL_TVMW_LANGUAGE_FRA: 11,
  PL_TVMW_LANGUAGE_DEU: 12,
  PL_TVMW_LANGUAGE_GRE: 13,
  PL_TVMW_LANGUAGE_HUN: 14,
  PL_TVMW_LANGUAGE_ITA: 15,
  PL_TVMW_LANGUAGE_NOR: 16,
  PL_TVMW_LANGUAGE_ENG: 17,
  PL_TVMW_LANGUAGE_POL: 18,
  PL_TVMW_LANGUAGE_POR: 19,
  PL_TVMW_LANGUAGE_ROM: 20,
  PL_TVMW_LANGUAGE_RUS: 21,
  PL_TVMW_LANGUAGE_SER: 22,
  PL_TVMW_LANGUAGE_SLK: 23,
  PL_TVMW_LANGUAGE_SPA: 24,
  PL_TVMW_LANGUAGE_SWE: 25,
  PL_TVMW_LANGUAGE_TUR: 26,
  PL_TVMW_LANGUAGE_CHI: 27,
  PL_TVMW_LANGUAGE_HKG: 28,
  PL_TVMW_LANGUAGE_TPE: 29,
  PL_TVMW_LANGUAGE_JPN: 30,
  PL_TVMW_LANGUAGE_MAO: 31,
  PL_TVMW_LANGUAGE_CMN: 32,
  PL_TVMW_LANGUAGE_YUE: 33,
  PL_TVMW_LANGUAGE_HIN: 34,
  PL_TVMW_LANGUAGE_EST: 35,
  PL_TVMW_LANGUAGE_LAT: 36,
  PL_TVMW_LANGUAGE_LTU: 37,
  PL_TVMW_LANGUAGE_ARA: 38,
  PL_TVMW_LANGUAGE_PER: 39,
  PL_TVMW_LANGUAGE_QAA: 40,
  PL_TVMW_LANGUAGE_AD: 41,
  PL_TVMW_LANGUAGE_CAT: 42,
  PL_TVMW_LANGUAGE_VAL: 43,
  PL_TVMW_LANGUAGE_HEB: 44,
  PL_TVMW_LANGUAGE_OTHER: 45,
  PL_TVMW_LANGUAGE_THA: 46,
  PL_TV_LANGUAGE_KOR: 0,
  PL_TV_LANGUAGE_ENG_US: 1,
  PL_TV_LANGUAGE_SPA_US: 2,
  PL_TV_LANGUAGE_FRA_US: 3,
  PL_TV_LANGUAGE_POR_US: 4,
  PL_TV_LANGUAGE_BUL: 5,
  PL_TV_LANGUAGE_CRO: 6,
  PL_TV_LANGUAGE_CZE: 7,
  PL_TV_LANGUAGE_DAN: 8,
  PL_TV_LANGUAGE_DUT: 9,
  PL_TV_LANGUAGE_FIN: 10,
  PL_TV_LANGUAGE_FRA: 11,
  PL_TV_LANGUAGE_DEU: 12,
  PL_TV_LANGUAGE_GRE: 13,
  PL_TV_LANGUAGE_HUN: 14,
  PL_TV_LANGUAGE_ITA: 15,
  PL_TV_LANGUAGE_NOR: 16,
  PL_TV_LANGUAGE_ENG: 17,
  PL_TV_LANGUAGE_POL: 18,
  PL_TV_LANGUAGE_POR: 19,
  PL_TV_LANGUAGE_ROM: 20,
  PL_TV_LANGUAGE_RUS: 21,
  PL_TV_LANGUAGE_SER: 22,
  PL_TV_LANGUAGE_SLK: 23,
  PL_TV_LANGUAGE_SPA: 24,
  PL_TV_LANGUAGE_SWE: 25,
  PL_TV_LANGUAGE_TUR: 26,
  PL_TV_LANGUAGE_CHI: 27,
  PL_TV_LANGUAGE_HKG: 28,
  PL_TV_LANGUAGE_TPE: 29,
  PL_TV_LANGUAGE_JPN: 30,
  PL_TV_LANGUAGE_MAO: 31,
  PL_TV_LANGUAGE_CMN: 32,
  PL_TV_LANGUAGE_YUE: 33,
  PL_TV_LANGUAGE_HIN: 34,
  PL_TV_LANGUAGE_EST: 35,
  PL_TV_LANGUAGE_LAT: 36,
  PL_TV_LANGUAGE_LTU: 37,
  PL_TV_LANGUAGE_ARA: 38,
  PL_TV_LANGUAGE_PER: 39,
  PL_TV_LANGUAGE_QAA: 40,
  PL_TV_LANGUAGE_AD: 41,
  PL_TV_LANGUAGE_CAT: 42,
  PL_TV_LANGUAGE_VAL: 43,
  PL_TV_LANGUAGE_THA: 44,
  PL_TV_LANGUAGE_HEB: 45,
  PL_TV_LANGUAGE_IND: 46,
  PL_TV_LANGUAGE_VIE: 47,
  PL_TV_LANGUAGE_URD: 48,
  PL_TV_LANGUAGE_AFR: 49,
  PL_TV_LANGUAGE_ZUL: 50,
  PL_TV_LANGUAGE_XHO: 51,
  PL_TV_LANGUAGE_YOR: 52,
  PL_TV_LANGUAGE_IGB: 53,
  PL_TV_LANGUAGE_HAU: 54,
  PL_TV_LANGUAGE_SWA: 55,
  PL_TV_LANGUAGE_AMH: 56,
  PL_TV_LANGUAGE_OTHER: 57,
  PL_TV_LANGUAGE_TAM: 58,
  PL_TV_LANGUAGE_IRA: 59,
  PL_TV_LANGUAGE_FIL: 60,
  PL_TV_LANGUAGE_LIT: 61,
  PL_TV_LANGUAGE_LAV: 62,
  PL_TV_LANGUAGE_SLV: 63,
  PL_TV_LANGUAGE_ALB: 64,
  PL_TV_LANGUAGE_UKR: 65,
  PL_TV_LANGUAGE_KAZ: 66,
  PL_TV_LANGUAGE_MKD: 67,
  PL_TV_LANGUAGE_MAY: 68,
  PL_TV_LANGUAGE_WEL: 69,
  PL_TV_LANGUAGE_GLA: 70,
  PL_TV_LANGUAGE_IRI: 71,
  PL_TV_LANGUAGE_MAX: 72,
  PL_TV_LANGUAGE_CODE: new Array(),
  PL_TVMW_TVUT_HOME: 0,
  PL_TVMW_TVUT_SHOP: 1,
  PL_TVMW_TVUT_UNKNOWN: 2,
  PL_TVMW_PRFID_TICKER_ID: 0,
  PL_TVMW_PRFID_CHILDLOCK_PIN: 1,
  PL_TVMW_PRFID_HUB_TVID: 2,
  PL_TVMW_PRFID_TICKER_AUTOBOOT: 3,
  PL_TVMW_PRFID_TICKER_DURATION: 4,
  PL_TVMW_PRFID_WIDGET_DPTIME: 5,
  PL_TVMW_PRFID_CONTRACT: 6,
  PL_TVMW_PRFID_TICKER_SAFE: 7,
  PL_TVMW_PRFID_RESET: 8,
  PL_TVMW_PRFID_PASSWD_RESET: 9,
  PL_TVMW_PRFID_GEOIP_STATUS: 10,
  PL_TVMW_PRFID_COUNTRY_CODE: 11,
  PL_TVMW_PRFID_WLAN_DEFAULT_NETWORK: 12,
  PL_TVMW_PRFID_AUTO_PROTECTION_TIME: 13,
  PL_TVMW_PROFILE_TYPE_STRING: 0,
  PL_TVMW_PROFILE_TYPE_INT: 1,
  PL_TVMW_PROFILE_TYPE_UNKNOWN: 999,
  PL_TVMW_PROFILE_TYPE_MAX: 1000,
  PL_TVMW_DTVAPP_NONE: 0,
  PL_TVMW_DTVAPP_TVVIEWER: 1,
  PL_TVMW_DTVAPP_INFOLINK: 2,
  PL_TVMW_DTVAPP_MENU: 3,
  PL_TVMW_DTVAPP_UNKNOWN: 4,
  CH_DTVAPP_WIDGET: 11,
  CH_DTVAPP_FLASH: 12,
  CH_DTVAPP_GALLERY: 13,
  CH_DTVAPP_GAME: 14,
  CH_DTVAPP_YAHOO: 15,
  CH_DTVAPP_MOIP: 16,
  CH_DTVAPP_PHAROS: 17,
  CH_DTVAPP_TOOL: 18,
  CH_DTVAPP_CLMOVIEPLAYER: 19,
  CH_DTVAPP_FULLBROWSER: 20,
  CH_DTVAPP_MAPBROWSER: 21,
  CH_DTVAPP_MMPLAYER: 22,
  CH_DTVAPP_PVR: 23,
  CH_DTVAPP_RCVIEWER: 24,
  CH_DTVAPP_FAVORITE: 25,
  CH_DTVAPP_CHANNEL: 26,
  CH_DTVAPP_GUIDE: 27,
  CH_DTVAPP_PVR_BROWSER: 28,
  CH_DTVAPP_BASIC_FULLBROWSER: 29,
  CH_DTVAPP_VIDEOS: 30,
  CH_DTVAPP_PHOTOS: 31,
  CH_DTVAPP_MUSIC: 32,
  CH_DTVAPP_SCHEDULE: 33,
  CH_DTVAPP_SOURCE: 34,
  CH_DTVAPP_SHOP_DEMO: 35,
  CH_DTVAPP_ALLSHARE: 36,
  CH_DTVAPP_NETWORK_SETUP: 37,
  CH_DTVAPP_CALENDAR: 38,
  PL_TVMW_SOURCE_TV: 0,
  PL_TVMW_SOURCE_ATV: 1,
  PL_TVMW_SOURCE_DTV: 2,
  PL_TVMW_SOURCE_CATV: 3,
  PL_TVMW_SOURCE_CDTV: 4,
  PL_TVMW_SOURCE_PATV: 5,
  PL_TVMW_SOURCE_PDTV: 6,
  PL_TVMW_SOURCE_SDTV: 7,
  PL_TVMW_SOURCE_BSDTV: 8,
  PL_TVMW_SOURCE_CS1DTV: 9,
  PL_TVMW_SOURCE_CS2DTV: 10,
  PL_TVMW_SOURCE_ATV1: 11,
  PL_TVMW_SOURCE_ATV2: 12,
  PL_TVMW_SOURCE_DTV1: 13,
  PL_TVMW_SOURCE_DTV2: 14,
  PL_TVMW_SOURCE_AV1: 15,
  PL_TVMW_SOURCE_AV2: 16,
  PL_TVMW_SOURCE_AV3: 17,
  PL_TVMW_SOURCE_AV4: 18,
  PL_TVMW_SOURCE_SVIDEO1: 19,
  PL_TVMW_SOURCE_SVIDEO2: 20,
  PL_TVMW_SOURCE_SVIDEO3: 21,
  PL_TVMW_SOURCE_SVIDEO4: 22,
  PL_TVMW_SOURCE_COMP1: 23,
  PL_TVMW_SOURCE_COMP2: 24,
  PL_TVMW_SOURCE_COMP3: 25,
  PL_TVMW_SOURCE_COMP4: 26,
  PL_TVMW_SOURCE_PC1: 27,
  PL_TVMW_SOURCE_PC2: 28,
  PL_TVMW_SOURCE_PC3: 29,
  PL_TVMW_SOURCE_PC4: 30,
  PL_TVMW_SOURCE_HDMI1: 31,
  PL_TVMW_SOURCE_HDMI2: 32,
  PL_TVMW_SOURCE_HDMI3: 33,
  PL_TVMW_SOURCE_HDMI4: 34,
  PL_TVMW_SOURCE_SCART1: 35,
  PL_TVMW_SOURCE_SCART2: 36,
  PL_TVMW_SOURCE_SCART3: 37,
  PL_TVMW_SOURCE_SCART4: 38,
  PL_TVMW_SOURCE_DVI1: 39,
  PL_TVMW_SOURCE_DVI2: 40,
  PL_TVMW_SOURCE_DVI3: 41,
  PL_TVMW_SOURCE_DVI4: 42,
  PL_TVMW_SOURCE_MEDIA: 43,
  PL_TVMW_SOURCE_HOMING: 44,
  PL_TVMW_SOURCE_NONE: 45,
  PL_TVMW_SOURCE_UNKNWON: 1000,
  PL_TVMW_SOURCE_MAX: 1001,
  PL_WINDOW_SOURCE_TV: 0,
  PL_WINDOW_SOURCE_ATV: 1,
  PL_WINDOW_SOURCE_DTV: 2,
  PL_WINDOW_SOURCE_CATV: 3,
  PL_WINDOW_SOURCE_CDTV: 4,
  PL_WINDOW_SOURCE_PATV: 5,
  PL_WINDOW_SOURCE_PDTV: 6,
  PL_WINDOW_SOURCE_SDTV: 7,
  PL_WINDOW_SOURCE_ATV1: 11,
  PL_WINDOW_SOURCE_ATV2: 12,
  PL_WINDOW_SOURCE_DTV1: 13,
  PL_WINDOW_SOURCE_DTV2: 14,
  PL_WINDOW_SOURCE_AV1: 15,
  PL_WINDOW_SOURCE_AV2: 16,
  PL_WINDOW_SOURCE_AV3: 17,
  PL_WINDOW_SOURCE_AV4: 18,
  PL_WINDOW_SOURCE_SVIDEO1: 19,
  PL_WINDOW_SOURCE_SVIDEO2: 20,
  PL_WINDOW_SOURCE_SVIDEO3: 21,
  PL_WINDOW_SOURCE_SVIDEO4: 22,
  PL_WINDOW_SOURCE_COMP1: 23,
  PL_WINDOW_SOURCE_COMP2: 24,
  PL_WINDOW_SOURCE_COMP3: 25,
  PL_WINDOW_SOURCE_COMP4: 26,
  PL_WINDOW_SOURCE_PC1: 27,
  PL_WINDOW_SOURCE_PC2: 28,
  PL_WINDOW_SOURCE_PC3: 29,
  PL_WINDOW_SOURCE_PC4: 30,
  PL_WINDOW_SOURCE_HDMI1: 31,
  PL_WINDOW_SOURCE_HDMI2: 32,
  PL_WINDOW_SOURCE_HDMI3: 33,
  PL_WINDOW_SOURCE_HDMI4: 34,
  PL_WINDOW_SOURCE_SCART1: 35,
  PL_WINDOW_SOURCE_SCART2: 36,
  PL_WINDOW_SOURCE_SCART3: 37,
  PL_WINDOW_SOURCE_SCART4: 38,
  PL_WINDOW_SOURCE_DVI1: 39,
  PL_WINDOW_SOURCE_DVI2: 40,
  PL_WINDOW_SOURCE_DVI3: 41,
  PL_WINDOW_SOURCE_DVI4: 42,
  PL_WINDOW_SOURCE_MEDIA: 43,
  PL_WINDOW_SOURCE_HOMING: 44,
  PL_WINDOW_SOURCE_NONE: 45,
  PL_WINDOW_CHANNEL_TYPE_UNKNOWN: 0,
  PL_WINDOW_CHANNEL_TYPE_TV: 1,
  PL_WINDOW_CHANNEL_TYPE_ATV: 2,
  PL_WINDOW_CHANNEL_TYPE_DTV: 3,
  PL_WINDOW_CHANNEL_TYPE_CATV: 4,
  PL_WINDOW_CHANNEL_TYPE_CDTV: 5,
  PL_WINDOW_TV_MODE_AIR: 1,
  PL_WINDOW_TV_MODE_CABLE: 2,
  PL_AUDIO_MUTE_ON: 0,
  PL_AUDIO_MUTE_OFF: 1,
  PL_AUDIO_INTERNAL_MUTE_ON: 2,
  PL_AUDIO_INTERNAL_MUTE_OFF: 3,
  PL_AUDIO_RECEIVER_CONNECTED: 4,
  PL_AUDIO_MUTE_UNKNOWN: 999,
  PL_AUDIO_MUTE_MAX: 1000,
  PL_AUDIO_SET_MUTE_ON: 0,
  PL_AUDIO_SET_MUTE_OFF: 1,
  PL_AUDIO_SET_MUTE_TOGGLE: 2,
  PL_AUDIO_SET_MUTE_INTERNAL_ON: 3,
  PL_AUDIO_SET_MUTE_INTERNAL_OFF: 4,
  PL_AUDIO_SET_MUTE_UNKNOWN: 999,
  PL_AUDIO_SET_MUTE_MAX: 1000,
  PL_AUDIO_OUTPUT_DEVICE_MAIN_SPEAKER: 0,
  PL_AUDIO_OUTPUT_DEVICE_EARPHONE: 1,
  PL_AUDIO_OUTPUT_DEVICE_SUBWOOFER: 2,
  PL_AUDIO_OUTPUT_DEVICE_EXTERNAL: 3,
  PL_AUDIO_OUTPUT_DEVICE_RECEIVER: 4,
  PL_AUDIO_OUTPUT_DEVICE_UNKNOWN: 999,
  PL_AUDIO_OUTPUT_DEVICE_MAX: 1000,
  PL_AUDIO_VOLUME_KEY_UP: 0,
  PL_AUDIO_VOLUME_KEY_DOWN: 1,
  PL_AUDIO_VOLUME_KEY_UNKNOWN: 999,
  PL_AUDIO_VOLUME_KEY_MAX: 1000,
  PL_VIDEO_WIDGET_MODE_FULL: 0,
  PL_VIDEO_WIDGET_MODE_PART: 1,
  PL_VIDEO_WIDGET_MODE_UNKNOWN: 999,
  PL_VIDEO_WIDGET_MODE_MAX: 1000,
  PL_VIDEO_SET_MUTE_ON: 0,
  PL_VIDEO_SET_MUTE_OFF: 1,
  PL_VIDEO_SET_MUTE_TOGGLE: 2,
  PL_VIDEO_SET_MUTE_UNKNOWN: 999,
  PL_VIDEO_SET_MUTE_MAX: 1000,
  PL_NNAVI_PATH_WIDGET_MANAGER: 0,
  PL_NNAVI_PATH_WIDGET_NORMAL: 1,
  PL_NNAVI_PATH_UNKNOWN: 999,
  PL_NNAVI_SYSTEM_VERSION_LEEUM: 0,
  PL_NNAVI_SYSTEM_VERSION_COMP: 1,
  PL_NNAVI_SYSTEM_UNKNOWN: 999,
  PL_NNAVI_STATE_BANNER_NONE: 0,
  PL_NNAVI_STATE_BANNER_VOL: 1,
  PL_NNAVI_STATE_BANNER_VOL_CH: 2,
  PLR_TRUE: 1,
  PLR_FALSE: 0,
  PLR_FAIL: -1,
  PLR_NOT_IMPLEMENT: -2,
  PLR_NULL_ARG: -3,
  PLR_INVALID_ARG: -4,
  PLR_CANNOT_OPEN_FILE: -5,
  PLR_OUT_OF_RANGE: -6,
  PL_CMN_INFO_VERSION: 0,
  PL_CMN_INFO_UNKNWON: 999,
  DN_RES_ERR_UNKNOWN: 0,
  DN_RES_OK_FILE_DOWNLOADED: 1,
  DN_RES_OK_FILE_DOWN_CANCELED: 2,
  DN_RES_ERR_INVALID_URL: 3,
  DN_RES_ERR_NORMAL_SOCKET: 4,
  DN_RES_ERR_SSL_SOCKET: 5,
  DN_RES_ERR_HOST: 6,
  DN_RES_ERR_PERMISSION_DENY: 7,
  DN_RES_ERR_NOT_ENOUGH_STORAGE: 8,
  DN_RES_ERR_INVALID_DATA: 9,
  DN_RES_ERR_URL_HAS_NO_FILE: 10,
  PL_TV_EVENT_NO_SIGNAL: 101,
  PL_TV_EVENT_TUNE_SUCCESS: 103,
  PL_TV_EVENT_CHANNEL_CHANGED: 113,
  PL_TV_EVENT_SOURCE_CHANGED: 114,
  PL_TV_EVENT_PROGRAM_CHANGED: 204,
  PL_TV_EVENT_RESOLUTION_CHANGED: 117,
  PL_WINDOW_RESOLUTION_NOTSUPPORT: 0,
  PL_WINDOW_RESOLUTION_NOSIGNAL: 1,
  PL_WINDOW_RESOLUTION_NT: 2,
  PL_WINDOW_RESOLUTION_NT_N: 3,
  PL_WINDOW_RESOLUTION_PC: 4,
  PL_WINDOW_RESOLUTION_1080I: 5,
  PL_WINDOW_RESOLUTION_1080P: 6,
  PL_WINDOW_RESOLUTION_720P: 7,
  PL_WINDOW_RESOLUTION_480P: 8,
  PL_WINDOW_RESOLUTION_480I: 9,
  PL_WINDOW_RESOLUTION_640X480P: 10,
  PL_WINDOW_RESOLUTION_1440x480I: 11,
  PL_WINDOW_RESOLUTION_576P: 12,
  PL_WINDOW_RESOLUTION_576I: 13,
  PL_WINDOW_RESOLUTION_PAL: 14,
  PL_WINDOW_RESOLUTION_PAL_M: 15,
  PL_WINDOW_RESOLUTION_PAL_N: 16,
  PL_WINDOW_RESOLUTION_SECAM: 17,
  PL_WINDOW_RESOLUTION_YC_SECAM: 18,
  PL_WINDOW_RESOLUTION_NOVIDEO: 19,
  PL_WINDOW_RESOLUTION_UNKNOWN: 20,
  PL_WINDOW_RESOLUTION_UNSTABLE: 21,
  PL_WINDOW_RESOLUTION_288I: 22,
  PL_WINDOW_RESOLUTION_MAX: 23,
  PL_APPCOMMON_MESSAGE_INPUT_OCCUR: 23,
  PL_WINDOW_POSITION_MODE_TOPLEFT: 0,
  PL_WINDOW_POSITION_MODE_TOPRIGHT: 1,
  PL_WINDOW_POSITION_MODE_TOPCENTER: 2,
  PL_WINDOW_POSITION_MODE_BOTTOMRIGHT: 3,
  PL_WINDOW_POSITION_MODE_BOTTOMLEFT: 4,
  PL_WINDOW_POSITION_MODE_MIDDLELEFT: 5,
  PL_WINDOW_POSITION_MODE_MIDDLECENTER: 6,
  PL_WINDOW_POSITION_MODE_CUSTOM: 7,
  PL_WINDOW_POSITION_MODE_DEFAULT: 8,
  PL_WINDOW_POSITION_MODE_MAX: 9,
  PL_WINDOW_RECT_SIZE_PIP_SMALL: 0,
  PL_WINDOW_RECT_SIZE_PIP_LARGE: 1,
  PL_WINDOW_RECT_SIZE_PIP_DOUBLE_SMALL: 2,
  PL_WINDOW_RECT_SIZE_PIP_DOUBLE_LARGE: 3,
  PL_WINDOW_RECT_SIZE_PIG: 4,
  PL_WINDOW_RECT_SIZE_DEFALUT: 5,
  PL_WINDOW_RECT_SIZE_CUSTOM: 6,
  PL_WINDOW_RECT_SIZE_WIDEPC: 7,
  PL_WINDOW_RECT_SIZE_PC_4_3: 8,
  PL_WINDOW_RECT_SIZE_MODE_MAX: 9,
  PL_WINDOW_SEEK_UNKNOWN: 0,
  PL_WINDOW_SEEK_FAVORITE: 1,
  PL_WINDOW_SEEK_CURRENT: 2,
  PL_WINDOW_SEEK_UP: 3,
  PL_WINDOW_SEEK_DOWN: 4,
  PL_WINDOW_SEEK_FIRST: 5,
  PL_WINDOW_SEEK_LAST: 6,
  PL_WINDOW_SEEK_NEXT: 7,
  PL_WINDOW_SEEK_PREV: 8,
  PL_WINDOW_SEEK_BACK: 9,
  PL_WINDOW_SEEK_EXE: 10,
  PL_WINDOW_SEEK_DIRECT: 11,
  PL_WINDOW_SEEK_TEMPORAL: 12,
  PL_TV_PIP_ON: 1,
  PL_TV_PIP_OFF: 0,
  PL_TASKMANAGER_DTV_APP_NONE: 0,
  PL_TASKMANAGER_DTV_APP_TASKMANAGER: 1,
  PL_TASKMANAGER_DTV_APP_TVVIEWER: 2,
  PL_TASKMANAGER_DTV_APP_MENU: 3,
  PL_TASKMANAGER_DTV_APP_EPG: 4,
  PL_TASKMANAGER_DTV_APP_CM: 5,
  PL_TASKMANAGER_DTV_APP_CC: 6,
  PL_TASKMANAGER_DTV_APP_FAC: 7,
  PL_TASKMANAGER_DTV_APP_CHANNELSEARCH: 8,
  PL_TASKMANAGER_DTV_APP_ADDDEL: 9,
  PL_TASKMANAGER_DTV_APP_REMINDER: 10,
  PL_TASKMANAGER_DTV_APP_SOURCE: 11,
  PL_TASKMANAGER_DTV_APP_TVTOOLS: 12,
  PL_TASKMANAGER_DTV_APP_INTERTEST: 13,
  PL_TASKMANAGER_DTV_APP_INTERNALTEST: 14,
  PL_TASKMANAGER_DTV_APP_HOTEL: 15,
  PL_TASKMANAGER_DTV_APP_MINIFAVCH: 16,
  PL_TASKMANAGER_DTV_APP_EAS: 17,
  PL_TASKMANAGER_DTV_APP_DV: 18,
  PL_TASKMANAGER_DTV_APP_HTML: 19,
  PL_TASKMANAGER_DTV_APP_APPLIST: 20,
  PL_TASKMANAGER_DTV_APP_JAVAMW: 21,
  PL_TASKMANAGER_DTV_APP_COMDOWNLOAD: 22,
  PL_TASKMANAGER_DTV_APP_TTX: 23,
  PL_TASKMANAGER_DTV_APP_SBT: 24,
  PL_TASKMANAGER_DTV_APP_CI: 25,
  PL_TASKMANAGER_DTV_APP_MHEG: 26,
  PL_TASKMANAGER_DTV_APP_RETURN_CHANNEL: 27,
  PL_TASKMANAGER_DTV_APP_CU: 28,
  PL_TASKMANAGER_DTV_APP_FAVCHLIST: 29,
  PL_TASKMANAGER_DTV_APP_LOGOMANAGER: 30,
  PL_TASKMANAGER_DTV_APP_GEMSTAR: 31,
  PL_TASKMANAGER_DTV_APP_FMRADIO: 32,
  PL_TASKMANAGER_DTV_APP_HOME_MENU: 33,
  PL_TASKMANAGER_DTV_APP_WISELINK: 34,
  PL_TASKMANAGER_DTV_APP_MMBROWSER: 35,
  PL_TASKMANAGER_DTV_APP_MMPLAYER: 36,
  PL_TASKMANAGER_DTV_APP_MOVIE_PLAYER: 37,
  PL_TASKMANAGER_DTV_APP_MINT: 38,
  PL_TASKMANAGER_DTV_APP_WPRO: 39,
  PL_TASKMANAGER_DTV_APP_DLNA: 40,
  PL_TASKMANAGER_DTV_APP_DLNACENTER: 41,
  PL_TASKMANAGER_DTV_APP_DMR: 42,
  PL_TASKMANAGER_DTV_APP_PMR: 43,
  PL_TASKMANAGER_DTV_APP_RUIS: 44,
  PL_TASKMANAGER_DTV_APP_RUIC: 45,
  PL_TASKMANAGER_DTV_APP_USBLIST: 46,
  PL_TASKMANAGER_DTV_APP_STORY: 47,
  PL_TASKMANAGER_DTV_APP_PVR: 48,
  PL_TASKMANAGER_DTV_APP_PVR_EDIT: 49,
  PL_TASKMANAGER_DTV_APP_PVR_BROWSER: 50,
  PL_TASKMANAGER_DTV_APP_CEC: 51,
  PL_TASKMANAGER_DTV_APP_CEC_DEVICE: 52,
  PL_TASKMANAGER_DTV_APP_BLUETOOTH: 53,
  PL_TASKMANAGER_DTV_APP_SWUPGRADE: 54,
  PL_TASKMANAGER_DTV_APP_OTA: 55,
  PL_TASKMANAGER_DTV_APP_SWUPGRADE_AIR: 56,
  PL_TASKMANAGER_DTV_APP_OAD: 57,
  PL_TASKMANAGER_DTV_APP_OAD_SAT: 58,
  PL_TASKMANAGER_DTV_APP_OTN: 59,
  PL_TASKMANAGER_DTV_APP_SWUCOMMON: 60,
  PL_TASKMANAGER_DTV_APP_USB_HOTEL_LOGOCLONE: 61,
  PL_TASKMANAGER_DTV_APP_CHMAP_TRANSFER: 62,
  PL_TASKMANAGER_DTV_APP_RSS: 63,
  PL_TASKMANAGER_DTV_APP_INFOLINK2: 64,
  PL_TASKMANAGER_DTV_APP_MEDIALINK: 65,
  PL_TASKMANAGER_DTV_APP_CONTENTSHOME: 66,
  PL_TASKMANAGER_DTV_APP_GPLAYER: 67,
  PL_TASKMANAGER_DTV_APP_FLASHPLAYER: 68,
  PL_TASKMANAGER_DTV_APP_TLIBBROWSER: 69,
  PL_TASKMANAGER_DTV_APP_PRODUCTGUIDE: 70,
  PL_TASKMANAGER_DTV_APP_USERMANUAL: 71,
  PL_TASKMANAGER_DTV_APP_GALLERYPLAYER: 72,
  PL_TASKMANAGER_DTV_APP_CLMOVIEPLAYER: 73,
  PL_TASKMANAGER_DTV_APP_CLPOP: 74,
  PL_TASKMANAGER_DTV_APP_WLAN: 75,
  PL_TASKMANAGER_DTV_APP_YAHOO: 76,
  PL_TASKMANAGER_DTV_APP_SHOPDEMO: 77,
  PL_TASKMANAGER_DTV_APP_MAINTVUPNPSERVER: 78,
  PL_TASKMANAGER_DTV_APP_DUALTV_READY: 79,
  PL_TASKMANAGER_DTV_APP_MOIP: 80,
  PL_TASKMANAGER_DTV_APP_DNET: 81,
  PL_TASKMANAGER_DTV_APP_POP: 82,
  PL_TASKMANAGER_DTV_APP_FRONTRUNNER: 83,
  PL_TASKMANAGER_DTV_APP_HOTEL_IPTV: 84,
  PL_TASKMANAGER_DTV_APP_IPTV_BROWSER: 85,
  PL_TASKMANAGER_DTV_APP_PHAROS_AGENT: 86,
  PL_TASKMANAGER_DTV_APP_FRONT_DISPLAY: 87,
  PL_TASKMANAGER_DTV_APP_BDP_TOOLS: 88,
  PL_TASKMANAGER_DTV_APP_BDHTS: 89,
  PL_TASKMANAGER_DTV_APP_FULLBROWSER: 90,
  PL_TASKMANAGER_DTV_APP_REMOTE: 91,
  PL_TASKMANAGER_DTV_APP_REMOTE_MSG: 92,
  PL_TASKMANAGER_DTV_APP_DLNADMS: 93,
  PL_TASKMANAGER_DTV_APP_DOCOMO_BROWSER: 94,
  PL_TASKMANAGER_DTV_APP_BML_BROWSER: 95,
  PL_TASKMANAGER_DTV_APP_RCT: 96,
  PL_TASKMANAGER_DTV_APP_DOWNLOAD_PLAYER: 97,
  PL_TASKMANAGER_DTV_APP_PSA: 98,
  PL_TASKMANAGER_DTV_APP_CALENDAR: 99,
  PL_TASKMANAGER_DTV_APP_BD_PLAYER: 100,
  PL_TASKMANAGER_DTV_APP_DVD_PLAYER: 101,
  PL_TASKMANAGER_DTV_APP_CDDA_PLAYER: 102,
  PL_TASKMANAGER_DTV_APP_BDRE_PLAYER: 103,
  PL_TASKMANAGER_DTV_APP_VCD_PLAYER: 104,
  PL_TASKMANAGER_DTV_APP_IPOD_PLAYER: 105,
  PL_TASKMANAGER_DTV_APP_BDP_SETTINGS: 106,
  PL_TASKMANAGER_DTV_APP_BDP_INITSET: 107,
  PL_TASKMANAGER_DTV_APP_HTS_FUNCTION_MODE: 108,
  PL_TASKMANAGER_DTV_APP_BDP_TEST_MODE: 109,
  PL_TASKMANAGER_DTV_APP_ATSC_MH: 110,
  PL_TASKMANAGER_DTV_APP_HBBTV: 111,
  PL_TASKMANAGER_DTV_TR_APP_RCVIEWER: 112,
  PL_TASKMANAGER_DTV_TR_APP_MYTV: 113,
  PL_TASKMANAGER_DTV_TR_APP_SETTINGS: 114,
  PL_TASKMANAGER_DTV_TR_APP_CHLIST: 115,
  PL_TASKMANAGER_DTV_TR_APP_ACTIVITY: 116,
  PL_TASKMANAGER_DTV_TR_APP_MBR: 117,
  PL_TASKMANAGER_DTV_TR_APP_SOURCELIST: 118,
  PL_TASKMANAGER_DTV_TR_APP_ALLSHARE: 119,
  PL_TASKMANAGER_DTV_TR_APP_FTU: 120,
  PL_TASKMANAGER_DTV_TR_APP_FACTORY: 121,
  PL_TASKMANAGER_DTV_TR_APP_PERSONALLISTENING: 122,
  PL_TASKMANAGER_DTV_TR_APP_FAVORITE: 123,
  PL_TASKMANAGER_DTV_TR_APP_SCHEDULEMANAGER: 124,
  PL_TASKMANAGER_DTV_TR_APP_VOIP: 125,
  PL_TASKMANAGER_DTV_TR_APP_OSK: 126,
  PL_TASKMANAGER_DTV_TR_APP_BROWSERCONTROL: 127,
  PL_TASKMANAGER_DTV_APP_MAP_BROWSER: 128,
  PL_TASKMANAGER_DTV_APP_MAX: 129,
  PL_TV_TARGET_LOCATION_UNKNOWN: 0,
  PL_TV_TARGET_LOCATION_KOR: 1,
  PL_TV_TARGET_LOCATION_USA: 2,
  PL_TV_TARGET_LOCATION_BRA: 3,
  PL_TV_TARGET_LOCATION_PANEURO: 4,
  PL_TV_TARGET_LOCATION_CHI: 5,
  PL_TV_TARGET_LOCATION_HKG: 6,
  PL_TV_TARGET_LOCATION_ARB: 7,
  PL_TV_TARGET_LOCATION_PANNORDIG: 8,
  PL_TV_TARGET_LOCATION_SOUTHEASTASIA: 9,
  PL_TV_TARGET_LOCATION_ASIA_ATV: 10,
  PL_TV_TARGET_LOCATION_ASIA_DTV: 11,
  PL_TV_TARGET_LOCATION_TW: 12,
  PL_TV_TARGET_LOCATION_NORTHAFRICA: 13,
  PL_TV_TARGET_LOCATION_EA_DTV: 14,
  PL_TV_TARGET_LOCATION_CIS: 15,
  PL_TV_TARGET_LOCATION_PHI: 16,
  PL_TV_TARGET_LOCATION_S_AFR_DTV: 17,
  PL_TV_LOCATION_CODE: new Array(),
  PL_SCREEN_OPTION_BRIGHTNESS_SENSOR: 41,
  PL_TV_PRODUCT_TYPE_TV: 0,
  PL_TV_PRODUCT_TYPE_MONITOR: 1,
  PL_TV_PRODUCT_TYPE_BD: 2,
  PL_TV_FACTORY_LANGUAGE_UNKNOWN: 0,
  PL_TV_FACTORY_LANGUAGE_EAST_ASIA: 1,
  PL_TV_FACTORY_LANGUAGE_IRAN: 2,
  PL_TV_FACTORY_LANGUAGE_ISRAEL: 3,
  PL_TV_FACTORY_LANGUAGE_MIDDLE_ASIA: 4,
  PL_TV_FACTORY_LANGUAGE_SOUTH_AMERICA: 5,
  PL_TV_FACTORY_LANGUAGE_TAIWAN: 6,
  PL_TV_FACTORY_LANGUAGE_AFRICA: 7,
  PL_TV_FACTORY_LANGUAGE_NORTH_AFRICA: 8,
  PL_TV_FACTORY_LANGUAGE_WEST_ASIA: 9,
  PL_TV_REMOTE_DEFAULT_TYPE: 0,
  PL_TV_REMOTE_4DIRECTION_TYPE: 1,
  PL_TV_REMOTE_NUMERIC_TYPE: 2,
  PL_TV_REMOTE_PLAYBACK_TYPE: 3,
  PL_TV_REMOTE_YAHOO_TYPE: 4,
  PL_TV_REMOTE_PSIZE_TYPE: 5,
  PL_TV_REMOTE_FULLBROWSER_TYPE: 6,
  PL_TV_REMOTE_INTERNET_TYPE: 7,
  PL_TV_REMOTE_DATASERVICE_TYPE: 8,
  PL_TV_REMOTE_ROOMEQ_TYPE: 9,
  PL_TV_REMOTE_TTX_TYPE: 10,
  PL_TV_REMOTE_MHP_TYPE: 11,
  PL_TV_REMOTE_FULLBROWSER2_TYPE: 12,
  PL_TV_REMOTE_FULLBROWSER3_TYPE: 13,
  PL_TV_REMOTE_FULLBROWSER4_TYPE: 14,
  PL_TV_REMOTE_FULLBROWSER5_TYPE: 15,
  PL_TV_REMOTE_FULLBROWSER6_TYPE: 16,
  PL_TV_REMOTE_FULLBROWSER7_TYPE: 17,
  PL_TV_REMOTE_FULLBROWSER8_TYPE: 18,
  PL_TV_REMOTE_HDMICEC_TYPE: 19,
  PL_TV_REMOTE_USBDLNA_TYPE: 20,
  PL_TV_REMOTE_INTERNET_4DIRECTION_TYPE: 21,
  PL_TV_REMOTE_COLOR_TYPE: 22,
  PL_TV_REMOTE_IR_TYPE: 23
};

with(deviceapis._pluginDef) {
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_KOR] = "ko";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ENG_US] = "en";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SPA_US] = "es-US";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_FRA_US] = "fr-US";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_POR_US] = "pt-US";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_BUL] = "bg";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_CRO] = "hr";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_CZE] = "cs";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_DAN] = "da";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_DUT] = "nl";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_FIN] = "fi";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_FRA] = "fr";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_DEU] = "de";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_GRE] = "el";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_HUN] = "hu";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ITA] = "it";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_NOR] = "no";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ENG] = "en-GB";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_POL] = "pl";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_POR] = "pt";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ROM] = "ro";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_RUS] = "ru";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SER] = "sr";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SLK] = "sk";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SPA] = "es";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SWE] = "sv";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_TUR] = "tr";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_CHI] = "zh-CN";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_HKG] = "zh-HK";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_TPE] = "zh-TW";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_JPN] = null;
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_MAO] = null;
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_CMN] = null;
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_YUE] = null;
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_HIN] = "hi";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_EST] = "et";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_LAT] = "lv";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_LTU] = "lt";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ARA] = "ar";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_PER] = "fa";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_QAA] = null;
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_AD] = null;
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_CAT] = null;
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_VAL] = null;
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_THA] = "th";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_HEB] = "he";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_IND] = "id";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_VIE] = "vi";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_URD] = "ur";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_AFR] = "af";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ZUL] = "zu";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_XHO] = "xh";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_YOR] = "yo";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_IGB] = "ig";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_HAU] = "ha";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SWA] = "sw";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_AMH] = "am";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_OTHER] = null;
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_TAM] = "ta";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_IRA] = null;
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_FIL] = null;
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_LIT] = "lt";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_LAV] = "lv";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_SLV] = "sl";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_ALB] = "sq";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_UKR] = "uk";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_KAZ] = "kk";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_MKD] = "mk";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_MAY] = "ms";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_WEL] = "cy";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_GLA] = "gd";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_IRI] = "ga";
  PL_TV_LANGUAGE_CODE[PL_TV_LANGUAGE_MAX] = null;
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_UNKNOWN] = "USA";
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_KOR] = "KOR";
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_USA] = "USA";
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_BRA] = "BRA";
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_PANEURO] = "PANEURO";
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_CHI] = "CHI";
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_HKG] = "HKG";
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_ARB] = "ARB";
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_PANNORDIG] = "PANNORDIG";
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_SOUTHEASTASIA] = "SOUTHEASTASIA";
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_ASIA_ATV] = "ASIA_ATV";
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_ASIA_DTV] = "ASIA_DTV";
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_TW] = "TW";
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_NORTHAFRICA] = "NORTHAFRICA";
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_EA_DTV] = "EA_DTV";
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_CIS] = "CIS";
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_PHI] = "PHI";
  PL_TV_LOCATION_CODE[PL_TV_TARGET_LOCATION_S_AFR_DTV] = "S_AFR_DTV";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_USA] = "USA";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_KOR] = "KOR";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SPA] = "SPA";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_FRA] = "FRA";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_JPN] = "JPN";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_EU] = "EU";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_UK] = "UK";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_GERMANY] = "GERMANY";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_ITALY] = "ITALY";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SWEDEN] = "SWEDEN";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_BULGARIA] = "BULGARIA";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_CROATIA] = "CROATIA";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_CZECH] = "CZECH";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_NETHERLANDS] = "NETHERLANDS";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_GREECE] = "GREECE";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_HUNGARY] = "HUNGARY";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_POLAND] = "POLAND";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_PORTUGAL] = "PORTUGAL";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_ROMANIA] = "ROMANIA";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_RUSSIA] = "RUSSIA";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SWITZERLAND] = "SWITZERLAND";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_TURKEY] = "TURKEY";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_AUSTRALIA] = "AUSTRALIA";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_AUSTRIA] = "AUSTRIA";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_BELGIUM] = "BELGIUM";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_DENMARK] = "DENMARK";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_FINLAND] = "FINLAND";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_NORWAY] = "NORWAY";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_CHINA] = "CHINA";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_IRELAND] = "IRELAND";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SERBIA] = "SERBIA";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SAN_MARINO] = "SAN_MARINO";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_MONACO] = "MONACO";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_BRAZIL] = "BRAZIL";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_HONGKONG] = "HONGKONG";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_TAIWAN] = "TAIWAN";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_NEWZEALAND] = "NEWZEALAND";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SLOVAKIA] = "SLOVAKIA";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SINGAPORE] = "SINGAPORE";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_GENERALCABLE] = "GENERALCABLE";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_NORTH_AFRICA] = "NORTH_AFRICA";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_BELGIUM_FRENCH] = "BELGIUM_FRENCH";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_BELGIUM_DUTCH] = "BELGIUM_DUTCH";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SOUTH_AFRICA] = "SOUTH_AFRICA";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_OTHER] = "OTHER";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_ASIAWEUROPE_ANALOG] = "ASIAWEUROPE_ANALOG";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_HONGKONG_UK_ANALOG] = "HONGKONG_UK_ANALOG";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_NZL_INDONESIA_ANALOG] = "NZL_INDONESIA_ANALOG";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_SOUTH_AFRICA_ANALOG] = "SOUTH_AFRICA_ANALOG";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_AMERICA_ANALOG] = "AMERICA_ANALOG";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_CHINA_ANALOG] = "CHINA_ANALOG";
  PL_TV_COUNTRY_CODE[PL_TV_COUNTRY_EASTEUROPE_ANALOG] = "EASTEUROPE_ANALOG";
}

/* deviceapis.oci */
deviceapis.oci = {
  EVENT_DEV_CONNECT: 11,
  EVENT_DEV_CONNECT_SUCCESS: 41,
  EVENT_DEV_CONNECT_FAIL: 42,
  EVENT_DEV_DISCONNECT: 12,
  EVENT_DEV_STATUS: 13,
  OCI_OK: 0,
  OCI_NO_ERR: 0,
  OCI_ERR_INVALID_PARAM: 9901,
  OCI_ERR: 9999,
  OCI_EVENT_NOTHING: 0,
  DELIMITER_FUNC_PARAM: "|",
  DELIMITER_FUNC_RESULT: ",",
  DELIMITER_EVENT_PARAM: ",",
  COMMAND_OCI: "ExecuteOCI",
  OCI_PROFILE_PRINTER: 32,
  OCIDevInfo: function () {
  },
  addPluginObject: function (h, c) {
  },
  create: function (c, b) {
  },
  isConnected: function (c, b) {
  },
  getConnectedDeviceInfo: function (e, c) {
  },
  createDevice: function (c, a) {
  },
  destroyDevice: function (b, a) {
  },
  parseDeviceEvent: function (a) {
  },
  isAvailable: function (c, d, b) {
  },
  removeSpecificDevice: function (e, d, f, b) {
  },
  removeDevices: function (c, d, a) {
  },
  getConnectedDevices: function (a, f, e, c, g) {
  },
  destroy: function (a) {
  }
};

/* deviceapis.gamepad */
deviceapis.gamepad = {
  MGR_EVENT_DEV_CONNECT: deviceapis.oci.EVENT_DEV_CONNECT,
  MGR_EVENT_DEV_DISCONNECT: deviceapis.oci.EVENT_DEV_DISCONNECT,
  EV_KEY: 1,
  EV_ABS: 3,
  ABS_X: 0,
  ABS_Y: 1,
  ABS_Z: 2,
  ABS_RX: 3,
  ABS_RY: 4,
  ABS_RZ: 5,
  ABS_THROTTLE: 6,
  ABS_RUDDER: 7,
  ABS_WHEEL: 8,
  ABS_GAS: 9,
  ABS_BRAKE: 10,
  ABS_HAT0X: 16,
  ABS_HAT0Y: 17,
  ABS_HAT1X: 18,
  ABS_HAT1Y: 19,
  ABS_HAT2X: 20,
  ABS_HAT2Y: 21,
  ABS_HAT3X: 22,
  ABS_HAT3Y: 23,
  BTN_1: 0,
  BTN_2: 1,
  BTN_3: 2,
  BTN_4: 3,
  BTN_5: 4,
  BTN_6: 5,
  BTN_7: 6,
  BTN_8: 7,
  BTN_9: 8,
  BTN_10: 9,
  BTN_11: 10,
  BTN_12: 11,
  BTN_13: 12,
  BTN_14: 13,
  BTN_15: 14,
  BTN_16: 15,
  MAX_ABS_VALUE: 255,
  MIN_ABS_VALUE: 0,
  XINPUT_MAX_ABS_VALUE: 32767,
  XINPUT_MIN_ABS_VALUE: -32768,
  KEY_PRESSED: 1,
  KEY_RELEASED: 0,
  KEY_REPEATED: 2,
  GamepadArray: new Array(),
  GamepadValidArray: new Array(),
  GamepadManagerCallback: null,
  SEFPlugin: null,
  ManagerEvent: function () {
  },
  getGamepads: function (a, b) {
  },
  registerManagerCallback: function (a) {
  },
  callbackGamepads: function (c, b, a) {
  },
  Gamepad: function (a, b) {
    this.uniqueID = a.UID;
    this.name = a.name;
    this.deviceID = b;
    this.getUniqueID = function () {
    };
    this.getDeviceID = function () {
    };
    this.getName = function () {
    };
    this.GamepadEvent = function () {
    };
    this.gamepadEvent = new this.GamepadEvent();
    this.GamepadABSValueRange = function () {
    };
    this.gamepadRange = new this.GamepadABSValueRange();
    this.getInputEvent = function () {
    };
    this.playForceFeedback = function (e, d) {
    };
    this.stopForceFeedback = function () {
    };
    this.isForceFeedbackSupported = function () {
    };
    this.getABSValueRange = function (d) {
    }
  },
  ends: function () {
  }
};

/* deviceapis.customdevice */
deviceapis.customdevice = {
  CustomDeviceArray: new Array(),
  CustomDeviceValidArray: new Array(),
  CustomDeviceCallback: null,
  SEFPlugin: null,
  DocEduDevice: null,
  EduDevicePlugin: "EduDevice",
  ERROR_CODE_NO_ERR: 0,
  ERROR_CODE_ERR: 9999,
  DEV_EVENT_MESSAGE_RECEIVED: 150,
  DEV_EVENT_JOINED_GROUP: 151,
  DEV_EVENT_LEFT_GROUP: 152,
  MGR_EVENT_DEV_CONNECT: 11,
  MGR_EVENT_DEV_DISCONNECT: 12,
  MGR_EVENT_DEV_STATUS: 13,
  DEV_EDU_DEVICE: 5,
  DEV_SMART_DEVICE: 33,
  ManagerEvent: function () {
  },
  CustomDeviceInfo: function () {
  },
  CustomDeviceMessageInfo: function () {
  },
  CustomDeviceCustomDataInfo: function () {
  },
  CustomDeviceGroupInfo: function () {
  },
  getCustomDevices: function (c, h) {
  },
  registerManagerCallback: function (a) {
  },
  callbackCustomDevice: function (b, h, g) {
  },
  CustomDevice: function (a, b) {
    this.uniqueID = a.UID;
    this.name = a.name;
    this.deviceID = b;
    this.deviceType = a.deviceType;
    this.deviceCallback = null;
    this.getUniqueID = function () {
    };
    this.getDeviceID = function () {
    };
    this.getName = function () {
    };
    this.getType = function () {
    };
    this.receiveMessage = function () {
    };
    this.sendMessage = function (d) {
    };
    this.broadcastMessage = function (d) {
    };
    this.multicastMessage = function (d, e) {
    };
    this.disconnectDevice = function () {
    };
    this.registerDeviceCallback = function (c) {
    }
  },
};

/* deviceapis.healthcaredevice */
deviceapis.healthcaredevice = {
  MGR_EVENT_DEV_CONNECT: deviceapis.oci.EVENT_DEV_CONNECT,
  MGR_EVENT_DEV_DISCONNECT: deviceapis.oci.EVENT_DEV_DISCONNECT,
  MGR_EVENT_DEV_SEARCHED: 210,
  MGR_EVENT_DEV_SEARCH_FINISHED: 211,
  MGR_EVENT_DEV_CONNECT_FAILED: 212,
  MGR_EVENT_GETDATA: 200,
  DEV_PULSE_OXIMETER: 4100,
  DEV_BLOOD_PRESSURE_MONITOR: 4103,
  DEV_TEMPERATURE: 4104,
  DEV_WEIGHING_SCALE: 4111,
  DEV_GLUCOSE_METER: 4113,
  DEV_CARDIOVASCULAR: 4137,
  DEV_PEDOMETER: 14113,
  SPEC_PROFILE_HF_STRENGTH: 4138,
  SPEC_PROFILE_AI_ACTIVITY_HUB: 4167,
  SPEC_PROFILE_AI_MED_MINDER: 4168,
  DEV_INFO_MEASURE_DATA: 1,
  DEV_INFO_SYSTEM_INFO: 2,
  DEV_INFO_UNKNOWN: 0,
  DEV_MANUFACTURER: 80,
  DEV_MODEL_NUMBER: 81,
  MEASURE_DATA_ABS_TIMESTAMP: 2448,
  MEASURE_DATA_BODY_WEIGHT: 57664,
  MEASURE_DATA_BODY_HEIGHT: 57668,
  MEASURE_DATA_BODY_MASS: 57680,
  MEASURE_DATA_BODY_FAT: 57676,
  MEASURE_DATA_PULSE_RATE: 18474,
  MEASURE_DATA_NIBP: 18948,
  MEASURE_DATA_SYSTOLIC: 18949,
  MEASURE_DATA_DIASTOLIC: 18950,
  MEASURE_DATA_MAP: 18951,
  MEASURE_DATA_DISTANCE: 103,
  MEASURE_DATA_ENERGY: 119,
  MEASURE_DATA_UNKNOWN: 0,
  DEV_UNIT_DIMENSIONLESS: 512,
  DEV_UNIT_PERCENT: 544,
  DEV_UNIT_BPM: 2720,
  DEV_UNIT_KPA: 3843,
  DEV_UNIT_MMHG: 3872,
  DEV_UNIT_KG: 1731,
  DEV_UNIT_CM: 1297,
  DEV_UNIT_IN: 1376,
  DEV_UNIT_LB: 1760,
  DEV_UNIT_KGPM_SQ: 1952,
  DEV_UNIT_STEP: 6656,
  DEV_UNIT_CAL: 6784,
  DEV_UNIT_M: 1280,
  DEV_UNIT_G: 1728,
  DEV_UNIT_UNKNOWN: 0,
  GET_PROFILE_ID: 0,
  GET_EVENT_TYPE: 1,
  GET_DATA_SUBTYPE: 2,
  GET_DEVICE_TYPE: 3,
  GET_TOTAL_NUM_OF_DATA: 4,
  GET_START_OF_DATA: 5,
  OCI_PROFILE_HEALTHCARE: 2,
  HealthcareDeviceArray: new Array(),
  HealthcareDeviceValidArray: new Array(),
  HealthcareDeviceCallback: null,
  SEFPlugin: null,
  EMULStarted: 0,
  EMULSearched: 0,
  EMULConnected: 0,
  EMULData: new Array(),
  EMULSearch: new Array(),
  EMULBP1: "AND BP",
  EMULBP2: "HEM-7081-IT",
  EMULWS1: "HBF-206IT",
  EMULRepeatTime: 5000,
  HealthcareDeviceInfo: function () {
  },
  HealthcareDeviceData: function () {
  },
  HealthcareDeviceDataTimeInfo: function () {
  },
  HealthcareDeviceDataMeasuredInfo: function () {
  },
  ManagerEvent: function () {
  },
  initHealthcareDevices: function () {
  },
  getHealthcareDevices: function (a, b) {
  },
  searchDevices: function () {
  },
  connectDevice: function (a) {
  },
  disconnectDevice: function (a) {
  },
  registerManagerCallback: function (a) {
  },
  EMULsuccessCallback: function (b, a) {
  },
  EMULStruct: function () {
  },
  EMULSetData: function () {
  },
  EMULDataCallback: function () {
  },
  EMULSearchCallback: function () {
  },
  EMULConnectionCallback: function (b, a) {
  },
  callbackHealthcareDevice: function (c, h, g) {
  },
  parseSystemInfoData: function (e) {
  },
  parseHealthData: function (g) {
  },
  parseCallbackData: function (c) {
  },
  HealthcareDevice: function (a, b) {
  }
};

/* deviceapis.microphone */
deviceapis.microphone = {
  MGR_EVENT_DEV_CONNECT: deviceapis.oci.EVENT_DEV_CONNECT,
  MGR_EVENT_DEV_DISCONNECT: deviceapis.oci.EVENT_DEV_DISCONNECT,
  MGR_EVENT_PLAY_FAIL: 400,
  MICROPHONE_FORMAT_SIGNED_16BIT_LITTLE_ENDIAN: 0,
  MICROPHONE_FRAMERATE_48000: 48000,
  MICROPHONE_EFFECT_REVERB: 1,
  OCI_PROFILE_AUDIOINPUT: 16,
  MicrophoneArray: new Array(),
  MicrophoneValidArray: new Array(),
  MicrophoneCallback: null,
  SEFPlugin: null,
  ManagerEvent: function () {
  },
  getMicrophones: function (a, b) {
  },
  registerManagerCallback: function (a) {
  },
  callbackMicrophones: function (c, h, g) {
  },
  Microphone: function (a, b) {
    INTERFACE_COMMAND = "Microphone";
    this.uniqueID = a.UID;
    this.name = a.name;
    this.deviceID = b;
    this.deviceCallback = null;
    this.getUniqueID = function () {
    };
    this.getDeviceID = function () {
    };
    this.getName = function () {
    };
    this.enableDevice = function (e, d) {
    };
    this.disableDevice = function () {
    };
    this.play = function () {
    };
    this.stop = function () {
    };
    this.getVolumeLevel = function () {
    };
    this.setVolumeLevel = function (d) {
    };
    this.getSupportedEffects = function () {
    };
    this.getEnabledEffects = function () {
    };
    this.setEffect = function (e, d) {
    };
    this.registerDeviceCallback = function (c) {
    }
  }
};

/* deviceapis.printer */
deviceapis.printer = {
  SCREEN_LAYER_ALL: 0,
  SCREEN_LAYER_OSD: 1,
  isPrintingServiceSupported: function () {
  },
  runFilePrinting: function (b) {
  },
  runScreenPrinting: function (h, f) {
  }
};

/* deviceapis.recognition */
deviceapis.recognition = {
  PL_RECOGNITION_TYPE_VOICE: 0,
  PL_RECOGNITION_TYPE_GESTURE: 1,
  PL_RECOGNITION_TYPE_FACE: 2,
  MESSAGE_RECOGNITION_VOICE_EMP: 6510,
  MESSAGE_RECOGNITION_GESTURE_EMP: 6511,
  MESSAGE_RECOGNITION_FACE_EMP: 6512,
  oCallback: [],
  oCallback_name: [],
  blinitialized: false,
  plRecog: null,
  is3rd: false,
  isSubscribeEvent: false,
  setRetValue: function (a) {
  },
  isSEFSupported: function () {
  },
  isSDK: function () {
  },
  initialize: function () {
  },
  setCallback: function (b, a, c) {
  },
  unsetCallback: function (a) {
  },
  _handleEvent: function (d, f, i) {
  },
  SDKTest_GenerateExpectedResult: function (c, b, a) {
  },
  SubscribeEvent: function (c, b, d) {
  },
  UnsubscribeEvent: function (c, b) {
  },
  SubscribeExEvent: function (c, b, d) {
  },
  UnsubscribeExEvent: function (c, b) {
  },
  IsRecognitionSupported: function () {
  },
  IsRecognitionAppAvailable: function () {
  },
  RegisterRecognition: function (c, b, d) {
  },
  UnregisterRecognition: function (c, b) {
  },
  SetVoiceHelpbarInfo: function (a) {
  },
  SetVoiceCandidateList: function (a) {
  },
  SetVoiceHelpbarItemsList: function (a) {
  },
  SetVoiceHelpbarType: function (c, b, a, d) {
  },
  GetCurrentVoiceLanguage: function () {
  },
  GetVoiceRecognitionStatus: function () {
  },
  EnableVoiceRecognition: function () {
  },
  DisableVoiceRecognition: function () {
  },
  IsVoiceRecognitionEnabled: function () {
  },
  StartVoiceRecognition: function () {
  },
  StopVoiceRecognition: function () {
  },
  SetGestureHelpbarInfo: function (a) {
  },
  GetGestureRecognitionStatus: function () {
  },
  EnableGestureRecognition: function () {
  },
  DisableGestureRecognition: function () {
  },
  IsGestureRecognitionEnabled: function () {
  },
  StartGestureRecognition: function () {
  },
  StopGestureRecognition: function () {
  },
  ShowVoiceHelpbar: function () {
  },
  HideVoiceHelpbar: function () {
  },
  SetVoiceTimeout: function (a) {
  },
  GetVoiceServerLanguage: function () {
  },
  IsVoiceServerLanguageSupported: function () {
  }
};

/* deviceapis.camera */
deviceapis.camera = {
  PL_CAMERA_EVENT_DISCONNECTED: 0,
  PL_CAMERA_EVENT_CONNECTING: 1,
  PL_CAMERA_EVENT_CONNECTED: 2,
  PL_CAMERA_STATE_DISCONNECTED: 0,
  PL_CAMERA_STATE_CONNECTING: 1,
  PL_CAMERA_STATE_READY: 2,
  PL_CAMERA_STATE_PLAYING: 3,
  PL_CAMERA_QUALITY_LOW: 0,
  PL_CAMERA_QUALITY_MID: 1,
  PL_CAMERA_QUALITY_HIGH: 2,
  PL_CAMERA_RESOLUTION_VGA: 0,
  PL_CAMERA_RESOLUTION_HD: 1,
  oCameraPluginCallback: null,
  bCameraPluginInitialiezed: false,
  bCameraStarted: false,
  plCamera: null,
  isSEFSupported: function () {
  },
  isSDK: function () {
  },
  initialize: function () {
  },
  _handleEvent: function (b, a, c) {
  },
  RegisterEventCallback: function (a) {
  },
  UnregisterEventCallback: function () {
  },
  GetCameraState: function () {
  },
  StartCamVideo: function (g, f, j, b, a, k) {
  },
  StopCamVideo: function () {
  }
};