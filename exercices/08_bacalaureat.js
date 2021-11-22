var moyenne = prompt ("saisir une moyenne")


moyenne = parseInt (moyenne);

if(moyenne >= 12){
    document.write("Recu avec mention")
}else if ((moyenne >=12) && (moyenne <= 20)){
    document.write("bravo pour la mention")
}
else if(moyenne >= 10){
    document.write("Recu")
}
else{
    document.write("Recalé")
};

