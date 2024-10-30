let outputDiv = document.getElementById("output");

document.addEventListener('keydown', function(event){
    let key = event.key
    let code = event.code

    outputDiv.innerText = `Tecla ${key} (codigo: ${code})`;
});