let nvalor:number;
let svalor:string;
let uvalor:unknown;


/* TYPE ASSERTION - PARTE 1 */
/*
"uvalor" originalmente é do tipo "unknown", ao atribui um valor inteiro tornou-se tipo "number"
*/
// uvalor=10;

/*
Porém não é possível fazer diretamente associação entre tipo "unknown" e outro tipo
Somente é possível se realizar um Type Assetion (Afirmação de Tipo)
*/
// nvalor=uvalor; // ERROO!!!
// svalor=uvalor; // ERROO!!!

// nvalor=<number>uvalor; // Type Assertion
// svalor=<string>uvalor; // Type Assertion

// console.log(uvalor);
// console.log(typeof(uvalor));

// console.log(nvalor);
// console.log(typeof(nvalor));

// console.log(svalor);
// console.log(typeof(svalor));

/* TYPE ASSERTION - PARTE 2 */
uvalor=10;
svalor='100';

/*
Utiliza-se Type Assertion para conversão de valores, por exemplo, para concatenação de strings ou cálculos matemáticos
*/
nvalor=<number><unknown>svalor;

console.log(nvalor);
console.log(typeof(nvalor));

nvalor=Number.parseInt(svalor);

console.log(nvalor);
console.log(typeof(nvalor));

svalor=nvalor.toString();

console.log(svalor);
console.log(typeof(svalor));