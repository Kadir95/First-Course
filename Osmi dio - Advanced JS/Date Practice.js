// STRING

var igrac = "zazica beebic";
var igracTest = igrac.length; // duzina stringa
console.log(igracTest); 

var mjestoSlova = igrac.charAt(1); // koje se slovo nalazi na kojem broju
console.log(mjestoSlova);

var indexOf = igrac.indexOf("bic");  // trazi dati dio stringa s pocetka; ispisuje poziciju 
var idnexFo = igrac.indexOf("jest");
console.log(indexOf, idnexFo);

var lastIndex = igrac.lastIndexOf("ca"); // trazi dati dio stringa s kraja; ispisuje poziciju 
console.log(lastIndex);

var indexOf2 = igrac.indexOf('e', 7); // trazi dio stringa sa pocetkom na broju 7
var lastIndex2 = igrac.lastIndexOf('z', 10); // trazi dio stringa s kraja, sa pocetkom na broju 10


var cinjenica = 'NiKo je bosanskohercegovacki igrac CS-a';
var subStr = cinjenica.substring(6,9); // isjece string od pozicije x do pozicije y
var subStr2 = cinjenica.substr(0,10); // isjece string od pozicije x u duzini y
console.log(subStr);
console.log(subStr2);

var rep = cinjenica.replace('NiKo', 'Fixed'); // replace dio stringa x sa y
console.log(rep);


// NUMBERS

var rand = Math.random(); // generise broj od 0 do 1
console.log(rand);



var mn=Math.min(2,34,13,-12,100,23,-5); // nalazi najmanji br
var mx=Math.max(2,34,13,-12,100,23,-5); // nalazi najveci br
console.log(b);
console.log(c);


var rou=Math.round(8.9); // nalazi decimalu

var ce=Math.ceil(8.9); // zaokruzuje decimalu na prvi veci br
var ce2=Math.ceil(8.3);
console.log(ce);
console.log(ce2);

var flo=Math.floor(8.9); // zaokruzuje decimalu na prvi manj br
var flo2=Math.floor(8.3);
console.log(flo);
console.log(flo);

// TIME

var datum=new Date();

var sat=datum.getHours();
console.log(sat);

getHours() // kolko sati
getMinutes() // kolko minute
getSeconds()// kolko sekunde 
now() // broj milisekundi od 1970. do sada
getTime()// broj milisekundi od 1970. do sada
getDate() //  koji je dan u mjesecu
getMonth() //  koji je mjeseci
getFullYear() // tekuca godina
getDay() // koji je dan u sedmici



var datum=new Date();
var datum_dan=datum.getDate();
document.write("Sada je datum: "+ datum_dan + "<br/>");

var dan=datum.getDay();
document.write("Sada je redni broj dana u sedmici: "+ dan + "<br/>");

var mjesec=datum.getMonth();
document.write("Sada je redni broj mjeseca: "+ (mjesec+1) + "<br/>");

var sat=datum.getHours();
document.write("Sada je sati: "+ sat + "<br/>");

var minut=datum.getMinutes();
document.write("Sada je minuta: "+ minut + "<br/>");

var sekund=datum.getSeconds();
document.write("Sada je sekundi: "+ sekund + "<br/>");

setDate() // postavi zeljeni datum
setMonth() // postavi zeljeni mjesec
setFullYear() // postavi zeljenu godinu
setHours() // postavi zeljeni sat
setMinutes() // postavi zeljeni minute
setSeconds() // postavi zeljeni sekunde
setTime() // postavi broj milisekundi
setYear() // postavi godinu



