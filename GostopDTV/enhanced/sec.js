var secLog = "[sec] ";

// element and paramerter Check
function preConditionCheck(elem, obj) {
    if (elem == undefined || elem == null || elem.tagName == undefined) {
        console.log(secLog + "Element Error! / Element : " + elem);
        return -1;
    }
    
    return 0;
}

// secButton
jQuery.fn.secButton = function(first_param, second_param, third_param) {
    var jq_elem = this;
    var elem = this[0];
    if (preConditionCheck(elem) == -1) return;
    
    var option = elem.option;
    if (!jq_elem.hasClass("sec-ui-button")) {
        option = elem.option = {
            text:"",
            index:-1,
            _callback:null
        };
        
        _init(first_param.text);
        _focus(first_param.index);
        
        elem.addEventListener("click", function(e){
            var jq = $(e.target);
            if (jq.hasClass("sec-ui-button-c") && option._callback != null) {
                option._callback(e, (jq_elem.children().index(jq) - 1));
            }
        }, false);
        
        compSetAttrSecButton(jq_elem);
    }
    else {
        switch (first_param) {
            case "option":
                switch (second_param) {
                    case "text":
                        _init(third_param);
                        _focus(option.index);
                        break;
                    case "index":
                        _focus(third_param);
                        break;
                }
                break;
            case "focus":
                _focus((second_param) ? second_param : 0);
                break;
            case "blur":
                _blur();
                break;
            case "getIndex":
                return option.index;
                break;
            case "addCallback":
                if (second_param == "clicked") {
                    if (third_param && typeof(third_param) == "function") {
                        option._callback = third_param;
                    }
                }
                break;
        }
    }
    
    function _init(txt) {
        jq_elem.addClass("sec-ui-button");
        
        var button_tag = '<div class="sec-ui-button-l"></div>';
        
        var text = txt;
        if (text) {
            if (typeof(text) == "string") {
                option.text = [text];
            }
            else if (typeof(text) == "object" && text.length > 0) {
                option.text = text;
            }
        }
        
        for (var i = 0; i < option.text.length; i++) {
            button_tag += '<div class="sec-ui-button-c">' + option.text[i] + '</div>';
        }
        button_tag += '<div class="sec-ui-button-r"></div>';
        
        elem.innerHTML = button_tag;
    }
    
    function _focus(index) {
        if (typeof(index) == "number" && index >= 0) {
            option.index = index;
            _blur();
            jq_elem.find(".sec-ui-button-c").eq(option.index).addClass("focus");
    
            var item_num = option.text.length;
            if (option.index == 0) jq_elem.find(".sec-ui-button-l").addClass("focus");
            if (option.index == (item_num - 1)) jq_elem.find(".sec-ui-button-r").addClass("focus");
        }
    }
    
    function _blur() {
        $.each(jq_elem.find(".focus"), function(index, elm){
            $(elm).removeClass("focus");
        });
    }
    
    return this;
}


// secLoading
jQuery.fn.secLoading = function(first_param, second_param, third_param) {
    var jq_elem = this;
    var elem = this[0];
    if (preConditionCheck(elem) == -1) return;
    
    var option = elem.option;
    if (!jq_elem.hasClass("sec-ui-loading")) {
        option = elem.option = {
            stepIntervalTime:2000
        };
        
        jq_elem.addClass("sec-ui-loading");
        var loading_img = document.createElement("div");
        loading_img.className = "sec-ui-loading-circle" + ((window._browser == "designer") ? " designer" : "");
        elem.appendChild(loading_img);
        
        compSetAttrSecLoading(jq_elem);
    }
        
    if (first_param) {
        if (first_param.stepIntervalTime) {
            var stepIntervalTime = parseInt(first_param.stepIntervalTime);
            if (typeof(stepIntervalTime) == "number") {
                option.stepIntervalTime = stepIntervalTime;
                elem.querySelector(".sec-ui-loading-circle").style.webkitAnimationDuration 
                    = stepIntervalTime + "ms";
            }
        }
        else if (first_param == "show") {
            elem.style.display = "block";
        }
        else if (first_param == "hide") {
            elem.style.display = "none";
        }
        else if (first_param == "option") {
            if (second_param == "stepIntervalTime") {
                if (third_param) {
                    if (typeof(third_param) == "number") {
                        option.stepIntervalTime = third_param;
                        elem.querySelector(".sec-ui-loading-circle").style.webkitAnimationDuration 
                            = third_param + "ms";
                    }
                }
                else {
                    return option.stepIntervalTime;
                }
            }
        }
    }
    
    return this;
};


