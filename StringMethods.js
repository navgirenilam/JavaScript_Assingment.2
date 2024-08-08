let X = "String and It's Methods"

let str="Welcome to Javascript"

let FirstName="Nilam"
let LastName="Navgire"
let FullName=(FirstName+LastName);

document.getElementById("Heading1").innerHTML=X;
document.getElementById("string1").innerHTML="str = "+str;
document.getElementById("FullName").innerHTML="The concated string is : " +FirstName.concat(" ", LastName);
document.getElementById("length").innerHTML="The string length is : "+(str.length);
document.getElementById("string2").innerHTML="The charAt(0) is :" +(str.charAt(0));
document.getElementById("string3").innerHTML="The charCodeAt(0) : "+(str.charCodeAt(0));
document.getElementById("string4").innerHTML="The codePointAt(1) : "+(str.codePointAt(1));

document.getElementById("string5").innerHTML="The string slice(10,21) : "+(str.slice(10,21));
document.getElementById("string6").innerHTML="The string replace : "+(str.replace("Javascript","Programming"));
document.getElementById("string7").innerHTML="The string endsWith : "+(str.endsWith("abc"));
document.getElementById("string8").innerHTML="The string startsWith : "+(str.startsWith("Wel"));

document.getElementById("string9").innerHTML="The string includes : "+(str.includes("World"));
document.getElementById("string10").innerHTML="The string indexOf J : "+(str.indexOf("J"));
document.getElementById("string11").innerHTML="The string lastIndexOf a : "+(str.lastIndexOf("a"));
document.getElementById("string12").innerHTML="The string split' ' : "+(str.startsWith(" "));
document.getElementById("string13").innerHTML="The string uper case : "+(str.toUpperCase());
document.getElementById("string14").innerHTML="The string lower case : "+(str.toLowerCase());
document.getElementById("string15").innerHTML="The string substr: "+(str.substr(11));
document.getElementById("string16").innerHTML="The string substr : "+(str.substr(15,21));
document.getElementById("string17").innerHTML="The string substring : "+(str.substring(11,15));








