/*
Arquivos ".controller" referenciam arquivos que recebem requisições dos usuários através dos endpoints e as encaminham para o service.
*/
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/* '/' é o endpoint do Controller AppController */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
