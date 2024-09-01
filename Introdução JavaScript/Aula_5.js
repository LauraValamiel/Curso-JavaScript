//Métodos de string e number

const nome = 'Laura Valamiel' //string
console.log('Tipo de dados de nome: ', typeof nome)

//retorna o tamanho da string, contabiliza espaços
const tamanho = nome.length
console.log('Tamanho da string: ', tamanho)

//retorna true se tiver a letra na string e falso se nao tiver
console.log(nome.includes('w'))
console.log(nome.includes('l'))

//concatena a variável
const nomeCompleto = nome.concat(' Andrade')
console.log(nomeCompleto)

//colocar string em caixa alta
console.log(nomeCompleto.toUpperCase())

//colocar string em letras minúsculas
console.log(nomeCompleto.toLowerCase())

//casas decimais depois da vírgula e arredonda
const numero = 25.5555
const novoNumero = numero.toFixed(2)
console.log(novoNumero)
