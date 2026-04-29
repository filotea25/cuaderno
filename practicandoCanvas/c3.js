var lienzo=document.getElementById("lienzo3");
if(lienzo){
    var dibujo=lienzo.getContext("2d");
    //un circulo
    dibujo.beginPath();
    dibujo.arc(100,150,50,0,2*Math.PI);
    dibujo.lineWidth=10;
    dibujo.strokeStyle="blue";
    dibujo.stroke();

    //un arco
    var dibujo=lienzo.getContext("2d");
    //un circulo
    dibujo.beginPath();
    dibujo.arc(200,200,50,0,Math.PI);
    dibujo.lineWidth=10;
    dibujo.strokeStyle="red";
    dibujo.stroke();

}