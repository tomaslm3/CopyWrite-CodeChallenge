
El proyecto funciona mediante una API REST, con una unica ruta cuya funcion es recibir un texto y devolverlo invertido.
 GET /iecho?text=

 Desde la interfaz de usuario se puede ver el efecto de la API. Realizamos llamadas a la misma mediante una query que toma el texto ingresado por el usuario y se lo retorna desde el ultimo hacia el primero. Ademas en caso de un ingreso del usuario sea un palidromo, la propia interfaz le especificara de lo mismo.


## Para Probar el proyecto

Despues de clonar el repositorio.

 dividir la terminal en dos
- En la primer terminal ejecutar el comando: `cd api` y ejecutar el comando: `npm install` para instalar las dependencias y ejecutar el comando: `npm start` para iniciar el servidor.
   Para ejecutar los test usar el comando `npm test`

- En la segunda terminal ejecutar el comando: `cd client` y ejecutar el comando: `npm install` para instalar las dependencias y ejecutar el comando: `npm start` para iniciar la interfaz.


## Links del deploy

-- Deploy del Backend:
https://cw-cc-backend.herokuapp.com/

Con un texto de ejemplo
- https://cw-cc-backend.herokuapp.com/iecho?text=Ejemplo

Con un texto de ejemplo que sea un palindromo
- https://cw-cc-backend.herokuapp.com/iecho?text=Neuquen


-- Deploy del Frontend:
https://copy-write-code-challenge.vercel.app/


## Imagen del proyecto

![presentacion](/images/presentacion.png)