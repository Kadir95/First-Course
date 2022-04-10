// let , const = nacini da se varijable deklarisu

const igrac = "Roki"; // const se nikad ne moze mijenjat; 
let speed=100;
let level = false;

if (speed<110) {
    let lvl = true;
    console.log(1, lvl);
}

console.log(2, lvl);


const funk = function() {
    alert("OK.");
}

const user0 = { //svojstva objekta se mogu mijenjati ali ne i vrijednosti samog objekta
    ime : "Rasim",
    godine: 25,
    lvl : false,
} 


// DESTRUCTURING = pomaze pri uzimanje pojedinacnih vrijednosti iz odredjenih stvari 

const user = {
    id:1,
    ime : "Rasim",
    godine: 25,
    lvl : false,
}

const job = {
    id:0,
    name:"player",
}

/*
const user = user.ime;
const user= user.godine;
const user = user.lvl; */

const {da, id:jobId} = job;
const {id:userId ,ime, godine} = user; //uzmi ime i godine iz objekta; imamo pri ruci ime i godine uvijek kada ovo uradimo 
let {lvl} = user;

console.log(userId);
console.log(jobId);




//Object properties

const naziv = "Paul Paulinho "

const Igrac = {
    [naziv]: "Kovac",
    ["bond "+" james bond"]:"hello",
}


const a= "Simons"; 
const b=false;
const c = {};

const objekat = { // ako je svojstvo=vrijednosti necega
    a:a,
    b:b,
    c
}




// TEMPLATE STRINGS ` = mozemo koristiti bilo koji znak ("*?:+'") i ostaje idalje string

const pozdrav="Wilkommen" + name + " Ich hoffe es gefällt dir  " + pozdrav + "!";

const name="Lucky";
const age = 12;
const sport = "Soccer";
const pozdrav2=`Gdje si ${name}, kolko ti bjese godina? ${age}? Narastao si. Je l' igras i dalje ${sport}?`;



//DEFAULT ARGUMENTS

function greetThem(name='', age=50, sport=false) {
    return `Gdje si ${name}, kolko ti bjese godina? ${age}? Narastao si. Je l' igras i dalje ${sport}?`;
}




//SYMBOL = unikatan tip; koristi se kao identifikator za svojstva objekta

let sim1= Symbol();
let sim2=Symbol("boo");
let sim3=Symbol("hoo");




//ARROW FUNCTIONS

function sabrati(a,b) {
    return a+b;
}

const add = (a,b) => a+b;

const add2 = (a,b) => {
     return a+b;
}


const greetThem = (name='', age=50, sport=false) => `Gdje si ${name}, kolko ti bjese godina? ${age}? Narastao si. Je l' igras i dalje ${sport}?`;




// PRACTICE 



const igracina = [{age:32,
    name:"Phil",
    isAlive: true
}, {
    age:45,
    name:"John",
    isAlive: false
},
 {
    age:12,
    name:"Zyz",
    isAlive: true
}]



// concat

const firstA= [1,2,3];

const secondA=[4,5];

const thirdA = firstA.concat(secondA);

console.log(thirdA);

// concat ES6

const firstAa= [1,2,3];

const secondAa=[4,5];

const thirdAa = firstA.concat(secondA);

console.log(thirdA);






const newArray = [...firstA,7, ...secondA, 6]; // Spread Operator
console.log(newArray);


const player = [{age:32,
    name:"Phil",
    isAlive: true
}, {
    age:45,
    name:"John",
    isAlive: false
},
 {
    age:12,
    name:"Zyz",
    isAlive: true
}]


const newObject = 
    [{   age:2,
        name:"Hector",
        isAlive: true
    }
    ]

const newPlayer = [...player, ...newObject ];

console.log(newPlayer);


