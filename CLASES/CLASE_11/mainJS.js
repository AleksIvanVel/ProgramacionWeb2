// Localizar un nodo o nodos especificos dentro de una lista o coleccion
    
    // todos los elementos con etiqueta "a"
    document.querySelectorAll("a").forEach((e) => console.log(e));

    // muestra elementos "li" referenes ID "menu"
    console.log(document.querySelectorAll("#menu li"));

    // indica un elemeno especifico a mostrar 
    console.log(document.querySelectorAll("a")[1]);
    console.log(document.getElementsByTagName("a")[2]);