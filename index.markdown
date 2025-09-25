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

Where is GM5AUG?

<iframe
  src="https://aprs.fi/#!call=a/GM5AUG-2,GM5AUG-4,GM5AUG-5&mt=roadmap&z=11&tail=0"
  width="800"
  height="600"
  frameborder="0"
  style="border:0"
  allowfullscreen>
</iframe>

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
