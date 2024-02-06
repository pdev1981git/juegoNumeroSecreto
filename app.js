let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

condicionesIniciales();

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemeno(`muy bien acertaste el número en ${intentos} ${intentos==1? 'intento':'intentos'}`, 'p');
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroSecreto > numeroDeUsuario){
            asignarTextoElemeno('el numero es mayor', 'p'); 
        } else {
            asignarTextoElemeno('el número es menor', 'p');
        }
    }
    intentos++;
    limpiarCajaImput();
}

function asignarTextoElemeno(texto, elemento) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;    
}

function limpiarCajaImput() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; 

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemeno('ya se sortearon todos los numeros posibles', 'p');        
    } else {    
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemeno('Juego del número secreto!', 'h1');
    asignarTextoElemeno(`Indica un número del 1 al ${numeroMaximo}`, 'p'); 
    numeroSecreto = generarNumeroSecreto();  
    intentos=1;
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    limpiarCajaImput();
    console.log(numeroSecreto);
}