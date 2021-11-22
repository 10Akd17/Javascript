var nb1 = prompt("entrez nb1 : ");
var nb2 = prompt("entrez nb2 : ");
var nb3 = prompt("entrez nb3 : ");



if (nb1 > nb2) {
    nb1 = nb3 * 2;
document.write(nb1 + nb2 + nb3)
}
else {
    nb1++;
    if (nb2 > nb3) {
        nb1 = nb1 + nb3 * 3;
        document.write(nb1 + nb2 + nb3)
    } else {
        nb1 = 0;
        nb3 = nb3 * 2 + nb2;
        document.write(nb1 + nb2 + nb3)
    }
    
};

