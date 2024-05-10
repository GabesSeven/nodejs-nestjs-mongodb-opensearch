// permite qualquer estrutura de dados

// let dados:object={
//     nome:"Douglistildes",
//     idade:25,
//     status:"A"
// };

// Não é necessário específicar para ele entender que é Object
let dados={
    nome:"Douglistildes",
    idade:25,
    status:"A",
    ola:()=>{console.log("Oi")},
    info:(p:string)=>{console.log(p)}
};
dados.nome="Josistelderson";
console.log(dados);
console.log(typeof(dados));

dados.ola();
dados.info(dados.nome);