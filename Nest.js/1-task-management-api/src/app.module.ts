/*
Arquivos ".module" referenciam arquivos que controlam a modularização (desaclopamento).
*/
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';

/*
Nest procurou o módulo mais próximo e adicionou TaskController aqui, 
mas não é o correto, pois deve existir um módulo dedicado ao recurso do TaskController.
*/ 
@Module({
  imports: [TaskModule],
  // controllers: [AppController, TaskController], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
