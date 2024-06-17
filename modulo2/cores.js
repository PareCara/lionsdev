let coresFavoritas = ['azul, preto, verde']
let coresEspeciais = []
let corDoUsuario

console.log('Digite sua cor favorita')
process.stdin.once('data', function(data){
    corDoUsuario = data.toString().trim()
    processamento(corDoUsuario)
    process.exit()
})

function processamento(corDoUsuario) {
    if (coresFavoritas.includes(corDoUsuario)) {
            console.log('A sua cor é uma das favoritas da turma!')
            
        }else {
            
            console.log('A sua cor favorita é diferente, vamos coloca-la na lista ')
            coresEspeciais.push(corDoUsuario)
        }
        console.log(`as cores favoritas são ${coresFavoritas}`)
        console.log(`às cores especiais são ${coresEspeciais}`)
    }
