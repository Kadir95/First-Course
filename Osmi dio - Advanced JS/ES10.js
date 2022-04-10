fromEntries() // suprotno od entriesa; daje nam array kao objekat

userProfiles = [['Erwin', 40], ['Lewi', 30], ['Hange', 30]];


const objekt = Object.fromEntries(userProfiles);
Object.entries(objekt);



flat() // metoda za array

const array = [1,[2,3],[,4,5]];
array.flat();

const array2 = [1,2,[3,,4,[[5]]]];
array.flat(2); // depth = 2


const zooVrt= [['tigar','lav'],[[[['slon']]]],[['zirafa']]];
zooVrt.flat(50);

const entries = ['Slovenija', 'Slovacka',,,,'Rusija'];
entries.flat();



flatMap() // spoj map + flat za array-ove; prvo flatenamo array a zatim dodajemo map po zelji; flatena rezultat do depth = 2

const zooVrt2 = zooVrt.flatMap(creature => creature + ' Rep');


trimStart() // trima prazna mjesta na pocetku stringa
trimEnd() // trima prazna mjesta na kraju stringa

const userEmail = "          samsung@info.com";
let userEmail2= "keyboardwarrior@gmail.com        ";

userEmail.trimStart(); 
userEmail2.trimEnd();



// try catch - dozvoljava do probamo kod i "uhvati" errore ako ih ima; u catch postavljamo uvjete errora
//ES10
try {
    110 + StoDeset
} catch {
    console.log('Ne znas programirat')
}

// Prije ES10
try {
    string + 'Number'
} catch (error) {
    console.log('Ne znas programirat ' + error)
}