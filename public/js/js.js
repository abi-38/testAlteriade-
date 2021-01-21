$(document).ready(() => {
  $('#slideshow .slider').slick({
    prevArrow: '<img class="priv_arrow" src="./public/img/prevArrow.png" alt="">',
    nextArrow: '<img class="next_arrow" src="./public/img/nextArrow.png" alt="">',
  });
});

/*
var positionElementInPage = $('.nav-stick').offset().top;
$(window).scroll(function() {
  if ($(this).scrollTop() >= positionElementInPage) {
  // fixed
  $('.nav-stick').addClass("floatable");
  } else {
  // relative
  $('.nav-stick').removeClass("floatable");
  }
});*/

$(".nav-stick").hide();

$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600 ) {
        $('.nav-stick').fadeIn(200);
    } else {
        $('.nav-stick').fadeOut(200);
    }
  })
});   

