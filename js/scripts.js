(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });
    
})(jQuery);

(function($){
    $('.navbar a[href*="#"]:not([href="#"])').click(function(){
        if ( location.pathname.replace(/^\//,'') ===
        this.pathname.replace(/^\//,'') &&
        location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if ( target.length ) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 500)
            return false;
        }
        }
    });
})(jQuery);