let texto = "texto tipo cadena".charAt(2);
console.log(texto);

let texto1 ="texto cadena" [8];
console.log(texto1);

let texto2 ="texto cadena" [2];
console.log(texto2);

let texto3 ="texto cadena 3";
let guardaCaracter = texto3[6];
console.log(guardaCaracter);


// LISTAS

let pizza = ["masa", "tomate", "queso", "especia"];
let elementoPizza = pizza[1];

    console.log(elementoPizza);

let pizza1 =  ["masa", "tomate", "queso"];
let guarda1 = pizza1[0].charAt(2)
let guarda2  = pizza1[0][2];

    console.log(guarda1);
    console.log(guarda2);

// LISTAS CON DIFERENTES TIPOSDE DATOS
let arrMix = ["masa", 3, "tomate", 4]

let sum = arrMix[1] + arrMix[3];
    console.log("suma de elementos num de array mix: ",sum);