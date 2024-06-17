let nome 
let idade
const ano = 2024

console.log('Como é seu nome?')
 
process.stdin.once('data', function(data) {
    nome = data.toString().trim()
    console.log('Qual é sua idade?')

    process.stdin.once('data', function(data) {
        idade = parseInt(data.toString().trim())
        processamento(nome, idade)
        process.exit()
    })
 })

function processamento (nome, idade) {
    processamento = (ano - idade)
    console.log(`Olá ${nome}, sua idade é ${idade}, e seu ano de nacimento caso ja tenha feito aniversario é ${processamento}, caso nao tenha feito aniversario ainda, é ${processamento - 1}` )
 }