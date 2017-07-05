/*
  Theory by TEMPLATED
  templated.co @templatedco
  Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

(function($) {

  // Breakpoints.
    skel.breakpoints({
      xlarge:  '(max-width: 1680px)',
      large:  '(max-width: 1280px)',
      medium:  '(max-width: 980px)',
      small:  '(max-width: 736px)',
      xsmall:  '(max-width: 480px)'
    });

  $(function() {

    var  $window = $(window),
      $body = $('body');

    // Disable animations/transitions until the page has loaded.
      $body.addClass('is-loading');

      $window.on('load', function() {
        window.setTimeout(function() {
          $body.removeClass('is-loading');
        }, 100);
      });

    // Prioritize "important" elements on medium.
      skel.on('+medium -medium', function() {
        $.prioritize(
          '.important\\28 medium\\29',
          skel.breakpoint('medium').active
        );
      });

    $(document).ready(function() {
      //init scrolling event heandler
      $(document).scroll(_.throttle(function(){
        var docScroll = $(document).scrollTop();
        var banner = $('#banner');
        var header = $('#header');
        var bannerBottom = banner.scrollTop() + banner.outerHeight() - header.outerHeight();
        // console.log(docScroll, banner.scrollTop(), banner.outerHeight(), header.outerHeight());
        if(docScroll >= bannerBottom ) {
          header.addClass('opaque');
        } else {
          header.removeClass('opaque');
        }
      }, 50));
    });

  // Off-Canvas Navigation.

    // Navigation Panel.
      $(
        '<div id="navPanel">' +
          $('#nav').html() +
          '<a href="#navPanel" class="close"></a>' +
        '</div>'
      )
        .appendTo($body)
        .panel({
          delay: 500,
          hideOnClick: true,
          hideOnSwipe: true,
          resetScroll: true,
          resetForms: true,
          side: 'left'
        });

    // Fix: Remove transitions on WP<10 (poor/buggy performance).
      if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
        $('#navPanel')
          .css('transition', 'none');

  });

  scrollToId = function(toId) {
    target = $(toId);
    $('html, body').stop().animate({
       scrollTop: target.offset().top - $('#header').outerHeight()
    }, 800);
  };

  var images = ['lightbulbs2.jpg','sky2.jpg', 'metron2.jpg', 'lab2.jpg', 'vr2.jpg'];
  var imagePos = Math.floor(Math.random() * images.length);
  var gradient = "5, 19, 41, 0.4";
  $('#banner').css({'background-image': 'linear-gradient(rgba('+gradient+'),rgba('+gradient+')),url(images/' + images[imagePos] + ')'});

})(jQuery);
