/*
Arquivos ".service" referenciam arquivos que recebem requisições do controller, realiza processamento, execução de regras de negócio, envio de requisição para o model, resposta ao controller.
*/
import { Injectable, NotFoundException, HttpException, HttpStatus } from '@nestjs/common';
import { TaskDto } from './task.dto';

@Injectable() // define classe como injetável
export class TaskService {
    
    private tasks: TaskDto[] = [];
    
    create(task: TaskDto) {
        this.tasks.push(task);
        console.log(this.tasks)
    }

    findById(id: string): TaskDto{
        // cria subarray com ids correspondentes
        const foundTask = this.tasks.filter(t => t.id == id);
        
        // se tamanho de array for diferente de zero retorna o primeiro elemento (id encontrado)
        if(foundTask.length){
            return foundTask[0]
        }
        
        // se não lança uma excessão referente a id não encontrado
        // throw new NotFoundException(`Task with id ${id} not found.`);
        throw new HttpException(`Task with id ${id} not found.`, HttpStatus.NOT_FOUND);
    }

    update(task: TaskDto){
        let taskIndex = this.tasks.findIndex(t => t.id === task.id);

        if(taskIndex >= 0){
            this.tasks[taskIndex] = task;
            return;
        }

        throw new HttpException(`Task with id ${task.id} not found`, HttpStatus.BAD_REQUEST);
    }
}
