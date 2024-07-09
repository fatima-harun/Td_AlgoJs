let fahrenheit = 0;
let temperature = parseInt(prompt("Donner la température en degrés Celsius"));

while (temperature > 100) {
    temperature = parseInt(prompt("Température invalide, veuillez donner un chiffre inférieur ou égal à 100"));
}

fahrenheit = temperature * (9/5) + 32;

alert("La température en Fahrenheit est de : " + fahrenheit);
