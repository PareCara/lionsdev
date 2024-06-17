let resposta
let gostaDeCafe

console.log('Voce gosta de café?')
process.stdin.once('data', function(data) {
    gostaDeCafe = data.toString().trim()
    processamento(resposta)
    process.exit()
 })
 
 function processamento(resposta) {
    if (gostaDeCafe == 'sim') {
        resposta = true
   
    }else {
        resposta = false
        
    } 
    if (resposta == true) {
        console.log('nice')

    }else {(resposta == false)
        console.log('...')    
    } }