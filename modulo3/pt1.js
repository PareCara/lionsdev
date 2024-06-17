var notas = [90, 87, 54, 32, 46, 89, 100, 98, 34, 76]
let soma = 0;

for (let i = 0; i < notas.length; i++) {
  soma += notas[i];
}
let media = soma / notas.length;
console.log("Média das notas:", media);

let notaAlta = notas[0];
let notaBaixa = notas[0];
for (let i = 1; i < notas.length; i++) {
  if (notas[i] > notaAlta) {
    notaAlta = notas[i];
  }
  if (notas[i] < notaBaixa) {
    notaBaixa = notas[i];
  }
}console.log("Nota mais alta:", notaAlta);
console.log("Nota mais baixa:", notaBaixa);