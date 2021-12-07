// var nb = prompt("veuillez saisir un nombre entre 50 et 100");

// if ((nb >= 60) && (nb <= 100)){
//     document.write("You good")
// }else{ return nb
// }

var a = 50;
var b = 100;
var nb = prompt("veuillez saisir un nombre entre 50 et 100");

function saisienombre(nb) {
    if ((nb >= a) && (nb <= b)) {
        document.write( nb + " est entre " + a + b + ".");
    } else {
       return nb;
    }
};


// CORRECYION


var nombre = parseInt(prompt("Entrer un nombre entre 50 et 100 :"));
// premier methode sans inverse 
while (nombre >= 50 && nombre <= 100) {
    alert("le nombre : " + nombre + " que Vous avez saisie  est compris entre 50 et 100");
    nombre = prompt("Entrer un nombre entre 50 et 100 :");
}
// deuxieme methode avec l'inverse
while (nombre < 50 || nombre > 100) {
    alert("Vous avez saisie " + nombre + " n'appartient pas a l'intervalle 50 et 100");
    nombre = prompt("Entrer un nombre entre 50 et 100 :");
}
// troisieme methode avec boucle while et dedans if else 
while (nombre != 'quitter') {
    if (nombre >= 50 && nombre <= 100) {
        alert("le nombre : " + nombre + " que Vous avez saisie  est compris entre 50 et 100");
        nombre = prompt("Entrer un nombre  'quitter' pour quitter");
    }
    else if (nombre < 50 || nombre > 100) {
        alert("Vous avez saisie " + nombre + " n'appartient pas a l'intervalle 50 et 100");
        nombre = prompt("Entrer un nombre  'quitter' pour quitter");
    }
    else {
        alert("Erreure entrer un nombre correcte");
    }
}