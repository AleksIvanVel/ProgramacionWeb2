// variables
let estacion = prompt("Escribe una estacion del anio en minusculas");

switch(estacion){
    case "invierno":
        document.write(`En la estacion: ${estacion}, hace frio`);    
    break;

    case "primavera":
        document.write(`En la estacion: ${estacion}, hay flores`);    
    break;

    case "verano":
        document.write(`En la estacion: ${estacion}, hace calor`);    
    break;

    case "otoño":
        document.write(`En la estacion: ${estacion}, se caen las hojas`);    
    break;

    default: 
        alert("estacion no valida");
}