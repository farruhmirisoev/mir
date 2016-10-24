(function($) {
    $(document).ready(function() {
        $('.view-id-main_slider.view-display-id-block_1 .view-content').slick({
            arrows: false,
            infinite: false,
            dots: true,
            adaptiveHeight: false,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1
        });

        $('.our-work-slider-two_row').slick({
            dots: false,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
        });

        $('.our-works-slider').slick({
            dots: false,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 3,


        });

        $('.node-type-content-news .field-name-field-galery .field-items').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 6,
            slidesToScroll: 1,
        });

        // porfolio---------------------
        $('.mir-portfolio-slider__main .field-items').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.mir-portfolio-slider__thumbs .field-items'
        });

        $('.mir-portfolio-slider__thumbs .field-items').slick({
            dots: false,
            arrows:false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.mir-portfolio-slider__main .field-items',
            centerMode: true,
            focusOnSelect: true
        });


        //  certificate slider-----------------
        $('.view-view-cert.view-display-id-block')
        .prepend('<div class="certificate-slider-nav certificate-slider-nav--prev"><i class="fa fa-angle-left" aria-hidden="true"></i></div>')
        .prepend('<div class="certificate-slider-nav certificate-slider-nav--next"><i class="fa fa-angle-right" aria-hidden="true"></i></div>');

        var certificate_slider = $('.view-view-cert.view-display-id-block .view-content').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
        });
        $('.certificate-slider-nav--prev').click(function(){
            certificate_slider.slick('slickPrev');
        });
        $('.certificate-slider-nav--next').click(function(){
            certificate_slider.slick('slickNext');
        });



        // stats-object --------------------------------------

        $('.stats-object__number').each(function(index, elem) {
            var $elem = $(elem);
            $elem.data('count', $elem.html());
            $elem.html('0');
        });

        $(window).scroll(function() {
           if ($('.stats-object').length && !$('.stats-object').data('processed') && $(this).scrollTop() >= $('.stats-object').offset().top - $(window).height()) {
                $('.stats-object__number').each(function(index, elem) {
                    var $elem = $(elem);
                    $elem.animateNumber({number: $elem.data('count')}, 1000);
                });
                $('.stats-object').data('processed', true);
           }
        });


        //set all img titles as alts
        $('img').each(function(){
          var ImgAlt = $(this).attr('alt');
          $(this).attr('title',ImgAlt);
        })


    }); // doc ready
})(jQuery);
