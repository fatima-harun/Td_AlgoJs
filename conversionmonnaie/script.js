euro = 655;
tauxdechange = 0;
let somme = parseInt(prompt("Quelle est la somme d'argent"));
while(somme < 0){
  somme = parseInt(prompt("la somme doit etre supérieure à zéro"))
}
tauxdechange=somme*euro
alert("la somme est de : " + tauxdechange)

