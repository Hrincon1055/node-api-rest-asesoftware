const { response, request } = require("express");

// Model
const Cliente = require("../models/client");
// GET
const getClient = async (req = request, res = response) => {
  const { limite = 5, desde = 0 } = req.query;
  const estado = { estado: true };

  const [total, clientes] = await Promise.all([
    Cliente.countDocuments(estado),
    Cliente.find(estado).skip(Number(desde)).limit(Number(limite)),
  ]);
  res.json({
    total,
    clientes,
  });
};
// PUT
const putClient = async (req = request, res = response) => {
  const { id } = req.params;
  const { _id, correo, ...resto } = req.body;
  const cliente = await Cliente.findByIdAndUpdate(id, resto);
  res.json({
    cliente,
  });
};
// POST
const postClient = async (req = request, res = response) => {
  const { nombre, correo, edad, fecha_nacimiento } = req.body;
  const cliente = new Cliente({ nombre, correo, edad, fecha_nacimiento });
  // Guardar en BD
  await cliente.save();
  res.json({
    cliente,
  });
};
// DELETE
const deleteClient = async (req = request, res = response) => {
  const { id } = req.params;
  const cliente = await Cliente.findByIdAndUpdate(id, { estado: false });
  res.json({
    cliente,
  });
};
// PATCH
const patchClient = (req = request, res = response) => {
  res.json({
    msg: "patch API - controlador",
  });
};
module.exports = {
  getClient,
  putClient,
  postClient,
  deleteClient,
  patchClient,
};
