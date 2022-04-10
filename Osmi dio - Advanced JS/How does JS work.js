// JavaScript is a single thread language that can be non-blocking 
// znaci da ima samo jedan Call Stack - moze izvrsavati samo jednu stvar istovremeno
// jezici koji imaju vise Call Stackova su multi thread
// Sinchronys Programming - izvrsavanje koda liniju po liniju 


const  a = 1;
const b = 10;
const c = 100;

// Memory Leak - dio memorije(varijabla,string,objekat) koji se ne koristi nigdje i koji je zaboravlje; dzaba zauzima prostor

//call stack
console.log(1);
console.log(2);
console.log(3);

const jedan = () => {
    const dva =() => {
        console.log(2);
    }
    dva();
}


// CALL STACK


// Stack Overflow - kada je stack overflowan
// Recursion - funkcija koja se sama poziva
function foo() {
    foo();
}
foo();


// JavaScript Runtime Enviroment

// Asinhrono programiranje 
console.log(1);
setTimeout( ()  => {
    console.log(2);}, 3000);
console.log(3);


// CALL STACK

//API - dio browsera a ne JS-a

//CALLBACK QUEUE

// EVENT LOOP - provjerava da li je call stack prazan, ako jeste proverava Callback Queue; ako se nesto nalazi u CQ salje ga u call stack


nesto.addEventListener('click', ()=> {
    console.log('click');
})




