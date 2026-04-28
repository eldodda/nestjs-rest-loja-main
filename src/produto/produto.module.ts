import { Module } from '@nestjs/common';
import { UsuarioModule } from '../usuario/usuario.module';
import { ProdutoRepository } from './produto.repository';
import { ProdutoController } from './produto.controller';

@Module({
  imports: [UsuarioModule],
  controllers: [ProdutoController],
  providers: [ProdutoRepository],
})
export class ProdutoModule {}
