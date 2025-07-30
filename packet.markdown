---
layout: page
title: Packet Radio
permalink: /packet/
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
**I currently hold five FACs under my licence for packet nodes.**
* GB7STO (Newvalley, Stornoway) for 2m
* GB7STO (ditto.) for 4m - not yet in operation
* GB7STO (ditto.) for 40m - ditto.
* MB7NKL (Kilsyth, Central Belt) for 2m
* MB7NKL (ditto.) for 4m - soon to be in operation

The GB7STO node setup is thoroughly explained below. The Kilsyth (MB7NKL) node has a near identical setup to the 2m GB7STO node (with the substitution of the Diamond X-2000 for a Diamond X-50N). Together MB7NKL and GB7NDH (run by Nathan MM3NDH) link the cities of Glasgow and Edinburgh by packet radio - meaning I have achieved my aim of linking these two cities! Before the regulations changed, I was also SYSOP for MB7NDH.

**GB7STO**

I run a AX.25 Packet Node and Mailbox (at 1200bd), callsign GB7STO, serving the Isle of Lewis, particularly the East Side. This node operates on 2m (144.95MHz). Prior to moving here, my previous node (GB7AUG) handled mail for regions 72 (Central), 73 (Dumfries and Galloway) and 78 (Strathclyde). 

I use a two NinoTNCs, produced by Nino KK4HEJ, to run GB7STO. I bought the kit to make the NinoTNC as part of a group buy for interested members of OARC - the Online Amateur Radio Community. When I get 4m running at GB7STO I will use a NinoTNC for this too.

![NinoTNC](images/tncsmall.jpg)

The software that runs the nodes is linbpq, a Linux version of the famous bpq32 software developed by G8BPQ.

In terms of radio hardware, the 2m transceiver is a Tait TM8110, an excellent ex-PMR radio. My antenna is Diamond X-2000, with excellent coverage over the surrounding area.

![Tait TM-8110](images/taitsmall.jpg)

I have a Tait TM-8110 low-band VHF transceiver lined up for 4m packet use.

**OARC Packet Network**

*Following a successful TNC group buy, OARC members (and others) are attempting to re-establish a UK-wide packet network primarily using amateur RF. Since the arrival of the NinoTNCs, new packet nodes and ports have sprung up, and the project is rapidly gaining momentum.*
*(Taken from the [OARC Packet Network website](https://wiki.oarc.uk/packet?s[]=packet#national_packet_network_project))*

Although Packet Networking has seemed to fade into obscurity over the last few decades, as the above shows, there has been a resurgance in interest in this fascinating and technically complex yet rewarding mode. Thanks to the hard work of, among others, Tom M0LTE (who co-ordinates the OARC Packet Network project), we have been able to map the packet nodes in the UK. You can [access this map by clicking here](https://nodes.ukpacketradio.network/packet-network-map.html). 

My node is a work in progress, and every day I am learning more about how AX.25 Packet Networking works. It is also stretching and strengthening my Linux command line skills, which can only be a good thing too.

If you are in the area, please do connect to GB7STO on 2m; or if you connect to a node near to you, have a look and see if there is already a connection to mine in place!

**Maps**

Predicted coverage map for GB7STO:

![Coverage map](images/gb7sto.png)

Predicted 2m coverage map for GB7AUG, my previous node:

![Coverage map](images/canvas.png)

Predicted 2m coverage map for MB7NKL:

![Coverage map](images/mb7nklCoverage.png)

A map showing the links between Central Belt nodes (as of 8th Jan 2024 - includes my previous node GB7AUG)
![map](files/gmpnmap.png)
