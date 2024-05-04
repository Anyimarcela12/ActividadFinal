import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import conexionMongo from './src/config/baseDatos.js';
import usuarioRouter from './src/routes/usuario.routes.js';
import cors from 'cors';

const app = express();
const puerto = 9000;

dotenv.config();

conexionMongo();

const rutaPublica = path.join(process.cwd(), "public");
app.use(express.static(rutaPublica));
app.use(express.json());

// Configuración de CORS antes de cualquier ruta
app.use(cors());

// Rutas
app.use("/api", usuarioRouter);

// Ruta para el index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(rutaPublica, 'index.html'));
});

// Iniciar el servidor
app.listen(puerto, () => {
    console.log(`El servidor está escuchando en http://localhost:${puerto}`);
});
