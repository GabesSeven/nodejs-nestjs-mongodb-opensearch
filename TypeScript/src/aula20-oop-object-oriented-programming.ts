/*
4 PILARES DA ORIENTAÇÃO A OBJETO
--> ABSTRAÇÃO: Ao cria modelos de objetos representando entidades do mundo real. A abstração permite concentrar nos aspectos relevantes que definem a estrutura e o comportamento de um objeto, sem se preocupar com os detalhes de implementação;
--> ENCAPSULAMENTO: Conceito de agrupar dados (variáveis) e métodos (funções) em uma única unidade (classe). Permite controle de acesso;
--> HERANÇA: Mecanismo que permite uma subclasse (classe filha) herde atributos e métodos da superclasse (classe pai). Promove a reutilização de código. A subclasse pode adicionar novos comportamentos ou substituir métodos da superclasse, ao mesmo tempo que mantém a estrutura e funcionalidade existente;
--> POLIMORFISMO: Capacidade de objetos de classes diferentes responderem ao mesmo método de maneiras diferentes. Permite uma implementação flexível e genérica de código 
*/

class Conta{
    public numero:number;
    public titular:string;
    constructor(numero:number,titular:string){
        this.numero=numero;
        this.titular=titular;
    }
}

class ContaPF extends Conta{

}

class ContaPJ extends Conta{
    
}

const cont1=new ContaPF(123456789,"Gabriel")
const cont2=new ContaPJ(123456666,"Giu")

console.log(cont1.titular)
console.log(cont2.titular)