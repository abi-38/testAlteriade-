/*Slider*/
$(document).ready(() => {
  $('#slideshow .slider').slick({
    prevArrow: '<img class="priv_arrow" src="./public/img/prevArrow.png" alt="">',
    nextArrow: '<img class="next_arrow" src="./public/img/nextArrow.png" alt="">',
  });
});

/*Menu stické*/
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

/*Lightbox*/
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const mentionsElt = document.getElementById('mentionsLegales');

mentionsElt.addEventListener('click', e => {
  /*Evite le comportement par défault d'un lien ctdr le renvoie vers une autre page*/
  e.preventDefault;
  
  /*Supprime l'ancienne fenêtre*/
  while(lightbox.firstChild) {
    lightbox.removeChild(lightbox.firstChild);
  }

  /*récup du css de la classe active - création de la fenêtre blanche*/
  lightbox.classList.add('active');
  const divElt = document.createElement('div');
  lightbox.appendChild(divElt);
  divElt.style.backgroundColor = 'white';
  divElt.style.width = '50vw';
  divElt.style.height = '30vw';
  divElt.style.borderRadius = '20px';

  /*création du paragraphe*/
  const pElt = document.createElement('p');
  divElt.appendChild(pElt);
  divElt.innerHTML = 'Conformément aux dispositions des articles 6-III et 19 de la loi pour la Confiance dans l’économie Numérique, nous vous informons que : Site internet créé et hébergé sur XXXX.fr, www.XXXX.com est édité par : adresse';
  divElt.style.padding = '20px';
  divElt.style.display = 'flex';
  divElt.style.flexDirection = 'column';
  divElt.style.justifyContent = 'space-around';
  divElt.style.alignItems = 'center';
  divElt.style.textAlign = 'center';
  
  /*Bouton accepter*/
  const buttonElt = document.createElement('button');
  divElt.appendChild(buttonElt);
  buttonElt.classList.add('btn');
  buttonElt.classList.add('btn--bleu');
  buttonElt.id = 'button-accepter';
  buttonElt.innerHTML = 'Accepter';
  buttonElt.setAttribute('href', '#');

  /*Fermeture Ligthbox*/
  buttonElt.addEventListener('click', e => {
    lightbox.classList.remove('active');
  })

});
