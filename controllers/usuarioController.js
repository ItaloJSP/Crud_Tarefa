const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');

exports.cadastrar = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    // Criptografar senha
    const hashedSenha = await bcrypt.hash(senha, 10);

    const usuario = await Usuario.create({ nome, email, senha: hashedSenha });

    res.status(201).json(usuario);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const valid = await bcrypt.compare(senha, usuario.senha);

    if (!valid) {
      return res.status(401).json({ error: 'Senha incorreta' });
    }

    res.json({ mensagem: 'Login realizado com sucesso', usuario });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
