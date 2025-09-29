// === APRS Map Script with Online/Offline markers and legend ===
const API_KEY = "182547.2YtYAXy1gdRGFjol";
const stations = ["GM5AUG-2", "GM5AUG-4", "GM5AUG-5", "GM5AUG-6"];

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

      let lat, lon, lastHeard, icon, popupText;

      if (data.entries && data.entries.length > 0 && data.entries[0].lat && data.entries[0].lng) {
        const entry = data.entries[0];
        lat = parseFloat(entry.lat);
        lon = parseFloat(entry.lng);
        lastHeard = formatTimestamp(entry.time);
        const isOnline = (Date.now() - entry.time * 1000) < 3600000; // 1 hour
        icon = isOnline ? onlineIcon : offlineIcon;
        popupText = `${callsign}<br>Lat: ${lat.toFixed(5)}, Lon: ${lon.toFixed(5)}<br>Last heard: ${lastHeard}`;
      } else {
        // Placeholder if no coordinates
        lat = 58.21 + Math.random()*0.01;
        lon = -6.36 + Math.random()*0.01;
        icon = offlineIcon;
        popupText = `${callsign}<br>No position data`;
      }

      if (markers[callsign]) {
        markers[callsign].setLatLng([lat, lon]);
        markers[callsign].setIcon(icon);
        markers[callsign].setPopupContent(popupText);
      } else {
        markers[callsign] = L.marker([lat, lon], { icon }).addTo(map)
          .bindPopup(popupText);
      }

      return [lat, lon];
    })
    .catch(err => {
      console.error("Error fetching " + callsign, err);
      const lat = 58.21 + Math.random()*0.01;
      const lon = -6.36 + Math.random()*0.01;
      markers[callsign] = L.marker([lat, lon], { icon: offlineIcon }).addTo(map)
        .bindPopup(`${callsign}<br>Error fetching data`);
      return [lat, lon];
    });
}

function refreshAll() {
  Promise.all(stations.map(plotStation)).then(results => {
    const coords = results.filter(c => c !== null);
    if (coords.length > 0) map.fitBounds(coords);
  });
}

// Initial load and auto-refresh
refreshAll();
setInterval(refreshAll, 300000);

// === Add a legend ===
const legend = L.control({ position: "topright" });

legend.onAdd = function(map) {
  const div = L.DomUtil.create("div", "info legend");
  div.style.background = "white";
  div.style.padding = "6px";
  div.style.border = "1px solid #ccc";
  div.style.borderRadius = "4px";
  div.innerHTML = `
    <i style="background: url('https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers/img/marker-icon-green.png') no-repeat center; width: 25px; height: 41px; display:inline-block;"></i> Online<br>
    <i style="background: url('https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers/img/marker-icon-grey.png') no-repeat center; width: 25px; height: 41px; display:inline-block;"></i> Offline
  `;
  return div;
};

legend.addTo(map);
