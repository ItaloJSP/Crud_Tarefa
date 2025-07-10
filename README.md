# 📝 API CRUD de Tarefas com Autenticação
Projeto API REST para gerenciar tarefas, usando Node.js, Express, Sequelize e PostgreSQL, com autenticação via JWT.

---

## 🚀 Objetivo

- Desenvolver uma API básica que permita:

- Permitir que usuários se cadastrem e façam login

- Criar, listar, atualizar e deletar tarefas autenticado

- Proteger rotas de tarefas com token JWT


---

## ⚙️ Tecnologias utilizadas

- **Node.js** — runtime JavaScript
- **Express** — framework web
- **Sequelize** — ORM para modelagem de banco de dados
- **PostgreSQL** — banco de dados relacional
- **bcrypt ** — hash para senhas
- **jsonwebtoken ** — geração e validação de tokens JWT
- **Cors** — para liberar acesso a partir do frontend

---

## 📁 Estrutura do projeto

crud-tarefas/
├── app.js
├── config/
│   └── database.js
├── controllers/
│   ├── tarefaController.js
│   └── usuarioController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── tarefa.js
│   └── usuario.js
├── routes/
│   ├── tarefaRoutes.js
│   └── usuarioRoutes.js
├── package.json


---

## 🔥 Como executar

### 📦 Instalar dependências

  npm install;


## 🔥 Configurar o banco

No arquivo config/database.js, configure a conexão com seu banco PostgreSQL, incluindo usuário, senha, host, porta e SSL se necessário (como no Railway).

Crie o banco (exemplo):

CREATE DATABASE crud_tarefas;

## 🔥 Rodar a aplicação

npm run dev

A API ficará disponível em:

http://localhost:3000/api

## 🔐 Autenticação

Cadastrar usuário
- POST /api/usuarios/cadastrar

Body (JSON):

json
Copiar
Editar
{
  "nome": "Italo José",
  "email": "italo@example.com",
  "senha": "minhasenha123"
}

---

Login
POST /api/usuarios/login

Body (JSON):

json
Copiar
Editar
{
  "email": "italo@example.com",
  "senha": "minhasenha123"
}

---

## 📋 Rotas protegidas (necessitam do token JWT no header)

Inclua no header da requisição:

Authorization: Bearer SEU_TOKEN_AQUI

---


Criar tarefa
POST /api/tarefas

Body (JSON):

json
Copiar
Editar
{
  "titulo": "Estudar Node.js",
  "descricao": "Praticar conceitos de backend",
  "concluida": false
}

---

Listar todas as tarefas
GET /api/tarefas

---

Atualizar tarefa
PUT /api/tarefas/:id

Body (JSON):

json
Copiar
Editar
{
  "titulo": "Estudar Node.js avançado",
  "descricao": "Finalizar exercícios",
  "concluida": true
}


---

Deletar tarefa
DELETE /api/tarefas/:id

---


## ⚠️ Erros comuns

- 401 Unauthorized: Token ausente ou inválido nas rotas protegidas

- 404 Not Found: Usuário ou tarefa não encontrada

- 500 Internal Server Error: Erro inesperado no servidor

---

## 🛠️ Scripts disponíveis

- npm run dev    # Rodar em modo desenvolvimento com nodemon

- npm start      # Rodar aplicação normalmente


## 🔥 AUTOR 

Italo José
Estudante de Análise e Desenvolvimento de Sistemas


