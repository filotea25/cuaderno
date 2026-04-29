var lienzo=document.getElementById("lienzo");
if(lienzo){
    var dibujo=lienzo.getContext("2d");
    dibujo.strokeRect(50,20,200,90);
    dibujo.strokeStyle="green";
    dibujo.stroke();

    //ejercicio 3
        //linea roja
        dibujo.beginPath();
        dibujo.moveTo(280,5);
        dibujo.lineTo(280,240);
        dibujo.lineWidth=4;
        dibujo.strokeStyle="red";
        dibujo.stroke();
        //lineas azules
        dibujo.beginPath();
        dibujo.moveTo(290,5);
        dibujo.lineTo(290,240);
        dibujo.lineWidth=4;
        dibujo.strokeStyle="blue";
        dibujo.stroke();

        dibujo.beginPath();
        dibujo.moveTo(300,5);
        dibujo.lineTo(300,240);
        dibujo.lineWidth=4;
        dibujo.strokeStyle="blueVi";
        dibujo.stroke();

        dibujo.beginPath();
        dibujo.moveTo(310,5);
        dibujo.lineTo(310,240);
        dibujo.lineWidth=4;
        dibujo.strokeStyle="blue";
        dibujo.stroke();

        //triangulos 
        dibujo.beginPath()
        dibujo.moveTo(400,5);
        dibujo.lineTo(370,80);
        dibujo.moveTo(400,5);
        dibujo.lineTo(420,80);
        dibujo.strokeStyle="blue";
        dibujo.stroke();

        dibujo.beginPath()
        dibujo.moveTo(390,80);
        dibujo.lineTo(330,200);
        dibujo.moveTo(390,80);
        dibujo.lineTo(430,200);
        dibujo.strokeStyle="blue";
        dibujo.stroke();

}