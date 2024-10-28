let cajas = document.getElementsByName("caja C");
let miBody = document.getElementsByTagName("body");

cajas[0].onselect = function(){
    miBody[0].setAttribute("class", "crojo");
}
cajas[1].onselect = function(){
    miBody[0].setAttribute("class", "cverde");
}

cajas[2].onselect = function(){
    miBody[0].setAttribute("class", "camarillo");
}
