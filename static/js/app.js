/*
function initAutocomplete() {
    const input = document.getElementById("location-input");
    const autocomplete = new google.maps.places.Autocomplete(input);
  
    autocomplete.addListener("place_changed", function () {
      const place = autocomplete.getPlace();
      if (!place.geometry) {
        alert("No location data found!");
        return;
      }
  
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
  
      // Fill the hidden form inputs
      document.getElementById("lat").value = lat;
      document.getElementById("lng").value = lng;
    });
  }
*/  
  
function initMap() {

  const encodedPath = document.getElementById("map").dataset.polyline;
    // Create the map
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: { lat: 0, lng: 0 }, // Temporary center
    });

    // Polyline passed from Flask
    
  
  
    // Decode the polyline (use mapbox/polyline)
    const decodedPath = polyline.decode(encodedPath).map(([lat, lng]) => ({ lat, lng }));

    // Adjust map center and bounds
    const bounds = new google.maps.LatLngBounds();
    decodedPath.forEach(point => bounds.extend(point));
    map.fitBounds(bounds);

    // Draw the route
    new google.maps.Polyline({
        path: decodedPath,
        map: map,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 4,
    });

     window.alert('Map loaded successfully!');
}


document.addEventListener('submit',() => {
   // Prevent the default form submission
  //e.preventDefault();
  initMap();
  
});

