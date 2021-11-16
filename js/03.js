// alert("ok");

// --1. Addition

// Je declare plusieur variables en meme temps sur la meme ligne
var nb1, nb2, resultat;

// J'affecte des valeurs
nb1 = 10;
nb2 = 5;

// J'utilise mes variables avec un calcul
resultat = nb1 + nb2;

// J'affiche le resultat dans la console
console.log(resultat);

// -- 2. Soustractions
resultat = nb1 - nb2;
console.log(resultat);

// -- Multiplication
resultat = nb1 * nb2;
console.log(resultat);

// -- Division
resultat = nb1 / nb2;
console.log(resultat);

// -- Modulo
// Le modulo retourne le reste d'une division
resultat = nb1 % nb2;
console.log(resultat);

nb1 = 11;
resultat = nb1 % nb2;
console.log("Le reste de la division de " + nb1 + " par " + nb2 + " est égale à: " + resultat);

// -- Les ecriture simplifiées
nb1 = 15;
nb1 = nb1 + 5; //égale a 20

nb1 += 10; // nb1 = nb1 +10; (nb1 = 20) + (nb1 = 10);
console.log('Le resultat de "nb1 += 10" est ' + nb1);

nb2 -= 2; // nb2 = nb2 - 2; (nb2 = 5) - (nb2 = 2);
console.log(nb2);// L'ecriture simplifiée fonctionne aussi avec les autres operateurs

// Je peux échapper a un caractere avec un anti-slash (alt gr + 8)
