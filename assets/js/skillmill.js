/*
 *
 * SKILLMILL - a circling windmill of portfolio images that
 *             highlight skills in the center upon hover
 *
 * Justin Taylor, July 2017
 *
 *
 */

(function($){

var circleImages;
var ci;
var numImages;
var angle;
var angleIncr;
var xOffSet;
var yOffSet;
var radius;
var x;
var y;
var intval;
var timer;
// todo: auto discover images
var images = ['placeholder01.png','placeholder02.png','placeholder03.png','placeholder04.png','placeholder05.png','placeholder06.png'];
var imagePath = 'media/portfolio/';


var template = `
  <span>
    <img class="rotisserie" src="{{__IMG__}}"  />
  </span>
`
var ci = $('#mill');

$('#info').hide();

// setup the area
function init()
{

  var ci = $('#mill');
  $.each(images, function(key, imageFile) {
    thisSpan = template.replace('{{__IMG__}}', imagePath+imageFile);
    ci.append(thisSpan);
    console.log(key);
    console.log(imageFile);

  });


  $('.rotisserie').hover(function(event) {

      // fade image in
      $('#rotisserie-platform').remove();
      stop_Int();
      var img = $('<img id="rotisserie-platform">');
      img.attr('src', event.currentTarget.src);
      img.appendTo('#info');
      clearTimeout(timer);
      $('#info').stop(true, true).fadeIn(1000);

    }, function() {

      // fade image out
      start_Int();
      $('#info').stop().fadeOut(1000);
    }
  );

  numImages = images.length;
  angle = (2*Math.PI)/numImages;
  angleIncr = 0;
  xOffSet = 230;
  yOffSet = 140;
  radius = 480;
  x = 0;
  y = 0;
  intval;
  start_Int();
}

// mathy stuff to calc thumb locations
function displayThumbs()
{
  var ci = $('#mill');
  ci.children('span').each(function(i) {
    x = (radius * Math.sin(angleIncr+(angle*i))) + xOffSet;
    y = 0.5*(radius * Math.cos(angleIncr+(angle*i))) + yOffSet;
    console.log("i="+i+";  x="+x+";  y="+y+";  angle="+angle+";  angleIncr="+angleIncr+";");
    ele = $(this);
    ele[0].style.left = x+"px";
    ele[0].style.top = y+"px";
    ele[0].style.display = 'none';
    ele[0].style.offsetHeight;
    ele[0].style.display = '';
  });
}


//
// timers & helpers
//
function commenseRotation()
{
  angleIncr = angleIncr + .002;
  displayThumbs();
}

function start_Int()
{
  intval=setInterval(function() {commenseRotation();},20);
}

function stop_Int(p)
{
  clearInterval(intval);
}


init();

})(jQuery);
