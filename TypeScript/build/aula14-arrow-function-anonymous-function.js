"use strict";
teste();
teste();
function teste() {
    console.log("Teste");
}
const teste2 = () => {
    console.log("Teste2");
};
teste2();
const fsoma2 = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
let number = [10, 20, 30, 40];
console.log(fsoma2(number));
