/*
Toda vez que for criar uma função de callback pode-se criar um arrow function anonimamente, ou seja, criar diretamente na função de callback.
*/

/*
Internamente ao utilizar "function", o JS eleva essa função, podendo ser chamada com antecedência no código.
*/

teste(); // funciona
teste(); // funciona

function teste():void{
    console.log("Teste");
}

/*
Diferente de se utilizar funções anônimas, ou seja, o JS não eleva e, no código, não é permitido o chamamento em qualquer parte do código.
*/

// teste2(); // não funciona

const teste2=():void=>{
    console.log("Teste2");
}
teste2(); // obrigatóriamente, chamamento depois da criação da função.

/*
Array como parâmentro de entrada e função anônima dentro de forEach que varre cada elemento do array. 
*/

const fsoma2=(n:number[]):number=>{
    let s:number=0;
    // "e" é cada elemento, "s" é a soma
    n.forEach((e)=>{
        s+=e;
    })
    return s;
}

let number:number[]=[10,20,30,40]
console.log(fsoma2(number))