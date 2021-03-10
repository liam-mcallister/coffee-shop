function initMap() {
    const myLatLng = { lat: 54.5964411, lng: -5.9302761 };
    const map = new google.maps.Map(document.getElementById("contact-map"), {
        center: myLatLng,
        zoom: 16
    });
    const marker = new google.maps.Marker({ position: myLatLng, map: map });
}