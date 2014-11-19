function drawList(elem) {
    var descripcion = '<hr><p style="font-size: 25px;">Original: </p>';
    document.getElementById('canvas').innerHTML = descripcion+ '<canvas style="width:100%; height:100%;  border: 1px solid #3498db;" id="canvasIn" width="1100%" height="100%">Tu navegador no soporta canvas. Actualizalo.</canvas>';
    var c = document.getElementById("canvasIn");
    var ctx = c.getContext("2d"); 
    
    //Creamos el arbol
    var posX = 20;
    var posY = 20;
    
    while(elem!=null){
        ctx.rect(posX,posY,100,50);
        ctx.lineWidth="1";
        ctx.strokeStyle="#3498db";
        ctx.stroke(); 
        
        var ctx2 = c.getContext("2d");
        ctx.fillStyle = "#2c3e50";
        ctx2.font = "bold 20px sans-serif";
        ctx2.fillText(elem.data, posX +10, posY+33);
        
        ctx.rect(posX+65,posY,1,50);
        ctx.lineWidth="1";
        ctx.strokeStyle="#3498db";
        ctx.stroke(); 
        if(elem.next!=null){
            var ctx3 = c.getContext("2d");
            ctx3.rect(posX+80,posY+25,45,1);
            ctx3.stroke(); 
        }
        
        posX=posX+120;
        elem=elem.next;
    }

}
function sortAndDraw(elem){
    sort(elem);
    var descripcion = '<br><p style="font-size: 25px;">Sorted: </p>';
     document.getElementById('canvas2').innerHTML =descripcion+ '<canvas style="width:100%; height:100%;  border: 1px solid #3498db;" id="canvasIn2" width="1100%" height="100%">Tu navegador no soporta canvas. Actualizalo.</canvas>';
    var c = document.getElementById("canvasIn2");
    var ctx = c.getContext("2d"); 
    
    //Creamos el arbol
    var posX = 20;
    var posY = 20;
    
    while(elem!=null){
        ctx.rect(posX,posY,100,50);
        ctx.lineWidth="1";
        ctx.strokeStyle="#3498db";
        ctx.stroke(); 
        
        var ctx2 = c.getContext("2d");
        ctx.fillStyle = "#2c3e50";
        ctx2.font = "bold 20px sans-serif";
        ctx2.fillText(elem.data, posX +10, posY+33);
        
        ctx.rect(posX+65,posY,1,50);
        ctx.lineWidth="1";
        ctx.strokeStyle="#3498db";
        ctx.stroke(); 
        if(elem.next!=null){
            var ctx3 = c.getContext("2d");
            ctx3.rect(posX+80,posY+25,45,1);
            ctx3.stroke(); 
        }
        
        posX=posX+120;
        elem=elem.next;
    }
}