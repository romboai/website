(function($) {
  "use strict";
  
 // menu 
$('.siteBar-btn').click( function (){ 
  $('.mobile-menu').toggleClass('siteBar');   
}); 

$('.sliding-link').click(function(e) {
  e.preventDefault();
  var aid = $(this).attr('href');
  $('html,body').animate({scrollTop: $(aid).offset().top}, 'slow');
})
 
})(jQuery);




