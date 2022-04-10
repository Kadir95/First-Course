var b = "What's this";

function test1() {
    var a = "Zdravou";
}

//Root scope
var zabava = 5;
function zabavna() {
    //child scope
    var zabava="Zdravo!";
    console.log(1, zabava);
}

function zabavna2() {
    //child scope
    var zabava="Selam!";
    console.log(2, zabava);
}

function zabavna3() {
    //child scope
    var zabava="Sta ima?";
    console.log(3, zabava);
}

console.log(4, zabava);

zabavna();
zabavna2();
zabavna3();


function sabrati (a,b) {
    x=a+b;
    return x;
} 

console.log(sabrati(10,20));