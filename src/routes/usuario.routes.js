import express from "express";
import userSchema from "../models/usuario.models.js";
import { getUsuario, postUsuario, putUsuario, deleteUsuario } from "../controllers/usuario.controllers.js";


const usuarioRouter = express.Router();

usuarioRouter.get("/obtenerUsuario", getUsuario);
usuarioRouter.post("/crearUsuario", postUsuario);
usuarioRouter.put("/modificarUsuario/:_id", putUsuario);
usuarioRouter.delete("/eliminarUsuario/:_id", deleteUsuario);
usuarioRouter.post("/eliminarUsuario/:_id", deleteUsuario);

  
export default usuarioRouter;
