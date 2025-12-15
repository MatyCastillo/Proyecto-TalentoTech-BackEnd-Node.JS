import express from 'express'
import cors from 'cors';
import 'dotenv/config'
import loginRoutes from "./src/routes/auth.routes.js"
import productsRoutes from "./src/routes/products.routes.js"

const app = express()
const PORT = process.env.PORT || 3000

const corsConfig = {
    origin:['http://localhost'],
    method: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length'],
    credentials: true,
    maxAge: 600,
    optionsSuccessStatus: 204
}

app.use(cors(corsConfig))

app.use(express.json())

app.use ("/api",loginRoutes)

app.use("/api", productsRoutes)

app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado o ruta inválida');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})