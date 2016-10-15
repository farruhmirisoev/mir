(function($) {
    $(document).ready(function() {
        // if ($('.our-works-slider').length > 0) {
        //     var our_work_slider = $('.our-works-slider').bxSlider({
        //         minSlides: 5,
        //         maxSlides: 5,
        //         slideWidth: 178,
        //         auto: true,
        //         pause: 7000,
        //         nextText: '&#xf061;',
        //         prevText: '&#xf060;',
        //         autoHover: true,
        //         pager: false,
        //         controls: true,
        //         adaptiveHeight: true,
        //     });
        // }

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


    });
})(jQuery);
