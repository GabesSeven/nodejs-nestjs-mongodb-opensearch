let coisas:[string,number,boolean]=["Corda",10,true];
// let coisas:readonly[string,number,boolean]=["Corda",10,true]; // Não será possível inserir dados

coisas.push("Kit Médico",5,true);
coisas[2]=false;

console.log(coisas);
console.log(coisas[1]);
console.log(coisas[2]);

// console.log(coisas[3]); // dá erro, pois só é válido o tamanho inicial da tupla