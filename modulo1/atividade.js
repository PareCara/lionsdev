let resposta

console.log('escreva um numero')
process.stdin.once('data', function (data) {
    resposta = data.toString().trim()
    processamento(resposta)
    process.exit()
}) 

function processamento(resposta) {
    if (resposta == 0) {
        console.log('o numero que voce digito é 7873830019927602989127')

    } else if (resposta %2 ==0) {
        console.log('o numero que voce digitou é par.')
    
    } else {
        console.log('o numero que voce digitou é impar.')
     }
 }
 