
var prixht = prompt  ("Le prix hors taxe");
var taxe = 1.2;
prixht = parseInt(prixht);
var prixttc = prixht * taxe;

console.log(prixttc);

document.write( " La taxe est de " + taxe + " € ");
document.write( " Le prix total est de " + prixttc + " € ");
