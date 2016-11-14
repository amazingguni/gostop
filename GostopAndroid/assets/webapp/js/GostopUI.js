var onAllshare = false;

var GostopUI = {
		page_onCreate : function(evt){
		    var screenheight = $(evt.target).height();
		    var screenwidth= screenheight/780*1280;
		    
		    
		    if(screenwidth>$(evt.target).width()){
		    	screenheight = $(evt.target).width()/1280*780;
		    	$(evt.target).find('.gostop-page-container').width('100%');
		    	$(evt.target).find('.gostop-page-container').height(screenheight);
		    	var top = ($(evt.target).height()-screenheight)/2;
		    	$(evt.target).find('.gostop-page-container').offset({top:top});
		    }else{
		    	$(evt.target).find('.gostop-page-container').width(screenwidth);
		    }
		},
		
		page_start_onCreate : function(evt){
			GostopUI.page_onCreate(evt);
		},
		page_start_onShow :function(evt){
			
			
		},
		page_start_onHide : function(evt){
			
		},
		page_main_onCreate:function(evt){
			GostopUI.page_onCreate(evt);
		},
		page_main_onShow:function(evt){
			
		},
		page_main_onHide:function(evt){
			
		}
		
};

