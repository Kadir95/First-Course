"Na pocetku".padStart(); // dodaje zeljeni razmak na pocetku ""
"Na kraju".padEnd(); // dodaje zeljeni razmak na kraju ""

const zbir = (a,b,c,d,) => { // dozvoljava zarez poslije zadnjeg item-a
    console.log(a+b);
}

zbir(1,2,4,3,);

const primjerObjekta = {
    key : value,
    key : value,
    osobina : vrijednost
}

Object.values // daje vlaue key-ova objekta
Object.entries // daje value i key objekta kao array
Object.keys // daje value i key objekta kao string

const Osoba = {
    username0: 'Densi',
    username1:  'Tare',
    username2 : 'Zigolo' 
}


Object.keys(Osoba).forEach((kljuc, index)=> {
    console.log(kljuc, Osoba[kljuc]);
})


Object.values(Osoba).forEach(vrijednost=>{
    console.log(vrijednost);
})

Object.entries(Osoba).forEach(vrijednost=> {
    console.log(vrijednost);
})



Object.entries(Osoba).map(vrijednost => {
    return vrijednost[1] + ' ' + vrijednost[0].replace('username', ' ');
})







