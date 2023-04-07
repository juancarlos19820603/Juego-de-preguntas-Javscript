//Arreglo que contiene las respuestas Correctas
let correctas = [3,1,2,2,3];

//Arreglo donde se guardan las respuestas del usuario
let opcion_elegida=[];

let cantidad_correctas=0;

//funcion qu etoma el numero de pregunta y el input elegido de esa pregunta
function respuestas (num_pregunta, seleccionada){
    //guardo la respuesta elegida
    opcion_elegida [num_pregunta]= seleccionada.value;

    //el siguiente codigo es para poner en blanco 
    //el fondo de los inputs para cuando elige otra opción
    //armo el id para seleccionar el section correspondiente
    id="p" + num_pregunta;  

    labels = document.getElementById(id).childNodes;
    labels[3].style.backgrounColor = "white";
    labels[5].style.backgrounColor = "white";
    labels[7].style.backgrounColor = "white";

    //doy color al label seleccionado
    seleccionada.parentNode.style.backgrounColor =  "#cec0fc";
} 

    //funcion que compara los arreglos para saber cuantas estuvieron correctas
    function corregir(){
        cantidad_correctas = 0;
        for ( i = 0; i < correctas.length; i++ ){
            if ( correctas [i]==opcion_elegida[i]){
                cantidad_correctas++;
            }
        } 
        document.getElementById ("resultados").innerHTML = cantidad_correctas;
    }

