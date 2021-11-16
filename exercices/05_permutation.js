var nbr1 = 5; //3
var nbr2 = 3;
var nbr3 = 0; //5
// temp = x
// x = y
// y = temp

nbr3 = nbr1;
console.log(nbr3)
nbr1 = nbr3;
console.log(nbr1)
nbr1 = nbr2;
console.log(nbr1,nbr2,nbr3);
nbr2 = nbr3;
console.log(nbr1,nbr2,nbr3);

delete nbr3;
console.log(nbr1,nbr2,nbr3);

document.write( 'les variables nombre1 et nombre2 sont de valeur : '+ nbr1 + " , " + nbr2 );


// COREECTION

/* 
var nombre1= 5;
var nombre2 = 3;
var temp;

console.log("nombre = 5 : " + nombre1);
console.log("nombre = 3 : " + nombre2);

temp = nombre1;
nombre1 = nombre2;
nombre2 = temp;

console.log("nombre = 5 : " + nombre1);
console.log("nombre = 3 : " + nombre2):

*/





