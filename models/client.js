const { Schema, model } = require("mongoose");

const ClientSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio."],
  },
  correo: {
    type: String,
    required: [true, "El correo es obligatorio."],
    unique: true,
  },
  edad: {
    type: Number,
    required: [true, "La edad es obligatoria."],
  },
  fecha_nacimiento: {
    type: Date,
    required: [true, "La fecha de nacimiento es obligatoria."],
  },
  estado: {
    type: Boolean,
    default: true,
  },
});

ClientSchema.methods.toJSON = function () {
  const { __v, _id, ...cliente } = this.toObject();
  cliente.uid = _id;
  return cliente;
};
module.exports = model("Clientes", ClientSchema);
