let n1
let n2
let operador
let resultado

function calculadora(n1, n2, operador) {
    switch(operador) {
        case '+' :
            resultado = n1 + n2
            return resultado 
        case '-' :
            resultado = n1 - n2
            return resultado 
        case '/' :
            resultado = n1 / n2
            return resultado     
        case '*' :
            resultado = n1 * n2 
            return resultado
        }
    return resultado
}
let conta = calculadora(50, 50, '/')
console.log(conta)