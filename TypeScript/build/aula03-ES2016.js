class Curso {
    constructor(canal, curso) {
        this.canal = null;
        this.curso = null;
        this.canal = canal;
        this.curso = curso;
    }
}
let c1 = new Curso("CFBCursos", "TypeScript");
console.log(c1.canal);
console.log(c1.curso);
