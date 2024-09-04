//deteccion de nodos
console.log(document.head);
console.log(document.body);
console.log(document.title);

//localizar nodos por etiqueta, clase o name
console.log("TagName: ",document.getElementsByTagName("li"));
console.log("Class Name: ", document.getElementsByClassName("card"));
console.log("Name: ",document.getElementsByName("nombre"));
console.log("Id: ", document.getElementById("menu"));

console.log(".card: ",document.querySelector(".card")); // nombre de clase
console.log("#menu: ",document.querySelector("#menu")); // id de objeto
console.log("etiqueta: ",document.querySelector("a")); // etiqueta --> solo detecta la primera etiqueta "a"
console.log("todas la etiquetas: ",document.querySelectorAll("a")); // busca todas la etiquetas "a"
console.log("cantidad de elementos de etiqueta 'a': ",document.querySelectorAll("a").length); // muestra lacantidad de etiquetas
