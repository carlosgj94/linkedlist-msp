function printElements(elem){
    document.getElementById("result").innerHTML = "";
    console.log("Printando los elementos de la lista");
    while(elem!=null){
        console.log(elem.data);
        var data= document.getElementById("result").innerHTML;
        if(elem.next!=null){
            document.getElementById("result").innerHTML=data + elem.data+", ";
        }
        else{
            document.getElementById("result").innerHTML=data + elem.data;
        }
        elem = elem.next;
    }
}

function sort(inicio){
    console.log("Ordenacion de la lista");
    var elem = inicio;
    var siguiente;
    while(elem.next!=null){
        siguiente = elem.next;
        while(siguiente!=null){
            if(elem.data>siguiente.data){
                var t=  siguiente.data;
                siguiente.data = elem.data;
                elem.data=t;
            }
            siguiente=siguiente.next;
        }
        elem = elem.next;
        siguiente = elem.next;
    }
}

function addNode(elem, item){
    var node={
        data: item,
        next:null
    }
    while(elem.next!=null){
        elem=elem.next;
    }
    elem.next=node;
}