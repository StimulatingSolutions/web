$(function(){

  scrollTo = function(toId) {
    target = $(toId);
    $('html, body').stop().animate({
       scrollTop: target.offset().top
    }, 800);
  }

});
