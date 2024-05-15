"use strict";
class Computador {
    nome;
    ram;
    cpu;
    ligado;
    constructor(nome, ram, cpu) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = false;
        console.log("Novo computador criado");
    }
    info() {
        console.log(`Nome...:${this.nome}`);
        console.log(`RAM...:${this.ram}`);
        console.log(`CPU...:${this.cpu}`);
        console.log(`Ligado...:${this.ligado ? "Sim" : "Não"}`);
        console.log("----------------------------------");
    }
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
    upRam(qtde) {
        if (qtde >= 0 && qtde <= 1000)
            this.ram = qtde;
        else
            console.log(`Quantidade ${qtde} para o computador ${this.nome} não é permitido`);
    }
}
const comp1 = new Computador("Rapidão", 64, 10);
const comp2 = new Computador("Carão", 32, 5);
const comp3 = new Computador("Gamer", 128, 10);
comp1.upRam(55);
comp1.upRam(-100);
comp1.upRam(1001);
