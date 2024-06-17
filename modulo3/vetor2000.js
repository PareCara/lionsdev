/*Escreva um programa que tenha um array com as notas de 10 alunos,
com isso:
1. Calcule e exiba a média das notas.
2. Encontre e exiba a nota mais alta e a nota mais baixa.
3. Conte e exiba quantas notas estão acima da média calculada.
4. Adicione uma nova nota ao array e exiba o array atualizado.
5. Conte e exiba quantas notas são consideradas reprovadas (abaixo de 8.0).*/

var notas = [90, 87, 54, 32, 46, 89, 100, 98, 34, 81]
let soma = 0
let notaAlta = notas[0]
let notaBaixa = notas[0]
let acimaDaMedia = 0
let reprovadas = 0

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}
let media = soma / notas.length
console.log("Média das notas:", media)


for (let i = 1; i < notas.length; i++) {
  if (notas[i] > notaAlta) {
    notaAlta = notas[i]
  }
  if (notas[i] < notaBaixa) {
    notaBaixa = notas[i]
  }
}
    console.log("Nota mais alta:", notaAlta)
    console.log("Nota mais baixa:", notaBaixa)

for (let i = 0; i < notas.length; i++) {
  if (notas[i] > media) {
    acimaDaMedia++
  }
}
console.log("Notas acima da média:", acimaDaMedia)

notas.push(70)
console.log("Array atualizado:", notas)


for (let i = 0; i < notas.length; i++) {
  if (notas[i] < 70) {
    reprovadas++
  }
}
console.log("Notas reprovadas:", reprovadas)
