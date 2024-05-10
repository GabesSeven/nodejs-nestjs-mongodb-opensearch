"use strict";
let dados = {
    nome: "Douglistildes",
    idade: 25,
    status: "A",
    ola: () => { console.log("Oi"); },
    info: (p) => { console.log(p); }
};
dados.nome = "Josistelderson";
console.log(dados);
console.log(typeof (dados));
dados.ola();
dados.info(dados.nome);
