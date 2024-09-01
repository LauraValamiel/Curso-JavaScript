const promptSync = require("prompt-sync")
const input = promptSync()

parseFloat()

const medidaEmMetros = parseFloat(input("Digite o valor de uma medida em metros: \n"))

const medidaEmDecimetros = medidaEmMetros * 10

const medidaEmCentimetros = medidaEmMetros * 100

const medidadeEmMilimetros = medidaEmMetros * 1000

console.log("O valor da medida em metros: ", medidaEmMetros)
console.log("Conversão da medida em metros para decímetros: ", medidaEmDecimetros)
console.log("Conversão da medida em metros para centímetros: ", medidaEmCentimetros)
console.log("Conversão da medida em metros para milímetros: ", medidadeEmMilimetros)
