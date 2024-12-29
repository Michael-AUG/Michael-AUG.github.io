---
layout: page
title: LoRa
permalink: /packet/lora
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
Alongside running various packet nodes, (see the Packet page above), I also run a LoRa APRS node from my home QTH (callsign MB7UMT-10). This runs on 439.9125MHz and transmits with 100mW.

As you'll see from this heat map, the coverage is excellent across Glasgow and beyond. I hope, in time, to place iGates in other locations to increase coverage across Strathclyde.

This iGate runs through the same antenna as my 2m packet stations. I use a triplexer to allow me to use the tribander colinear for many frequencies at the same time. While this purports to attenuate the signals by 1dB, I've not noticed any reduced signals as a result of this.

[Click here](https://lora-aprs.live/coverage.html?rx_callsign=MB7UMT-10&time_period=all_time) to see a live coverage chart.

I currently have two LoRa APRS trackers/transponders, one of which I keep in my car and one of which I take with me when I go out operating /P. They run the excellent CA2RXU sofware which can be found on his [GitHub page](https://github.com/richonguzman/LoRa_APRS_Tracker). RXU also makes iGate software which can be found [here](https://github.com/richonguzman/LoRa_APRS_iGate).
