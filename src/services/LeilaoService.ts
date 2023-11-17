import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LeilaoService {
  async criarLeilao(produto: string, preco: number, datalimite: Date, donoId: string) {
    return await prisma.leilao.create({
      data: { produto, preco, datalimite, donoId: Number(donoId) }, // Converta donoId para número se necessário
    });
  }

  async adicionarLance(leilaoId: number, lanceId: number) {
    return await prisma.leilao.update({
      where: { id: leilaoId },
      data: { lances: { connect: { id: lanceId } } },
    });
  }
}

export default new LeilaoService();