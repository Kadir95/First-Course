
var a =5; // a zna gdje primitivna vrijednost "5" je u memoriji/kutiji
var b=50; // b zna gdje primitivna vrijednost "10" je u memoriji/kutiji
var b = a;
 
b++;

console.log(a);
console.log(b);


let objectFirst={
    name:'Cruel',
    age:'20'
}

let objectSecond= objectFirst; //pass-by reference
objectSecond.age='230';

console.log(objectFirst);
console.log(objectSecond);


//array = object

var c=[1,2,4,5];

var d=c;
var d= [].concat(c); // concat ovdje pusha kontent iz c u prazan string 

d.push(312512);

console.log(d);

// object

const objekat = {a:'a', b:'b', c:{
    deepness:'Come and see',
}};

let clone = Object.assign({}, objekat) // kod assigna prvo se pise mjesto gjde kopiramo zatim mjesto iz kojeg kopiramo; clone nece biti izmijenjen ako je orginal izmijenjen
let clone2= {...objekat} //ES6 sintaksa;
//ovi klonovi kloniraju na prvom nivou adresne memorije/kutije
let superClone= JSON.parse(JSON.stringify(objekat)); // deep clone; parse pretvara u objekat

objekat.c.deepness='Idi i smotri';

console.log(objekat);
console.log(clone);
console.log(clone2);
console.log(superClone);


// PASS-BY REFERENCE - objekti skupa  u kutijama
// PASS-BY VALUE - elementi zasebno u kutijama


const passBy = {
    name:'u',
    age:20,
    status:true,
}

const passBy2= passBy;

passBy.name='Kadir';
console.log(passBy);
