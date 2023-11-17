const leilaoService = require('../services/LeilaoService');

class LeilaoController {
  async criarLeilao(req, res) {
    try {
      const { produto, preco, datalimite, donoId } = req.body;
      const leilao = await leilaoService.criarLeilao(produto, preco, datalimite, donoId);
      res.json(leilao);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar leilão' });
    }
  }

  async adicionarLance(req, res) {
    try {
      const { leilaoId, lanceId } = req.body;
      await leilaoService.adicionarLance(leilaoId, lanceId);
      res.json({ message: 'Lance adicionado ao leilão' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao adicionar lance ao leilão' });
    }
  }
}

module.exports = new LeilaoController();