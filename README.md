# Proyecto: Amigo Secreto

Este proyecto es una aplicación web para organizar un sorteo de amigo secreto. Permite agregar nombres de amigos a una lista, mostrar los nombres agregados y sortear un amigo secreto de manera aleatoria.

## Índice

- [Descripción](#descripcion)
- [Instalación](#instalación)
- [Uso](#uso)
- [Funcionalidades](#funcionalidades)
- [Características](#características)
- [Tecnologías](#tecnologias)
- [Desafíos y soluciones](#desafíos)
- [Problemas Conocidos](#problemas-conocidos)
- [Autor](#autor)
- [Créditos](#créditos)
- [Contribuciones](#contribuciones)
- [¡Me encantaría recibir tu feedback!](#¡me-encataría-recibir-tu-feedback!)

## Descripción

"¡Bienvenidos al proyecto Amigo Secreto ! ¿Cansado de los sorteos de amigo secreto complicados y aburridos? Esta aplicación web nace de la necesidad de simplificar y dinamizar la organización de este clásico juego. Con Amigo Secreto , olvídate de papelitos y sorteos manuales. La aplicación se encarga de todo el proceso, desde la recepción de los nombres hasta la asignación aleatoria de los amigos secretos. ¡Prepárate para sorprender y ser sorprendido!"

## Instalación

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. Clona este repositorio:
    ```bash
    git clone https://github.com/GuilleLondero/challenge-oracle-one-amigo-secreto.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd amigo-secreto
    ```
3. Abre `index.html` en tu navegador preferido.

## Uso

1. Ingresa el nombre de un amigo en el campo de texto.
2. Haz clic en el botón "Añadir" para agregar el nombre a la lista.
3. Repite los pasos anteriores para agregar más amigos.
4. Una vez que tengas una lista de amigos, haz clic en el botón "Sortear" para seleccionar aleatoriamente un amigo secreto.

## Funcionalidades

- Agregar: amigos Permite ingresar y agregar nombres a la lista de participantes.
- Validación de nombres: Se asegura de que los nombres ingresados ​​no estén vacíos, contengan solo letras y no estén duplicados. Esto evita errores y garantiza un sorteo justo.
- Sorteo aleatorio: Realiza el sorteo de forma aleatoria, asignando a cada participante un amigo secreto.
- Visualización del resultado: Muestra el nombre del amigo secreto sorteado en pantalla.
- Limpieza de la lista: Permite limpiar la lista de amigos después del sorteo.

## Características

- Validación de entradas para asegurar que solo se agreguen nombres válidos (sin números ni caracteres especiales).
- Alerta si el nombre ya existe en la lista.
- Muestra la lista de amigos agregados en pantalla.
- Selección aleatoria de un amigo secreto de la lista.

## Tecnologías

- HTML
- CSS
- JavaScript

## Desafíos y soluciones

Durante el desarrollo de Amigo Secreto , me encontré con varios desafíos interesantes que me permitieron crecer como programador.

- Validación de nombres con caracteres especiales: inicialmente, la validación de nombres solo permitiría letras de la A a la Z, lo que excluía nombres con acentos, eñes y otros caracteres especiales. Para solucionar esto, investigué y encontré expresiones regulares Unicode que me permitieron crear una validación más completa y flexible, capaz de aceptar un rango más amplio de caracteres.

- Evitar nombres duplicados: Era importante evitar que los usuarios ingresaran nombres duplicados, ya que esto podría generar errores en el sorteo. Implementé una validación que utiliza el método includes()de los arrays para verificar si el nombre ya existe en la lista antes de agregarlo. Esto asegura que cada nombre sea único.

- Limpiar la lista después del sorteo: Después de realizar el sorteo, era necesario limpiar la lista de amigos para que el usuario pudiera realizar un nuevo sorteo con diferentes participantes. Para lograr esto, utilicé la función mostrarAmigos()y le pasó un array vacío, lo que actualizó la lista en pantalla y la dejó lista para nuevos nombres.

Estos fueron algunos de los desafíos que enfrentó durante el desarrollo de Amigo Secreto . Cada uno de ellos me brindó la oportunidad de aprender nuevas técnicas y mejorar mis habilidades de resolución de problemas.

## Autor

- Londero Guillermo
- Correo electrónico: guillelondero@gmail.com

## Problemas Conocidos

- Actualmente no se pueden eliminar nombres de la lista una vez agregados.
- No hay confirmación visual de que un nombre ha sido agregado exitosamente más allá de verlo en la lista.

## Créditos

Este proyecto fue desarrollado como parte de un desafío de programación.

## Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de abrir un `pull request` o crear un `issue` en GitHub.

## Me encantaría recibir tu feedback

Si tienes alguna sugerencia, comentario o pregunta sobre **Amigo Secreto**, no dudes en contactarme. Estoy abierto a cualquier tipo de feedback que me ayude a mejorar la aplicación.

Puedes contactarme a través de [guillelondero@gmail.com].

¡Gracias por tu interés en **Amigo Secreto**!
