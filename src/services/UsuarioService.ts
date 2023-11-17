import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class UsuarioService {
  async criarUsuario(nome: string, email: string) {
    return await prisma.usuario.create({
      data: { nome, email },
    });
  }
}

export default new UsuarioService();