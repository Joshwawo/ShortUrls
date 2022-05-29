const express = require('express');
const { leerUrls, agregarUrl, eliminarUrl, editarUrlForm, editarUrl,redirecionamiento } = require('../controllers/homeController');
const urlValidar = require('../middlewares/urlValida');

const router = express.Router();


router.get("/", leerUrls);
router.post("/", urlValidar, agregarUrl)
router.get("/eliminar/:id", eliminarUrl);
router.get("/editar/:id", editarUrlForm);
router.post("/editar/:id", urlValidar, editarUrl);
router.get("/:shortUrl", redirecionamiento);


module.exports = router;