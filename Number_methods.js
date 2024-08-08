let x="Number and it's Methods"


document.getElementById("NumberHeading1").innerHTML=x;



let y=123
document.getElementById("number1").innerHTML =" toString() method converts a number to a string : "+ y.toString();

let z=2;

document.getElementById("number2").innerHTML =" toExponential() method "+"<br>"+
(z.toExponential() + "<br>" + 
  z.toExponential(2) + "<br>" + 
  z.toExponential(4) + "<br>" + 
  z.toExponential(6));


  let w =2.563489;
document.getElementById("number3").innerHTML ="The toFixed() method rounds a number to a given number of digits : "+ "<br>"+
  w.toFixed(0) + "<br>" +
  w.toFixed(2) + "<br>" +
  w.toFixed(4) + "<br>" +
  w.toFixed(6);


  let v = 5.555555555;
document.getElementById("number4").innerHTML = "The toPrecision() method returns a string, with a number written with a specified length: "+"<br>"+
  v.toPrecision() + "<br>" +
  v.toPrecision(2) + "<br>" +
  v.toPrecision(4) + "<br>" +
  v.toPrecision(6);  