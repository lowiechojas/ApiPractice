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
  
  document.addEventListener("DOMContentLoaded", () => {
    if (window.google && window.google.maps) {
      initAutocomplete();
    }

  });

  document.addEventListener("submit",() => {
    window.alert('Form Submitted!');
  });

