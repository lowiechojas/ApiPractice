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
  
window.initMap = function (callback) {

  const encodedPath = document.getElementById("map").dataset.polyline;


    // Polyline passed from Flask
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: { lat: 14.59491597417188, lng: 121.00677584033835}, // Temporary center
  });
 
  
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

    google.maps.event.addListenerOnce(map, 'idle', function() {
      callback();  // Call the callback function passed as an argument
      
    });

    
}


document.addEventListener('submit',() => {
   // Prevent the default form submission
  //e.preventDefault();
  initMap(() => {
});
});

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the map when the page loads
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: { lat: 14.59491597417188, lng: 121.00677584033835}, // Temporary center
  });

});

/*
14.59491597417188, 121.00677584033835
*/