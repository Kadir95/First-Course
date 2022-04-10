//uvijet ? izraz1 : izraz2

function isValid(bool) {
    return Boolean;
}

var Odgovor = isValid(true) ? "Mozete pristupiti " : "Pristup odbijen";

var AutoOdg = "Broj vaseg racuna je : "+(isValid(false)? "Mozda" : "Nikad" );


function uvijet() {
    if (isValid(true)) {
        return "Pristup dozvoljen!";
    } else {
        return "Pristup odbijen!";
    }
}

var Odgovor2 = uvijet();




function pomjerajSe(direction) {
    var staseDesi;
    switch  (direction) {
        case "Naprijed" : 
        staseDesi="Nevolja!!";
        break;

        case "Nazad": 
        staseDesi="Health & ammo!";
        break;

        case "Desno":
            staseDesi="Prone blocked!";
            break;
        
        case "Lijevo":
            staseDesi="Prone blocked!";
            break;
        
        default :
        staseDesi="Molimo idite negdje!";
    }
    return staseDesi;
}



function PlayTheGame(cards) {
    var whatHappens;
    switch(cards) {
        case "Magician " :
            whatHappens="His monter ate your maigician!";
            break;
        case  "Monster" :
            whatHappens="Your monster was stronger than his!";
            break;
        case "Spell" : 
        whatHappens="You drew!";
        break;
        default :
        whatHappens="Please draw a damn card!";
    }
    return whatHappens;
}