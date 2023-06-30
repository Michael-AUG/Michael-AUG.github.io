---
layout: page
---

![Logo](images/logoNEW.png)

Please use the links above to navigate around my website. Thank you for visiting.

73 de Michael GM5AUG.


**Have I been on air in the last 24hrs??**

![Ham Alert](https://hamalert.org/myspot?c=GM5AUG&h=f28667128cef90b4&a=24)

**GM5AUG/G5AUG's RBN statistics**

![RBN Stats](https://rbn.telegraphy.de/activity/image/GM5AUG+G5AUG)

**All *bona fide* with eQSL!**

![eQSL Auth](images/eQSL.png)

<html>
<?php
// enter start date below like this: "March 28, 2004"
// $start = "March 28, 2004 20:00:00";
$start = "November 07, 2012 19:00:00";
// enter string of what this start date is.
$text = "";

//-------------------------- 

$now = strtotime ("now");
$then = strtotime ("$start");
$difference = $now - $then;
$num = $difference/86400;
$num1 = $num/365;
$years = intval($num1);
$temp = $difference/86400 - $years*365;
$num2 = $temp/30;
$months = intval($num2);
$temp = $difference/86400 - ($years*365) - ($months*30);
$num3 = $temp/7;
$weeks = intval($num3);
$num3a = $difference/86400 - ($years*365) - ($months*30) - ($weeks*7);
$days = intval($num3a);
$num4 = ($difference/86400 - intval($difference/86400))*24;
$hours = intval($num4);
$num5 = ($num4 - $hours)*60;
$mins = intval($num5);
?>
<ul>First Licensed</ul>
<li><?
if($years<>1) {
echo $years . ' yrs, ';
} else {
echo $years . ' yr, ';
}
if($months<>1) {
echo $months . ' mths, ';
} else {
echo $months . ' mth, ';
}
if($weeks<>1) {
echo $weeks . ' wks, ';
} else {
echo $weeks . ' wk, ';
}
if($days<>1) {
echo $days . ' days ';
} else {
echo $days . ' day ';
}
echo $text;
?>
<?php
// enter start date below like this: "March 28, 2004"
// $start = "March 28, 2004 20:00:00";
$start = "March 20, 2023 19:00:00";
// enter string of what this start date is.
$text = "";

//-------------------------- 

$now = strtotime ("now");
$then = strtotime ("$start");
$difference = $now - $then;
$num = $difference/86400;
$num1 = $num/365;
$years = intval($num1);
$temp = $difference/86400 - $years*365;
$num2 = $temp/30;
$months = intval($num2);
$temp = $difference/86400 - ($years*365) - ($months*30);
$num3 = $temp/7;
$weeks = intval($num3);
$num3a = $difference/86400 - ($years*365) - ($months*30) - ($weeks*7);
$days = intval($num3a);
$num4 = ($difference/86400 - intval($difference/86400))*24;
$hours = intval($num4);
$num5 = ($num4 - $hours)*60;
$mins = intval($num5);
?>
<ul>Licensed as GM5AUG</ul>
<li><?
if($years<>1) {
echo $years . ' yrs, ';
} else {
echo $years . ' yr, ';
}
if($months<>1) {
echo $months . ' mths, ';
} else {
echo $months . ' mth, ';
}
if($weeks<>1) {
echo $weeks . ' wks, ';
} else {
echo $weeks . ' wk, ';
}
if($days<>1) {
echo $days . ' days ';
} else {
echo $days . ' day ';
}
echo $text;
?>
</html>

**Current HF and VHF propogation**

![Propo](https://www.hamqsl.com/solar101vhfpic.php)
