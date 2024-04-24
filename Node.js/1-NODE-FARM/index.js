// REPL
// https://nodejs.org/api/repl.html
// https://nodejs.org/en/learn/command-line/how-to-use-the-nodejs-repl

/* ----- ÍNICIO - COMANDOS NO REPL ----- 

> const name = 'jonas'
> name
> <2x_tecla_TAB> // to list all the global variable
> 3*8
> _+6
> _-30
> String. <2x tecla: TAB> // to list all the methods or properties about "String"
> <2x tecla: Ctrl+C> // to exit the REPL
> <2x tecla: Ctrl+D> // to exit the REPL
> .exit // to exit the REPL

----- FIM - COMANDOS NO REPL ----- */


// const hello = 'Hello world'
// console.log(hello)


const fs = require('fs');
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);