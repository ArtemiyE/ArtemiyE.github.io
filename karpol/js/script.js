$(function(){
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
    autoplaySpeed: 3000,
<<<<<<< 4e70577e0b198c5d6d6143852c8d6ecf8881ba30
    // adaptiveHeight: true,
    dots: true,
    // fade: true,
    // speed: 500
  }); });
=======
    fade: true,
    speed: 300,
    dots: true

  });
});
>>>>>>> слайдер поломался, кнопка вверх работает
