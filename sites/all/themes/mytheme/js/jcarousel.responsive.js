(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();
                var numItems = $('ul li', this).size();
                if($(this).hasClass('jcarousel-two-items')) {
                    if (width >= 600) {
                        width = width / 2;
                        if (numItems < 3) {
                            $(this).parent().find('a.jcarousel-control-prev, a.jcarousel-control-next').css('display','none');
                        }

                    } else if (width >= 350) {
                        width = width;
                        if (numItems < 2) {
                            $(this).parent().find('a.jcarousel-control-prev, a.jcarousel-control-next').css('display','none');
                        }
                    }
                }

                if($(this).hasClass('jcarousel-three-items')) {
                    if (width >= 600) {
                        width = width / 3
                        if (numItems < 3) {
                            $(this).parent().find('a.jcarousel-control-prev, a.jcarousel-control-next').css('display','none');
                        }
                    } else if (width >= 350) {
                        width = width;
                        if (numItems < 2) {
                            $(this).parent().find('a.jcarousel-control-prev, a.jcarousel-control-next').css('display','none');
                        }
                    }
                }

                if($(this).hasClass('jcarousel-four-items')) {
                    if (width >= 600) {
                        width = width / 4;
                        if (numItems < 5) {
                            $(this).parent().find('a.jcarousel-control-prev, a.jcarousel-control-next').css('display','none');
                        }
                    } else if (width >= 350) {
                        width = width;
                        if (numItems < 2) {
                            $(this).parent().find('a.jcarousel-control-prev, a.jcarousel-control-next').css('display','none');
                        }
                    }
                }

                if($(this).hasClass('jcarousel-six-items')) {
                    if (width >= 600) {
                        width = width / 6;
                        if (numItems < 7) {
                            $(this).parent().find('a.jcarousel-control-prev, a.jcarousel-control-next').css('display','none');
                        }
                    } else if (width >= 350) {
                        width = width;
                        if (numItems < 2) {
                            $(this).parent().find('a.jcarousel-control-prev, a.jcarousel-control-next').css('display','none');
                        }
                    }
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);
