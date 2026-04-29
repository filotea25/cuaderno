var lienzo=document.getElementById("lienzo");
if(lienzo){
    var dibujo=lienzo.getContext("2d");
    dibujo.beginPath();
    dibujo.moveTo(170,10);
    dibujo.lineTo(220,120);
    dibujo.strokeStyle="green";
    dibujo.stroke();

    //segunda linea
    dibujo.beginPath();
    dibujo.moveTo(220,120);
    dibujo.lineTo(280,10);
    dibujo.strokeStyle="green";
    dibujo.stroke();
}