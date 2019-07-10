<<<<<<< HEAD
$(function() {

	let	header = $("#header");
	let	header_top = $("#header_top");
	let	header_height = header.innerHeight();
	let scrollPos = $(window).scrollTop();

	$(window).on("scroll load resize", function() {
		let	header_height = header.innerHeight();

		scrollPos = $(this).scrollTop();

		if (scrollPos > header_height) {
			header_top.addClass("fixed");
		} else {
			header_top.removeClass("fixed");
		}
	})
=======
$(function(){


	/* Scroll */

  	$('a[href^="#"]').on('click', function(event) {

    	event.preventDefault();
    
    	var sc = $(this).attr("href"),
        dn = $(sc).offset().top;

    	$('html, body').animate({scrollTop: dn}, 1000);
    });
>>>>>>> parent of d7d69f7... Update app.js

});