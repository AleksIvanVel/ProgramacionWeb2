// localizar nombre de etiqueta
console.log(document.getElementsByTagName("li"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a"));
console.log(document.querySelectorAll("a").length);

//Localizar por nombre de clase 
console.log(document.getElementsByClassName("card"));
console.log(document.querySelector("card"));

// localizar por Id
console.log(document.getElementById ("menu"));
console.log(document.querySelector("menu"));

// Localizar por atributo NAME
console.log(document.getElementsByName("nombre"));

//-----------------------------------------------------------------------------------------------------------//

    // Muestra el Número de Artículos que existen en el Documento.
        console.log("Numero de rticulos: ", document.getElementsByTagName("h3").length);

    //Identificar líneas divisorias dentro del Documento y número de líneas.
        console.log(document.getElementsByTagName("hr"));
        console.log("Numero de lineas: ", document.getElementsByTagName("hr").length);

    // Identificar los elementos de lista dentro del Documento y número de elementos en total.
        let elementosDeLista = document.querySelectorAll("ul li");
        console.log("Número de Elementos de Lista: " + elementosDeLista.length);
        // Mostrar los elementos de la lista
        elementosDeLista.forEach((elemento, index) => {
            console.log("Elemento de Lista " + (index + 1) + ":");
            console.log(elemento);
        });

    // Identificar elementos de la “Lista Elementos”, número de elementos y código del enlace dentro de dicha lista.
        let cantidadElementos = document.querySelectorAll("#elements li").length;
        console.log("Número de lista elementos: " + cantidadElementos);
        for (let i = 0; i < cantidadElementos; i++) {
            console.log("Elemento de Lista elementos " + (i + 1) + ":");
            console.log(document.querySelectorAll("#elements li")[i]);
        }
        const elementoConEnlace = document.querySelector("#elements li a");
        console.log("Elemento con enlace:");
        console.log(elementoConEnlace);

    // Identificar elementos de la lista “Menú”, identificar enlaces y número de enlaces en dicha lista.
        let listMenu = document.querySelectorAll("#menu li");
        listMenu.forEach((element,index) => {
            console.log("Elemento1",index + 1, "de la lista menu:", element);
        })
    // Identificar imágenes dentro del Documento y número de imágenes en total.
        let images = document.getElementsByTagName("img")
        console.log("numero de imagenes en la pagina: ",images.length)

    // Identificar imágenes del bloque referente al “Artículo 2”, identificar primera imagen y número total de imágenes dentro de este bloque.
        let imagenesArticulo2 = document.querySelectorAll(".imgAr2 img");
        console.log("Número de imágenes en el bloque del Artículo 2: " + imagenesArticulo2.length);
        for (let i = 0; i < imagenesArticulo2.length; i++) {
            console.log("Imagen " + (i + 1) + ":");
            console.log(imagenesArticulo2[i]);
        }

    // Identificar imágenes del bloque referente al “Artículo 3”, número de imágenes y código referente a la segunda y cuarta imagen del presente bloque.
        let imagenesArticulo3 = document.querySelectorAll("#imgAr3 img");
        console.log("Numero de imagenes en el bloque del Articulo 3: " + imagenesArticulo3.length);
        for (let i = 0; i < imagenesArticulo3.length; i++) {
            console.log("Imagen " + (i + 1) + ":");
            console.log(imagenesArticulo3[i]);
        }
    // Identificar enlaces del Documento y número de enlaces en total.
        let enlaces = document.querySelectorAll("a");
        console.log("Número total de enlaces en el documento: " + enlaces.length);
        for (let i = 0; i < enlaces.length; i++) {
            console.log("Enlace " + (i + 1) + ":");
            console.log(enlaces[i]);
        }

    // Identificar enlaces distribuidos dentro del párrafo referente al “Artículo 1” y número de enlaces.
        const parrafoArticulo1 = document.querySelector("#text1");
        const enlacesArticulo1 = parrafoArticulo1.querySelectorAll("a");
        console.log("Número de enlaces en el párrafo del 'Artículo 1': " + enlacesArticulo1.length);
        for (let i = 0; i < enlacesArticulo1.length; i++) {
            console.log("Enlace" , (i + 1), "parrafo 1:");
            console.log(enlacesArticulo1[i]);
        }