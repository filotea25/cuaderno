var li=document.getElementById("lienzo");
if(li){
    var d=li.getContext("2d");
    var img= new Image();
    img.src="imagenCanvas.jpg";
    img.onload=function(){
        //grande izquierda
        d.drawImage(img,0,0,300,300);

        //pequeña derecha
        d.drawImage(img,320,20,30,30);

        //mediana abajo izquierda
        d.drawImage(img,2,400,50,50); 
    }
}