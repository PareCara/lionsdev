var vetor = [27, 10, 3, 0, 20, 5, 6, 3 ]
var pares = []
var impares = []

console.log(vetor)
vetor.push(12)

for (let i = 0; i <= vetor.length; i++){
    if(vetor[i] % 2 == 0){
        pares.push(vetor[i])
    } else {
        impares.push(vetor[i])
        
    }
    
}    
console.log(`pares ${pares}`)
console.log(`impares ${impares}`)