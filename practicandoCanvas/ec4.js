var lienzo=document.getElementById("fondo");
if(lienzo){

    var dib=lienzo.getContext("2d");
    dib.fillStyle="red";
    dib.fillRect(8,10,80,50);
    dib.clearRect(10,12,6,6);
    dib.clearRect(40,25,6,6);
    dib.clearRect(70,45,6,6);
    dib.stroke();

    //curva
    dib.beginPath();
    dib.moveTo(30,120);
    dib.quadraticCurveTo(130,60,250,120);
  
      dib.quadraticCurveTo(370,180,470,120);
    dib.strokeStyle="blue";
    dib.lineWidth=3;
    dib.stroke();
}