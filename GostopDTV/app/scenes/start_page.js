function Scenestart_page() {
}

Scenestart_page.prototype.initialize = function () {
	start_page_componentInitialize();
	nserviceModule.start();
};

function start_page_componentInitialize(){
	// Component is initialized in this function.

	//-- DtvButton #dtvButton_0
	$('#dtvButton_0').sfButton({
		text:'Start Game'
	});
	$('#dtvButton_0').sfButton("addCallback", "clicked", dtvButton_0_onclick);

};

Scenestart_page.prototype.handleShow = function (data) {
	// this function will be called when the scene manager show this scene 
};

Scenestart_page.prototype.handleHide = function () {
	// this function will be called when the scene manager hide this scene  
};

Scenestart_page.prototype.handleFocus = function () {
	// this function will be called when the scene manager focus this scene
};

Scenestart_page.prototype.handleBlur = function () {
	// this function will be called when the scene manager move focus to another scene from this scene
};

Scenestart_page.prototype.handleKeyDown = function (keyCode) {
	// TODO : write an key event handler when this scene get focused
	switch (keyCode) {
	case sf.key.LEFT:
		break;
	case sf.key.RIGHT:
		break;
	case sf.key.UP:
		break;
	case sf.key.DOWN:
		break;
	case sf.key.ENTER:
		break;
	}
};
