/*
enum numérico, é possível:
 - pegar chave utilizando valor;
 - pegar valor utilizando chave.
*/ 
// 1º modo
/*
enum dias{
    domingo,
    segunda,
    terca,
    quarta,
    quinta,
    sexta,
    sabado
}
*/

// 2º modo
enum dias{
    domingo=0,
    segunda=1,
    terca=2,
    quarta=3,
    quinta=4,
    sexta=5,
    sabado=6
}
// console.log(dias.domingo)
// console.log(dias['domingo'])
// console.log(dias[1])

const d=new Date();
// console.log(d.getDate())
// console.log(d.getDay())
// console.log(dias[d.getDay()])

/*
enum textual, é possível:
 - somente pegar valor utilizando chave.
*/ 

enum cores{
    branco="#fff",
    preto="#000",
    vermelho="#f00",
    verde="#0f0",
    azul="#00f"
}

console.log(cores.branco);
console.log(cores['branco']);
// console.log(cores['#fff']); // Não é possível pegar chave utilizando valor

enum tipoUsuario{
    USER=10,
    ADMIN=100,
    SUPER=1000
}
console.log(tipoUsuario.SUPER)

/* 
let para instanciar sem atribuir valor
*/ 
// let tp:tipoUsuario; 

/* 
"const" para instanciar e atribuir valor
Não é permitido atraibuir valores que não está na lista enum, ou seja, nenhum valor que não seja 10, 100 ou 1000.
*/
// const tp:tipoUsuario=500
const tp1:tipoUsuario=10
const tp2:tipoUsuario=tipoUsuario.USER
console.log(tp1, tp2)