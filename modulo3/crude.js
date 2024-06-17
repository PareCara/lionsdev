const readline = require('readline')

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

let funcionarios = []
exibirMenu() 
function exibirMenu() {
	console.log(`
	Menu:
	1. Cadastrar funcionário
    	2. Listar funcionarios cadastrados
    	3. Listar funcionario de maior salario
	4. Sair
	`)

	rl.question('Escolha uma opção: ', (opcao) => {
		switch (opcao) {
			case '1':
				cadastrarFuncionario()
				break
			case '2':
				ListaFuncionarios()
				break
			case '3':
				listaSalario()
				break	
			case '4':
				rl.	close()
				break
			default:
				console.log('Opção inválida, tente novamente.')
				exibirMenu()
				break
		}
	})
}

function cadastrarFuncionario() {
	rl.question('Digite o nome do funcionário: ', (nome) => {
		rl.question('Digite o cargo do funcionário: ', (cargo) => {
			rl.question('Digite o salário do funcionário: ', (salario) => {
				funcionarios.push({ nome, cargo, salario: parseFloat(salario) })
				console.log('Funcionário cadastrado com sucesso!')
				exibirMenu()
			})
		})
	})
}

function ListaFuncionarios() {
	if (funcionarios.length === 0) {
		console.log('Nenhum funcionário cadastrado.')
	} else {
		console.log('Lista de funcionários:')
		funcionarios.forEach((funcionario, index) => {
			console.log	
			(`${index + 1}.
	Nome: ${funcionario.nome}
	Cargo: ${funcionario.cargo} 
	Salário: R$ ${funcionario.salario.toFixed(2)}`)
			})
		}
		exibirMenu()
	}
	function listaSalario() {
		if (funcionarios.length == 0) {
			console.log('Nenhum funcionário cadastrado.')
		} else {
			let funcionarioMaiorSalario = funcionarios[0]
			for (let i = 1; i < funcionarios.length; i++) {
				if (funcionarios[i].salario > funcionarioMaiorSalario.salario) {
					funcionarioMaiorSalario = funcionarios[i]
				}
			}
			console.log(`Funcionário com maior salário:
		Nome: ${funcionarioMaiorSalario.nome}
		Cargo: ${funcionarioMaiorSalario.cargo}
		Salário: R$${funcionarioMaiorSalario.salario.toFixed(2)}`)
			}
			exibirMenu()
		}