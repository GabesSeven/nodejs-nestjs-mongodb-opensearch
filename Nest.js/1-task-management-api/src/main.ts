import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/*
Nest é uma Framework modular. Módulos são usados em:
 - configurações de injeção de dependência;
 - congigurações de escopo - regras de negócio, quais dados serão processados, exportados, etc.
"AppModule" é a classe de inicialização
*/

// Iniciar Aplicação
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
