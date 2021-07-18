const { Router } = require("express");
const {
  getClient,
  putClient,
  postClient,
  deleteClient,
  patchClient,
} = require("../controllers/client");
const router = Router();

// GET
router.get("/", getClient);
// PUT
router.put("/:id", putClient);
// POST
router.post("/", postClient);
// DELETE
router.delete("/", deleteClient);
// PATCH
router.patch("/", patchClient);
module.exports = router;
