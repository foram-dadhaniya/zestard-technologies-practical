/* --------------------------------------------------------

Template Name: Zestard Technologies
Version: 1.0

-----------------------------------------------------------*/

/*Toggle menu*/
$(document).ready(function() {
    $(window).resize(function(){
        if ($(window).width() >= 980){
            $(".navbar .dropdown-toggle").hover(function () {
                $(this).parent().toggleClass("show");
                $(this).parent().find(".dropdown-menu").toggleClass("show");
            });
            $( ".navbar .dropdown-menu" ).mouseleave(function() {
                $(this).removeClass("show");
            });
        }
    });
});

/*pre loader*/
$(window).on('load', function() {
    $('.preloader').fadeOut();
});
