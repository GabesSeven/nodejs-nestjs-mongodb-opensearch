"use strict";
function testee() {
    console.log("Teste");
}
function testee2(user, pass) {
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
}
function testee3(n1, n2) {
    return n1 + n2;
}
function testee4(n1 = 0, n2 = 0) {
    return n1 + n2;
}
function testee5(user, pass, name) {
    console.log(`User: ${user}`);
    console.log(`Pass: ${pass}`);
    console.log(`Name: ${name}`);
}
testee();
testee2("Gabriel", "123");
let n_res = testee3(1, 2);
let s_res = testee3(1, 2).toString();
console.log(n_res, s_res);
console.log(testee4(5));
console.log(testee4());
testee5("Gabriel", "123");
