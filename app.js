// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



/*                 INICIO
                     \/
 TOMO EL VALOR AGREGADO EN CAMPO DE TEXTO (IMPUT).
                     \/        
 DESARROLLO DE EVENTO EN BOTON AÑADIR. ->  CONDICION DE VALIDACION DATO ENTRADA, v-> MENSAJE ALERT ; 
                                                                                 F->SE AGREGA NOMBRE A LA LISTA AMIGOS Y MUESTRO EN PANTALLA.
                                                                                                            \/
                                                                                                EVENTO BOTON CLICK SORTEAR
                                                                                                            \/ 
                                                                                           MUESTRO RESULTADO AMIGO SECRETO ALEATORIO
                                                                                                            \/
                                                                                                           FIN */              

//DEFINICION DE VARIABLES Y ASIGNACION INICIAL:  

    let listaAmigos = [];

// IMPUT CAMPO DE TEXTO PARA AGREGAR UN AMIGO:
    
function agregarAmigos() // --Creo una función para agregar amigos al array:
{
    let amigoUsuario = document.getElementById("amigo").value; //primero vinculo el campo HTML con js.
    
    //ahora valido la entrada para que solo tome letras y impida el campo vacio:
    if (amigoUsuario === "")
        {
            alert("Por favor debe ingresar un nombre! ");
            limpiarCaja();
        }
        else if ((!/^[a-zA-Z]+$/.test(amigoUsuario)))
        {
            alert("El nombre ingresado debe contener solo letras.");
            limpiarCaja();
        }
        else //agrego nombre a la lista: 
        {
            listaAmigos.push(amigoUsuario);
            mostrarAmigos(listaAmigos); //llamo a lafunciono para mostar el nombre en pantalla.
            limpiarCaja(); //Llamo a la función limpiarCaja, para que luego de agregar el nombre se limpie.
        }
    console.log(amigoUsuario);
    console.log(listaAmigos);
        return;
}

function limpiarCaja() // --Creo ahora una función para limpiar la caja de texto:
{
    document.querySelector("#amigo").value = "";//let valorCaja = document.querySelector("#amigo"); y valorCaja.value = '';
}   

// MUESTRO EN PANTALLA NAVEGADOR LA LISTA DE AMIGOS DEL USUARIO:

function mostrarAmigos(lista) // --Creo una función para mostrar la lista de amigos en pantalla navegador:
{
    const listaAmigosUl = document.getElementById("listaAmigos"); //Obtengo elemento de la lista <ul> del HTML utilizando su ID "listaAmigos" y lo guardo en la variable listaAmigosUl.
    listaAmigosUl.innerHTML = ""; //limpio el contenido HTML de la lista para evitar que se dupliquen los nombres de amigos cada vez que se llama a la función.
    
    for (let i = 0; i < lista.length; i++) 
    {
        const amigo = lista[i]; //En cada iteración obtengo el elemento actual del array listaAmigos utilizando el índice i y lo guardo en la variable amigo.
        const nuevoLi = document.createElement("li"); //Creo un nuevo elemento de lista (<li>) para mostrar el nombre del amigo.
        nuevoLi.textContent = amigo; //Se establece el texto del elemento <li> con el nombre del amigo.
        listaAmigosUl.appendChild(nuevoLi); //Agrego el elemento <li> como hijo de la lista <ul> en el HTML.
    }
    return;
}

    