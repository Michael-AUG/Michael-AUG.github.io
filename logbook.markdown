---
layout: page
title: My Logbook
permalink: /logbook/
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
<meta http-equiv="refresh" content="60"> <!-- Refresh every 1 minutes -->

**Below are the most recent QSOs from my Scottish Logbook. Most of these contacts were made as GM5AUG, although some will have been made as other callsigns.**

<p><em><em><span style="font-size:18px"><iframe height="300" src="https://log.topple.scot/index.php/widgets/qsos/gm5aug" width="700"></iframe></span></em></em></p>

**Please note that in early May 2023 I formally surrendered my MM6 and 2M0 (Foundation and Intermediate) callsigns in readiness for the Ofcom regulations change anent multiple callsigns.**
