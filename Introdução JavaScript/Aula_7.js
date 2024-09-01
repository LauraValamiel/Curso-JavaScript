//Entrada de dados no teclado

const promptSync = require("prompt-sync")
const input = promptSync()

parseFloat()

const numero = parseFloat(input("Digite o valor que você queria guardar na variável numero: "))
console.log(numero)

const segundoNumero = parseFloat(input("Digite o valor para guardar na segunda variável numero: "))
console.log(segundoNumero)

const media = (numero + segundoNumero) / 2
console.log("O valor da média entre os dois números: ", media)
