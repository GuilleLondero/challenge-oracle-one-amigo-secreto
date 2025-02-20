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
        else if ((!/^[\p{L}]+$/u.test(amigoUsuario)))
        {
            alert("El nombre ingresado debe contener solo letras.");
            limpiarCaja();
        }
        else 
        {
            if (listaAmigos.includes(amigoUsuario))
            {
                alert(`El nombre ingresado: ${amigoUsuario}, ya existe en la lista.`);
                limpiarCaja();
            }
            else 
            {
                listaAmigos.push(amigoUsuario); //agrego nombre a la lista: 
                mostrarAmigos(listaAmigos); //llamo a la funcion para mostar el nombre en pantalla.
                limpiarCaja(); //Llamo a la función limpiarCaja, para que luego de agregar el nombre se limpie.
            }
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
        nuevoLi.textContent = amigo; //Establezco el texto del elemento <li> con el nombre del amigo.
        listaAmigosUl.appendChild(nuevoLi); //Agrego el elemento <li> como hijo de la lista <ul> en el HTML.
    }
    return;
}

// EVENTO BOTON SORTEAR:

function sortearAmigo() // --Creo una función para sortear la lista de amigos:
{
    if (listaAmigos.length === 0) //primero verifico que el array no este vacio. 
    {
        alert("¡Debes agregar amigos a la lista antes de sortear!");
        return;
    }
    
    // Genero un índice aleatorio:
    const indiceAleatorio = Math.floor(Math.random()*listaAmigos.length);
    // Obtengo el nombre sorteado:
    const amigoSorteado = listaAmigos[indiceAleatorio]; //El nombre del amigo que se encuentra en la posición indiceAleatorio del array listaAmigos, se lo asigna a la variable amigoSorteado.
    //Muestro el resultado del sorteo en el navegador:
    const elemento = document.getElementById("resultado");
    elemento.innerHTML = `¡El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>!`;

    listaAmigos = []; //limpio la lista amigos.
    mostrarAmigos(listaAmigos);//actualizo la funcion mostrar amigos, le paso el array lista amigos vacio, para limpiar lo que se ve en pantalla.
}
