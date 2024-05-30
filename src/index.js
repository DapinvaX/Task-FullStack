/* El fragmento de código proporcionado es un archivo JavaScript que importa el módulo `app` desde `app.js` y
la función `connectDB` de `db.js`. Luego establece la variable `port` en 4000 y llama al
Función `connectDB` para establecer una conexión a la base de datos. Finalmente, inicia el servidor usando
el método `app.listen` en el puerto especificado y registra un mensaje en la consola indicando que el
El servidor está escuchando en ese puerto. */

import app   from "./app.js";
import {connectDB} from "./db.js";

const port = 4000;

// LLamamos a la funcion para conectar a la base de datos en db.js
connectDB();

app.listen(port, () => {
  
    console.log("Escuchando por el puerto "+port+"!");

});
 