$(document).ready(function() {
	
	// START LOAD SECTIONS

	// load nav with callback
	$( "#main-menu" ).load( "sections/nav.html" , function() {
		console.log("main menu was loaded successfully.");
	});

	// load footer with callback
	$( "#footer" ).load( "sections/footer.html" , function() {
		console.log("footer was loaded successfully.");
	});

	// END LOAD SECTIONS

	// START STICKY

	// declare variables
	var menu = document.querySelector('#nav');
	var menuPosition = menu.getBoundingClientRect();
	var placeholder = document.createElement('div');
	
	// setup
	placeholder.style.width = menuPosition.width + 'px';
	placeholder.style.height = menuPosition.height + 'px';
	var isAdded = false;

	window.addEventListener('scroll', function() {
	    if (window.pageYOffset >= menuPosition.top && !isAdded) {
	        menu.classList.add('sticky');
	        menu.parentNode.insertBefore(placeholder, menu);
	        isAdded = true;
	    } else if (window.pageYOffset == menuPosition.top && isAdded) {
	        console.log(isAdded);
	        menu.classList.remove('sticky');
	        menu.parentNode.removeChild(placeholder);
	        isAdded = false;
	    }
	});	

	// END STICKY

	// START TYPED

	$(function(){
	  $("#status").typed({
	    strings: [
	    	"I'm counting pixels." ,
	    	"I'm guessing breakpoints." ,
	    	"I'm listening to Spotify."],
	    
	    // typing speed
	    typeSpeed: 0,
		// time before backspacing
        backDelay: 3000,
        // loop
        loop: false,
        // show cursor
        showCursor: false,

	  });
	});

	// END TYPED

});