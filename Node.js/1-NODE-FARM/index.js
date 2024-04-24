/* ----- CLASS 5 ----- */
// REPL:
// https://nodejs.org/api/repl.html
// https://nodejs.org/en/learn/command-line/how-to-use-the-nodejs-repl

/* ----- START - REPL's COMMANDS ----- 
> const name = 'jonas'
> name
> <2x_tecla_TAB> // To list all the global variable.
> 3*8
> _+6
> _-30
> String. <2x tecla: TAB> // To list all the methods or properties about "String".
> <2x tecla: Ctrl+C> // To exit the REPL.
> <2x tecla: Ctrl+D> // To exit the REPL.
> .exit // To exit the REPL.
----- END - REPL's COMMANDS ----- */

/* ----- CLASS 6 ----- */
// const hello = 'Hello world';
// console.log(hello);

/* ----- CLASS 7 ----- */
// const fs = require('fs');
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('File written!');

/* ----- CLASS 9 ----- */
// https://www.luiztools.com.br/post/programacao-assincrona-em-nodejs-callbacks-e-promises/

/*
--> Callback: Function passed as argument to other functions are invoked only when a particular operation is complete. Threads occur between I/O operations and other codes. 
--> Callback Hell: Nested Callback Functions to long response times.
--> Promises: Object that represents the result of an asynchronous operation, which can be resolved with a value or rejected with a reason (an error).
--> Then: Organizes asynchronism. Returns a new Promise, allowing you to chain multiple asynchronous operations sequentially. Each "then" receives a callback executed after the associated Promise is resolved.
--> Async-Await: Organizes asynchronism. Introduced in ES8 to simplify the code and resemble synchronous programming (more sequential and easier to understand code). "async" defines an asynchronous function that returns a Promise implicitly. "await" is only used within asynchronous functions. Used to pause execution and wait for a Promise to be resolved or rejected.
*/

/* ----- CALLBACK - PART I ----- */
// const fs = require('fs');
// const x = 0;
// fs.writeFile('./txt/test.txt', `${x}`, () => {
//     console.log(x)
// }); // Only executes "console.log(x)", when it finishes writing the file "teste.txt".
    
/* ----- CALLBACK - PART II ----- */
// const fs = require('fs');
// const x = 0;
// function fx() {
    //     console.log(x)
// }; // Only executes "console.log(x)", when it finishes writing the file "teste.txt".
// fs.writeFile('./txt/test.txt', `${x}`, fx); 

/* ----- CALLBACK HELL - PROBLEM ----- */
/* The problem occurs when there are nested callback functions with long execution and response times. */
// const fs = require('fs');
// const x = 0;
// fs.writeFile('./txt/test.txt', `${x}`, () => {
//     fs.writeFile('./txt/test2.txt', 'content\'s "test2.txt"', () => {
//         /* There is nothing to be done here. */ 
//     });
// }); // Only write the file "test2.txt", when you finish writing the file "test.txt".
    
/* ----- PROMISES: "THEN" SOLUTION TO CALLBACK HELL ----- */
// const fs = require('fs');
// const x = 0;
// fs.writeFile('./txt/test.txt', `${x}`) // Orginal Promise.
//     .then(() => {  // Like a Nested Callback. Chains another Promise executed after the original Promise is resolved. 
//         return fs.writeFile('./txt/test2.txt', 'content\'s "test2.txt"');
//     })
//     .then(() => { // Each "then" returns a new Promise and allows you to chain asynchronous executions sequentially.
//         /* There is nothing to be done here. */ 
//     })
//     .catch((err) => { // Error Handling. Executed if an error occurs during any of the chained operations in the Promise.
//         console.log(err); 
//     });

/* ----- PROMISES: ASYNC-AWAIT SOLUTION TO CALLBACK HELL ----- */
const fs = require('fs');
const x = 0;
/* "async" defines an asynchronous function that will return a Promise implicitly. */
async function functionAssinc() {
    try {
        /* "await" pauses the current execution and wait for the Promise to be resolved (resolved or rejected). Only allowed within the asynchronous function. */
        /* Wait for the "test.txt" file to be written and place the result in the "test" variable. */
        const test = await fs.writeFile('./txt/test.txt', `${x}`); 
        /* Wait for the "test2.txt" file to be written. */
        await  fs.writeFile('./txt/test2.txt', 'content\'s "test2.txt"');
    } catch (err) {
        console.log(err);
    }
};
 