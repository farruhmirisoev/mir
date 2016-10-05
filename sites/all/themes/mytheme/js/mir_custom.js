(function($) {
  $(document).ready(function() {
    if ($('.our-works-slider').length > 0) {
      var our_work_slider = $('.our-works-slider').bxSlider({
        minSlides: 5,
        maxSlides: 5,
        slideWidth:178,
        auto: true,
        pause: 7000,
        nextText: '&#xf061;',
        prevText: '&#xf060;',
        autoHover: true,
        pager: false,
        controls: true,
        adaptiveHeight: true,
      });
      // $(window).resize(function() {
      //   our_work_slider.reloadSlider({
      //     minSlides: 4,
      //     maxSlides: 4,
      //     auto: true,
      //     pause: 7000,
      //     nextText: '&#xf061;',
      //     prevText: '&#xf060;',
      //     autoHover: true,
      //     pager: false,
      //     controls: true,
      //     adaptiveHeight: true,
      //     mode: 'horizontal',
      //   });
      // });
    }

    $('.view-id-main_slider.view-display-id-block_1 .view-content').slick({
      arrows: false,
      infinite: false,
      dots: true,
      adaptiveHeight: false,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  });
})(jQuery);
