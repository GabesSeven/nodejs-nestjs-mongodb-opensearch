/*
"let" não pode ser instânciada vazia, sem valor.
Tipo "null" não possui valor, ou seja, valor nulo ou vazio.
Tipo "any" possui valor indefinido/undefined (quando não foi setado nenhum outro tipo como string ou inteiro).
Tipo "unknown" recebe qualquer valor.
*/

/*
    null
*/
let vvnome:string|null;
vvnome="Gabriel";
console.log(vvnome); 

/*
    undefined
*/
// let vvnome2:any;
// console.log(vvnome2); 

let vvnome2:any;
vvnome="Gabriel";
console.log(vvnome); 

/*
    unknown
*/
// let vvnome2:any;
// console.log(vvnome2); 

let vvnome3:unknown; // unknow só pode ser atribuído em tipos unknown ou any
// let vnum=vvnome3; // "vnum" recebe "vvnome3" tipado com unknown, pois não foi definido tipo para "vnum"
// let vnum:numer=vvnome3; // ERRO!!! "vnum" foi definido inteiro, logo não recebe outro tipo
console.log(vvnome); 
