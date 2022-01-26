
 if(4+3 === 7) {
    alert("Tacno");
} 

 var a = prompt("unesite prvi broj : "); var b = prompt("Unesite drugi broj : "); sum = Number(a) + Number(b); sum = alert("Rezultat je  : " +  sum);

console.log("Uh oh open it up - Migos");
console.log("Uh oh open it up, " + "Migos");

// FUNKCIJE //

function sayZdarova() {
    console.log("Zdarova!");
}

sayZdarova(); // funckije se pozivaju sa ()

var sayDoVidjenja = function() {
    console.log("Do vidjenja");
}

sayDoVidjenja();



function song1 (singThis) {
    console.log(singThis);
}
song1("Da kraj njega sada imas sve");
song1("A jos pitas za mene!");






 function multiply (a,b) {
    if (a > 10 || b > 5) {
        return "Previse!"
    } else {
        return a*b;
    }

}
multiply(22,2);  


  function pomnozi (a,b) {
    return a*b;
}
 alert(pomnozi(3,21)); 




 var godine = prompt("Unesite godine : ");

 if (Number(godine) < 18) {
     alert("Premlad!");
 } else if (Number(godine) === 18) {
     alert("Taman!");
 } else if (godine > 18) {
     alert("Rokaj!");
 }





function provjeriGodine() {
    var godine = prompt("Unesite godine");
    if (Number(godine) < 18) {
        alert("Premlad!");
    } else if (Number(godine) === 18) {
        alert("Taman!");
    } else if (godine > 18) {
        alert("Rokaj!");
    }
}

provjeriGodine(); 


var driversAge2 = function () {
    var godine = prompt("Unesite godine : ");
    if (Number(godine) < 18) {
        alert("Premlad!");
    } else if (Number(godine) === 18) {
        alert("Taman!");
    } else if (godine > 18) {
        alert("Rokaj!");
    }
}

driversAge2(); 


function driversAge(godine ) {
    if (godine < 18) {
        return "Premlad!";
    } else if (godine === 18) {
        return "Taman.";
    } else if (godine > 18 ) {
        return "Rokaj!";
    }
}