// secProgressBar
jQuery.fn.secProgressBar = function(first_param, second_param, third_param) {
    var jq_elem = this;
    var elem = this[0];
    if (preConditionCheck(elem) == -1) return;
    
    var option = elem.option;
    if (!jq_elem.hasClass("sec-ui-progressbar")) {
        jq_elem.addClass("sec-ui-progressbar");
        
        option = elem.option = {
            max:100,
            value:0,
            type:"progress"
        }
        
        var bar_bg_elem = document.createElement("div");
        var bar_elem = document.createElement("div");
        bar_bg_elem.className = "bg";
        bar_elem.className = "bar progress" + ((window._browser == "designer") ? " designer" : "");
        
        elem.appendChild(bar_bg_elem);
        elem.appendChild(bar_elem);
        
        if (first_param.max) {
            _setMax(first_param.max);
        }
        if (first_param.value) {
            _setValue(first_param.value);
        }
        if (first_param.type) {
            _setType(first_param.type);
        }
        
        _setWidth();
        
        compSetAttrSecProgressBar(jq_elem);
    }
    else {
        switch (first_param) {
            case "show":
                elem.style.display = "block";
                break;
            case "hide":
                elem.style.display = "none";
                break;
            case "next":
                _setWidth(++(option.value));
                break;
            case "prev":
                _setWidth(--(option.value));
                break;
            case "setMax":
                _setMax(second_param);
                _setWidth();
                break;
            case "getMax":
                return option.max;
                break;
            case "setValue":
                _setValue(second_param);
                _setWidth();
                break;
            case "getValue":
                return option.value;
                break;
            case "option":
                switch (second_param) {
                    case "max":
                        if (third_param) _setMax(third_param);
                        else return option.max;
                        break;
                    case "value":
                        if (third_param != undefined) _setValue(third_param);
                        else return option.value;
                        break;
                    case "type":
                        if (third_param) _setType(third_param);
                        else return option.type;
                        break;
                }
                _setWidth();
                break;
        }
    }
    
    function _setMax(max) {
        if (typeof(max) == "number") option.max = max;
    }
    
    function _setValue(value) {
        if (typeof(value) == "number" && value <= option.max) option.value = value;
    }
    
    function _setWidth() {
        if (option.value < 0) option.value = 0;
        if (option.value > option.max) option.value = option.max;
        var prog_per = ((option.value / option.max) * 100) + "%";
        
        elem.querySelector(".bg").style.width = prog_per;
        elem.querySelector(".bar").style.width = prog_per;
    }
    
    function _setType(type) {
        var prog_bg = "";
        var prog_bar = "bar";
        
        option.type = type;
        switch(type) {
            case "loading":
            case "buffering":
                prog_bg = "none"
                prog_bar = type;
                break;
            case "status":
                prog_bar = type;
                break;
            default:
                prog_bar = "progress";
                break;
        }
        elem.querySelector(".bg").className = "bg " + prog_bg;
        elem.querySelector(".bar").className = "bar " + prog_bar + ((window._browser == "designer") ? " designer" : "");
    }
    
    return this;
}


