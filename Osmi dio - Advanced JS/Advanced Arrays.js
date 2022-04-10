// Advanced Arrays

var array1 =[1,2,3,4,5];

const double = [];
const noviNiz = array1.forEach((num) => {
    double.push(num*10);
})

console.log('forEach', double);


// Map -loopaj kroz svaki element niza i vrati novi array; za svaki element u nizu vraca novi element

const mapArray = array1.map((num) => {
   return num*10;
})

console.log('map', mapArray);



// kada imamo jedan parametar mozemo ga pisati bez zagrada; (num) => num



// Filter - filtriraj ovaj array, prijeđi svaki element pojedinačno i returnaj ako je uslov ispunjen


const filterArray= array1.filter((num)=> { // filtriraj ovaj array, prijeđi svaki element pojedinačno i returnaj ako je uslov ispunjen
    return num<5;
})

console.log('filter', filterArray);

// Reduce 

const reduceArray= array1.reduce((accumulator, num) => { // accumulator - mjesto gdje stavljamo informaciju koja se nalazi u tijelu funkcije;  zna ste se desilo u prvom krugu petlje
    return accumulator + num;

}, 0) // sa kojim borojem cemo poceti

console.log('reduce', reduceArray);


// Practice

const players = [{age:32,
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
   


const mapping = players.map(player => { return player.name }) // `

console.log(mapping);

const mappingWithDestr = players.map(({name, age}) => ` ${name} is  ${age} years old`)

console.log(mappingWithDestr);


const filtering = players.filter(player => {
    return player.isAlive==true ;
})

console.log('filter', filtering);


const mapping2 = filtering.map(player => {
    return player.name
})

console.log(mapping2); 
















