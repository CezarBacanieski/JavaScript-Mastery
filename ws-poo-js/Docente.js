import User from './User.js';

export default class Docente extends User {
  constructor(nome, email, nascimento, role = 'professor', ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }
  aprovarEstudante(nome, nota) {
    if (nota >= 6) {
      return `Aluno ${nome} esta aprovado e sua nota foi ${nota}`;
    } else {
      return `Aluno ${nome} esta reprovado e sua nota foi ${nota}`;
    }
  }
}

// const novoDocente = new Docente('Carlos', 'c@c.com', '2021-01-01');
// console.log(novoDocente);
// console.log(novoDocente.exibirInfos());
// console.log(novoDocente.aprovarEstudante('Rodrigo', 7));
