const usuarioService = require('../services/UsuarioService');

class UsuarioController {
  async criarUsuario(req, res) {
    try {
      const { nome, email } = req.body;
      const usuario = await usuarioService.criarUsuario(nome, email);
      res.json(usuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  }
}

module.exports = new UsuarioController();