(function($) {
        "use strict";

        /* ==============================================
        LOADER -->
         =============================================== */

        $(window).load(function() {
                    $("#preloader").on(500).fadeOut();
                    $('#preloader').delay(100).fadeOut('slow', function() {
                        $(this).remove();
                    });

                    // Back to top button
                    $(window).scroll(function() {
                        if ($(this).scrollTop() > 100) {
                            $('.back-to-top').fadeIn('slow');
                        } else {
                            $('.back-to-top').fadeOut('slow');
                        }
                    });
                    $('.back-to-top').click(function() {
                        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
                        return false;
                    });
                }