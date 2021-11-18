// var jour = prompt("Veuillez saisir un jour de la semaine")
// var jourSemaine = ("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
// jour= jourSemaine.nextSibling
// if (jourSemaine= ("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi")) 
// document.write("Nous sommes un "+jourSemaine) 

var jourSaisir = prompt("Veuillez saisir un jour de la semaine")
// var jourSemaine = ("Dimanche") ("Lundi") ("Mardi") ("Mercredi") ("Jeudi") ("Vendredi") ("Samedi");
var a = "lundi";
var b = "mardi";
var c = "mercredi";
var d = "jeudi";
var e = "vendredi";
var f = "samdi";
var g = "dimanche";



if (jourSaisir === a){
    document.write(" Nous somme le " + b)

}
 else if (jourSaisir === b){
        document.write(" Nous somme le " + c )
    }
    else if (jourSaisir === c){
        document.write(" Nous somme le " + d )
    }
    else if (jourSaisir === d){
        document.write(" Nous somme le " + e )
    }
    else if (jourSaisir === e){
        document.write(" Nous somme le " + f )
    }
    else if (jourSaisir === f){
        document.write(" Nous somme le " + g )
    }
    else if (jourSaisir === g){
        document.write(" Nous somme le " + a )
    }else{
        window.location.href='https://www.youtubekids.com/'
    };

    switch(jour){
        case "lundi":
        console.log(" Nous somme le mardi ... ");
        break;
        case "mardi":
        console.log(" Nous somme le mercredi ... ");
        break;
        case "mercredi":
        console.log(" Nous somme le jeudi ... ");
        break;
        case "jeudi":
        console.log(" Nous somme le vendredi ... ");
        break;
        case "vendredi":
        console.log(" Nous somme le samdi ... ");
        break;
        case "samdi":
        console.log(" Nous somme le dimanche ... ");
        break;
        case "dimanche":
        console.log(" Nous somme le lundi ... ");
        break;
        default:
            console.log("jour inconnu...");
    }