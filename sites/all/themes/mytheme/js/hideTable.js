/**
 * Created by katrina on 16.08.15.
 */
(function ($) {
    $(function(){
        var page_width = window.innerWidth;

        $(window).resize(function() {
            var page_width = window.innerWidth;
            hideTable(page_width);
        });

        hideTable(page_width);

        function hideTable(width) {
            $('table').each(function(){
                var CountTD = $('tr:first-child td', this).length;
                if(CountTD > 2) {
                    if (width < 350) {
                        $(this).css('display', 'none');
                        $(this).after('<p class="for-phone-information">Переверните Ваше устройство для отображения скрытого содержимого</p>');
                    } else {
                        $(this).css('display', 'block');
                        $(this).next(".for-phone-information").remove();
                    }
                }
            });
        }
    });
})(jQuery);
