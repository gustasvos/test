const Endereco = require('./Endereco');

class Cliente extends Endereco {
  constructor(nome, rua, numero, cidade, estado, telefone, email) {
    super(rua, numero, cidade, estado);
    this._nome = nome;
    this._telefone = telefone;
    this._email = email;
  }

  get nome() {
    return this._nome;
  }

  set nome(nome) {
    this._nome = nome;
  }

  get telefone() {
    return this._telefone;
  }

  set telefone(telefone) {
    this._telefone = telefone;
  }

  get email() {
    return this._email;
  }

  set email(email) {
    this._email = email;
  }

  // funcao pra descricao vai na classe cliente

}

module.exports = Cliente;
