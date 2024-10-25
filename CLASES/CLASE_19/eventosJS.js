window.onload = function(){
    alert("Bienvenido")

    //evento onMouseOver
    let cambiaImg;

    cambiaImg = document.getElementById('imaOver');
    cambiaImg.onmouseover = function(){
        cambiaImg.setAttribute("src","sources/img/arduino.jpeg");
    }

    cambiaImg.onmouseout = function(){
        cambiaImg.setAttribute("src","sources/img/atmega.jpeg");
    }

    //mouseup y mousedown
    let _imgCam = document.getElementById("imgCam");
    let _imgFi = document.getElementById("imgFi");

    _imgFi.onmousedown = function(){
        _imgCam.src="sources/img/fesA_logo.png";
    }
    
    _imgFi.onmousedup= function(){
        _imgCam.src="sources/img/unam_logo.png";
    }
}