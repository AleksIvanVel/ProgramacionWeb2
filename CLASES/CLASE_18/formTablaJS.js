function agrega(){
    let nombre = document.getElementById('nom').value;
    let categroia = document.getElementById('cat').value;
    let precio = document.getElementById('precio').value;

    let fila ="<tr><td>"+nombre+"</td><td>"+categroia+"</td><td>"+precio+"</td></tr>";

    //crear fila 
    let btn = document.createElement("tr");
    btn.innerHTML=fila

    document.getElementById('cont_table').appendChild(btn);
}