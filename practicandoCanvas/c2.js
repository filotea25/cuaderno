var lienzo2 = document.getElementById("fondo1");

if (lienzo2) {
  var dibujo2 = lienzo2.getContext("2d");
    dibujo2.fillStyle="red";
    dibujo2.fillRect(50,5, 60,30);

    dibujo2.lineWidt=5;
    dibujo2.strokeStyle="red";
    dibujo2.strokeRect(200,70,60,50);

    //dibujar lineas 

    dibujo2.beginPath();
    dibujo2.moveTo(180,10);
    dibujo2.lineTo(180,150);
    dibujo2.lineWidt=5
    dibujo2.strokeStyle="green";
    dibujo2.stroke();

}

