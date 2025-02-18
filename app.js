// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



/*                 INICIO
                     \/
 TOMO EL VALOR AGREGADO EN CAMPO DE TEXTO (IMPUT).
                     \/        
 DESARROLLO DE EVENTO EN BOTON AÑADIR. -> CONDICION DE VALIDACION DATO  ENTRADA, v-> MENSAJE ALERT ; 
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
    //primero debo vincular el campo HTML con js:
    
    function agregarAmigos() 
    {
    let amigoUsuario = document.getElementById("amigo").value;
    //ahora valido la entrada para que solo tome letras y impida el campo vacio:
    if (amigoUsuario === "")
        {
            alert("Por favor debe ingresar un nombre! ");
        }
        else if ((!/^[a-zA-Z]+$/.test(amigoUsuario)))
        {
            alert("El nombre ingresado debe contener solo letras.");
        }
        else //agrego nombre a la lista 
        {
            listaAmigos.push(amigoUsuario);
            limpiarCaja(); //Llamo a la función limpiarCaja() aquí
        }
console.log(amigoUsuario);
console.log(listaAmigos);
        return;
    }

    function limpiarCaja() // --Creo ahora una función para limpiar la caja de texto:
    {
    document.querySelector("#amigo").value = "";//let valorCaja = document.querySelector("#amigo"); y valorCaja.value = '';
    }   
   


