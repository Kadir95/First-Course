// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons1 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

dragons1.includes('Jordan');


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons2 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

if(dragons2.includes('John')) {
    console.log('John');
}


dragons2.filter(inside =>
    inside.includes('John'));


// #3) Create a function that calulates the power of 100 of a number entered as a parameter

const power100 = (x)=>x**100;


// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

const power100Dva = (x)=>x**100;
