$(document).ready(function(){
  // Dropdown toggle
  $('.dropdown__toggle').click(function() {
    $(this).next('.menu').toggle();
  });
  $(document).click(function(e) {
    var target = e.target;
    if (!$(target).is('.dropdown__toggle') && !$(target).parents().is('.dropdown__toggle')) {
      $('.menu').hide();
    }
  });
});

$(document).ready(function(){
  $.scrollUp({
   scrollName: 'scrollUp', // Element ID
   scrollImg: true,
   topDistance: '300', // Distance from top before showing element (px)
   topSpeed: 300, // Speed back to top (ms)
   animation: 'fade', // Fade, slide, none
   animationInSpeed: 200, // Animation in speed (ms)
   animationOutSpeed: 200, // Animation out speed (ms)
   scrollText: 'Scroll to top', // Text for element
   activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});

$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    // autoplaySpeed: 3000,
    // adaptiveHeight: true,
    dots: true,
    // fade: true,
    // speed: 500,
  });
});
