const promptSync = require("prompt-sync")
const input = promptSync()

parseFloat()

const ladoQuadrado = parseFloat(input("Digite o valor do lado de um quadrado: \n"))
const areaQuadrado = ladoQuadrado * ladoQuadrado
console.log("A área do quadrado é: ", areaQuadrado)
