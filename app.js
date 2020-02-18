 /* Scroll */

$(function() {
    $('a[href^="#"]').on('click', function(event) {

        event.preventDefault();
        
        let sc = $(this).attr("href"),
        dn = $(sc).offset().top;

        $('html, body').animate({scrollTop: dn}, 1000);
    });
});
