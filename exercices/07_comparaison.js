var utilisateur = prompt ("Saisissez un nombre");
var utilisateur2 = prompt ("Saisissez un deuxième nombre");

utilisateur = parseInt (utilisateur);
utilisateur2 = parseInt (utilisateur2);

var plusgrand = Quiestleplusgrand(utilisateur, utilisateur2);

function Quiestleplusgrand(a, b) {
    if (utilisateur2 > utilisateur) {
        document.write(utilisateur2 + " est plus grand que " + utilisateur + ".");
    } else {
        document.write(utilisateur + " est plus grand que " + utilisateur2 + ".");
    }
};
