const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/TarefaController');
const authMiddleware = require('../middlewares/auth');

router.post('/tarefas', authMiddleware, tarefaController.criarTarefa);
router.get('/tarefas', authMiddleware, tarefaController.listarTarefas);
router.put('/tarefas/:id', authMiddleware, tarefaController.atualizarTarefa);
router.delete('/tarefas/:id', authMiddleware, tarefaController.deletarTarefa);

module.exports = router;
