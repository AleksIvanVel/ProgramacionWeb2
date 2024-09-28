//ciclo for
document.write("<h2>Secuencia con ciclo for</h2>")
    
    //secuencia con for
    for(i=0; i<=10; i++){
        document.write("<p>secuencia: ", i, "</p>");
    }
       
    //secuencia con for y brek
    document.write("<h2>Secuencia con ciclo for y elemento break</h2>")
    for(i=0; i<=10; i++){
      document.write("<p>secuencia: ", i, "</p>");

      if(i == 7){
        break; //interrumpe el ciclo 
      }
    }

     //secuencia con for y continue
    document.write("<h2>Secuencia con ciclo for y elemento continue</h2>")
    for(i=0; i<=10; i++){
       if((i>=4) && (i<=7)){
            continue; //interrumpe el ciclo 
        }
        document.write("<p>secuencia: ", i, "</p>");
    }

    //figuras con ciclos 
    document.write("<h3>figuras con cilcos</h3>");

    for(let m=1; m<=8; m++){
        for(let n=1; n<=8; n++){
            document.write("O")
        }
        document.write("<br>")
    }

