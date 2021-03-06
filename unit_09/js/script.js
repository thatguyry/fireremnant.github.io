function getPageFromURL() {

    var pathname = window.location.pathname;
    var filename = pathname.substr(pathname.lastIndexOf('/') + 1);
    var page = filename.replace(".html", "")
    console.log("pathname: " + pathname + " filename: " + filename + " page: " + page);
    loadInitialContent(page);

}

function getData(element) {

    var data = $(element).data("path");
    var url = data + '.html';
    history.pushState(data, null, url);
    requestContent(url, data);
    document.title = defaultTitle + data;

}

function setupInteractions() {

    console.log("setupInteractions()");

    $("#cta-work").click(function() {
        $('html, body').animate({
            scrollTop: $("#work").offset().top
        }, 1000);
    });

    $('.project-inner').hover(
        
        function () {
            // do something on enter
            $(this).fadeTo("fast", 1 );
        }, 

        function () {
            // do something on exit
            $(this).fadeTo("fast", 0 );
        }
    );

    $('.project-inner').click(
        
        function () {
            // do something on click
            getData(this);         
        }

    );

    $('nav a').click(
        
        function () {
            // do something on click
            getData(this);         
        }

    );

    $('.two .nav-item').hover(
        
        function () {
            // do something on enter
            var timer;
            var self = this;
            timer = setTimeout(function(){
                $(self).stop(true,true).animate({
                    top : '-=20'
                }, 300);
            },150);

            var timer2;
            timer2 = setTimeout(function(){
                $('.two .nav-item-hidden').stop(true,true).animate({
                    top : '0'
                }, 300);
            },150);
        }, 

        function () {
            // do something on enter
            var timer;
            var self = this;
            timer = setTimeout(function(){
                $(self).stop(true,true).animate({
                    top : '+=20'
                }, 300);
            },150);

            var timer2;
            timer2 = setTimeout(function(){
                $('.two .nav-item-hidden').stop(true,true).animate({
                    top : '100%'
                }, 300);
            },150);
        }

    );

    $('.one .nav-item').hover(
        
        function () {
            // do something on enter
            var timer;
            var self = this;
            timer = setTimeout(function(){
                $(self).stop(true,true).animate({
                    top : '-=20'
                }, 300);
            },150);

            var timer2;
            timer2 = setTimeout(function(){
                $('.one .nav-item-hidden').stop(true,true).animate({
                    top : '0'
                }, 300);
            },150);
        }, 

        function () {
            // do something on enter
            var timer;
            var self = this;
            timer = setTimeout(function(){
                $(self).stop(true,true).animate({
                    top : '+=20'
                }, 300);
            },150);

            var timer2;
            timer2 = setTimeout(function(){
                $('.one .nav-item-hidden').stop(true,true).animate({
                    top : '100%'
                }, 300);
            },150);
        }

    );

    // start typed animation
    $(function(){

        $(".typed").typed({
            strings: ["UX/UI Digital Designer."],
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
    // end typed animation

}

function loadInitialContent(page) {

    switch (page) {
        case "":
            console.log("Initial load of content for page: " + page);
            $(".content").load("content/one.html #one");
        case "index":
            console.log("Initial load of content for page: " + page);
            $(".content").load("content/one.html #one", function(){setupInteractions(); });
           break;
        case "two":
            console.log("Initial load of content for page: " + page);
            $(".content").load("content/two.html  #two");
            break;
        case "three":
            console.log("Initial load of content for page: " + page);
            $(".content").load("content/three.html  #three");
            break;
            default:
            console.log("Content could not be found for " + page);
    }

    console.log("Inital content loaded for: " + page); 

}

getPageFromURL();

// start url handling
var container = document.querySelector('nav');
var pages = document.querySelectorAll('nav a');
var directory = "content/"
var content = document.querySelector('.content');
var defaultTitle = "Default - ";
var fileType = ".html";

function requestContent(file, data){
    
    console.log('requestContent(): ' + file + data);

    var pageReady = true;

    $('.cover').addClass("show");
    $('body').addClass("full");
    $('body').scrollTop(0);
    // request content
    console.log('Requesting content: ' + directory + file);
    $('.content').load(directory + file + " #" + data , function() {
        console.log(directory + file + " #" + data + " has successfully loaded.");

        setupInteractions();
        // check page has loaded and animation is ready
        if(pageReady){
            // remove active class
            $('pages .active').removeClass('active');
            $('body').removeClass();
            console.log("REMOVE COLOURS");
            // add active class
            console.log('add class: ' + data);
            // add active class to matching content page
            $('content[data-path="'+ data +'"]').addClass('active');
            // temporarily delay for testing spinner
            setTimeout(function(){
                $('.cover').fadeOut(function(){
                $('.cover').removeClass("show");
                $('body').removeClass("full");
                });

            }, 0);

            $('.cover').css("display", "block"); 
        }
    });
}

function removeCurrentClass(){
    for(var i = 0; i < pages.length; i++){
        console.log('nav item: ' + pages[i]);
        pages[i].classList.remove('current');
    }
}

function addCurrentClass(elem){
    removeCurrentClass();
    var element = document.querySelector("." + elem);
    element.classList.add('current');
}

// container.addEventListener('click', function(e){
//     if(e.target != e.currentTarget){
//         e.preventDefault();
//         var data = e.target.getAttribute('data-path'),
//         url = data + fileType;
//         console.log(data);
//         // addCurrentClass(data);
//         history.pushState(data, null, url);
//         // requestContent(url, data);
//         document.title = defaultTitle + data;
//     }
// e.stopPropagation();
// }, false);

window.addEventListener('popstate', function(e){
    var pageName = e.state;
    console.log('page name: ' + pageName);
    var url = pageName + fileType;

    if (pageName == null) {
        //default to home page
        requestContent('one.html', 'one');
        
        console.log('popstate NULL: ' + pageName);
        removeCurrentClass();
        content.innerHTML = " ";
        document.title = defaultTitle;
    } else {
        console.log('popstate else: ' + pageName + fileType);
        // requestContent(pageName + fileType);
        requestContent(url, pageName);
        addCurrentClass(pageName);
        document.title = "Title | " + pageName;
    }

})
// end url handling

// start change background colour on scroll
$(window).scroll(function() {
  
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');
  
  // change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);
 
  $panel.each(function () {
    var $this = $(this);
    
    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
          
      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });
       
      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });    
  
}).scroll();
// end change background colour on scroll