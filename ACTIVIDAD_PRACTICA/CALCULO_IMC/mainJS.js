 

let nombre = prompt("Ingrese su nombre: ");
let peso = parseFloat(prompt("Ingrese su peso en kg: "));
let altura = parseFloat(prompt("Ingrese su altura en m: "));

if(isNaN(peso)|| isNaN(altura)){
    alert("Alguno de los datos solicitados no fue ingresado correctamente, recargue la pagina para vovler a ingresarlos");
    document.write("Error al mostrar la informacion del paciente")
}
else{
    let imc = (peso) / (altura * altura);

    document.write("Nombre del paciente: ", nombre, "<br>");
    document.write("Peso: ",peso,"<br>");
    document.write("Altura: ",altura,"<br>");

    document.write("El IMC del paciente es: ", Math.round(imc));

    if(imc > 25){
        document.write("<br> <p style = 'color:red';>Su indice de masa corporal es alto, se recomienda dieta y ejercicio :)</p>");
    }
    else if (imc >=22 && imc <=25){
        document.write("<br> <p style = 'color:green';>Su indice de masa corporal esta en un rango normal, está en el peso correcto!</p>");
    }
    else {
        document.write("<br> <p style = 'color:blue';>Su indice de masa corporal es bajo, coma más</p>")
    }

}

 
