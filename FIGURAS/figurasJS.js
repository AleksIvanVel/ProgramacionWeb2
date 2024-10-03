// figura 1 triangulo 1 
document.write('<h2>Figura triangular 1</h2>')
for (let i = 1; i <= 4; i++) {

    // Agregar espacios
    for (let j = 0; j < 4 - i; j++) {
       document.write("&nbsp &nbsp")
    }
    for (let k = 0; k < i; k++) {
        document.write('*')
    }
    document.write('<br>')
}

// figura 2 triangulo 2 
document.write('<h2>Figura triangular 2</h2>')
for (let i = 1; i <= 4; i++) {
    for (let k = 0; k < i; k++) {
        document.write('*')
    }
    document.write('<br>')
}
for (let i = 3; i >= 1; i--) {
    for (let k = 1; k <= i; k++) {
        document.write("*")
    }
    document.write('<br>')
}


// figura 3 triangulo 3 
document.write('<h2>Figura triangular 3</h2>');

let numIteraciones = parseInt(prompt('Ingrese el numero de iteraciones: '));

for (let i = 1; i <= numIteraciones; i++) {
    for (let j = 1; j <= i; j++) {
        for (let k = 1; k <= j; k++) {
            document.write("*");
        }
        document.write("<br>"); // Salto de línea después de cada patrón de una línea
    }
}
