const express = require('express');
const chamadoController = require('../controllers/chamadoController')

const router = express.Router();

router.post('/', chamadoController.criar);

router.get('/', chamadoController.listar);

router.get('/:id', chamadoController.buscarPorId);

module.exports = router;

