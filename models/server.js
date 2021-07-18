const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");
/*
 * @autor Henry Rincon
 * Clase encargada de la inicializacion del servidor
 *
 */

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.clientPath = "/api/client";
    // Conectar a base de datos
    this.conectarDB();
    // Middlewares
    this.middlewares();
    // Inicializacion de las rutas.
    this.routes();
  }
  // Metodo para conectar a la base de datos
  async conectarDB() {
    await dbConnection();
  }
  // Se colocaran los middlewares usuado en la api
  middlewares() {
    // Cors
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json());
    // Directorio publico
    this.app.use(express.static("public"));
  }
  // Metodo para las rutas
  routes() {
    this.app.use(this.clientPath, require("../routes/client"));
  }
  // Metodo encargado de iniciar el servidor
  listem() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;
