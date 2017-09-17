



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
