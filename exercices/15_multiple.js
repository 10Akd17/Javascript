// var chiffre = prompt("Veuillez saisir une chiffre entre")
// var i;
// for (i=0; i<=10; i++) {
    
//     document.write(chiffre+" x "+i+"="+chiffre*i+"<br>")
// }




// COOOREEECCTTIIIOOOOOONN

var choix = prompt("Veuillez saisir une chiffre entre 2 et 9 :");
while ((choix >1 ) || (choix < 10)){
    if ((choix >= 2) && (choix <=9)){
        for (var i = 1; i <= 10; i++){
            var resultat = choix * i;
            document.write(choix + " x " + i + "=" +choix*i+"<br>" ) 
        }
        break;
    } else{
            choix = number(prompt("entre un nombre entre 2 et  9"))
    }
}


// var chiffre = prompt("Veuillez saisir une chiffre entre");
// var i = i * chiffre;
// while (( chiffre >= 2) (chiffre <= 9)){
//     ;
//     document.write(i + chiffre)
// }

// var chiffre = prompt("Veuillez saisir une chiffre entre")
// var a = 2
// var b = 9
// var saisienombre = saisienombre
// function saisienombre() {
//     if ((chiffre >= 2) && (chiffre <= 9)) {
//         document.write( chiffre + " est entre 2 et 9.");
//     } else {
//        return chiffre;
//     }
// };



// Une autre correction Exercice 15 :


// let input = Number.parseInt(prompt("Please, enter a number between 1 and 9 to display the multiplication table."));
// let i = 1;
// let result = 0;
 
// while (!((input > 1) && (input < 10))) { // tant que input n'est pas strictement supérieur à 1 et strictement inférieur à 10, soit compris entre 1 et 10
//     alert("You have to write a number between 1 and 9.");
//     input = Number.parseInt(prompt("Try again, enter a number between 1 and 9."));
// }
// for (i = 1; i < 10; i++) {
//     result = input * i;
//     document.write("<p>" + input + " * " + i + " = " + result + "</p>");
