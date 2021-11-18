// L'operateur ET : && ou AND sert a cumuller deux condition

// exemple
if((prenomLogin === prenom) && (ageLogin === monAge)){
    /*Code si les deux instructions sont vrais*/
}

if((A) && (B)){...}
=> si A est FAUX et B est VRAI => FAUX
=> si A est VRAI et B est FAUX => FAUX
=> si A est FAUX et B est FAUX => FAUX
=> si A est VRAI et B est VRAI => FAUX

// L'operateur OU : || ou OR (| = barre oblique = pipe =alt gr + 6)

if ((C) && (D)){...}
=> si C est FAUX et D est FAUX => FAUX
=> si C est FAUX et D est VRAI => VRAI
=> si C est FAUX et D est FAUX => VRAI
=> si C est VRAI et D est VRAI => VRAI

// L'operateur "!" signifie le contraire de ...
var utilisateur = true;
if(!utilisateurLog){
    //si l'utilisateur n'est pas loggé
}
// ce qui revient a :
if(utilisateurLog == false){
    //si l'utilisateur n'est pas loggé
}