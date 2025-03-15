// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigosSecretos = [];

function agregarAmigo(){
    const input=document.getElementById('amigo');
    let nombre=input.value.trim();
    nombre = nombre.toLowerCase().replace( /\b\w/g,  char => char.toUpperCase());
    if(nombre === ""){
        alert('Por favor, ingresa un nombre valido');
        limpiarCampo();
        return;
    }else if (listaAmigosSecretos.includes(nombre)){
        alert('El nombre se repite, ingresa un nombre distinto');
        limpiarCampo();
        return;
    }
    listaAmigosSecretos.push(nombre);
    limpiarCampo();
    eliminarAmigo(nombre);
}

function eliminarAmigo(nombre){
    const lista=document.getElementById('listaAmigos');
    
    const elementoLista=document.createElement('li');
    elementoLista.textContent = nombre;

    //BOTON PARA ELIMINAR AMIGO
    const botonEliminar=document.createElement('button');
    botonEliminar.textContent='x';
    botonEliminar.classList.add('delete-button');

    botonEliminar.onclick=function(){
        lista.removeChild(elementoLista);

        //ELIMINAR DEL ARRAY
        listaAmigosSecretos=listaAmigosSecretos.filter(amigo => amigo !== nombre);
    }
    //AGREGAR BOTON DENTRO DE LI
    elementoLista.appendChild(botonEliminar);
    lista.appendChild(elementoLista);

    //LIMPIAR IMPUT DESPUES DE AGREGAR
    input.value='';
    
}

function limpiarCampo(){
    document.querySelector('#amigo').value='';
}

function sortearAmigo(){
    if(listaAmigosSecretos.length> 0){
        let amigoAleatorio = Math.floor(Math.random() * listaAmigosSecretos.length);
        let amigoElegido = listaAmigosSecretos[amigoAleatorio];
        let elementoHTML = document. getElementById ('resultado');
        elementoHTML.innerHTML = 'Nuestro amigo secreto es: '+ amigoElegido;
    } else {
        alert('La lista de amigos esta vacia');
        return;
    }
}

function reiniciarJuego(){
    listaAmigosSecretos=[];
    document.getElementById('listaAmigos').innerHTML='';
    document.getElementById('resultado').innerHTML='';
    document.querySelector('#amigo').value='';
    alert('El juego ha sido reiniciado');
}