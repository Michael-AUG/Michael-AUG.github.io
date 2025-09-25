---
layout: page
---
<script>
function redirectToPage() {
  const currentDate = new Date();
    const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday

      if (dayOfWeek === 0) {
          // Redirect to the desired page on Sundays
              window.location.replace('/sabbath'); // Replace '/path/to/sunday-page' with the actual URL of your Sunday page
                }
                }

                // Call the function when the page loads
                window.onload = redirectToPage;
                </script>
<html> 
    <label id="lblGreetings"></label>

<script>
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

if (hrs < 12)                                                                                                                                                                                              
       greet = 'Good morning, or madainn mhath';                                                                                                                                                                  else if (hrs >= 12 && hrs <= 17)
       greet = 'Good afternoon, or feasgar math';
   else if (hrs >= 17 && hrs <= 24)
       greet = 'Good evening, or feasgar math';

    document.getElementById('lblGreetings').innerHTML =
        '<b>' + greet + '</b>, and welcome to the website of Michael Topple, GM5AUG!';
</script> 
</html>

<link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

<script>
  const API_KEY = "182547.xPVwPuHIc6pv2";  // from aprs.fi
  const stations = ["GM5AUG-2", "GM5AUG-4", "GM5AUG-5"];

  const map = L.map("map").setView([58, -6], 9);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  const markers = {};

  function formatTimestamp(unixTime) {
    const date = new Date(unixTime * 1000);
    return date.toLocaleString();
  }

  function plotStation(callsign) {
    const url = `https://api.aprs.fi/api/get?name=${callsign}&what=loc&apikey=${API_KEY}&format=json`;

    return fetch(url)
      .then(r => r.json())
      .then(data => {
        if (data.entries && data.entries.length > 0) {
          const entry = data.entries[0];
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
        }
        return null;
      });
  }

  function refreshAll() {
    Promise.all(stations.map(plotStation)).then(results => {
      const coords = results.filter(c => c !== null);
      if (coords.length > 0) {
        map.fitBounds(coords);
      }
    });
  }

  refreshAll();
  setInterval(refreshAll, 300000);
</script>

<div id="map" style="height:600px; width:100%;"></div>



Please use the links above to navigate around my website. Thank you for visiting.

<br>
<html>
<script>
var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")

function countup(yr,m,d){
var today=new Date()
var todayy=today.getYear()
if (todayy < 1000)
todayy+=1900
var todaym=today.getMonth()
var todayd=today.getDate()
var todaystring=montharray[todaym]+" "+todayd+", "+todayy
var paststring=montharray[m-1]+" "+d+", "+yr
var difference=(Math.round((Date.parse(todaystring)-Date.parse(paststring))/(24*60*60*1000))*1)
difference+=" days"
document.write("It\'s been "+difference+" since I was first licensed as M6EIO")
}
//enter the count up date using the format year/month/day
countup(2012,11,07)
</script>
<br>
<script>

var montharray=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec")

function countup(yr,m,d){
var today=new Date()
var todayy=today.getYear()
if (todayy < 1000)
todayy+=1900
var todaym=today.getMonth()
var todayd=today.getDate()
var todaystring=montharray[todaym]+" "+todayd+", "+todayy
var paststring=montharray[m-1]+" "+d+", "+yr
var difference=(Math.round((Date.parse(todaystring)-Date.parse(paststring))/(24*60*60*1000))*1)
difference+=" days"
document.write("It\'s been "+difference+" since I was licensed as GM5AUG")
}
//enter the count up date using the format year/month/day
countup(2023,03,20)
</script>
</html>
<br>

**Have I been on air in the last 24hrs??**

![Ham Alert](https://hamalert.org/myspot?c=GM5AUG&h=f28667128cef90b4&a=24)

**GM5AUG/G5AUG's RBN statistics**

![RBN Stats](https://rbn.telegraphy.de/activity/image/GM5AUG+G5AUG)

**Current HF and VHF propogation**

![Propo](https://www.hamqsl.com/solar101vhfpic.php)
