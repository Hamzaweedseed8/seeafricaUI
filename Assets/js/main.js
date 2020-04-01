$(document).ready(function() {
    "use strict";
    initTrendsSlider();

    function initTrendsSlider() {
        if ($('.site_slider').length) {
            var trendsSlider = $('.site_slider');
            trendsSlider.owlCarousel({ 
                loop: !1, 
                margin: 30, 
                nav: !1, 
                dots: !1, 
                autoplayHoverPause: !0, 
                autoplay: !1, 
                responsive: { 
                    0: { items: 2 }, 
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
});
        