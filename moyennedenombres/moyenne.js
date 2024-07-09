let nombre = 0;
let somme = 0;
let moyenne = 0;
let x = 0;

nombre = parseInt(prompt("Donner le nombre de valeurs"));

for (let i = 1; i <= nombre; i++) {
    x = parseFloat(prompt("Donner une valeur"));
    somme += x;
}

if (nombre > 0) {
    moyenne = somme / nombre;
} else {
    moyenne = 0;
}

alert("Votre moyenne est de : " + moyenne);
