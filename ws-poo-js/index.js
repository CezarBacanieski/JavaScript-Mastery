import User from './User.js';
import Docente from './Docente.js';
import Admin from './Admin.js';
const novoUser = new User('cezar', 'c@c.com', '2021-01-01');

console.log(novoUser.exibirInfos());

const novoAdmin = new Admin('Rodrigo', 'r@r.com', '2021-01-01');
console.log(novoAdmin.nome);
novoAdmin.nome = 'Andre';
console.log(novoAdmin.nome);
