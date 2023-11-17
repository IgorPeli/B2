const lanceService = require('../services/LanceService');

class LanceController {
  async criarLance(req, res) {
    try {
      const { compradorId, leilaoId, valor } = req.body;
      const lance = await lanceService.criarLance(compradorId, leilaoId, valor);
      res.json(lance);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao criar lance' });
    }
  }
}

module.exports = new LanceController();