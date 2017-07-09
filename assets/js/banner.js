/*
  Theory by TEMPLATED
  templated.co @templatedco
  Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

  var images = ['metron2.jpg'];//['lightbulbs2.jpg','sky2.jpg', 'metron2.jpg', 'lab2.jpg', 'vr2.jpg'];
  var imagePos = Math.floor(Math.random() * images.length);
  var gradient = "5, 19, 41, 0.4";
  $('#banner').css({'background-image': 'linear-gradient(rgba('+gradient+'),rgba('+gradient+')),url(media/banners/' + images[imagePos] + ')'});

})(jQuery);
