function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocalização não suportada pelo seu navegador.");
    }
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    
    
    alert("Latitude: " + latitude + ", Longitude: " + longitude);
}
