// BigInt - big integer; koristi se kada zelimo koristiti broj veci od MAX_SAFE_INTEGER

typeof BigInt;

typeof 32n; //BigInt


// Optional Chaining Operator ?.

let user={
    karta: {
        boja:'crvena',
        znak: 'srce',
        broj: 2
    }

}

let finder = user.karta.znak;
console.log(finder);

let user2={
    karta2: {
        boja:'crvena',
        znak: 'jastuk',
        broj: 8
    }

}

// KOMPLIKOVANO
if(user2.karta && user2.karta.broj) {
    let finder2 = user2.karta.broj;
console.log(finder2); 
}
else {
    let finder2 = undefined;
    console.log(finder2);
}

// JEDNOSTAVNO
let finder3 = user2?.karta2?.broj; // ? - dali postoji objekat; . - spaja dalje;
console.log(finder3);

let finder4 = user2?.karta?.znak;
console.log(finder4);



// Nullish Colescing Operator - ??; provjerava je li vrijednost Null ili Undefined

const player = {
    card1 : {
        type:'Dragon',
        level: 8,
        name: 'Sibirski plavac',
        attack: 0
    }
}

let attack = player?.card1?.attack || "no power";
console.log(attack);

let attack2 = player?.card1?.attack ?? "no attack";
console.log(attack2);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//
// PRACTICE

// Exercise 1: what do you think the MIN_SAFE_INTEGER is?
console.log(Number.MAX_SAFE_INTEGER) // 9700..
console.log(Number.MIN_SAFE_INTEGER) // -9700...

// Exercise 2: why does this throw an error? How can you fix it?
3 + 4 + 1n // BigInt ne ide sa obicnim brojevima
3+4+1;
3n+4n+1n;
// Exercise 3: Clean up this code using optional chaining
let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}

if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
    && will_pokemon.pikachu && will_pokemon.pikachu.friend 
    && will_pokemon.pikachu.friend.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }

if(andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard) {
    console.log("Fight");
} else {
    console.log("Run away!");
}


// Exercise 4: What do these each output?
console.log(false ?? 'hellooo') // false
console.log(null ?? 'hellooo') // hallooo
console.log(null || 'hellooo') // helooo
console.log((false || null) ?? 'hellooo') // helooo
console.log(null ?? (false || 'hellooo')) // helooo





