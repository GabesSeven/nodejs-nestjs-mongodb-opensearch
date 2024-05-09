import { Body, Controller, Post } from '@nestjs/common';
import { TaskDto } from './task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
    
    constructor(private readonly taskService: TaskService) { }
    
    @Post()
    create(@Body() task: TaskDto){
        // console.log(task);
        this.taskService.create(task);
    }
}