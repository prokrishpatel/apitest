// Define the URL
const apiUrl = "https://indian-railway-api.cyclic.app/trains/betweenStations/?from=NGP&to=MTY";

// Use the fetch API to make a GET request
fetch(apiUrl)
  .then(response => {
    // Check if the response status is OK (200)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Parse the JSON response
    return response.json();
  })
  .then(data => {
    // Work with the JSON data here
    document.getElementById('test').innerText = data.success;
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error("Fetch error:", error);
  });
