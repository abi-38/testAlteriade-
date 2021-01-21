$(document).ready(() => {
  $('#slideshow .slider').slick({
    prevArrow: '<img class="priv_arrow" src="./public/img/prevArrow.png" alt="">',
    nextArrow: '<img class="next_arrow" src="./public/img/nextArrow.png" alt="">',
  });
});

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

/*
let bodyELt = document.getElementsByTagName('body');


  let crossElt = document.getElementsByClassName('lightbox__content__cross');
  let lightboxElt = document.getElementsByClassName('lightbox');

  crossElt.addEventListener('click', function (event) {
    preventDefault(event);
    body.removeChild(lightboxElt);
    console.log("salut");
  });
  */
