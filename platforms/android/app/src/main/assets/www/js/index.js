$(document).ready(function() { 
	// jQuery is properly loaded at this point
	// so proceed to bind the Cordova's deviceready event
	//app.readPosts();
	$(document).bind('deviceready', app.onDeviceReady); 
});

var app = 
{

	onDeviceReady: function() {
		console.log('Device is ready');
	}
};

















