$(function(){

  scrollTo = function(toId) {
    console.log("toId: "+toId);
    target = $(toId);
    console.log("target: ");
    console.log(target);
    $('html, body').stop().animate({
       scrollTop: $(toId).offset().top
    }, 800);
  }

});
