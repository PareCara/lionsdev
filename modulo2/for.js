var i 
var numero 

console.log('Diga um numero')
process.stdin.once('data', function(data) {
    numero = parseInt(data.toString().trim())
    processamento(numero)
    process.exit()
 })
 function processamento(numero){
    for (let i = 1; i <= 100; i++){
        console.log(`${numero} * ${i} = ${numero * i}`)
    }    
 }

