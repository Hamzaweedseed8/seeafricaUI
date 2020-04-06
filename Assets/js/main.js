$(document).ready(function() {
    "use strict";
    initSiteSlider();

    function initSiteSlider() {
        if ($('.site_slider').length) {
            var siteSlider = $('.site_slider');
            siteSlider.owlCarousel({ 
                loop: 1, 
                margin: 20, 
                nav: !1, 
                dots: !1, 
                autoplayHoverPause: !0, 
                autoplay: true, 
                responsive: { 
                    0: { items: 1}, 
                    575: { items: 2 }, 
                    991: { items: 4 } 
                }
            });
            if ($('.site_prev').length) {
                var prev = $('.site_prev');
                prev.on('click', function(ev) { 
                    
                ev.preventDefault();
                    siteSlider.trigger('prev.owl.carousel') 
                })
            }
            if ($('.site_next').length) {
                var next = $('.site_next');
                next.on('click', function(ev) { 
                    
                ev.preventDefault();
                    siteSlider.trigger('next.owl.carousel') })
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

        $('body').removeClass('open-account open-notification open-settings open-signup').addClass('open-search')

        $('.searchToggler').addClass('closeSearchToggler').removeClass('searchToggler')

        $('.closeAccountToggler').addClass('accountToggler').removeClass('closeAccountToggler')
        $('.closeNotificationToggler').addClass('notificationToggler').removeClass('closeNotificationToggler') 
        $('.closeSettingsToggler').addClass('settingsToggler').removeClass('closeSettingsToggler')
        $('.closeSignupToggler').addClass('signupToggler').removeClass('closeSignupToggler')
           
    })
    // deactivate toggler
    $("body").delegate(".closeSearchToggler", "click", function(event) {
        event.preventDefault();
        $('body').removeClass('open-search')
        $('.closeSearchToggler').addClass('searchToggler').removeClass('closeSearchToggler')
    })

    $("body").delegate(".accountToggler", "click", function(event) {
        event.preventDefault();

        $('body').removeClass('open-search open-notification open-settings open-signup').addClass('open-account')

        $('.accountToggler').addClass('closeAccountToggler').removeClass('accountToggler')

        $('.closeSearchToggler').addClass('searchToggler').removeClass('closeSearchToggler')
        $('.closeNotificationToggler').addClass('notificationToggler').removeClass('closeNotificationToggler')
        $('.closeSettingsToggler').addClass('settingsToggler').removeClass('closeSettingsToggler')
        $('.closeSignupToggler').addClass('signupToggler').removeClass('closeSignupToggler')
    })
    // deactivate toggler
    $("body").delegate(".closeAccountToggler", "click", function(event) {
        event.preventDefault();
        $('body').removeClass('open-account')
        $('.closeAccountToggler').addClass('accountToggler').removeClass('closeAccountToggler')
    });


    $("body").delegate(".notificationToggler", "click", function(event) {
        event.preventDefault();

        $('body').removeClass('open-search open-account open-settings open-signup').addClass('open-notification')

        $('.notificationToggler').addClass('closeNotificationToggler').removeClass('notificationToggler')

        $('.closeSearchToggler').addClass('searchToggler').removeClass('closeSearchToggler')
        $('.closeAccountToggler').addClass('accountToggler').removeClass('closeaccountToggler')
        $('.closeSettingsToggler').addClass('settingsToggler').removeClass('closeSettingsToggler')
        $('.closeSignupToggler').addClass('signupToggler').removeClass('closeSignupToggler')
    })
    // deactivate toggler
    $("body").delegate(".closeNotificationToggler", "click", function(event) {
        event.preventDefault();
        $('body').removeClass('open-notification')
        $('.closeNotificationToggler').addClass('notificationToggler').removeClass('closeNotificationToggler')
    });

    $("body").delegate(".settingsToggler", "click", function(event) {
        event.preventDefault();

        $('body').removeClass('open-search open-account open-notification open-signup').addClass('open-settings')

        $('.settingsToggler').addClass('closeSettingsToggler').removeClass('settingsToggler')

        $('.closeSearchToggler').addClass('searchToggler').removeClass('closeSearchToggler')
        $('.closeAccountToggler').addClass('accountToggler').removeClass('closeaccountToggler')
        $('.closeNotificationToggler').addClass('notificationToggler').removeClass('closeNotificationToggler')
        $('.closeSignupToggler').addClass('signupToggler').removeClass('closeSignupToggler')
    })
    // deactivate toggler
    $("body").delegate(".closeSettingsToggler", "click", function(event) {
        event.preventDefault();
        $('body').removeClass('open-settings')
        $('.closeSettingsToggler').addClass('settingsToggler').removeClass('closeSettingsToggler')
    });

    $("body").delegate(".signupToggler", "click", function(event) {
        event.preventDefault();

        $('body').removeClass('open-search open-account open-notification open-settings').addClass('open-signup')

        $('.signupToggler').addClass('closeSignupToggler').removeClass('signupToggler')

        $('.closeSearchToggler').addClass('searchToggler').removeClass('closeSearchToggler')
        $('.closeAccountToggler').addClass('accountToggler').removeClass('closeaccountToggler')
        $('.closeNotificationToggler').addClass('notificationToggler').removeClass('closeNotificationToggler')
        $('.closeSettingsToggler').addClass('settingsToggler').removeClass('closeSettingsToggler')
    })
    // deactivate toggler
    $("body").delegate(".closeSignupToggler", "click", function(event) {
        event.preventDefault();
        $('body').removeClass('open-signup')
        $('.closeSignupToggler').addClass('signupToggler').removeClass('closeSignupToggler')
    });
});
        