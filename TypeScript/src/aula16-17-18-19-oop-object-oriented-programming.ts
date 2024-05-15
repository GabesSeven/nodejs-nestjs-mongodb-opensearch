/*
"constructor(){}" é uma função construtora é executada cada vez que um objeto é instanciado.
*/
class Computador{
    // nome:string="Coputador 1";
    // ram:number=0;
    // cpu:number=0;
    // ligado:boolean=false;

    // nome:string;
    // ram:number;
    // cpu:number;
    // ligado:boolean;

    public nome:string;
    private ram:number;
    private cpu:number;
    private ligado:boolean;

    /* Função construtora pode ter parâmetros ou não */
    // constructor() {
    //     console.log("Novo computador criado");
    // }
    
    constructor(nome:string,ram:number,cpu:number) {
        this.nome=nome;
        this.ram=ram;
        this.cpu=cpu;
        this.ligado=false;
        console.log("Novo computador criado");
    }

    info():void{
        console.log(`Nome...:${this.nome}`);
        console.log(`RAM...:${this.ram}`);
        console.log(`CPU...:${this.cpu}`);
        console.log(`Ligado...:${this.ligado?"Sim":"Não"}`); // operador ternário
        console.log("----------------------------------")
    }

    ligar():void{
        this.ligado=true;
    }

    desligar():void{
        this.ligado=false;
    }

    upRam(qtde:number):void{
        if(qtde >=0 && qtde <= 1000) this.ram=qtde;
        else console.log(`Quantidade ${qtde} para o computador ${this.nome} não é permitido`);
    }
}

/* AULA - 16 - CLASSES */
/*
Objetos sendo instanciado.
*/
// const comp1=new Computador();
// const comp2=new Computador();
// const comp3=new Computador();

// console.log(comp1.nome, comp2.nome, comp3.nome);

// comp1.nome="Rapidão"
// comp2.nome="Carão"
// comp3.nome="Gamer"

// console.log(comp1.nome, comp2.nome, comp3.nome);


/* AULA - 17 - CONSTRUTORES */

// const comp1=new Computador();
// const comp2=new Computador();
// const comp3=new Computador();

// const comp1=new Computador("Rapidão");
// const comp2=new Computador("Carão");
// const comp3=new Computador("Gamer");

// const comp1=new Computador("Rapidão",64,10);
// const comp2=new Computador("Carão",32,5);
// const comp3=new Computador("Gamer",128,10);

// console.log(comp1.nome, comp1.cpu, comp1.ram);
// console.log(comp2.nome, comp2.cpu, comp2.ram);
// console.log(comp3.nome, comp3.cpu, comp3.ram);

/* AULA - 18 - MÉTODOS */

// const comp1=new Computador("Rapidão",64,10);
// const comp2=new Computador("Carão",32,5);
// const comp3=new Computador("Gamer",128,10);

// comp1.info();
// comp2.info();
// comp3.info();

/* Utiliza-se modificadores de acesso para variáveis não serem modificadas indevidamente */
// comp1.ram=-100;
// console.log(comp1.ram)

// comp1.ligar();
// comp3.ligar();
// comp1.desligar();

// comp1.info();
// comp2.info();
// comp3.info();

/* AULA - 19 - MODIFICADORES DE ACESSO: PÚBLICO, PRIVADO, PROTEGIDO 

--> PUBLIC, default quando não especificado e pode ser acesso de:
    --> dentro da classe;
    --> fora da classe;
    --> filhos da classe;

--> PRIVATE pode ser acesso de:
    --> dentro da classe;

--> PROTECTED pode ser acesso de:
    --> filhos da classe;
*/

const comp1=new Computador("Rapidão",64,10);
const comp2=new Computador("Carão",32,5);
const comp3=new Computador("Gamer",128,10);

// se "ligado" é "public" pode ser acesso de fora da classe
// comp1.ligado=true;
// comp2.ligado=false;
// comp3.ligado=true;

// utilizando método "upRam" para modificar variável "ram" que é "private" 
comp1.upRam(55);
comp1.upRam(-100);
comp1.upRam(1001);