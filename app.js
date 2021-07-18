// importación de librerías de terceros
require("dotenv").config();
// Importacion de mis paquetes
const Server = require("./models/server");
const server = new Server();
server.listem();
