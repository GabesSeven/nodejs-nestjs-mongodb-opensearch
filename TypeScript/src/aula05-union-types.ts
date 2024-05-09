
/* valores únicos */
// let cursos:string[]=["JavaScript", "TypezScript", "C++"];
let cursos=["JavaScript", "TypezScript", "C++"];
let valores=[10, 200, 2023];

/* valores mistos (string ou number) */
let vtest:string|number;
vtest="Bruno";
vtest=2024;

/* valores mistos (qualquer valor) */
let vteste:any[]=["JS", "TS", "C++", 100, false];
// let vteste:any;
// vteste="Bruno";
// vteste=2024;
// vteste=true;

cursos.push("Arduino");
valores.push(400);

console.log(cursos);
console.log(valores);
console.log(vtest);
console.log(vteste);

