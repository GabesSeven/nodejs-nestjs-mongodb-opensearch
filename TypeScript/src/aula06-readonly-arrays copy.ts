// let numeros:number[]=[20,40,30];
// let numeros:Array<number|string>=[20,30,40,"Bruno"];
let numeros:(number|string)[]=[20,30,40,"Bruno"];

numeros.push(50);
numeros.unshift(10);

numeros.pop();
numeros.shift();

console.log(numeros);

// Não é possível escrever (adicionar ou remover no array)
let numeros_ro:ReadonlyArray<number>=[100,200,300];
console.log(numeros_ro)