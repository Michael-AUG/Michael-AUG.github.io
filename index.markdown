---
layout: page
---

![MT_mugshot](images/MT_RSGB.jpg)

<html> 
    <label id="lblGreetings"></label>

<script>
    var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    document.getElementById('lblGreetings').innerHTML =
        '<b>' + greet + '</b> and welcome to the website of Michael Topple, GM5AUG!';
</script> 
</html>


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
document.write("It\'s been "+difference+" since the I was first licensed as M6EIO")
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
document.write("It\'s been "+difference+" since the I was licensed as GM5AUG")
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

**All *bona fide* with eQSL!**

![eQSL Auth](images/eQSL.png)

**Current HF and VHF propogation**

![Propo](https://www.hamqsl.com/solar101vhfpic.php)
