const HEADER_AREA = $('.header-area');
const SITEBAR_BTN = $('.siteBar-btn');
const SLIDING_LINK = $('.sliding-link');
const UP_BTN = $('#UpBtn');

function showUpButton() {
  var view = $(window),
      timeoutKey = -1;
  
  $(document).on('scroll', function(e) {
    e.preventDefault();
    if (timeoutKey) {
      window.clearTimeout(timeoutKey);
    }
    timeoutKey = window.setTimeout(function(){
	  // HEADER AREA
      if (view.scrollTop() < 100) {
		HEADER_AREA.removeClass('scrolled');
      }
      else {
		HEADER_AREA.addClass('scrolled');
	  }

	  // UP BTN
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
    }, 0);
  });
}

(function($) {
  "use strict";
  
 // menu 
 SITEBAR_BTN.click( function (){ 
  $('.mobile-menu').toggleClass('siteBar');   
}); 

SLIDING_LINK.click(function(e) {
  // smooth scroll to the anchor id
  // after link click
  const aid = $(this).attr('href');
  if (aid) {
	const anchor = aid.split('#').pop();
	console.log(anchor);
	const el = $(`#${ anchor }`);
	if (el && el.length) {
		// e.preventDefault();
		$('html,body').animate({scrollTop: el.offset().top - 80}, 'slow');
	}
  }
})

if(window.location.hash) {
  // smooth scroll to the anchor id
  // after page reload 
  $('html, body').animate({
  	scrollTop: ($(window.location.hash).offset().top - 180) + 'px',
  }, 1000, 'swing');
}

showUpButton();

UP_BTN.click(function(e) {
  e.preventDefault();
  $('html, body').stop().animate({
      scrollTop: 0
  }, 300, 'linear');
  return false;
});
 
})(jQuery);




