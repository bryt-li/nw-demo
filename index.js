var gui = require("nw.gui");

window.onresize = function() {
  updateContentStyle();
};

window.onload = function() {
	gui.Window.get().maximize();
	updateContentStyle();
  	gui.Window.get().show();
}
