/*
Arquivos ".service" referenciam arquivos que recebem requisições do controller, realiza processamento, execução de regras de negócio, envio de requisição para o model, resposta ao controller.
*/
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
