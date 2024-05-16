"use strict";
class Conta {
    numero;
    titular;
    saldoconta;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldoconta = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 10000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número.: ${this.numero}`);
    }
    saldo() {
        return this.saldoconta;
    }
    deposito(valor) {
        if (valor < 0) {
            console.log("Valor inválido");
            return;
        }
        this.saldoconta += valor;
    }
    saque(valor) {
        if (valor <= this.saldoconta)
            this.saldoconta -= valor;
        else
            console.log(`--> Saldo insuficiente`);
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        console.log(`--> Conta PF Criada: ${titular}`);
    }
    info() {
        console.log('Tipo...: PF');
        super.info();
        console.log(`CPF....: ${this.cpf}`);
        console.log('--------------');
    }
    deposito(valor) {
        if (valor > 1000)
            console.log(`Valor de depósito muito grande para este tipo de conta`);
        else
            super.deposito(valor);
    }
    saque(valor) {
        if (valor > 1000)
            console.log(`Valor de saque muito grande para este tipo de conta`);
        else
            super.saque(valor);
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`--> Conta PJ Criada: ${titular}`);
    }
    info() {
        console.log('Tipo...: PJ');
        super.info();
        console.log(`CNPJ...: ${this.cnpj}`);
        console.log('--------------');
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log(`Valor de depósito muito grande para este tipo de conta`);
        }
        else {
            super.deposito(valor);
        }
    }
    saque(valor) {
        if (valor > 10000) {
            console.log(`Valor de saque muito grande para este tipo de conta`);
        }
        else {
            super.saque(valor);
        }
    }
}
const cont1 = new ContaPF(111, "Gabriel");
const cont2 = new ContaPJ(222, "Giuliano");
cont1.info();
cont2.info();
console.log('---- DEPÓSITO CONTA 1 ---');
console.log(`--> ${cont1.saldo()}`);
cont1.deposito(800);
cont1.deposito(200);
cont1.deposito(1000);
cont1.deposito(1001);
console.log(`--> ${cont1.saldo()}`);
console.log('---- DEPÓSITO CONTA 2 ---');
console.log(`--> ${cont2.saldo()}`);
cont2.deposito(10000);
cont2.deposito(10000);
cont2.deposito(10000);
cont2.deposito(10001);
console.log(`--> ${cont2.saldo()}`);
console.log('---- SAQUE CONTA 1 ---');
console.log(`--> ${cont1.saldo()}`);
cont1.saque(1000);
cont1.saque(1000);
cont1.saque(1000);
cont1.saque(1);
console.log(`--> ${cont1.saldo()}`);
console.log('---- SAQUE CONTA 2 ---');
console.log(`--> ${cont2.saldo()}`);
cont2.saque(300000);
cont2.saque(30000);
cont2.saque(1);
console.log(`--> ${cont2.saldo()}`);
