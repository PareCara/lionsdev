let notas = []
let prova1
let prova2
let media

console.log('Digite a primeira nota')
process.stdin.once('data', function(data) {
    prova1 = parseFloat(data.toString().trim())
    console.log('Digite a seguanda nota')

    process.stdin.once('data', function(data) {
        prova2 = parseFloat(data.toString().trim())
        processamento(prova1, prova2)
        process.exit()
    
    })
})

function processamento(prova1, prova2) {
    notas.push(prova1)
    notas.push(prova2)
    media = (notas[0] + notas[1]) /2
    console.log(`a media é ${media}`)

}    


