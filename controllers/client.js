const { response, request } = require("express");

const getClient = (req = request, res = response) => {
  const { q, nombre, apikey } = req.query;
  res.json({
    msg: "get API - controlador",
    q,
    nombre,
    apikey,
  });
};
const putClient = (req = request, res = response) => {
  const id = req.params.id;
  res.json({
    msg: "put API - controlador",
  });
};
const postClient = (req = request, res = response) => {
  const { nombre, edad } = req.body;
  res.json({
    msg: "post API - controlador",
    nombre,
    edad,
  });
};
const deleteClient = (req = request, res = response) => {
  res.json({
    msg: "delete API - controlador",
  });
};
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
