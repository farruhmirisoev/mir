/**
 * Created by katrina on 23.04.15.
 */
(function ($) {
    Drupal.behaviors.maps_load = {
        attach: function(context) {
/* map */
//            $('body').ready(initialize);
            $('input[name="end"]').hide();
            $('form.for_map').hide();
            $('#directionsPanel').hide();
            var first_value = Drupal.settings.custom_map.first_value;
            var second_value = Drupal.settings.custom_map.second_value;
            var town_map = Drupal.settings.custom_map.town_map;
            var map_id = $("div[id*='custom_map_']");
//            alert('First ' + first_value + '  Second ' + second_value);

            ymaps.ready(init);
            var myMap,
                myPlacemark;

            function init(){

                myMap = new ymaps.Map(jQuery($("div[id*='custom_map_']")), {
                    center: [first_value, second_value],
                    zoom: 18,
                    behaviors: ["scrollZoom"]
                });
                myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                    hintContent: 'Офтальмологический центр "Зрение"',
                    balloonContent: 'Офтальмологический центр "Зрение"'
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: '../sites/all/themes/mytheme/images/logo_2.png',
                    iconImageSize: [52, 68]
                });
                myMap.geoObjects.add(myPlacemark);
                myMap.behaviors.disable("scrollZoom");
            }

            $('div.route-to').hide();
            $('[class ^= for_map_]').hide();

            $('input[name="AutoRouteBut"]').bind('click', function(){
                if($('[class ^= for_map_]').is(':visible')) {
                    $('[class ^= for_map_]').hide();
                }
                $('div.for_map_auto').show();
            });
            $('input[name="AutoPublicRouteBut"]').bind('click', function(){
                if($('[class ^= for_map_]').is(':visible')) {
                    $('[class ^= for_map_]').hide();
                }
                $('div.for_map_public').show();
            });
            $('input[name="AutoMetroRouteBut"]').bind('click', function(){
                if($('[class ^= for_map_]').is(':visible')) {
                    $('[class ^= for_map_]').hide();
                }
                $('div.for_map_metro').show();
            });
            $('input[name="AutoRouteAuto"]').bind('click', function(){
                var routeFrom = town_map + document.getElementById('route-from-auto').value;
                var routeTo = town_map + document.getElementById('route-to-auto').value;
                multiRoute = new ymaps.multiRouter.MultiRoute({
                    referencePoints: [routeFrom, routeTo],
                    params: {
                        results: 2
                    }
                }, {
                    boundsAutoApply: true
                });
                myMap.geoObjects.add(multiRoute);
            });
            $('input[name="AutoRoutePublic"]').bind('click', function(){
                var routeFrom = town_map + document.getElementById('route-from-public').value;
                var routeTo = town_map + document.getElementById('route-to-public').value;
                var multiRoute = new ymaps.multiRouter.MultiRoute({
                    referencePoints: [
                        routeFrom,
                        routeTo
                    ],
                    params: {
                        routingMode: 'masstransit'
                    }
                }, {
                    boundsAutoApply: true
                });
                myMap.geoObjects.add(multiRoute);
            });

            $('input[name="AutoRouteMetro"]').bind('click', function(){
                var routeFrom = document.getElementById('route-from-metro').value;
                var routeTo = document.getElementById('route-to-metro').value;
            });


        }
    }
}(jQuery));