// secPopup
jQuery.fn.secPopup = function(first_param, second_param, third_param) {
    var jq_elem = this;
    var elem = this[0];
    if (preConditionCheck(elem) == -1) return;
    
    var option = elem.option;
    
    if (!elem.querySelector(".sec-ui-popup")) {
        var popup_innerHTML = "";
        
        option = elem.option = {
            title:      "",
            text:       "",
            keyhelp:    null,
            focus:      0,
            defaultFocus:0,
            dim:        true,
            callback:   null
        };
        
        if (first_param.dim == false) option.dim = false;
        popup_innerHTML += '<div class="sec_dim" style="display:' + (option.dim ? "block" : "none") + ';"></div>';
        
        popup_innerHTML += '<div class="sec-ui-popup">';
        
        if (first_param.title) option.title = first_param.title;
        popup_innerHTML += '<div class="title">' + option.title + '</div>';
        
        if (first_param.text) option.text = first_param.text;
        popup_innerHTML += '<div class="text">' + option.text + '</div>';
        
        if (first_param.callback) option.callback = first_param.callback;
        
        if (first_param.defaultFocus) {
            if (typeof(first_param.defaultFocus) == "number") {
                option.defaultFocus = first_param.defaultFocus;
                option.focus = first_param.defaultFocus;
            }
        }
        
        popup_innerHTML += '<div class="buttons">';
        if (first_param.buttons) {
            if (typeof(first_param.buttons) == "object" && first_param.buttons.constructor == Array) {
                option.buttons = first_param.buttons;
                for (var i = 0; i < first_param.buttons.length; i++) {
                    popup_innerHTML += '<div class="button'
                        + ((i == option.defaultFocus) ? ' focus' : '')
                        + '">' + first_param.buttons[i] + '</div>';
                }
            }
        }
        popup_innerHTML += '</div>';
        
        if (first_param.keyhelp) option.keyhelp = first_param.keyhelp;
        popup_innerHTML += '<div class="keyhelp"></div>';
        
        elem.innerHTML = popup_innerHTML + '<a href="javascript:void(0);" waper_focus="false"></a></div>';
        
        var btns = elem.querySelector(".buttons");
        btns.addEventListener("click", _sec_popup_btn_onClick, false);
        
        var popup_elem = elem.querySelector(".sec-ui-popup");
        if (option.title != "") {
            $(popup_elem).addClass("title");
        }
        if (option.keyhelp) {
            $(popup_elem).addClass("keyhelp");
            $(popup_elem).find(".keyhelp").sfKeyHelp(option.keyhelp);
        }
        
        jq_elem.find("a").bind("keydown", function () {
            jq_elem._key(event.keyCode);
        }, false);
      
        elem.style.display = "none";
        
        compSetAttrSecPopup(jq_elem);
    }
    else {
        switch (first_param) {
            case "show":
                _show();
                _setPopupSize();
                break;
            case "hide":
                _hide();
                break;
            case "option":
                switch (second_param) {
                    case "title":
                        if (third_param != undefined) {
                            if (typeof(third_param) == "string" && third_param.length > 0) {
                                option.title = third_param;
                                elem.querySelector(".sec-ui-popup .title").innerHTML = third_param;
                            }
                            else {
                                $(jq_elem).find(".sec-ui-popup").removeClass("title");
                            }
                        }
                        else {
                            return option.title;
                        }
                        break;
                    case "text":
                        if (third_param) {
                            option.text = third_param;
                            elem.querySelector(".text").innerHTML = third_param;
                        }
                        else {
                            return option.text;
                        }
                        break;
                    case "keyhelp":
                        if (third_param != undefined) {
                            if (typeof(third_param) == "object" && third_param != null) {
                                option.keyhelp = third_param;
                                $(jq_elem).find(".sec-ui-popup .keyhelp").sfKeyHelp(third_param);
                            }
                            else {
                                $(jq_elem).find(".sec-ui-popup").removeClass("keyhelp");
                                $(jq_elem).find(".sec-ui-popup .keyhelp").sfKeyHelp("destroy");
                            }
                        }
                        else {
                            return option.keyhelp;
                        }
                        break;
                    case "focus":
                        if (third_param != undefined) {
                            if (typeof(third_param) == "number") {
                                option.focus = third_param;
                                _focus();
                            }
                        }
                        else {
                            return option.focus;
                        }
                        break;
                    case "defaultFocus":
                        if (third_param != undefined) {
                            if (typeof(third_param) == "number") 
                                option.defaultFocus = third_param;
                        }
                        else {
                            return option.defaultFocus;
                        }
                        break;
                    case "dim":
                        if (third_param != undefined) {
                            if (third_param == "true") third_param = true;
                            else if (third_param == "false") third_param = false;
                                
                            option.dim = third_param;
                            elem.querySelector(".sec_dim").style.display = third_param ? "block": "none";
                        }
                        else {
                            return option.dim;
                        }
                        break;
                    case "callback":
                        if (third_param != undefined) {
                            if (typeof(third_param) == "function") option.callback = third_param;
                            else option.callback = null;
                        }
                        else {
                            return option.callback;
                        }
                        break;
                }
                break;
        }
    }
    
    function _sec_popup_btn_onClick(event) {
        var elem = event.target;
        if ($(elem).hasClass("button")) {
            _hide($(elem.parentElement.children).index(elem));
        }
    }
        
    function _setPopupSize() {
        var popup_elem = elem.querySelector(".sec-ui-popup");
        var title_height = popup_elem.querySelector(".title").clientHeight;
        var text_height = popup_elem.querySelector(".text").clientHeight;
        var button_height = popup_elem.querySelector(".buttons").clientHeight;
        var popup_height = text_height + button_height;
        popup_elem.style.height = popup_height + "px";
        popup_elem.style.left = (($(document).width() / 2) - ($(popup_elem).outerWidth() / 2)) + "px";
        popup_elem.style.top = (($(document).height() / 2) - ($(popup_elem).outerHeight() / 2)) + "px";
    }
    
    function _show() {
        option.focus = option.defaultFocus;
        _focus();
        
        this.handlerId = null;
        if (sf.scene._isSceneArchUsed()) {
            this.handlerId = sf.scene.pushKeyHandler(function() {
                _key(event.keyCode);
            }, {
                context: this
            });
        } else {
            jq_elem.find("a").focus();
        }
        
        elem.style.display = "block";
    }
    
    function _hide(index) {
        if (this.handlerId) {
            sf.scene.removeKeyHandler(this.handlerId);
            this.handlerId = null;
        }
        
        if (option.callback) {
            option.callback((typeof(index) == "undefined") ? -1 : index);
        }
        
        elem.style.display = "none";
    }
    
    function _key(g) {
        alert("[secPopup] key(" + (g || "") + ")");
        var temp_focus = 0;
        switch (g) {
        case (sf.key.LEFT):
            temp_focus = option.focus - 1;
            option.focus = temp_focus < 0 ? 0 : temp_focus;
            _focus();
            break;
        case (sf.key.RIGHT):
            temp_focus = option.focus + 1;
            option.focus = temp_focus >= option.buttons.length ? (option.buttons.length - 1) : temp_focus;
            _focus();
            break;
        case (sf.key.ENTER):
            var btn_focus = elem.querySelector(".buttons div.focus");
            _hide($(elem.querySelectorAll(".buttons div")).index(btn_focus));
            break;
        case (sf.key.RETURN):
        case (sf.key.EXIT):
            sf.key.preventDefault();
            _hide();
            break;
        }
    }
    
    function _focus() {
        elem.querySelector(".buttons .focus").className = "button";
        elem.querySelector(".buttons").children[option.focus].className = "button focus";
    }
    
    return this;
};

