//Closures -  kada se funkcija pokrene i izvrsi, nece se vise izvrsavati; child scope uvijek ima pristup parent scopeu ali ne obrnuto

function theFirst() {
    var sayHi = ("Hi");
    function theSecond () {
        alert(sayHi);
    }
    return theSecond;
}

const theFirst = () => {
    const sayHi=("Hi");
    const theSecond = () => {
        const name = "NBA";
        alert(sayHi)
    }
    return theSecond;
}


const novaFunction = theFirst();
novaFunction();


// Currying - proces pretvaranja funckije sa vise argumenata u funkciju koja ih uzima jednog po jednog

const mnozi= (x,y) => x*y;
const curryMnozi = (x) => (y) =>  x*y;
curryMnozi(3);
const mnoziSa10 = curryMnozi(10);



// Compose - stavljanje 2 funkcije zajedno da dobijemo 3.; u ovom slucaju izlaz jednu funkcije je ulaz druge

const compose = (x,y) => (a) => x(y(a));

const zbir = (broj) => broj+1;

compose(zbir, zbir )(10);


// Izbjegavanje Side Effecta, "cistoca" funkcije; 
// Side Effect - kada funkcija djeluje izvan svog scopea

var a = 10;
function b() {
    a=11;
}


