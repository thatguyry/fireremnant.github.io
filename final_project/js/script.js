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
	// disablePage();
});

$(thumb).click(function() {
	disablePage();
	$('#page-container').load( "test.html" , function() {
		console.log("Test was loaded successfully.");
		enablePage();
		$('html, body').animate({ scrollTop: 0 }, 0);
	});
});

// URL HANDLING

// define variables
var container = document.querySelector('#main-menu');
var imgs = document.querySelectorAll('#main-menu a');
var textWrapper = document.querySelector('.highlight');
var content = document.querySelector('#page-container');
var defaultTitle = "Select your Ghostbuster!";
var fileType = ".html";

function updateText(content){
    textWrapper.innerHTML = content;
}

function requestContent(file){
    $(content).load(file);
}

function removeCurrentClass(){
    console.log('removeCurrentClass');
    for(var i = 0; i < imgs.length; i++){
        console.log('imgs ' + imgs[i]);
        imgs[i].classList.remove('current');
    }
}

function addCurrentClass(elem){
    removeCurrentClass();
    var element = document.querySelector("." + elem);
    element.classList.add('current');
}

container.addEventListener('click', function(e){
    if(e.target != e.currentTarget){
        e.preventDefault();
        var data = e.target.getAttribute('data-name'),
        url = data + fileType;
        console.log(data);
        addCurrentClass(data);
        history.pushState(data, null, url);
        updateText(data);
        requestContent(url);
        document.title = "Ghostbuster | " + data;
    }
e.stopPropagation();
}, false);

window.addEventListener('popstate', function(e){
    console.log('character' + character);
    var character = e.state;

    if (character == null) {
        removeCurrentClass();
        textWrapper.innerHTML = " ";
        content.innerHTML = " ";
        document.title = defaultTitle;
    } else {
        updateText(character);
        requestContent(character + fileType);
        addCurrentClass(character);
        document.title = "Ghostbuster | " + character;
    }

})