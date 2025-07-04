# 📝 CRUD de Tarefas

Projeto de exemplo para praticar o desenvolvimento de uma API REST com Node.js, Express, Sequelize e PostgreSQL.

---

## 🚀 Objetivo

Desenvolver uma API básica que permita:

- ✅ Criar tarefas
- 📄 Listar todas as tarefas
- ✏️ Atualizar tarefas
- 🗑️ Excluir tarefas

---

## ⚙️ Tecnologias utilizadas

- **Node.js** — runtime JavaScript
- **Express** — framework web
- **Sequelize** — ORM para modelagem de banco de dados
- **PostgreSQL** — banco de dados relacional
- **Cors** — para liberar acesso a partir do frontend

---

crud-tarefas/
├── app.js
├── config/
│ └── database.js
├── controllers/
│ └── tarefaController.js
├── models/
│ └── tarefa.js
├── routes/
│ └── tarefaRoutes.js
├── package.json

---

## 🔥 Como executar

### 📦 Instalar dependências

  npm install;


## 🔥 Configurar o banco

Edite o arquivo config/database.js com seu usuário, senha e nome do banco.
Crie o banco no PostgreSQL:

sql
Copiar
Editar
CREATE DATABASE crud_tarefas;

## 🔥 Rodar a aplicação

npm run dev

A API ficará disponível em:

http://localhost:3000/api

## 🔥 Rotas da API

## ✅ CRIAR

POST /api/tarefas

Body (JSON):

{
  "titulo": "Estudar Node.js",
  "descricao": "Praticar conceitos de backend",
  "concluida": false
}

## 📄 LISTAR

GET /api/tarefas

## ✏️ ATUALIZAR

PUT /api/tarefas/:id

Body (JSON):

{
  "titulo": "Estudar Node.js atualizado",
  "descricao": "Finalizar exercícios",
  "concluida": true
}

## 🗑️ DELETAR

DELETE /api/tarefas/:id

## 🔥 AUTOR 

Italo José
Estudante de Análise e Desenvolvimento de Sistemas


