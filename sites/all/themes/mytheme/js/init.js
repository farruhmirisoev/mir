/**
 * Created by katrina on 13.03.15.
 */


(function ($) {

    $(function(){


        $('.jcarousel').jcarousel();

        $('.jcarousel:not(.not-auto)').jcarouselAutoscroll({
            interval: 15000,
            target: '+=1',
            autostart: true
        });

        $('.jcarousel').hover(function() {
            $(this).jcarouselAutoscroll('stop');
        }, function() {
            $(this).jcarouselAutoscroll('start');
        });


        $('.modal').each(function(){
            $('.not-100', this).matchHeight({
                byRow: true,
                property: 'height',
                target: null,
                remove: false
            });
        });


        $('a[href*=#]:not([href=#])').each(function(){
            if($(this).attr('data-toggle') != "tab"){
                $(this).click(function() {
                    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                        if (target.length) {
                            if($(this).hasClass("minus_scrol")) {
                                $('html,body').animate({
                                    scrollTop: target.offset().top-75
                                }, 1000);
                            } else {
                                $('html,body').animate({
                                    scrollTop: target.offset().top
                                }, 1000);
                                return true;
                            }
                            return false;
                        }
                    }
                });
            }
        });

        $(document).bind('cbox_open', function(){
            var scroll = $(window).scrollTop();
            $('body').addClass('cbox-open');
            $('body').css("top", -scroll);
        }).bind('cbox_closed', function(){
            $('body').removeClass('cbox-open');
            $('body').css("top", 0);
        });


        $('.modal').wrapInner('<div class="modal-dialog"></div> ');
        $('.modal-dialog').append('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>');


        $('input[type=text], input[type=email], input[type=number]').each(function(){
            $(this).prevAll('label').css({'display' : 'none'});
            var prevSpecial = $(this).prevAll('label').text();
            $(this).attr("placeholder",prevSpecial);
        });

        $('.form-textarea-wrapper').each(function(){
            $(this).prevAll('label').css({'display' : 'none'});
            var prevSpecial = $(this).prevAll('label').text();
            $(this).children('textarea').attr("placeholder",prevSpecial);
        });

        $("input.phone").mask("+7 (999) 999 99 99");

        $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
            e.target // newly activated tab
            e.relatedTarget // previous active tab
        });

        $('.field-name-field-reccomend .field-item:contains("Мужчин")').addClass('man');
        $('.field-name-field-reccomend .field-item:contains("Женщин")').addClass('woman');
        $('.field-name-field-reccomend .field-item:contains("18+")').addClass('adult');

 
        var $accordin = $('.accordion'),
            $moreLink = $('.a-content__more_link'),
            $signList = $('.sign-list');

        if ($accordin.length) {
            $('.a-content').hide();
            var $accordinTitle = $accordin.find('.a-header');
            $accordinTitle.click(function() {
                $(this).toggleClass('expanded');
                $(this).next('.a-content').slideToggle();
            });
        }

        var minFontSize = 8;
        var maxFontSize = 20;
        var elm = $('body');
        var size_px = $('body').css('font-size');
        var size = size_px.replace('px', '');
        $('.switcher .larger-font').click(function() {
            if (size <= maxFontSize) {
                size++;
                elm.css({'font-size' : size});
            }
            return false;
        });
        $('.switcher .less-font').click(function() {
            if (size >= minFontSize) {
                size--;
                elm.css({'font-size' : size});
            }
            return false;
        });
        $('body').append('<div id="go_top"></div>');

        $('#go_top').click(function(){
            $('html,body').animate({
                scrollTop: 0
            }, 1000);
        });
        function gotop(){
            if($(window).scrollTop() > 600 && $(window).width() > 1171) {
                $('#go_top').show();
            } else {
                $('#go_top').hide();
            }
        }
        $(window).scroll(gotop);
        $(window).resize(gotop);
        $(window).resize();


        $('#mini-panel-maps_tabs a').click(function(){
            setTimeout(function(){
                $(window).resize();
            }, 100);
        });
    });
})(jQuery);