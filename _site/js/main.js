const SITEBAR_BTN = $('.siteBar-btn');
const SLIDING_LINK = $('.sliding-link');
const UP_BTN = $('#UpBtn');

function showButton() {
  var view = $(window),
      timeoutKey = -1;
  
  $(document).on('scroll', function(e) {
    e.preventDefault();
    if (timeoutKey) {
      window.clearTimeout(timeoutKey);
    }
    timeoutKey = window.setTimeout(function(){
      if (view.scrollTop() < 300) {
        UP_BTN.fadeOut({
            duration: 100,
        });
        UP_BTN.addClass('d-none');
      }
      else {
        UP_BTN.fadeIn({
            duration: 100,
        });
        UP_BTN.removeClass('d-none');
      }
    }, 30);
  });
}

(function($) {
  "use strict";
  
 // menu 
 SITEBAR_BTN.click( function (){ 
  $('.mobile-menu').toggleClass('siteBar');   
}); 

SLIDING_LINK.click(function(e) {
  e.preventDefault();
  var aid = $(this).attr('href');
  if (aid) {
      $('html,body').animate({scrollTop: $(aid).offset().top}, 'slow');
  }
})

showButton();

UP_BTN.click(function(e) {
  e.preventDefault();
  $('html, body').stop().animate({
      scrollTop: 0
  }, 300, 'linear');
  return false;
});
 
})(jQuery);




