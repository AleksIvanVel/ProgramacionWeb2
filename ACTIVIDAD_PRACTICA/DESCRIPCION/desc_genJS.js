//Botones
let btn_masterChief = document.getElementById("btn_masterChief");
let btn_cortana = document.getElementById("btn_cortana");
let btn_equPlata = document.getElementById("btn_eq_plata");
let btn_doc = document.getElementById("btn_halsey");

//Imagen base del lienzo
let img_base = document.getElementById("halo_serie");

//Descripcion
let desc = document.getElementById("descripcion")


//funciones al pasar el puntero
btn_masterChief.onmouseover = function(){
    img_base.setAttribute("src", "masterChief.jpeg");
}
btn_masterChief.onmouseout = function(){
    img_base.setAttribute("src", "halo_serie.jpeg");
}

btn_cortana.onmouseover = function(){
    img_base.setAttribute("src", "cortana.jpeg");
}
btn_cortana.onmouseout = function(){
    img_base.setAttribute("src", "halo_serie.jpeg");
}

btn_equPlata.onmouseover = function(){
    img_base.setAttribute("src", "eq_plata.jpeg");
}
btn_equPlata.onmouseout = function(){
    img_base.setAttribute("src", "halo_serie.jpeg");
}

btn_doc.onmouseover = function(){
    img_base.setAttribute("src", "halsey.jpeg");
}
btn_doc.onmouseout = function(){
    img_base.setAttribute("src", "halo_serie.jpeg");
}

//funciones al pulsar el boton
function onMasterchiefClick(){
    img_base.setAttribute("src", "masterChief.jpeg");
    btn_masterChief.onmouseout = function(){
        img_base.setAttribute("src", "masterChief.jpeg");
    }   
    desc.value = "John-117, MCPON, más conocido como Master Chief (también conocido en español como Jefe Maestro), es un personaje y el protagonista principal de la serie de videojuegos Halo. SPARTAN-117 es uno de los únicos soldados Spartan del proyecto SPARTAN-II u ORION-II, nombre en clave del proyecto creado por el UNSC para crear supersoldados capaces de repeler la insurrección.";
}

function onCortanaClick(){
    img_base.setAttribute("src", "cortana.jpeg");
    btn_cortana.onmouseout = function(){
        img_base.setAttribute("src", "cortana.jpeg");
    }   
    desc.value = "Cortana fue una IA que forma una parte fundamental en la franquicia de los videojuegos del Universo de Halo y es la principal antagonista en la Saga del Reclamador. Cortana posee una personalidad inteligente y vivaz, además de un buen sentido del humor. Su lealtad hacia los humanos está programada, pero ella dice que su lealtad es genuina, tal vez por el hecho de tratarse de un clon de un cerebro verdaderamente humano.";
}


function onEqPlataClick(){
    img_base.setAttribute("src", "eq_plata.jpeg");
    btn_equPlata.onmouseout = function(){
        img_base.setAttribute("src", "eq_plata.jpeg");
    }   
    desc.value = "La Línea de Tiempo Silver es una línea de tiempo alternativa que contiene y abarca elementos del canon central pero con detalles contextuales y narrativos que divergen para mayor libertad creativa. La Serie de Televisión de Halo pertenece a la Línea de Tiempo Silver.";
}

function onHalseyClick(){
    img_base.setAttribute("src", "halsey.jpeg");
    btn_doc.onmouseout = function(){
        img_base.setAttribute("src", "halsey.jpeg");
    }   
    desc.value = "Catherine Elizabeth Halsey, MD, PhD [1] (Consultor Civil 409871) es una científica clave de la Oficina de Inteligencia Naval, mejor conocida por su trabajo en el Programa SPARTAN-II, su diseño y creación de Inteligencias Artificiales y por el diseño de la Armadura Potenciada de Asalto MJOLNIR. Sirvió como científica de la ONI desde 2515 hasta 2552, cuando se le ascendió al puesto de Científica en Jefe, que ocuparía hasta el final de la Guerra Humano-Covenant.";
}