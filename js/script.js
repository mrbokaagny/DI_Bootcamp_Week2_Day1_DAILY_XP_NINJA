// Ex0 1

5 >= 1
// prediction : true
// outputs : true
0 === 1
// prediction : false
// outputs : false
4 <= 1
// prediction : false
// outputs : false
1 != 1
// prediction : false
// outputs : false
"A" > "B"
// prediction : false
// outputs : false
"B" < "C"
// prediction : true
// outputs : true
"a" > "A"
// prediction : true
// outputs : true
"b" < "A"
// prediction : false
// outputs : false
true === false
// prediction : false
// outputs : false
true != true
// prediction : false
// outputs : false

// Ex0 2

let string_number = prompt("Saisissez une suite de chiffre séparé par des virgule :");
let table_number = string_number.split(",");
let somme = 0;

for (let i = 0; i < table_number.length; i++) {
    somme += parseInt(table_number[i]);
}
console.log(somme);

// Exo 3

let phrasal = prompt("Entrer ue phrase contenant le mot Nemo :");
let index = phrasal.indexOf("Nemo");
console.log((index != -1) ? "found" : "not found Nemo");

// Exo 4
const goodResult = "boum";
let incomming_number = prompt("Saisissez un nombre :");

if (incomming_number < 2) {
    console.log(goodResult);
} else if(incomming_number > 2 ) {
    if(incomming_number % 2 == 0 && incomming_number % 5 == 0) {
        console.log((goodResult+"!").toUpperCase());
    }
    else if(incomming_number % 5 == 0) {
        console.log(goodResult.toUpperCase());
    }
    else if(incomming_number % 2 == 0 ) {
        console.log(goodResult + "!");
    }
    else {
        console.log(" la chaîne doit comporter n nombre de 'o' (n étant le nombre donné)")
    }
}
