const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/TarefaController');
const authMiddleware = require('../middleware/auth');

router.post('/tarefas', authMiddleware, TarefaController.criarTarefa);
router.get('/tarefas', authMiddleware, TarefaController.listarTarefas);
router.put('/tarefas/:id', authMiddleware, TarefaController.atualizarTarefa);
router.delete('/tarefas/:id', authMiddleware, TarefaController.deletarTarefa);

module.exports = router;
