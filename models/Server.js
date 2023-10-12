import express from "express";
import cors from "cors";
import { proyectRoutes } from "../routes/index.js";

export default class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.paths = {
      proyectos: "/api/proyectos",
    };

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();
  }

  // Middlewares
  middlewares() {
    this.app.use(express.json());
    this.app.use(express.static("public"));
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.paths.proyectos, proyectRoutes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(
        `Servidor corriendo en el puerto ${this.port}`
      );
    });
  }
}
