alert("test");

var nb1 = 123;
var nb2 = "123";
console.log(nb1 == nb2); //true
// == compare les valeurs

console.log(nb1 === nb2);// false
// === compare les valeurs et types de variable

console.log(nb1 != nb2) // false
// != different en valeur

console.log(nb1 !== nb2); // true
// !== different en valeur et en type

// ---------------- Exercice ----------------

// var prenom = "abd" ; 
// var age = "23" ;

// var prenom_saisie = prompt ("veulliez saisir votre prenom") ;
// var age_saisie = prompt ("Veuillez saisir votre age") ;

// age_saisie = parseInt (age_saisie);

// console.log(prenom_saisie == prenom);
// console.log(age_saisie == age)

// console.log(prenom_saisie === prenom);
// console.log(age_saisie === age);

// console.log(prenom_saisie != prenom);
// console.log(age_saisie != age);

// console.log(prenom_saisie !== prenom);
// console.log(age_saisie !== age);

// if (prenom_saisie == prenom && age_saisie == age)
// {
//     document.write("BEINVENU CHAMPIOON");
// }
// ;
// if (prenom_saisie === prenom && age_saisie === age){
//     document.write("BEINVENU CHAMPIOON");
// }

// if (prenom_saisie != prenom && age_saisie != age){
//     document.write("BEINVENU CHAMPIOON");
// }
// ;
// if (prenom_saisie !== prenom && age_saisie !== age){
//     document.write("BEINVENU CHAMPIOON");
// }
// else{
//     window.location.href='https://www.youtubekids.com/'
// }
// ;

// ---------------- CORRECTION ----------------

var prenom, monAge, prenomLogin, ageLogin;
prenom = "abd";
monAge = 23;

prenomLogin = prompt ('quel est votre prenom');
if (prenomLogin === prenom){
    ageLogin = parseInt(prompt('Votre age?'));
    if(ageLogin === monAge){
        alert("Bienvenue " + prenomLogin);
    }else{
        alert("Votre age n'est pas celui stocké en base de donnée")
    }
}else{
    alert('Attention, prénom non reconnu');
};