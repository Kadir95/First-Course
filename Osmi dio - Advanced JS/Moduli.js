// Moduli - razlicit dijelovi koda ; umjesto jedne ogromne celine imamo vise dijelova


// IIFE - immediate invoked function expression 
// zamota funkciju u () da JavaScript zna da mora executati ono unutra i stavlja () poslije da Java executa funkciju 
// rjesava problem overusanja varijabli
// mana : tesko pratiti redoslijed fajlova


var aplikacija= {};

(function(){
    aplikacija.add = function(a,b) {
        return a+b;
    }
})();


// Browserify - koristi CommonJS; dok god koristimo sintaksu CommonJS-a, znace da sve fajlove strpa u jedan 
// Module Bundler - executa prije nego sto je site online; prodje kroz cijeli kod JS-a i sve fajlove "sveze" u jedan

// prvi file
module.exports = function add(a,b) {
    return a +b;
}

// drugi file
var add = require("./imePrvogFajla"); 


// ES6 + Webpack2 - dobijamo import i export; 
// Webpack2 - module bundler; pomocu njega mozemo korisiti ES6 na svim browserima 

// prvi fajl
export const sabrati = (a,b) => {
    return a + b;
}

export default function add() {
    return a+b;
}

// drugi fajl
import { add } from "./prvifajl";

import add from "./prvifajl";

