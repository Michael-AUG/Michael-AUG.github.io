---
layout: page
title: Marine AIS
permalink: /ais/
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
![AIS receiver and decoder](images/sevenstar.jpg)

Because of my love of sailing and boats, another amateur-related hobby I enjoy is receiving, plotting, and tracking the marine AIS transmissions from nearby vessels as they traverse the Clyde.

To do this, I have a SevenStar 2rxPro receiver, which listens on both AIS frequencies, receives the packet-ised location data, and decodes it into NMEA strings. This data is then passed from the 2rxPro to my RPi over a serial connection. Running on the RPi is MM3NDH's excellent [aisdecode](https://github.com/madpsy/aisdecode) software, which takes this NMEA data and plots it on a map. Nathan NDH is constantly adding new features to this software, and I'm pleased to be a guinea-pig in using it!

You can see what vessels I can hear by visiting [my AIS tracker page](http://ais.topple.scot).

Alongside hosting the local map (above), I also feed the data to other locations. The primary aggregated location is the OARC AIS project, which can be found at [https://ais.oarc.uk](https://ais.oarc.uk). I also feed my data to various marine tracking websites.

I love how amateur radio allows you to develop interests that are technically outside the scope of amateur radio, but nonetheless use the same skills developed within the hobby.
