const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const tarefaRoutes = require('./routes/tarefaRoutes');
const tarefa = require('./models/tarefa');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', tarefaRoutes);

app.get('/', (req, res) => {
  res.send('🚀 API do CRUD de Tarefas está online!');
});


sequelize.sync().then(() => {
  console.log('Banco sincronizado');
  app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
});
