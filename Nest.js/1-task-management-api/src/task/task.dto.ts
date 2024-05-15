/*
Dto - Data Trasnfer Object

Objeto utilizado para fazer requisições e respostas
*/

export class TaskDto {
    id: string;
    title: string;
    description: string;
    status: string;
    expirationDate: Date;
}
