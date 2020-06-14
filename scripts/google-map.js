function initMap() {
    var myLatLng = { lat: 54.5964411, lng: -5.9302761 };
    var map = new google.maps.Map(document.getElementById("contact-map"), {
        center: myLatLng,
        zoom: 16
    });
    var marker = new google.maps.Marker({position: myLatLng, map: map});
}