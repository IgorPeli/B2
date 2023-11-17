const express = require('express');
const usuarioController = require('../controllers/UsuarioController');

const router = express.Router();

router.post('/usuarios', usuarioController.criarUsuario);

module.exports = router;
