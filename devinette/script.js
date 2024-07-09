let nombreJeu = 30;
let nombreUtilisateur = parseInt(prompt("Devinez le nombre"));

while (nombreUtilisateur !== nombreJeu) {
    if (nombreUtilisateur > nombreJeu) {
        nombreUtilisateur = parseInt(prompt("Le nombre est inférieur,réessayez encore :"));
    } else if (nombreUtilisateur < nombreJeu) {
        nombreUtilisateur = parseInt(prompt("Le nombre est supérieur,réessayez encore :"));
    }
}
alert("Bravo vous avez deviné le nombre");


