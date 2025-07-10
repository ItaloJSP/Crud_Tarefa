const Usuario = require('../models/usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


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

    
    // Gerar token
    const token = jwt.sign(
      { id: usuario.id, email: usuario.email, tipo: usuario.tipo },
      'secreto123', 
      { expiresIn: '1h' }
    );


    res.json({ mensagem: 'Login realizado com sucesso', token, usuario });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
