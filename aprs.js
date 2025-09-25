// === APRS Map Script ===
// APRS.fi API key
const API_KEY = "182547.2YtYAXy1gdRGFjol";

// Callsigns to display
const stations = ["GM5AUG-2", "GM5AUG-4", "GM5AUG-5"];

// Initialize Leaflet map
const map = L.map("map").setView([58, -6], 9);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

// Track station markers
const markers = {};

// Convert APRS timestamp to readable string
function formatTimestamp(unixTime) {
  const date = new Date(unixTime * 1000);
  return date.toLocaleString();
}

// Fetch and plot a single station, always using last-heard position
function plotStation(callsign) {
  const url = `https://api.aprs.fi/api/get?name=${callsign}&what=loc&apikey=${API_KEY}&format=json`;

  return fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("APRS data for", callsign, data); // debug API response

      if (data.entries && data.entries.length > 0) {
        // Use the first entry, which is usually last-heard
        const entry = data.entries[0];

        if (!entry.lat || !entry.lng) {
          console.warn(`No lat/lng for ${callsign}`);
          return null;
        }

        const lat = parseFloat(entry.lat);
        const lon = parseFloat(entry.lng);
        const lastHeard = formatTimestamp(entry.time);

        if (markers[callsign]) {
          markers[callsign].setLatLng([lat, lon]);
          markers[callsign].setPopupContent(
            `${callsign}<br>Lat: ${lat.toFixed(5)}, Lon: ${lon.toFixed(5)}<br>Last heard: ${lastHeard}`
          );
        } else {
          markers[callsign] = L.marker([lat, lon])
            .addTo(map)
            .bindPopup(
              `${callsign}<br>Lat: ${lat.toFixed(5)}, Lon: ${lon.toFixed(5)}<br>Last heard: ${lastHeard}`
            );
        }

        return [lat, lon];
      } else {
        console.warn(`No APRS data returned for ${callsign}`);
        return null;
      }
    })
    .catch(err => {
      console.error("Error fetching " + callsign, err);
      return null;
    });
}

// Refresh all stations and adjust map bounds
function refreshAll() {
  Promise.all(stations.map(plotStation)).then(results => {
    const coords = results.filter(c => c !== null);
    if (coords.length > 0) {
      map.fitBounds(coords);
    }
  });
}

// Initial load
refreshAll();

// Auto-refresh every 5 minutes
setInterval(refreshAll, 300000);
