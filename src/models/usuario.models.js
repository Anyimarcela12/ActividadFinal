import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nombreCompleto:{
        type: String,
        required: true
    },
    correo:{
        type:String,
        required: true
    },
    contrasena:{
        type:String,
        required:true
    }
});


const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario;