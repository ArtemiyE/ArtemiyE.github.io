$(function() {
  $('body').vegas({
    timer: false,
    delay: 14000,
    transitionDuration: 3000,
      slides: [
          { src: 'images/img1.jpg' },
          { src: 'images/img2.jpg' },
          { src: 'images/img3.jpg' }
      ]
  });
});
// Кнопка поделиться в соцсетях
$(function() {
  var elem = $("#share-button");
    function openShare() {
      elem.is(":hidden")
      ? elem.slideDown(function() {
          $(document).one("click", function(e) {
            elem.slideUp()
          })
        })
      : elem.slideUp();
    }
    $("#share-click").on("click.show", openShare);
    elem.click(function(e) {
      e.stopPropagation();
    });
});
// Форма обратной связи
$(function() {
  var elem = $("#container-form");
    function openForm() {
      elem.is(":hidden")
      ? elem.slideDown(function() {
          $(document).one("click", function(e) {
            elem.slideUp()
          })
        })
      : elem.slideUp();
    }
    $("#mail-click,#form-close").on("click.show", openForm);
    elem.click(function(e) {
      e.stopPropagation();
    });
});
