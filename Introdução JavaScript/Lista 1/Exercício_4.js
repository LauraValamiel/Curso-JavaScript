const promptSync = require("prompt-sync")
const input = promptSync()

parseFloat()

const salarioHora = parseFloat(input("Digite quanto você ganha por hora: "))
const horasTrabalhadas = parseFloat(input("Digite as horas trabalhadas no mês: "))

const salarioBruto = salarioHora * horasTrabalhadas
const descontoINSS = salarioBruto * 0.10
const descontoImpostoRenda = salarioBruto * 0.15
const descontoSindicato = salarioBruto * 0.02
const salarioLiquido = (salarioBruto - descontoINSS - descontoImpostoRenda - descontoSindicato)

console.log("Salário bruto: ", salarioBruto.toFixed(2))
console.log("Quantia paga ao INSS: ", descontoINSS.toFixed(2))
console.log("Quantia para o sindicato: ", descontoSindicato.toFixed(2))
console.log("Quantia para o imposto de renda: ", descontoImpostoRenda.toFixed(2))
console.log("Salário líquido: ", salarioLiquido.toFixed(2))
