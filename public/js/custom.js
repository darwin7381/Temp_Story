$(function(){function e(){var e=new google.maps.LatLng(24.98762,121.572235),i=document.getElementById("map"),t={center:e,zoom:16,panControl:!1,scrollwheel:!1,mapTypeId:google.maps.MapTypeId.ROADMAP},s=new google.maps.Map(i,t),a="assets/marker.png",n=new google.maps.Marker({position:e,map:s,icon:a}),o='<div class="info-window"><h3>到南橋下</h3><div class="info-content"><p>身為政大人，無數次與道南擦肩而過，但是你知道嗎...</p></div></div>',l=new google.maps.InfoWindow({content:o,maxWidth:400});n.addListener("click",function(){l.open(s,n)});var r=[{featureType:"landscape",stylers:[{saturation:-100},{lightness:65},{visibility:"on"}]},{featureType:"poi",stylers:[{saturation:-100},{lightness:51},{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{saturation:-100},{lightness:30},{visibility:"on"}]},{featureType:"road.local",stylers:[{saturation:-100},{lightness:40},{visibility:"on"}]},{featureType:"transit",stylers:[{saturation:-100},{visibility:"simplified"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"labels",stylers:[{visibility:"on"},{lightness:-25},{saturation:-100}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#ffff00"},{lightness:-25},{saturation:-97}]}];s.set("styles",r)}google.maps.event.addDomListener(window,"load",e)});