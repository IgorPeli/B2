import express from 'express';
import LeilaoController from '../controllers/LeilaoController';

const router = express.Router();

router.post('/leiloes', LeilaoController.criarLeilao);
router.post('/leiloes/lances', LeilaoController.adicionarLance);

export default router;
