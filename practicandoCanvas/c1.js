var lienzo=document.getElementById("fondo");
var dibujo=lienzo.getContext("2d");


//dibujo.fillRect(40,30,200,100);
//lineas
dibujo.beginPath();
dibujo.moveTo(20,8);//donde comienza la línea
dibujo.lineTo(20,100);//dibujar la linea
dibujo.moveTo(100,8);//comienza
dibujo.lineTo(100,100);//se mueve a 
dibujo.lineWidt=1;
dibujo.strokeStyle="green"
dibujo.stroke();

dibujo.beginPath();
dibujo.moveTo(5,5);//donde comienza la línea
dibujo.lineTo(5,295);//dibujar la linea
dibujo.moveTo(295,5);//comienza
dibujo.lineTo(295,295);//se mueve a 
dibujo.lineWidt=1;
dibujo.stroke();


//arcos
dibujo.beginPath()
dibujo.arc(150,150,50,0,2*Math.PI);
dibujo.lineWidt=10;
dibujo.strokeStyle="yellow"
dibujo.stroke();



