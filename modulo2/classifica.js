var nota
var classe

console.log('Qual a nota?')
process.stdin.once('data', function(data) {
    nota = data.toString().trim()
    console.log(classificacao(nota))
   

function classificacao(nota) {
    switch(true) {
        case (nota >= 90 && nota <= 100 ) :
            return 'A'
        case (nota >= 80 && nota <= 89 ) :
            return 'B'
        case (nota >= 70 && nota <= 79 ) :
            return 'C'    
        case (nota >= 60 && nota <= 69 ) :
            return 'D'
        case (nota >= 0 && nota <= 59 ) :
            return 'F'
        }
}



console.log('Qual sua classificaçao?')
process.stdin.once('data', function(data) {
    classe = data.toString().trim()
    console.log(jose(classe))
    process.exit()
})
function jose(classe){
    if (classe == 'A' || classe == 'B' || classe ==  'C'){
        console.log(`Parabens, voce foi aprovado com a nota ${classe}` )
    }else if(classe == 'D' || classe == 'F') { 
        console.log(`Que pena, voce reprovou com nota ${classe}`)
    }
}
})