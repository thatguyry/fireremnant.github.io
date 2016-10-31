$(document).ready(function() {
	
	// load nav with callback
	$( "#main-menu" ).load( "sections/nav.html" , function() {
		console.log("Load was performed.");
	});

});