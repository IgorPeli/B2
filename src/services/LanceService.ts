import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class LanceService {
  async criarLance(compradorId: number, leilaoId: number, valor: number) {
    const lance = await prisma.lance.create({
      data: { valor, compradorId, leilaoId },
    });

    return lance;
  }
}

export default new LanceService();