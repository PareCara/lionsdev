var numero

console.log('escreva um numero')
process.stdin.once('data', function (data) {
    numero = data.toString().trim()
    processamento(numero)
    process.exit()
}) 
function processamento(numero) {
    if (numero %5 === 0 ){
        console.log('esse numero é')

    }else {
        console.log('esse nao é')
}
}