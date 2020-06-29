$(document).ready(function () {

  //Quick Book Form Slide
  let rotateDeg = 0;
  $("#quick-book__header").click(function () {
    $("#quick-book__form").slideToggle("slow");
    rotateDeg += 180;
    $("#quick-book-arrow").css({
      transform: "rotate(" + rotateDeg + "deg)",
      "-ms-transform": "rotate(" + rotateDeg + "deg)",
      "-moz-transform": "rotate(" + rotateDeg + "deg)",
      "-webkit-transform": "rotate(" + rotateDeg + "deg)",
      "-o-transform": "rotate(" + rotateDeg + "deg)",
    });
  });

  
});
