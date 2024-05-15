/*
Operador SPREAD é usado para espalhar os elementos de uma estrutura de dados iterável: array ou objeto.
*/

function fsoma(...n:number[]){
    let s:number=0;
    n.forEach((en)=>{
        s+=en
    })
    return s; 
}

console.log(fsoma(10,20,30,40,50))