(function (b) {
  var a = "secArrowButton";
  __secArrowButton = sf.ui.widgetFactory({
    widgetName: a,
    eventNamespace: "secArrowButton",
    baseCssClass: "sf-ui-arrowbutton",
    options: {
      text: "",
      arrow: "all",
      onup: function (c) {
        return c
      },
      ondown: function (c) {
        return c
      },
      onleft: function (c) {
        return c
      },
      onright: function (c) {
        return c
      }
    },
    templates: {
      button: '<div class="button sec" waper_focus="false"><div class="left" waper_focus="false"></div><div class="center sf-ui-common-ellipsis" waper_focus="false"></div><div class="right" waper_focus="false"></div></div>',
      arrows: '<div class="arrows sec" waper_focus="false"><center><div class="arrowup" waper_focus="false"></div><div class="arrowdown" waper_focus="false"></div></center><div class="arrowleft" waper_focus="false"></div><div class="arrowright" waper_focus="false"></div></div>'
    },
    arrowClasses: {
      all: "all",
      updown: "updown",
      leftright: "leftright"
    },
    _init: function () {
      alert("[secArrowButton] _init()");
      var c = this.widget(),
        j = this.options,
        d = this.view,
        e = this.templates;
      c.empty();
      d.button = b.tmpl(e.button, null);
      d.arrows = b.tmpl(e.arrows, null);
      d.button.appendTo(c);
      d.arrows.appendTo(c);
      d.arrows.width("100%").height("100%");
      
      this.setText(j.text);
      this._setArrowType(j.arrow);
      this.blur();
      alert(c.html());
      //LDW>
      compSetAttrSecArrowButton(c);
    },
    _setArrowType: function (e) {
      var c = this.widget();
      for (var d in this.arrowClasses) {
        c.removeClass(this.arrowClasses[d])
      }
      if (e && this.arrowClasses[e.toLowerCase()]) {
        c.addClass(this.arrowClasses[e.toLowerCase()])
      } else {
        alert("There's no such a type: " + e)
      }
    },
    _focus: function () {
      this.widget().addClass("focused")
    },
    _blur: function () {
      this.widget().removeClass("focused")
    },
    _setOption: function (d, e) {
      var f = this.options,
        c = this.view;
      switch (d) {
      case "text":
        f.text = e;
        break;
      case "arrow":
        f.arrow = e;
        break;
      case "onup":
        if (e && e instanceof Function) {
          f.onup = e
        }
        break;
      case "ondown":
        if (e && e instanceof Function) {
          f.ondown = e
        }
        break;
      case "onleft":
        if (e && e instanceof Function) {
          f.onleft = e
        }
        break;
      case "onright":
        if (e && e instanceof Function) {
          f.onright = e
        }
        break
      }
    },
    focus: function () {
      this._focus()
    },
    blur: function () {
      this._blur()
    },
    up: function () {
      if (this.options.onup && this.options.onup instanceof Function) {
        var c = this.options.onup(this.options.text);
        if (c !== undefined) {
          this.setText(c)
        }
      }
    },
    down: function () {
      if (this.options.ondown && this.options.ondown instanceof Function) {
        var c = this.options.ondown(this.options.text);
        if (c !== undefined) {
          this.setText(c)
        }
      }
    },
    left: function () {
      if (this.options.onleft && this.options.onleft instanceof Function) {
        var c = this.options.onleft(this.options.text);
        if (c !== undefined) {
          this.setText(c)
        }
      }
    },
    right: function () {
      if (this.options.onright && this.options.onright instanceof Function) {
        var c = this.options.onright(this.options.text);
        if (c !== undefined) {
          this.setText(c)
        }
      }
    },
    setText: function (d) {
      var c = this.view;
      this.options.text = d + "";
      c.button.find(".center").html(d + "")
    },
    getText: function () {
      return this.options.text
    }
  });
  sf.ui.bridge(a, __secArrowButton);
  sf.ui.addSelector(a)
}(jQuery));


