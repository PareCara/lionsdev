let nota1
let nota2

console.log('Digite primeira nota')
process.stdin.once('data', function(data) {
    nota1 = parseFloat(data.toString().trim())
    console.log('Digite segunda nota')

    process.stdin.once('data', function(data) {
        nota2 = parseFloat(data.toString().trim())
        processamento(nota1, nota2)
        process.exit() 
    })
})

function processamento(nota1, nota2) {
    let media = (nota1 + nota2) /2

    if(media < 7) {
        console.log(`Que pena, voce ficou de recuperaçao com media ${media}`) 
    }else {
    console.log(`Parabens voce passou com media ${media}`)
    }
}