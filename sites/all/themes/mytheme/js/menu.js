/**
 * Created by katrina on 03.11.15.
 */
(function ($) {

    $(function(){

        $('#horisontal-menu ul > li').addClass("horizontal");
        $('#horisontal-menu li.horizontal > ul').addClass("first-level-menu");
        $('#horisontal-menu  li:not(.horizontal)').addClass("sub-level");


//        $('#horisontal-menu ul li').hover(function () {
//            clearTimeout($.data(this,'timer'));
//            $('> ul.first-level-menu',this).stop(true,true).slideDown(600);
//        }, function () {
//            $.data(this,'timer', setTimeout($.proxy(function() {
//                $('> ul.first-level-menu',this).stop(true,true).slideUp(500);
//            }, this), 100));
//        });


        //      responsive menu
        $('#horisontal-menu .pane-content > ul.menu').after('<a href="#" class="pull">Меню</a>');
        $('#horisontal-menu .pane-content > ul > li').addClass("horizontal");
        $('#horisontal-menu .pane-content > ul li.horizontal > ul').addClass("first-level-menu");
        $('#horisontal-menu .pane-content > ul li:not(.horizontal)').addClass("sub-level");

        $('#horisontal-menu .pane-content > ul li.horizontal').each(function(){
            if($('ul', this).hasClass('first-level-menu')) {
                $('ul', this).before('<span class="pull-row">+</span>');
            }
        });



        var pull = $('.pull');
        my_menu = $('#horisontal-menu .pane-content > ul.menu');
        menuHeight = my_menu.height();

        $(pull).on('click', function(e) {
            e.preventDefault();
            my_menu.slideToggle();
        });

        $(window).resize(function(){
            var w = $(window).width();
            if(w > 480 && my_menu.is(':hidden')) {
                my_menu.removeAttr('style');
            }

        });

        var main_width = $(".panels-flexible-row.header .header-menu").innerWidth();

        if (main_width > 768) {
            //    Fixed menu
//            $(".header-menu").sticky({ topSpacing: 0 });

            $('#horisontal-menu .pane-content').on({//в ul#menu
                mouseenter: function(){
                    $('> ul.first-level-menu',this).stop().css({display:'block'}).animate({opacity:1}, 300);//появляется элемент вторичного меню при наведении мыши
                },
                mouseleave: function(){
                    $('> ul.first-level-menu',this).stop().animate({opacity:0}, 250, function(){ $(this).css({display:'none'}); });//исчезает
                }
            }, '> ul.menu li');//события мыши сробатывают конкретно на элементе li.ap
        }
        if (main_width < 768) {
            $('#horisontal-menu .pane-content > ul.menu li').each(function(){
                $('span.pull-row', this).on('click', function(e) {
                    $(this).next().slideToggle();
                });
            });
        }
        function menuItemWidth() {
            var menuWidth = $("#horisontal-menu .pane-content > ul.menu").innerWidth();
            var menuItems = $("#horisontal-menu .pane-content > ul.menu > li").length*2;
            var menuItemsWidth = 0;
            var thisWidth = 0;
            $("#horisontal-menu .pane-content > ul.menu > li > a").each(function(){
                thisWidth += $(this).width();
                menuItemsWidth =+ thisWidth;
            });
            var menuItemsPadding = (menuWidth - menuItemsWidth - menuItems*2)/menuItems;

            $("#horisontal-menu .pane-content > ul.menu > li > a").each(function(){
                $(this).css({'padding-left': menuItemsPadding, 'padding-right': menuItemsPadding})
            });
        }
        menuItemWidth();
        $(window).resize(function(){
            menuItemWidth();
        });
    });


})(jQuery);