import express from "express";
import cors from "cors";
import indexRoutes from "../routes/index.routes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT || 4000;

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());

        // SERVIR FRONTEND
        const publicPath = path.join(__dirname, "../../frontend/public");
        this.app.use(express.static(publicPath));
    }

    routes() {
        // Rutas de la API
        this.app.use("/api", indexRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto", this.port);
        });
    }
}

export default Server;
