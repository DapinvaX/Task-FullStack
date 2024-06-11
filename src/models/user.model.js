import mongoose from "mongoose";

mongoose.Schema({
  
    username: {
        //Nombre de usuario tiene que ser unico y es requerido
        //Se transforma a minusculas
        //Se quita espacios en blanco
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,

  
    },
  
    email: {
        //Email tiene que ser unico y es requerido
        //Se transforma a minusculas
        //Se quita espacios en blanco
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,

    },
    password: {
        //Contraseña tiene 10 caracteres como minimo y es requerida
        type: String,
        required: true,
        length: { min: 10 },
    },

})

//Se declara la variable User que contiene el modelo de usuario y se exporta
const User = mongoose.model("User", userSchema);
export default User;