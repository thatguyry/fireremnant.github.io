$(document).ready(function() {
	
	// load nav with callback
	$( "#main-menu" ).load( "sections/nav.html" , function() {
		console.log("main menu was loaded successfully.");
	});

	// load footer with callback
	$( "#footer" ).load( "sections/footer.html" , function() {
		console.log("footer was loaded successfully.");
	});

});