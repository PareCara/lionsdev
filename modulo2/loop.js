var somaPares = 0
var somaImpares = 0
var totalPares = 0 
var totalImpares = 0
var i 
var mediaPares
var mediaImpares

for(let i = 0; i < 1000; i++) {
    if(i % 2 == 0){
        somaPares += i
        totalPares ++

    }else {
        somaImpares += i
        totalImpares ++
     } }
    {
    console.log(`A soma dos pares é ${somaPares}`)
    console.log(`O total dos pares é ${totalPares} `)
    console.log(`a soma dos numeros impares é ${somaImpares}`)
    console.log(`O total de numeros impares é ${totalImpares}`)
     }
     
     mediaPares = somaPares/totalPares
     mediaImpares = somaImpares/totalImpares

     console.log(`A media dos números pares é ${mediaPares}`)
     console.log(`A media dos numeros impares é ${mediaImpares}`)

     if(totalPares>totalImpares){
        totalPares>totalImpares
        console.log('O total de pares é maior que o total de impares' )
     }else {
        console.log('O total de impares é maior que o total de pares')
     }
