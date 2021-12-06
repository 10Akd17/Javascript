var heur = prompt("Veuillez saisir une heure");
var min = prompt("Veuillez saisir des minute");
var sec = prompt("Veuillez saisir une seconde");



if ((heur >=0 ) && (heur <=23) && (min >=0 ) && (min <=59) && (sec >=0) && (sec <= 59 )){
    sec++;
    if(sec === 60){
        sec = 0;
        min++;
        if(min === 60){
            min = 0
            heur++;
            if ( heur === 24){
                heur = 0;
            }
        }
    }
    document.write("<p> dans 1 seconde il sera " + heur + "h" + min + "min" + sec+ "s</p>");

}else{
    document.write("heure incorrecte !")
}

// if ((sec > 59)&&(min >= 59)){
//     min = 00;
//     sec = 00;
//     document.write(heur + ":" + min + ":" + sec );
        
// }else {
//     sec++
//     document.write(heur + ":" + min  + ":" +sec);
// };

// if(min >= 59){
//     min = 00;
//     heur+
//     document.write(heur + ":" + "00" + ":" + sec )

// }else {
//     document.write(heur + ":" + min  + ":" +sec);
// };

// if(heur >= 24){
//     heur = 00;
//     document.write(heur + ":" + min  + ":" +sec )
// }else {
//     document.write(heur + ":" + min  + ":" +sec);
// };
