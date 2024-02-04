
let numeroSecreto=0;
let intentos=0;
let listaDeNumerosSorteados=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

//Declaracion de la funcion
function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    console.log(numeroSecreto)
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos==1)? 'vez' : "veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
        
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    
}

function generarNumeroSecreto() {
     let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
     console.log(numeroGenerado);
     console.log(listaDeNumerosSorteados);
     //Si ya sorteamos todos los numeros
     if(listaDeNumerosSorteados ==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
     }else{
     //Si el numero generado esta incluido en la lista
     if(listaDeNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
     }else{
        listaDeNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
     }
    }
    
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero de 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //limpiar caja ;
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //Generar el numero aleatorio
    //Inicializar el numero de intentos 
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true)
    
}

condicionesIniciales();
