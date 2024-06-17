let a 
let b 
let calculo 
let resultado

function calculadora(a, b, calculo){
    if (calculo == '+') {
        resultado = a + b 
        return resultado
    }else if (calculo == '-')  {
        resultado = a - b
        return resultado

    }else if (calculo == '*')  {
        resultado = a * b
        return resultado
    
    }else if (calculo == '/') {
        resultado = a / b
        return resultado
    }

}
console.log(calculadora(50, 50, "/"))
