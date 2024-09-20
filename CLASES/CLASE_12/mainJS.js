//declaracion variables 
let nombre = "ivan",
    apellido = "velazquez",
    escolaridad = "universidad",
    ciudad = "cdmx",
    conocimientos = ["español", "matematicas"];

//version consola
console.log(
    `Hola, mi nombre es ${nombre} ${apellido}, estudio en ${escolaridad}, 
    algunas de las materias que curso son: ${conocimientos[0]}, ${conocimientos[1]} `
);

//version navegador
let frase1 = `Hola, mi nombre es ${nombre} ${apellido}, estudio en  la ${escolaridad} de ${ciudad}, 
            algunas de las materias que curso son: `;

conocimientos.forEach(conocimientos =>{
    frase1 += `\n - ${conocimientos}`
})
alert(frase1);

ciudad = "Guadalajara";
conocimientos.push("powerlift");

//version consola 
console.log(
    `me mude con mi familia a ${ciudad} y me meti a un equipo de ${conocimientos[2]}`
);

let frase2 = `Hola, mi nombre es ${nombre} ${apellido}, estudio en  la ${escolaridad} de ${ciudad}, 
            algunas de las materias que curso son: `;

            conocimientos.forEach(conocimientos =>{
                frase2 += `\n - ${conocimientos}`
            })
let salida = document.getElementById("salida");
    salida.innerHTML = frase2;