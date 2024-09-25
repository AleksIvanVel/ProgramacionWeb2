    let num1= Number(prompt("Ingresa el primer valor: "));
    let num2 = Number(prompt("Ingresa el segundo valor: "));
    let num3 = Number(prompt("Ingresa el tercer valor: "))

    //estructura
    // if(num1 > num2){
    //     document.write(`Primer valor: ${num1} es mayor que el segundo valor: ${num2}`);
    // }else{
    //     document.write(`Primer valor: ${num1} es menor que el segundo valor: ${num2}`);
    // }

    //segunda condicional
        // if(num1 > num2){
        //     document.write(`Primer valor: ${num1} es mayor que el segundo valor: ${num2}`);
        // }else{
        //     if(num2 > num1){
        //         document.write(`Primer valor: ${num1} es menor que el segundo valor: ${num2}`);
        //     }else{
        //         document.write(`los numeros ingresados son iguales: ${num1} , ${num2}`);
        //     }
        // }

    // estructura else if
    if((num1 > num2) && (num1 > num3)){
        document.write(`Primer valor: ${num1} es mayor que el segundo valor: ${num2}
                        y que tercer valor: ${num3}`);
    }
    else if((num2 > num1) && (num2 > num3)){
        document.write(`Segundo valor: ${num2} es mayor que el primer valor: ${num1}
                        y que tercer valor: ${num3}`);
    }
    else if((num3 > num1) && (num3 > num2)){
        document.write(`Tercer valor: ${num3} es mayor que el primer valor: ${num1}
                        y que segundo valor: ${num2}`);
    }
    else{
        document.write(`al menos existen 2 valores iguales`);
    }