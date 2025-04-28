let autocomplete;

function initAutocomplete() {
  // Get the input field
  const input = document.getElementById('location-input');

  // Create the autocomplete object and associate it with the input field
  autocomplete = new google.maps.places.Autocomplete(input);
    window.alert("Autocomplete initialized!");
  // Optional: Restrict the results to a specific country or area
  autocomplete.setComponentRestrictions({
    country: ['us']  // Example: restrict to the US
  });

  // Add an event listener to get the place details when a suggestion is selected
  autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
  const place = autocomplete.getPlace();
  if (!place.geometry) {
    console.log('No details available for input: ' + place.name);
    return;
  }

  console.log('Selected Place: ', place);
  // You can access place details like:
  // place.geometry.location for the location coordinates
  // place.formatted_address for the address
}


document.addEventListener('DOMContentLoaded', (e) => {
   
    initAutocomplete();
    window.alert("Autocomplete initialized!");
  });