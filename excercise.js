var bazaPodataka = [ {
    sport: "Fudbal",
    sifra: "12345",

},
{
    sport:"Kosarka",
    sifra:"678910",
},
{
    sport:"Hokej",
    sifra:"88888",
}
]


var timeline = [
    {
        user:"Johan",
        post:"Relaxing in Germany!"
    },
    {
        user:"Tenma",
        post:"Working the night shift!"
    },
    {
        user:"Detective",
        post:"Tired!"
    }
]


function userValidation(sport, sifra) {
    for(var i=0;i<bazaPodataka.length;i++)
    {
        if (bazaPodataka[i].sport===sport && bazaPodataka[i].sifra===sifra) {
        return true;
    }
    }
    return false;
}


function prijaviSe(sport,sifra) {
  if (userValidation(sport,sifra)) {
      console.log(timeline);
  } else {
      alert("Try again.");
  }
}

var upitSport=prompt("Vas sport :");
var upitSifra = prompt("Sifra : ");

prijaviSe(upitSport, upitSifra);




