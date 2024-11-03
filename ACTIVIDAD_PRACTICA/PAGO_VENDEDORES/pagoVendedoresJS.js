let  sueldoTot

 function calcularSueldo(){
    let nombre = document.getElementById("nombre");
    let sueldoBase = parseFloat(document.getElementById("sb").value);
    let venta1 = parseFloat(document.getElementById("v1").value);
    let venta2 = parseFloat(document.getElementById("v1").value);
    let venta3 = parseFloat(document.getElementById("v1").value);

    let venta = venta1 + venta2 + venta3;
    console.log(venta)

    if(venta < 2000 ){
        sueldoTot = sueldoBase;
    }
    if(venta >= 2000 && venta <= 500){
        sueldoTot = (sueldoBase * 0.05) + sueldoBase;
    }
    if(venta > 5000){
        sueldoTot = (sueldoBase * 0.10) + sueldoBase;
    }

    let fila = `<tr>
                     <td>${nombre.value}</td>
                     <td>sueldo total: $ ${sueldoTot}</td>
                    </tr>`;
    
    let newFila = document.createElement("tr");
    newFila.innerHTML = fila; 
    document.getElementById("tResBody").appendChild(newFila);


}