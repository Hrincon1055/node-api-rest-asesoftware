const { Router } = require("express");
const { check } = require("express-validator");
const {
  getClient,
  putClient,
  postClient,
  deleteClient,
  patchClient,
} = require("../controllers/client");
const { emailExiste, existeClientePorId } = require("../helpers/db-validators");
const { validarCampos } = require("../middlewares/validar-campos");
const router = Router();

// GET
router.get("/", getClient);
// PUT
router.put(
  "/:id",
  [
    check("id", "No es un id valido.").isMongoId(),
    check("id").custom(existeClientePorId),
    check("nombre", "El nombre es obligatorio.").not().isEmpty(),
    check("correo", "El correo no es valido.").isEmail(),
    check("correo").custom(emailExiste),
    check("edad", "La edad es obligatoria.").not().isEmpty(),
    check("fecha_nacimiento", "La fecha de nacimiento es obligatoria."),
    validarCampos,
  ],
  putClient
);
// POST
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio.").not().isEmpty(),
    check("correo", "El correo no es valido.").isEmail(),
    check("correo").custom(emailExiste),
    check("edad", "La edad es obligatoria.").not().isEmpty(),
    check("fecha_nacimiento", "La fecha de nacimiento es obligatoria.")
      .not()
      .isEmpty(),
    validarCampos,
  ],
  postClient
);
// DELETE
router.delete(
  "/:id",
  [
    check("id", "No es un id valido.").isMongoId(),
    check("id").custom(existeClientePorId),
    validarCampos,
  ],
  deleteClient
);
// PATCH
router.patch("/", patchClient);
module.exports = router;
