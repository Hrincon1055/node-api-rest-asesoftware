const Cliente = require("../models/client");
const emailExiste = async (correo = "") => {
  // Verificar si el correo existe
  const existeEmail = await Cliente.findOne({ correo });
  if (existeEmail) {
    throw new Error(`El correo: ${correo}, ya está registrado.`);
  }
};
const existeClientePorId = async (id = "") => {
  // Verificar si el correo existe
  const existeCliente = await Cliente.findById(id);
  if (!existeCliente) {
    throw new Error(`El id no exits: ${id}`);
  }
};
module.exports = {
  emailExiste,
  existeClientePorId,
};
