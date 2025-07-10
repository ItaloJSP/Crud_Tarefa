const Tarefa = require('../models/tarefa');
const authMiddleware = require('../middleware/auth');




router.post('/tarefas', authMiddleware, tarefaController.criarTarefa);
router.get('/tarefas', authMiddleware, tarefaController.listarTarefas);
router.put('/tarefas/:id', authMiddleware, tarefaController.atualizarTarefa);
router.delete('/tarefas/:id', authMiddleware, tarefaController.deletarTarefa);

exports.criarTarefa = async (req, res) => {
  try {
    const tarefa = await Tarefa.create(req.body);
    res.status(201).json(tarefa);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.listarTarefas = async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll();
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.atualizarTarefa = async (req, res) => {
  try {
    const { id } = req.params;
    await Tarefa.update(req.body, { where: { id } });
    res.json({ mensagem: 'Tarefa atualizada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deletarTarefa = async (req, res) => {
  try {
    const { id } = req.params;
    await Tarefa.destroy({ where: { id } });
    res.json({ mensagem: 'Tarefa excluída com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};



module.exports = router;