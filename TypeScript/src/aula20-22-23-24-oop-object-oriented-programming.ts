/*
4 PILARES DA ORIENTAÇÃO A OBJETO
--> ABSTRAÇÃO: Ao cria modelos de objetos representando entidades do mundo real. A abstração permite concentrar nos aspectos relevantes que definem a estrutura e o comportamento de um objeto, sem se preocupar com os detalhes de implementação;
--> ENCAPSULAMENTO: Conceito de agrupar dados (variáveis) e métodos (funções) em uma única unidade (classe). Permite controle de acesso;
--> HERANÇA: Mecanismo que permite uma subclasse (classe filha) herde atributos e métodos da superclasse (classe pai). Promove a reutilização de código. A subclasse pode adicionar novos comportamentos ou substituir métodos da superclasse, ao mesmo tempo que mantém a estrutura e funcionalidade existente;
--> POLIMORFISMO: Capacidade de objetos de classes diferentes responderem ao mesmo método de maneiras diferentes. Permite uma implementação flexível e genérica de código 
*/

class Conta{
    protected numero:number
    protected titular:string
    private saldoconta:number
    constructor(titular:string){
        this.numero=this.gerarNumeroConta()
        this.titular=titular
        this.saldoconta=0
    }
    private gerarNumeroConta():number{
        return Math.floor(Math.random()*10000)+1
    }
    protected info(){
        console.log(`Titular: ${this.titular}`)
        console.log(`Número.: ${this.numero}`)
    }
    public saldo():number{
        return this.saldoconta
    }
    protected deposito(valor:number){
        if(valor < 0){
            console.log("Valor inválido")
            return
        }
        this.saldoconta+=valor
    }
    protected saque(valor:number){
        if(valor <= this.saldoconta)
            this.saldoconta-=valor
        else
            console.log(`--> Saldo insuficiente`)
    }
}

class ContaPF extends Conta{
    cpf:number;
    // todos os parâmetros presentes na classe pai devem ser passados ao chamar o contrutor
    constructor(cpf:number,titular:string){
        // "super" chama o contrutor da classe pai e passa os prâmetros necessários
        super(titular)
        this.cpf=cpf
        console.log(`--> Conta PF Criada: ${titular}`)
    }
    info(){
        console.log('Tipo...: PF')
        super.info()
        console.log(`CPF....: ${this.cpf}`)
        console.log('--------------')
    }
    public deposito(valor:number){
        if(valor>1000)
            console.log(`Valor de depósito muito grande para este tipo de conta`)
        else
            super.deposito(valor)
        
    }
    public saque(valor:number){
        if(valor>1000)
            console.log(`Valor de saque muito grande para este tipo de conta`)
        else
            super.saque(valor)
    }
}

class ContaPJ extends Conta{
    cnpj:number;
    // todos os parâmetros presentes na classe pai devem ser passados ao chamar o contrutor
    constructor(cnpj:number,titular:string){
        super(titular)
        this.cnpj=cnpj
        console.log(`--> Conta PJ Criada: ${titular}`)   
    }
    info(){
        console.log('Tipo...: PJ')
        super.info()
        console.log(`CNPJ...: ${this.cnpj}`)
        console.log('--------------')
    }
    public deposito(valor:number){
        if(valor>10000){
            console.log(`Valor de depósito muito grande para este tipo de conta`)
        }else{
            super.deposito(valor)
        }
    }
    public saque(valor:number){
        if(valor>10000){
            console.log(`Valor de saque muito grande para este tipo de conta`)
        }else{
            super.saque(valor)
        }
    }
}

const cont1=new ContaPF(111,"Gabriel")
const cont2=new ContaPJ(222,"Giuliano")

cont1.info()
cont2.info()

console.log('---- DEPÓSITO CONTA 1 ---')
console.log(`--> ${cont1.saldo()}`)
cont1.deposito(800)
cont1.deposito(200)
cont1.deposito(1000)
cont1.deposito(1001)
console.log(`--> ${cont1.saldo()}`)
console.log('---- DEPÓSITO CONTA 2 ---')
console.log(`--> ${cont2.saldo()}`)
cont2.deposito(10000)
cont2.deposito(10000)
cont2.deposito(10000)
cont2.deposito(10001)
console.log(`--> ${cont2.saldo()}`)

console.log('---- SAQUE CONTA 1 ---')
console.log(`--> ${cont1.saldo()}`)
cont1.saque(1000)
cont1.saque(1000)
cont1.saque(1000)
cont1.saque(1)
console.log(`--> ${cont1.saldo()}`)
console.log('---- SAQUE CONTA 2 ---')
console.log(`--> ${cont2.saldo()}`)
cont2.saque(300000)
cont2.saque(30000)
cont2.saque(1)
console.log(`--> ${cont2.saldo()}`)
