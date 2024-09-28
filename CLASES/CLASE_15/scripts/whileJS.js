// ciclo while
document.write("ciclo de 1 a 'n' cantidad de veces");

    //variables 
    let num = 1;

    //bloqie while
    while(num != 0 ){
        num = prompt("escribe 0 para salir");
    }
    document.write("<p> presionaste caracter 0</p>");


    //secuencia de numeros con wile

    document.write("<h2>Secuencia while</h2>");
    let i = 1;
    while(i <= 10){
        document.write("<p>numero = ", i, "</p>");
        i++;
    }

    //ciclo  Do While
    document.write("<h2>Ciclo Do While</h2>");
    let j = 5;
    do{
        document.write("<p> el valor de J es: ", j, "</p>");
        j += 5;
    }while(j <= 50)