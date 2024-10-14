function calcula(operacion){
    let op1 = document.calc.op1.value;
    let op2 = document.calc.op2.value; 

    let result = eval(op1 + operacion + op2);

    document.calc.result.value = result
}

function muestraD(){
    let valorN = document.getElementById('nombre').value;
    let valorMuly = document.getElementById('miltiLi').value;

    let radio = document.getElementsByName('opcR');

    for(let i=0; i<radio.length; i++){
        if(radio[i].checked == true){
            var valRad = radio[i].value;
            console.log(valRad);
        }
    }
}