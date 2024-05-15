"use strict";
function fsoma(...n) {
    let s = 0;
    n.forEach((en) => {
        s += en;
    });
    return s;
}
console.log(fsoma(10, 20, 30, 40, 50));
