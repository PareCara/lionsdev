var notas = [7.5, 4.0, 6.0, 9.5, 5.5, 8.5, 10.0, 6.5, 9.0];
var acima = 0
var reprovados = 0
var media = 0
var soma = 0
var max = notas[0]
var min = notas[0]

for (let i = 0; i < notas.length; i++) {
    console.log(notas[i]);
}
for (let i = 0; i < notas.length; i++){
    soma += notas[i] 
}
media = soma / notas.length
console.log ('sua media é', media)

for (let i = 0; i < notas.length; i++){
    if(notas[i] > max){
        max = notas[i]
    }else if(notas[i] < min){
        min = notas[i]
    }
}
console.log('a nota maxima é', max )
console.log('a nota minima é', min)

for (let i = 0; i < notas.length; i++){
    if(notas[i] > media){
        acima++
    }
}
console.log('notas acima da media', acima)

notas.push(8.0)
console.log('suas notas', notas)

for (let i = 0; i < notas.length; i++){
    if(notas[i] < 6.0){
    reprovados++    
}
}
console.log('tem', reprovados, 'alunos reprovados')