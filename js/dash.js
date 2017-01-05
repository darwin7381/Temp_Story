$(".like").click(function () {
    $(".like").html("<img class='image' src='assets/red_heart.png' height='30' width='30'>")
})

$(".arrow").click(function(){
    var x = 60
        d = $(".arrow").width()/2

    if ($(".story").width()/$(window).width() < 0.5) {
        var w = $(".story").width() + $(window).width()*x/100

        $(".story").css("width",w);
        $(".story").css('background-color','rgba(0,0,0,.8)');
        $(".arrow").css("left",w-d);
        $(".arrow").html("<");
        $(".comment").css("width",w/2);
        $(".comment").css("left",w/4);
        $(".like").css("left",(w/4)-50);

    }else{

        var w = $(".story").width() - $(window).width()*x/100
        $(".story").css("width","");
        $(".story").css('background-color',"");
        $(".arrow").css("left","");
        $(".arrow").html(">");
        $(".comment").css("width","");
        $(".comment").css("left","");
        $(".like").css("left","");
    }
})


$(function () {

    function initMap() {
        var location = new google.maps.LatLng(24.987620, 121.572235);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 15,
            panControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'assets/markerb.png';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });
        
        var contentString = '<div class="info-window">' +
                '<h3>到南橋下</h3>' +
                '<div class="info-content">' +
                '<p>身為政大人，無數次與道南擦肩而過，但是你知道嗎...</p>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

        var styles = [{"featureType": "landscape", "stylers": [{"saturation": -100}, {"lightness": 65}, {"visibility": "on"}]}, {"featureType": "poi", "stylers": [{"saturation": -100}, {"lightness": 51}, {"visibility": "simplified"}]}, {"featureType": "road.highway", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "road.arterial", "stylers": [{"saturation": -100}, {"lightness": 30}, {"visibility": "on"}]}, {"featureType": "road.local", "stylers": [{"saturation": -100}, {"lightness": 40}, {"visibility": "on"}]}, {"featureType": "transit", "stylers": [{"saturation": -100}, {"visibility": "simplified"}]}, {"featureType": "administrative.province", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "on"}, {"lightness": -25}, {"saturation": -100}]}, {"featureType": "water", "elementType": "geometry", "stylers": [{"hue": "#ffff00"}, {"lightness": -25}, {"saturation": -97}]}];

        map.set('styles', styles);
    }

    google.maps.event.addDomListener(window, 'load', initMap);
});