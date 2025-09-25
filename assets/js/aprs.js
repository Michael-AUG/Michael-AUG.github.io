// === APRS Map Script with Online/Offline markers ===
const API_KEY = "182547.2YtYAXy1gdRGFjol";
const stations = ["GM5AUG-2", "GM5AUG-4", "GM5AUG-5"];

const map = L.map("map").setView([58, -6], 9);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const markers = {};

// Marker icons
const onlineIcon = L.icon({
  iconUrl: "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers/img/marker-icon-green.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
});
const offlineIcon = L.icon({
  iconUrl: "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers/img/marker-icon-grey.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41], iconAnchor: [12, 41], popupAnchor: [1, -34], shadowSize: [41, 41]
});

function formatTimestamp(unixTime) {
  const date = new Date(unixTime * 1000);
  return date.toLocaleString();
}

function plotStation(callsign) {
  const url = `https://api.aprs.fi/api/get?name=${callsign}&what=loc&apikey=${API_KEY}&format=json`;
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log("APRS data for", callsign, data);
      if (data.entries && data.entries.length > 0) {
        const entry = data.entries[0];
        if (!entry.lat || !entry.lng) return null;

        const lat = parseFloat(entry.lat);
        const lon = parseFloat(entry.lng);
        const lastHeard = formatTimestamp(entry.time);
        const isOnline = (Date.now() - entry.time*1000) < 3600000; // 1 hour
        const icon = isOnline ? onlineIcon : offlineIcon;

        if (markers[callsign]) {
          markers[callsign].setLatLng([lat, lon]);
          markers[callsign].setIcon(icon);
          markers[callsign].setPopupContent(
            `${callsign}<br>Lat: ${lat.toFixed(5)}, Lon: ${lon.toFixed(5)}<br>Last heard: ${lastHeard}`
          );
        } else {
          markers[callsign] = L.marker([lat, lon], { icon })
            .addTo(map)
            .bindPopup(
              `${callsign}<br>Lat: ${lat.toFixed(5)}, Lon: ${lon.toFixed(5)}<br>Last heard: ${lastHeard}`
            );
        }

        return [lat, lon];
      } else {
        console.warn(`No APRS data for ${callsign}`);
        return null;
      }
    })
    .catch(err => console.error("Error fetching " + callsign, err));
}

function refreshAll() {
  Promise.all(stations.map(plotStation)).then(results => {
    const coords = results.filter(c => c !== null);
    if (coords.length > 0) map.fitBounds(coords);
  });
}

refreshAll();
setInterval(refreshAll, 300000);
