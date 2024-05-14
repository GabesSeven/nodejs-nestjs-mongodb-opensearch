"use strict";
function teste() {
    console.log("Teste");
}
function teste2(user, pass) {
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
}
function teste3(n1, n2) {
    return n1 + n2;
}
function teste4(n1 = 0, n2 = 0) {
    return n1 + n2;
}
function teste5(user, pass, name) {
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
    console.log(`Name: ${name}`);
}
teste();
teste2("Gabriel", "123");
let n_res = teste3(1, 2);
let s_res = teste3(1, 2).toString();
console.log(n_res, s_res);
console.log(teste4(5));
console.log(teste4());
teste5("Gabriel", "123");
