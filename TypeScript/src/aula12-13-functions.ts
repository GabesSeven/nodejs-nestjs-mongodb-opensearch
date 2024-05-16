/* quando não específicado, por padrão, as funções retornam void */
/*
function teste():void{ 
    console.log("Teste");
} 
*/

function testee(){
    console.log("Teste");
}

function testee2(user:string,pass:string){
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
}

function testee3(n1:number,n2:number){
    return n1+n2;
}

// setar valores padrões para os parâmetros
function testee4(n1:number=0,n2:number=0){
    return n1+n2;
}

// setar parâmetro "name" como opcional
function testee5(user:string,pass:string, name?:string){
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
    console.log(`Name: ${name}`);
}

testee();
testee2("Gabriel","123");
let n_res:number=testee3(1,2);
let s_res:string=testee3(1,2).toString();
console.log(n_res, s_res);
console.log(testee4(5));
console.log(testee4());
testee5("Gabriel","123");