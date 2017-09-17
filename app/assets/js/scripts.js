/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2017. MIT licensed.
 */




$(function(){

	'use strict';

	setTimeout(() => {
        $('.loader-wrapper').fadeOut('slow');
    },2000);

	var scroll = new SmoothScroll('a[href*="#"]');

	$('.skillsCarousel').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true,
	  setGallerySize: false,
	  wrapAround: true,
	  pageDots: false,
	  autoPlay: true
	});

});
