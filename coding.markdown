---
layout: page
title: Coding
permalink: /coding/
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
I studied Computer Science at College and, although it has been a number of years since I was using it regularly, I did build up a reasonable knowledge of certain programming languages. Since moving to the Linux ecosystem I have rekindled my interest in programming, writing scripts and applications to speed up or simplify certain tasks.

An example of this is the F2A Morse Rigctld script I have written, which integrates the ['morse' application](https://gitlab.com/esr/morse-classic) with the rig control functions [(rigctl) of Hamlib](https://github.com/Hamlib/Hamlib). This enables me to send evenly sped Morse Code over FM for my 2m GB2CW broadcasts.

Another little project I worked on was a script, controlled by a monentary switch attached to the GPIO pins on my Pi, to restart a couple of services. As I use my Pi for radio logging, it is important I can quickly restart these services when needed. For more information, [see here](https://github.com/Michael-AUG/RestartLog).

The big project I have worked on, however, is [ToppLog](https://github.com/Michael-AUG/ToppLog) - an amateur radio logging program contained within BASH, which makes use of the Hamlib rigctl system to read data from the rig, and logs into handy .csv files. This project was initially a rainy-day job which has turned into something much bigger. 

See some images below:

![The code behind ToppLog](images/topplog1.png)
<br>*The code behind ToppLog*

![The UI of ToppLog](images/topplog2.png)
<br>*ToppLog's UI*

You can find these, and various other projects I have worked on, on [my GitHub page](https://github.com/Michael-AUG). I am grateful to various people for helping me with my projects, not limited to Mitch AB4MW, Torin MM1STK and Tom M0LTE. I am certainly still an 'amateur' coder but enjoy it when a piece of code speeds up or simplifies my life. 

As well as Bash scripting, I have also learned Markdown and have used that to create this website entirely in the Nano Terminal text editor. See below:

![Editing the webpage in Nano](images/bash.png)

![The Linux Radio Ham](images/ham_linux.png)
