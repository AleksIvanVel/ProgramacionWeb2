function calcula(operacion){
    let op1 = document.calc.op1.value;
    let op2 = document.calc.op2.value; 

    let result = eval(op1 + operacion + op2);

    document.calc.result.value = result
}

function muestraD(){
    //texto unilinea
    let valorN = document.getElementById("nombre").value;

    //texto multilinea
    let valorMulti = document.getElementById('multiLi').value;

    //menu desplegable - direccionar siempre con ID 
    let mDes = document.getElementById("menuDesp");
    let itemMenuDes = mDes.options[mDes.selectedIndex].value;

    // check box
    let cb1 = document.getElementById("chec1");
    let cb2 = document.getElementById("chec2");
    let cb3 = document.getElementById("chec3");
    
    if (cb1.checked == true){
        var vcb1 = cb1.value;
        console.log(vcb1)
    }else{
        vcb1 = "-";
    }

    if (cb2.checked == true){
        var vcb2 = cb2.value;
        console.log(vcb2)
    }else{
        vcb2 = "-";
    }




    let radio = document.getElementsByName('opcR');

    for(let i=0; i<radio.length; i++){
        if(radio[i].checked == true){
            var valRad = radio[i].value;
            console.log(valRad);
        }
    }

    //Salida de datos
    document.write("<h2>Su nombre es: </h2>", valorN);
    document.write("<h2>Valor multilinea es: </h2>", valorMulti);
    document.write("<h2>Valor seleccionado del menu deplegable: </h2>", itemMenuDes);
}