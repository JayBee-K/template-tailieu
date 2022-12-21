;(function ($) {
	'use strict';
	let windowWidth = $(window).width();

	$(function () {
		$(window).resize(function () {
			windowWidth = $(window).width();
		});
	});
})(jQuery);