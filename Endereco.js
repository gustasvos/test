class Endereco {
    constructor(rua, numero, cidade, estado) {
      this._rua = rua;
      this._numero = numero;
      this._cidade = cidade;
      this._estado = estado;
    }
  
    get rua() {
      return this._rua;
    }
  
    set rua(rua) {
      this._rua = rua;
    }
  
    get numero() {
      return this._numero;
    }
  
    set numero(numero) {
      this._numero = numero;
    }
  
    get cidade() {
      return this._cidade;
    }
  
    set cidade(cidade) {
      this._cidade = cidade;
    }
  
    get estado() {
      return this._estado;
    }
  
    set estado(estado) {
      this._estado = estado;
    }
  }
  
  module.exports = Endereco;
  