// var mot = prompt("veuillez saisir un mot")
// var elimination = "oui"
// var elimination1 = "non"

// while(mot != elimination)
// if((mot !== elimination)&&(mot !== elimination1)){
//     mot = prompt("veuillez saisir un mot")

// }else{
//     document.write("tu a perdu au ni OUI ni NON")
// }


/* CORRECTION*///

var dismoi = ""
var i = 1;
while ((dismoi !== "oui")&&(dismoi !== "non")&&(dismoi!=="Oui")&&(dismoi !== "Non")&&(dismoi!=="OUI")&&(dismoi!=="NON")){
    dismoi = prompt("Aller ! On joue a ni OUI ni NON?");
    document.write("" + dismoi + '" n\'est pas une réponse, pour la  ' + i +"° fois, veux-tu jouer à ni OUI ni NON ? <br>")
    i++;
}
i--
document.write("<p style='background-color:cyan; text-align:center';> PERDU ;-) Tu as tenu " + i + "tours.</p>")