// START LOADING SECTIONS

// load nav with callback
$( "#main-menu" ).load( "sections/nav.html" , function() {
	console.log("main menu was loaded successfully.");
});

// load footer with callback
$( "#footer" ).load( "sections/footer.html" , function() {
	console.log("footer was loaded successfully.");
});

// END LOADING SECTIONS

// START STICKY

// declare variables
var header = document.querySelector('#header');
var headerPosition = header.getBoundingClientRect();
var placeholder = document.createElement('div');

// setup
placeholder.style.width = headerPosition.width + 'px';
placeholder.style.height = headerPosition.height + 'px';
var isAdded = false;

window.addEventListener('scroll', function() {
    if (window.pageYOffset >= headerPosition.top && !isAdded) {
        header.classList.add('sticky');
        header.parentNode.insertBefore(placeholder, header);
        isAdded = true;
    } else if (window.pageYOffset == headerPosition.top && isAdded) {
        console.log(isAdded);
        header.classList.remove('sticky');
        header.parentNode.removeChild(placeholder);
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

// START DISABLE PAGE

var page = document.querySelector('.page');

// variables
var pageDisabled = false;

// function - disable page
function disablePage() {

	$(page).addClass("disabled");
	pageDisabled = true;
	// reset for testing
	setTimeout(enablePage, 3000);

};

// function - enable page
function enablePage() {

	$(page).removeClass("disabled");
	pageDisabled = false;

};

// END DISABLE PAGE

// START INTERACTIONS

var ctaWork = document.querySelector('#cta-work');
var thumb = document.querySelector('.thumb');

$(ctaWork).click(function() {
	disablePage();
});

$(thumb).click(function() {
	disablePage();
	$('#page-container').load( "test.html" , function() {
		console.log("Test was loaded successfully.");
		enablePage();
		$('html, body').animate({ scrollTop: 0 }, 0);
	});
});

// START URL HANDLING

var location = "https://fireremnant.github.io/final_project/";
var pathname = window.location.pathname; // Returns path only
var url      = window.location.href;     // Returns full URL

console.log(pathname + "pathname");
// /final_project/index.htmlpathname
console.log(url + "url");
// https://fireremnant.github.io/final_project/index.htmlurl

// END URL HANDLING