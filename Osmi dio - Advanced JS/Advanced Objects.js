// reference type -  to su objekti kreirani od strane programera a ne programa; storaju se u posebne "boxove"



var brojRandom=1; //primitiv type; broj, NaN, boolean, undefined...
var firstObject = {value:10};
var secondObject = firstObject;
var thirdObject={value:10};


// context vs scope; scope se kreira pri kreiranju {}
function scope() {
    a = 10;
}
console.log(a);
//context - govori nam gdje se nalazimo unutar objekta;
//this = window; this mozemo posmatrai kao "sta je lijevo od tacke"; this.alert, npr
const objekat1= {
    a: function() {
           console.log(this);
    }
   }

// instantation - kreiranje kopije objekta i ponovno koristenje istog koda

class Weapon {
    constructor(name, type) { //svaki puta kada se kreira objekat u ovoj klasi, prvo se pokrece contructor funkcija koja kreira navedene parametre
        console.log('weapon', this);
        this.name=name; // this ovdje koristimo da kad kreiramo objekat, mozemo koristito propertije u constructoru
        this.type=type;
    }
    introduce() { // mozemo kreirati bilo kakve metode i funkcije koje objekat moze imati
        console.log(`Ovo je ${this.name} i tip je ${this.type}`);
    }
}

class Soldier extends Weapon { // svaki put kada extendamo nesto moramo zvati constructor funkciju klase koju extendamo
    constructor(name, type){
        super(name,type) // u superu pisemo vrijednosti koje saljemo constructoru; kada koristimo extend, onda koristimo super da pristupimo originalnom contructoru
                        // super odmah runa originalni constructor u originalnoj klasi
         console.log('soldier', this);
    }
    use() {
        console.log('Zdravo ja koristim '+this.name);
    }
}

soldier1 = new Soldier('AK-47','Infantry');
soldier2 = new Soldier('M1 Abrams', 'Heavy');



//PRACTICE
class Animal {
    constructor(name,type,color) {
        this.name=name;
        this.type=type;
        this.color=color;
    }

}


class Mamal extends Animal {
    constructor(name,type,color) {
    super(name,type,color) 
    }
    moo(){
        console.log('Ja sam '+this.name+'i vrsta sam'+this.type+'i boja mi je '+this.color+'!');
    }
}

cow = new Mamal('Sarulja', 'milk', 'white and brown');






