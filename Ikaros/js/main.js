$(document).ready(function () {
// "use strict";

	var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			effect: 'coverflow',
			grabCursor: true,
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			autoplay: 4000,
			speed: 800,
		});

	$("#my-menu").mmenu({
		"offCanvas": {
			"position": "right",
		}
	});

	$('.tabs').tabslet();
});