// Define the URL of the Indian Railway API
const apiUrl = "https://indian-railway-api.cyclic.app/trains/betweenStations/?from=NGP&to=MTY";

// Define the URL of the proxy server (cors-anywhere)
const proxyUrl = "https://cors-anywhere.herokuapp.com/";

// Use the fetch API to make a GET request through the proxy
fetch(proxyUrl + apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // console.log(data.success);
    document.getElementById('test').innerText = data.success;
  })
  .catch(error => {
    console.error("Fetch error:", error);
  });
