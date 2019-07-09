$(function() {

	let	header = $("#header");
	let	header_top = $("#header_top");
	let	header_height = header.innerHeight();
	let scrollPos = $(window).scrollTop();

	$(window).on("scroll", function() {

		scrollPos = $(this).scrollTop();

		if (scrollPos > header_height) {
			header_top.addClass("fixed");
		} else {
			header_top.removeClass("fixed");
		}
	})

});