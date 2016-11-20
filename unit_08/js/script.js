// LOAD INITAL CONTENT
function getPageFromURL() {
    var pathname = window.location.pathname;
    // var pathname =  window.alert(this.href.substr(this.href.lastIndexOf('/') + 1));
    // var filename = pathname.replace("/", "");
    var filename = pathname.substr(pathname.lastIndexOf('/') + 1);
    var page = filename.replace(".html", "")
    console.log("pathname: " + pathname + " filename: " + filename + " page: " + page);
    loadInitialContent(page);
}

function loadInitialContent(page) {

    switch (page) {
        case "":
             console.log("Initial load of content for page: " + page);
            $(".content").load("content/one.html #one");       
        case "index":
            console.log("Initial load of content for page: " + page);
            $(".content").load("content/one.html #one");
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


// STICKY HEADER
var header = document.querySelector('header');
var headerPosition = header.getBoundingClientRect();
var placeholder = document.createElement('div');

console.log("headerPosition: " + headerPosition.width + 'px');

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


// URL HANDLING
var container = document.querySelector('nav');
var pages = document.querySelectorAll('nav a');
var directory = "content/"
var content = document.querySelector('.content');
var defaultTitle = "Default - ";
var fileType = ".html";

function requestContent(file, data){
    var pageReady = true;

    // show loading
    $('.cover').addClass("show");
    // request content
    console.log('Requesting content: ' + directory + file);
    $('.content').load(directory + file + " #" + data , function() {
        console.log(directory + file + " #" + data + " has successfully loaded.");

        // check page has loaded and animation is ready
        if(pageReady){
            // remove active class
            $('pages .active').removeClass('active');
            // add active class
            console.log('add class: ' + data);
            // add active class to matching content page
            $('content[data-path="'+ data +'"]').addClass('active');
            // temporarily delay for testing spinner
            setTimeout(function(){
                $('.cover').fadeOut(function(){
                $('.cover').removeClass("show");
                });

            }, 1500);

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

container.addEventListener('click', function(e){
    if(e.target != e.currentTarget){
        e.preventDefault();
        var data = e.target.getAttribute('data-path'),
        url = data + fileType;
        console.log(data);
        addCurrentClass(data);
        history.pushState(data, null, url);
        requestContent(url, data);
        document.title = defaultTitle + data;
    }
e.stopPropagation();
}, false);

window.addEventListener('popstate', function(e){
    console.log('page name: ' + pageName);
    var pageName = e.state;

    if (pageName == null) {
        removeCurrentClass();
        content.innerHTML = " ";
        document.title = defaultTitle;
    } else {
        requestContent(pageName + fileType);
        addCurrentClass(pageName);
        document.title = "Title | " + pageName;
    }

})

// DISTRACTOR
// $(document).ready(function(){
//     $(".distractor").fakeLoader({
//         timeToHide:1000,
//         bgColor:"#fff",
//         spinner:"spinner1"
//     });
// });