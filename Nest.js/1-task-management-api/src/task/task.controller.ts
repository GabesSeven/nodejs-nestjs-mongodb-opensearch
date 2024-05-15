/*
Arquivos ".controller" referenciam arquivos que recebem requisições dos usuários através dos endpoints e as encaminham para o service.
*/
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';

/* '/task' é o endpoint do Controller TaskController */
@Controller('task')
export class TaskController {
    
    /* 
    Ao executar o contrutor, o gerenciador de dependências verifica se "TaskService" já foi instânciado, 
    senão o gerenciador intancia "TaskService" e injeta a classe para o Controller.
    */
    constructor(private readonly taskService: TaskService) { }
    
    @Post()
    create(@Body() task: TaskDto){
        console.log(task);
        this.taskService.create(task);
    }

    @Get('/:id')
    findById(@Param('id') id: string): TaskDto {
        console.log(id);
        return this.taskService.findById(id);
    }

    @Put()
    update(@Body() task: TaskDto){
        this.taskService.update(task);
    }
}
