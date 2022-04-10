// Type Coersion - kada su operandi(kod sa desne i lijeve strane od operatora) drugacijih vrijednosti, JavaScript ih pretvara u priblizno jednake vrijednosti
// desava se kad koristimo == (duplo jednako); == govori programu da provjeri jesu li operandi istog tipa i ako nisu  neka ih pretvori u iste
// === govori programu da provjeri operande ali da ih ne pretvara

1==='1';

if(1) { 
    console.log(5);
}


// Object.is

-0===+0;

Object.is(-0, +0);

NaN===NaN;
Object.is(NaN, NaN);