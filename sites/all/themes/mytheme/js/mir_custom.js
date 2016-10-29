(function($) {
    $(document).ready(function() {
        var $main_slider = $('.view-id-main_slider.view-display-id-block_1 .view-content');
        var $main_slider_arrows = $('<div class="slick-arrows"><div class="slick-arrows__wrapper"></div></div>');
        $main_slider.after($main_slider_arrows);
        $main_slider.slick({
            arrows: true,
            appendArrows: '.slick-arrows__wrapper',
            infinite: false,
            dots: true,
            adaptiveHeight: false,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1
        }).find('.slick-dots').wrapInner('<div class="slick-dots__wrapper"><div class="slick-dots__wrapper1"></div></div>');

        $('.our-work-slider-two_row').slick({
            dots: false,
            infinite: false,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 300,
            slidesToShow: 2,
            slidesToScroll: 2,
            responsive: [{
                breakpoint: 799,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }]
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
            arrows: false,
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

        $('.mir-portfolio-slider__thumbs .field-items a').click(function() {
            return false;
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
        $('.certificate-slider-nav--prev').click(function() {
            certificate_slider.slick('slickPrev');
        });
        $('.certificate-slider-nav--next').click(function() {
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
                    $elem.animateNumber({ number: $elem.data('count') }, 1000);
                });
                $('.stats-object').data('processed', true);
            }
        });


        //set all img titles as alts
        $('img').each(function() {
            var ImgAlt = $(this).attr('alt');
            $(this).attr('title', ImgAlt);
        })

        // contacts map
        ymaps.ready(function() {
            contacts_map = new ymaps.Map("contacts__map-container", {
                center: [59.95097378591654, 30.299200438484185],
                zoom: 18,
                controls: [],
            });

            let place = new ymaps.Placemark([59.95097378591654, 30.299200438484185], {
                balloonContent: 'ул. Яблочкова, 12Ц'
            }, {
                iconLayout: 'default#image',
                iconImageHref: '/sites/all/themes/mytheme/images/marker.png',
                iconImageSize: [169, 66],
                iconImageOffset: [0, -66]
            });

            contacts_map.behaviors.disable(['scrollZoom']);
            contacts_map.geoObjects.add(place);
        });

        // header lang switch block

        $('#mini-panel-header .language-switcher-locale-url').wrap('<div class="mir-language-switcher__wrap"><div class="mir-language-switcher__shift-content"></div></div>')
        var langSwticher__activeLink = $('#mini-panel-header .language-switcher-locale-url .active').html();
        $('#mini-panel-header .language-switcher-locale-url .active').hide();
        $('#mini-panel-header .mir-language-switcher__shift-content').append('<div class="mir-language-switcher__active-lang">' + langSwticher__activeLink + '</div>');


        // translation
        htmlLang = $('html').attr('lang');
        switch (htmlLang) {
            case 'en':
                $('#superfish-1-toggle span').text('Menu');
                break;
            default:

        }


        // search -------------
        $('#search-block-form').addClass('mir-search__js-on')
            .children('div').append('<div class="mir-search__activate"><i class="fa fa-search" aria-hidden="true"></i></div>')
            .find('.container-inline').prepend('<div class="mir-search__close"><i class="fa fa-angle-double-right" aria-hidden="true"></i></div>');

        //expand
        $('.mir-search__activate').click(function() {

            if (!$(this).hasClass('mir-search__activate--gosearch')) {
                $('#search-block-form').addClass('mir-search__js-show');
                $('.mir-search__activate').addClass('mir-search__activate--gosearch');
                $('#search-block-form .form-text').focus();
                $('.pane-block-8, .pane-locale-language-content, .pane-block-9').find('.pane-content').css({ 'position': 'relative', 'z-index': -1, 'opacity': 0 });
            } else {
                if ($('#search-block-form .form-text').val() != '')
                    $('#search-block-form .form-submit').css('background', 'red').trigger('click');
            }
        });
        //collapse
        $('.mir-search__close').click(function() {
            if ($('#search-block-form').hasClass('mir-search__js-show')) {
                $('#search-block-form').removeClass('mir-search__js-show');
                $('.mir-search__activate').removeClass('mir-search__activate--gosearch');
                $('.mir-search__activate').addClass('mir-search__activate--input');
                $('#search-block-form .form-text').val('');
                $('.pane-block-8, .pane-locale-language-content, .pane-block-9').find('.pane-content').css({ 'position': 'relative', 'z-index': 999, 'opacity': 1 });;
            }
        });





    }); // doc ready
})(jQuery);
