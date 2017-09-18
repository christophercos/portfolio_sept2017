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

	setTimeout(function() {
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

	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		$('ul').toggleClass('hidden');
		$('ul').toggleClass('visible');
	});

});
