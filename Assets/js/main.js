$(document).ready(function() {
    "use strict";
    initTrendsSlider();

    function initTrendsSlider() {
        if ($('.site_slider').length) {
            var trendsSlider = $('.site_slider');
            trendsSlider.owlCarousel({ 
                loop: !1, 
                margin: 10, 
                nav: !1, 
                dots: !1, 
                autoplayHoverPause: !0, 
                autoplay: !1, 
                responsive: { 
                    0: { items: 1 }, 
                    575: { items: 2 }, 
                    991: { items: 4 } 
                }
            });
            if ($('.trends_prev').length) {
                var prev = $('.trends_prev');
                prev.on('click', function(ev) { 
                    
                ev.preventDefault();
                    trendsSlider.trigger('prev.owl.carousel') 
                })
            }
            if ($('.trends_next').length) {
                var next = $('.trends_next');
                next.on('click', function(ev) { 
                    
                ev.preventDefault();
                    trendsSlider.trigger('next.owl.carousel') })
            }
        }
    }

            //   var owl = $('.owl-carousel');
            //   owl.owlCarousel({
            //     margin: 10,
            //     nav: true,
            //     loop: true,
            //     autoplay: true,
            //     autoplayTimeout: 3000,
            //     responsive: {
            //       0: {
            //         items: 1
            //       },
            //       600: {
            //         items: 2
            //       },
            //       1000: {
            //         items: 4
            //       }
            //     }
            //   })

    // add active to  toggler
    $("body").delegate(".searchToggler", "click", function(event) {
        event.preventDefault();

        $('body').removeClass('open-account open-notification').addClass('open-search')

        $('.searchToggler').addClass('closeSearchToggler').removeClass('searchToggler')

        $('.closeAccountToggler').addClass('accountToggler').removeClass('closeAccountToggler')
        $('.closeNotificationToggler').addClass('notificationToggler').removeClass('closeNotificationToggler') 
        $('.closeSettingsToggler').addClass('settingsToggler').removeClass('closeSettingsToggler')
           
    })
    // deactivate toggler
    $("body").delegate(".closeSearchToggler", "click", function(event) {
        event.preventDefault();
        $('body').removeClass('open-search')
        $('.closeSearchToggler').addClass('searchToggler').removeClass('closeSearchToggler')
    })

    $("body").delegate(".accountToggler", "click", function(event) {
        event.preventDefault();

        $('body').removeClass('open-search open-notification').addClass('open-account')

        $('.accountToggler').addClass('closeAccountToggler').removeClass('accountToggler')

        $('.closeSearchToggler').addClass('searchToggler').removeClass('closeSearchToggler')
        $('.closeNotificationToggler').addClass('notificationToggler').removeClass('closeNotificationToggler')
        $('.closeSettingsToggler').addClass('settingsToggler').removeClass('closeSettingsToggler')
    })
    // deactivate toggler
    $("body").delegate(".closeAccountToggler", "click", function(event) {
        event.preventDefault();
        $('body').removeClass('open-account')
        $('.closeAccountToggler').addClass('accountToggler').removeClass('closeAccountToggler')
    });


    $("body").delegate(".notificationToggler", "click", function(event) {
        event.preventDefault();

        $('body').removeClass('open-search open-account').addClass('open-notification')

        $('.notificationToggler').addClass('closeNotificationToggler').removeClass('notificationToggler')

        $('.closeSearchToggler').addClass('searchToggler').removeClass('closeSearchToggler')
        $('.closeAccountToggler').addClass('accountToggler').removeClass('closeaccountToggler')
        $('.closeSettingsToggler').addClass('settingsToggler').removeClass('closeSettingsToggler')
    })
    // deactivate toggler
    $("body").delegate(".closeNotificationToggler", "click", function(event) {
        event.preventDefault();
        $('body').removeClass('open-notification')
        $('.closeNotificationToggler').addClass('notificationToggler').removeClass('closeNotificationToggler')
    });

    $("body").delegate(".settingsToggler", "click", function(event) {
        event.preventDefault();

        $('body').removeClass('open-search open-account').addClass('open-settings')

        $('.settingsToggler').addClass('closeSettingsToggler').removeClass('settingsToggler')

        $('.closeSearchToggler').addClass('searchToggler').removeClass('closeSearchToggler')
        $('.closeAccountToggler').addClass('accountToggler').removeClass('closeaccountToggler')
        $('.closeNotificationToggler').addClass('notificationToggler').removeClass('closeNotificationToggler')
    })
    // deactivate toggler
    $("body").delegate(".closeSettingsToggler", "click", function(event) {
        event.preventDefault();
        $('body').removeClass('open-settings')
        $('.closeSettingsToggler').addClass('settingsToggler').removeClass('closeSettingsToggler')
    });
});
        