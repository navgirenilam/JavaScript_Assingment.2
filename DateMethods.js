let A="Date and it's Methods"
document.getElementById("DateHeading1").innerHTML=A;

//.....................Date get Methods......................
let B = new Date();
document.getElementById("Date1").innerHTML ="Current date : "+ B;


const C = new Date("2024-07-01")
document.getElementById("Date2").innerHTML ="Return the full year of a date object : "+ C.getFullYear();
document.getElementById("Date3").innerHTML = "correct month number, you must add 1 : "+(B.getMonth()+1);
//In JavaScript, January is month number 0, February is number 1,


document.getElementById("Date4").innerHTML ="Return the day of a date : " +B.getDate();
document.getElementById("Date5").innerHTML ="Return the hours of a date : "+ B.getHours();
document.getElementById("Date6").innerHTML = "Returns the minutes of a date  : "+ B.getMinutes();
document.getElementById("Date7").innerHTML = "Return the seconds of a date : "+ B.getSeconds();
document.getElementById("Date8").innerHTML = "Return the milliseconds of a date  : " +B.getMilliseconds();

//Note
//In JavaScript, the first day of the week (day 0) is Sunday.
//Some countries in the world consider the first day of the week to be Monday.
document.getElementById("Date9").innerHTML ="Return the weekday as a number : "+ B.getDay();
document.getElementById("Date10").innerHTML = "Return the number of milliseconds : "+ B.getTime();

//..........................Date set Methods............................

const d = new Date();
d.setFullYear(2020);
document.getElementById("Date11").innerHTML = "setFullYear() method sets the year of a date :"+ d;
d.setMonth(11);
document.getElementById("Date12").innerHTML = "setMonth() method sets the mont of a date : "+ d;//Note that months count from 0. December is month 11
d.setDate(15);
document.getElementById("Date13").innerHTML = "setDate() method sets the day of a date :"+d;
d.setHours(22);
document.getElementById("Date14").innerHTML = " setHours() method sets the hours of a date : "+ d;
d.setMinutes(30);
document.getElementById("demo").innerHTML = " setMinutes() method sets the minutes of a date : "+ d;



