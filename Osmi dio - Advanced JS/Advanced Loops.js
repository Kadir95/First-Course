const basked = ['Bread', 'apples', 'grapes'];
const detailedBasked = {
    Bread : 'white',
    apples : 10,
    grpaes: 1000
}

// array se u JS-u smatra kao objekat

// for of
// Iterating - kada prolazimo kroz svaki item/element pojedinacno; pomoci FOR OF petlje mozemo Iterirati
// Iterables - ono sto se da Iterirati a to su array, string
// objekti NISU iterabilni
for(item of basked) {
    console.log(item);
}

for(item of 'basked') {
    console.log(item);
}


let basket = {
    0: 'jabuke',
    1: 'grožđe',
    2: 'hljeb'
}

// for in - koristi se za objekte; loopamo kroz objekte i gledamo im propertije/keyevee
// enumerating - kada prolazimo kroz prepertije objekta; pomocu FOR IN petlje mozemo enumirati
// enumerables - ono sto se da enumerati a to su objekti,
//  array i string JESU enumaritabilni
for (item in detailedBasked) {
    console.log(item);
}





//1
for(let i=0; i<basked.length; i++) {
    console.log(basked[i]);
}

//2
basked.forEach(item=> {
    console.log(item);
})

//3
do {
    console.log(basked.join(" ++++ "))
} while(basked.length<3)



