let resposta1
let resposta2

console.log('Qual o seu nome?')
process.stdin.once('data', function (data) {
    resposta1 = data.toString().trim()
    console.log('Qual a sua idade?')

    process.stdin.once('data', function(data) {
        resposta2 = parseInt(data.toString().trim()) 
        processamento(resposta1, resposta2)
       
        
        process.exit()
    })
    })     
    function processamento(resposta1, resposta2) {
        if(resposta2 >= 18 ) {
            console.log('voce é maior de idade')
    
        } else {
            let anos = 18 - resposta2
            console.log(resposta1 +' voce vai ser maior de idade em ' + anos + ' ano/s') }
         }
    
    


