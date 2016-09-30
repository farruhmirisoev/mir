/**
 * Created by katrina on 23.04.15.
 */
(function ($) {
    Drupal.behaviors.maps_load = {
        attach: function(context) {

            var h_hght = $('.pane-header').outerHeight(); // высота шапки
            var h_hght_2 = $('.pane-menu-menu-centers').outerHeight();
            $(function(){

                $(window).scroll(function(){
                    var top = $(this).scrollTop();
                    var elem = $('.fixed-block');
                    if (top < (h_hght + h_hght_2)) {
                        elem.css("display", "none");
                    } else {
                        elem.css("display", "block");
                    }
                });
            });

            $('body').ready(initialize);
            $('input[name="end"]').hide();
            $('form.for_map').hide();
            $('#directionsPanel').hide();

            var directionDisplay;
            var directionsService = new google.maps.DirectionsService();
            var map;
            //var image = '../sites/default/files/pirogov_icon.png';
            var spb = new google.maps.LatLng(59.936725, 30.272805);
            function initialize() {
                directionsDisplay = new google.maps.DirectionsRenderer();
                var myOptions = {
                    zoom:15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    center: spb,
                    scrollwheel: false,
                    disableDoubleClickZoom: true
                };
                map = new google.maps.Map(document.getElementById("main_map"), myOptions);

                //Метка на карте
                var beachMarker = new google.maps.Marker({
                    position: spb,
                    map: map,
                    title:"МНОГОПРОФИЛЬНАЯ КЛИНИКА ИМЕНИ Н. И. ПИРОГОВА"
                    //icon: image
                });
                directionsDisplay.setMap(map);
                directionsDisplay.setPanel(document.getElementById("directionsPanel"));
                google.maps.event.addListener(directionsDisplay, 'directions_changed', function() {
                    computeTotalDistance(directionsDisplay.directions);
                });
            }


//            Автомобиль

            $('input[name="AutoRoute"]').bind('click', function(){
                if(!(($('input[name="panorama"]')).hasClass('inactive_panoram'))) {
                    initialize();
                    $('input[name="panorama"]').val('Панорама улицы');
                }
                if(!($('form.for_map').is(':visible'))) {
                    $('form.for_map').show();
                } else {
                    drive();
                }
                $('input[name="StreetSearch"]').bind('click', function(){
                    $('#directionsPanel').show();
                    drive();
                });
            });

//            Общественный транспорт

            $('input[name="PublicTransport"]').bind('click', function(){
                if(!($('form.for_map').is(':visible'))) {
                    $('form.for_map').show();
                } else {
                    PublicTransport();
                }


                $('input[name="StreetSearch"]').bind('click', function(){
                    $('#directionsPanel').show();
                    PublicTransport();
                });
            });

//            Metro

            $('input[name="metro"]').bind('click', function(){
                if(!($('form.for_map').is(':visible'))) {
                    $('form.for_map').show();
                } else {
                    metro();
                }
                $('input[name="StreetSearch"]').bind('click', function(){
                    $('#directionsPanel').show();
                    metro();
                });
            });
//          panorama


            $('input[name="panorama"]').bind('click', function(){
                $(this).toggleClass('active_panoram');
                if($('form.for_map, #directionsPanel').is(':visible')) {
                    $('form.for_map, #directionsPanel').hide();
                }
                if($('input[name="panorama"]').hasClass('active_panoram')) {
                    $(this).removeClass('inactive_panoram');
                    $(this).val('Карта');
                    panorama = map.getStreetView();
                    // Set up Street View and initially set it visible. Register the
                    // custom panorama provider function.
                    var panoOptions = {
                        position: spb,
                        visible: true,
                        panoProvider: getCustomPanorama
                    };
                    panorama.setOptions(panoOptions);

                    // Create a StreetViewService object.
                    var streetviewService = new google.maps.StreetViewService();

                    // Compute the nearest panorama to the Google
                    // using the service and store that pano ID.
                    var radius = 50;
                    streetviewService.getPanoramaByLocation(spb, radius,
                        function(result, status) {
                            if (status == google.maps.StreetViewStatus.OK) {
                                // We'll monitor the links_changed event to check if the current
                                // pano is either a custom pano or our entry pano.
                                google.maps.event.addListener(panorama, 'links_changed',
                                    function() {
                                        createCustomLinks(result.location.pano);
                                    });
                            }
                        });
                } else {
                    if(!(($(this)).hasClass('inactive_panoram'))) {
                        initialize();
                        $(this).val('Панорама улицы');
                    }
                }
            });

//            functions


            function drive() {
                var start = 'Санкт-Петербург, ' + document.getElementById("name_street").value;
                //var end = spb;//'Санкт-Петербург, ' + document.getElementById("end").value;
                var request = {
                    origin:start,
                    destination:spb,
                    travelMode: google.maps.DirectionsTravelMode.DRIVING
                };
                directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                    }
                });
            }
            function PublicTransport() {
                var start = 'Санкт-Петербург, '+document.getElementById("name_street").value;
                //var end = 'Санкт-Петербург, '+document.getElementById("end").value;
                var request = {
                    origin:start,
                    destination:spb,
                    travelMode: google.maps.DirectionsTravelMode.TRANSIT
                };
                directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                    }
                });
            }
            function metro() {
                var start = 'Санкт-Петербург, '+document.getElementById("name_street").value;
                //var end = 'Санкт-Петербург, '+document.getElementById("end").value;
                var request = {
                    origin:start,
                    destination:spb,
                    travelMode: google.maps.TravelMode.TRANSIT,
                    transitOptions: {
                        modes: [google.maps.TransitMode.SUBWAY]
                    }
                };
                directionsService.route(request, function(response, status) {
                    if (status == google.maps.DirectionsStatus.OK) {
                        directionsDisplay.setDirections(response);
                    }
                });
            }
            function getCustomPanorama(pano) {
                switch (pano) {
                    case 'reception':
                        return {
                            location: {
                                pano: 'reception',
                                description: 'МНОГОПРОФИЛЬНАЯ КЛИНИКА ИМЕНИ Н. И. ПИРОГОВА',
                                latLng: new google.maps.LatLng(59.936725, 30.272805)
                            },
                            links: [],
                            tiles: {
                                tileSize: new google.maps.Size(1024, 512),
                                worldSize: new google.maps.Size(2048, 1024),
                                // The heading at the origin of the panorama tile set.
                                centerHeading: 105,
                                getTileUrl: getCustomPanoramaTileUrl
                            }
                        };
                        break;
                    default:
                        return null;
                }
            }
            function createCustomLinks(entryPanoId) {
                var links = panorama.getLinks();
                var panoId = panorama.getPano();

                switch (panoId) {
                    case entryPanoId:
                        // Adding a link in the view from the entrance of the building to
                        // reception.
                        links.push({
                            heading: 25,
                            description: 'Наша Клиника',
                            pano: 'reception'
                        });
                        break;
                    case 'reception':
                        // Adding a link in the view from the entrance of the office
                        // with an arrow pointing at 100 degrees, with a text of 'Exit'
                        // and loading the street entrance of the building pano on click.
                        links.push({
                            heading: 195,
                            description: 'Exit',
                            pano: entryPanoId
                        });
                        break;
                    default:
                        return;
                }
            }
            function computeTotalDistance(result) {
                var total = 0;
                var myroute = result.routes[0];
                for (i = 0; i < myroute.legs.length; i++) {
                    total += myroute.legs[i].distance.value;
                }
                total = total / 1000.
                document.getElementById("total").innerHTML = total + " км";
            }

            function lookup(name_street) {
                if(name_street.length == 0) {
                    // Hide the suggestion box.
                    $('#suggestions').hide();
                } else {
                    $.get("rpc.php", {queryString: ""+name_street+""}, function(data){
                        if(data.length >0) {
                            $('#suggestions').show();
                            $('#autoSuggestionsList').html(data);
                        }
                    });
                }
            } // lookup

            function fill(thisValue) {
                $('#name_street').val(thisValue);
                setTimeout("$('#suggestions').hide();", 200);
            }


        }
    }
}(jQuery));

