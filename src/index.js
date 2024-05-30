/* The code snippet provided is a JavaScript file that is importing the `app` module from `app.js` and
the `connectDB` function from `db.js`. It then sets the `port` variable to 4000 and calls the
`connectDB` function to establish a connection to the database. Finally, it starts the server using
the `app.listen` method on the specified port and logs a message to the console indicating that the
server is listening on that port. */

import app   from "./app.js";
import {connectDB} from "./db.js";

const port = 4000;

// LLamamos a la funcion para conectar a la base de datos en db.js
connectDB();

app.listen(port, () => {
  
    console.log("Escuchando por el puerto "+port+"!");

});
 