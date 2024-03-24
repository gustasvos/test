const Cliente = require('./Client');
const Telefone = require('./Telefone')
const Endereco = require('./Endereco')


const telefone = new Telefone('11', '999999999')
const endereco = new Endereco('Av. Paulista', '987', 'São Paulo', 'SP')
const cliente = new Cliente('Carlos', endereco, telefone, 'carlos.conrado@app.com')

console.log(cliente.descricao)

// const cliente1 = new Cliente('John Doe', 'Main St', 123, 'Anytown', 'AS', '555-1234', 'john.doe@example.com');

// console.log(cliente1);
// console.log(cliente1.rua);
