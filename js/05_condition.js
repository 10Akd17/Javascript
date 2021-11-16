// alert('test')

// -- structure de base IF 

if(true){// entre parenthese la condition
    /* code */
}

var nb1 = 10;
if(nb1 < 50){
    console.log("nb1 est inferieur a 50");
}

if(true){
    //code
}
else {
    // code sinon
}

nb1 = 60;
if(nb1 < 50){
    console.log("nb1 est inferieur a 50");
} else{
    console.log("nb1 est superieur a 50");
}

// on utilise le IF pour verifier l'age de l'internaute.
// si il est majeur on lui souhaite la bienvenue
// sinon [1] je lui signale et [2] je le renvoie vers un autre site

var internaute = prompt ('Entrez votre age')
if( internaute >= 18){
    alert("Bienvenue a vous jeune homme Majeur :)")
    document.write("Salut a toi jeune homme super majeur");
}
else{
    alert('DEGAGE DU SITE MORVEUX')
    window.location.href='https://www.youtubekids.com/'
};
