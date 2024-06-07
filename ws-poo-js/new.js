function User(nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function () {
    return `${this.nome}, ${this.email}`;
  };
}

// usando constructor
// const novoUser = new User('Cezar', 'c@c.com');
// console.log(novoUser.exibirInfos());

// function Admin(role) {
//   User.call(this, 'Cezar', 'c@c.com');
//   this.role = role || 'estudante';
// }
// Admin.prototype = Object.create(User.prototype);
// const novoUser = new Admin('admin');
// console.log(novoUser.exibirInfos());
// console.log(novoUser.role);

const user = {
  init: function (nome, email) {
    this.nome = nome;
    this.email = email;
  },
  exibirInfos: function () {
    return this;
  },
};

const novoUser = Object.create(user);
novoUser.init('Cezar', 'c@c.com');
console.log(novoUser.exibirInfos());
console.log(user.isPrototypeOf(novoUser));