function compSetAttrSecButton(obj){
	obj[0].old_setAttribute = obj[0].setAttribute;
	obj[0].setAttribute = function(name, value, param){
		console.log(" dtv secButton func : " + name + "  " + value + "  " + param);
		if(param == undefined){
			obj[0].old_setAttribute(name, value);
		}else{
		    if(name == 'data-text'){
    			var text_split = value.split(",");
    			if (text_split.length == 1) {
    				obj.secButton("option", "text", value);
    			}
    			else if (text_split.length > 1) {
    				var text_array = Array();
    				for (var j = 0; j < text_split.length; j++) {
    					text_array.push(text_split[j]);
    				}
    				obj.secButton("option", "text", text_array);
    			}
		    }
		}
	};
}


function compSetAttrSecLoading(obj){
	obj[0].old_setAttribute = obj[0].setAttribute;
	obj[0].setAttribute = function(name, value, param){
		console.log(" dtv secLoading func : " + name + "  " + value + "  " + param);
		if(param == undefined){
			obj[0].old_setAttribute(name, value);
		}else{
			if(name == 'data-visible'){
				obj.secLoading(value);
			} else if(name == 'data-stepintervaltime'){
				obj.secLoading({stepIntervalTime:value});
			}
		}
	};
}

function compSetAttrSecProgressBar(obj){
	obj[0].old_setAttribute = obj[0].setAttribute;
	obj[0].setAttribute = function(name, value, param){
		console.log(" dtv secProgressBar func : " + name + "  " + value + "  " + param);
		if(param == undefined){
			obj[0].old_setAttribute(name, value);
		}else{
		    if(name == 'data-value'){
    			obj.secProgressBar("setValue", parseInt(value));
    		}
    		else if(name == 'data-max'){
    		    obj.secProgressBar("setMax", parseInt(value));
    		}
    		else if(name == 'data-type'){
    		    obj.secProgressBar("option", "type", value);
    		}
		}
	};
}

function compSetAttrSecPopup(obj){
	obj[0].old_setAttribute = obj[0].setAttribute;
	obj[0].setAttribute = function(name, value, param){
		console.log(" dtv secPopup func : " + name + "  " + value + "  " + param);
		if(param == undefined){
			obj[0].old_setAttribute(name, value);
		}else{
			if(name == 'data-visible'){
				obj.secPopup(value);
			}else if(name == 'data-text'){
				obj.secPopup("option", "text", value);
			}else if(name == 'data-title'){
				obj.secPopup("option", "title", value);
			}else if(name == 'data-dim'){
				obj.secPopup("option", "dim", value);
			}
		}
	};
}

function compSetAttrSecArrowButton(obj){
	obj[0].old_setAttribute = obj[0].setAttribute;
	obj[0].setAttribute = function(name, value, param){
		console.log(" dtv secArrowButton func : " + name + "  " + value + "  " + param);
		if(param == undefined){
			obj[0].old_setAttribute(name, value);
		}else{
		    if(name == 'data-text'){
                obj.secArrowButton("setText", value);
    		}
    		else if(name == 'data-arrow'){
    		    obj.secArrowButton({ 
    		        text:obj.secArrowButton("getText"),
    		        arrow:value
    		    });
    		}
		}
	};
}