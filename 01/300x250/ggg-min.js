/*!
 * Gee Banner v2
 * http://ggg.com.au/
 *
 * Date: 2016-06-29
 */
"use strict";var ggg=function(){function e(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function t(t,i){b=i,l=e(l,t),l.loopAmount>0&&l.looping&&(l.looping=!1),"undefined"!=typeof EB&&(m="EB"),"undefined"!=typeof Enabler&&(m="DC");var o=document.querySelector("meta[name='ad.size']").content.split(/,|=/);switch(d.width=Number("width"==o[0]?o[1]:o[3]),d.height=Number("height"==o[2]?o[3]:o[1]),p("~",!0),p(u,!0),p("Ad: "+d.width+"x"+d.height+" - v"+l.version,!0),p("~",!0),m){case"DC":Enabler.isInitialized()?a():Enabler.addEventListener(studio.events.StudioEvent.INIT,a);break;case"EB":EB.isInitialized()?n():EB.addEventListener(EBG.EventName.EB_INITIALIZED,n);break;case"adkit":adkit.onReady(n);break;default:n()}}function n(){l.preload?B.load(function(){l.preload=!1,n()}):(p("Ad: Init - Delay: "+l.delayAtStart/1e3+"s"),setTimeout(function(){p("Ad: Play"),c=new Date,o(),b()},l.delayAtStart))}function a(){Enabler.isVisible()||!l.polite?n():Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,n)}function i(){var e=Math.floor((new Date-c)%6e4)/1e3;return isNaN(e)&&(e="0"),e}function o(){l.maxDuration&&v(function(){!d.complete&&i()>=l.maxDuration&&p("Ad: Duration too long")},1e3*l.maxDuration)}function r(e,t){e=e||{},e.time=e.time||"0s",e.delay=1e3*e.delay||0,e.asset=e.asset||"",e.from=e.from||{},e.to=e.to||{},e.from!={}&&(w(e.asset,{transition:"none"}),w(e.asset,e.from)),v(function(){var n=1e3*parseFloat(e.time);"none"==e.to.display&&v(function(){w(e.asset,{display:"none"})},n),"none"==e.to.display&&(e.to.display=""),w(e.asset,{transition:"all "+e.time+" "+e.easing}),w(e.asset,e.to),t&&v(t,n)},e.delay+10)}function s(e,t){v(t,1e3*e)}var c,u="ggg.js - v2.0.0",l={debug:!1,version:"1",polite:!1,preload:!1,maxDuration:0,looping:!1,loopAmount:0,delayAtStart:100},d={width:null,height:null,complete:!1},f=[],m="none",b=null,g={IE:!!document.documentMode,IE8:"ie8"==document.getElementsByTagName("html")[0].className,IE9:"ie9"==document.getElementsByTagName("html")[0].className,Safari:/^((?!chrome|android).)*safari/i.test(navigator.userAgent),Chrome:/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),Opera:!!window.opr&&!!opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0,Firefox:"undefined"!=typeof InstallTrigger},p=function(e,t){(l.debug||t)&&console.log("@"+i()+"s:",e)},v=function(e,t){f.push(setTimeout(e,t))},h=function(){for(var e=0;e<f.length;e++)clearTimeout(f[e])},y=function(){p("Ad: Finished"),d.complete=!0},E=function(){var e=!0;return l.looping?p("Ad: Loop"):l.loopAmount>1?(p("Ad: Repeat"),l.loopAmount--):(y(),e=!1),e},I=function(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent&&e.attachEvent("on"+t,n)},z=function(e,t,n){var a=n;"transition"==t&&"all"!=a.split(" ")[0]&&"none"!=a.split(" ")[0]&&(a="-webkit-"+a),e.style["-webkit-"+t]=a,e.style["-moz-"+t]=n,e.style["-ms-"+t]=n,e.style[t]=n},w=function(e,t){for(var n in t)if(t.hasOwnProperty(n)){var a=t[n];switch(n){case"transition":z(e,"transition",a);break;case"transform":-1==a.search("scale")&&(a="scale(1,1) "+a),-1==a.search("translate")&&(a+=" translate(0,0)"),-1==a.search("rotate")&&(a+=" rotate(0.1deg)"),z(e,"transform",a);break;case"transformOrigin":z(e,"transform-origin",a);break;case"opacity":A(e,a);break;default:e.style[n]=a}}},A=function(e,t){e.style.opacity=t},O=function(e){e.style.display="block"},k=function(e){e.style.display="none"},N=function(e,t){t=t||[],p("Reset DOM");for(var n in e)if(e.hasOwnProperty(n)){for(var a=!0,i=e[n],o=0;o<t.length;o++)i==t[o]&&(a=!1);a?i.setAttribute("style",""):p("Reset: Exception: "+n)}},B=function(){function e(e){var n=document.getElementsByTagName("img"),a=0,i=0,o=n.length;if(0==o)e(n);else for(var r=0;r<n.length;r++)t(n[r].src)&&(n[r].Img=new Image,n[r].Img.onload=function(t){i++,a=100/o*i,t&&p("Preloader: "+a+"% - Image loaded: "+t.target.src),i>=o&&(p("Preloader: Complete"),e(n))},n[r].Img.src=n[r].src)}function t(e){return e.toLowerCase().match(/\.(jpg|png|gif)/g)}return{load:e}}(),D=function(){var e={none:"cubic-bezier(0, 0, 0, 0)",linear:"cubic-bezier(0.250, 0.250, 0.750, 0.750)",easeNone:"cubic-bezier(0.250, 0.100, 0.250, 1.000)",easeIn:"cubic-bezier(0.420, 0.000, 1.000, 1.000)",easeOut:"cubic-bezier(0.000, 0.000, 0.580, 1.000)",easeInOut:"cubic-bezier(0.420, 0.000, 0.580, 1.000)",easeInQuad:"cubic-bezier(0.550, 0.085, 0.680, 0.530)",easeOutQuad:"cubic-bezier(0.250, 0.460, 0.450, 0.940)",easeInOutQuad:"cubic-bezier(0.455, 0.030, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.550, 0.055, 0.675, 0.190)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1.000)",easeInBack:"cubic-bezier(0.600, -0.280, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.320, 1.275)",easeInOutBack:"cubic-bezier(0.680, -0.550, 0.265, 1.550)",elastic:"cubic-bezier(0.175, 0.885, 0.300, 1.650)",pop:"cubic-bezier(0, 0.30, 0.70, 1.80)"};if(g.Safari){p("Safari: Easing adjustments");for(var t in e)if(e.hasOwnProperty(t)){var n=e[t];n=n.replace(/ /gi,"").replace("cubic-bezier(","").replace(")","").split(",");for(var a="cubic-bezier(",i=0;i<n.length;i++)Number(n[i])<0&&(n[i]="0.000"),Number(n[i])>1&&(n[i]="1.000"),a+=n[i],i<n.length-1&&(a+=", ");e[t]=a+")"}}return e}();return{init:t,log:p,event:I,clearTimeouts:h,ad:d,browser:g,platform:m,animate:r,delay:s,easing:D,loop:E,show:O,hide:k,css:w,opacity:A,resetDom:N}}();