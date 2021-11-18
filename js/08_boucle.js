/* Les boucles
*/

// La boucle FOR

/*
 for(3 argument){
    code
 } 
 1. initialise un compteur, par defaut on itulise i comme variable 
 2. condition à verifier (VRAI)
 3. "Pas" d'incrementation -> combien j'ajoute par tour (i++)
*/

// for (var i = 1; i<= 10; i+=2){
//     document.write("<p> Instrution executée : " + i + " fois.</p>");
// }

// // La boucle WHILE (tant que) 
// var j = 1;
// while (j <= 10){
//     document.write("<p> Instrution executée : " + j + " fois.</p>");
//     j++;
// }

// ----------- Exercice ---------
//j'ai 1000e sur mon compte chaque mois jajoute 50 sur mon compte combien de mois me faut-il pour avoir 2000e sur mon compte
var compte = 1000;
var argentMois = 50;
var mois= 20;

compte = parseInt(compte);
argentMois = parseInt(argentMois);
mois = parseInt(mois);


for (compte= 1000; compte<= 2000; compte+=50){
    document.write("<p> Votre solde est actuellement à : " + compte + " euro.</p>");
}
document.write("Bravo il vous a fallu 20mois pour incrementé votre compte a 2000e")

// While
var monCompte = 1000 ;
while(monCompte < 2000){
    document.write("<p> Vous avez droit à un versement de 50€ ! </p>");
    monCompte += 50;
    mois++;

    if(mois == 12){
        mois = 0;
        annee ++;
    }
    document.write("<p> Vous avez " + monCompte + " € </p>");
}

document.write("<p> Il vous faut " + annee + " annee et " + mois + " mois pour obtenir " + monCompte + " € sur votre compte ! </p>");
