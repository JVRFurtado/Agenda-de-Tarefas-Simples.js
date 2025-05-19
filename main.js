let task = [];
let option = '';

while (option !== '5') {
    option = prompt('Escolha uma opção:\n1 - Adicionar Tarefa\n2 - Listar Tarefas\n3 - Editar Tarefa\n4 - Remover Tarefa\n5 - Sair');
    
    if (option === '1') {
        let newtask = prompt('Digite a nova tarefa:');
        task.push(newtask);
        console.log('Nova tarefa registrada!');
        console.log(`Agora você possui ${task.length} tarefas registradas.`);

    } else if (option === '2') {
        console.log('📋 Lista de Tarefas:');
        if (task.length === 0) {
            console.log('Nenhuma tarefa adicionada ainda.');
        } else {
            for (let i = 0; i < task.length; i++) {
                console.log(`${i + 1}. ${task[i]}`);
            }
        }

    } else if (option === '3') {
        let indice = prompt('Digite o número da tarefa que deseja editar.');
        let position = Number(indice) - 1;

        if (position >= 0 && position < task.length) {
            let editedTask = prompt(`Edite a tarefa: ${task[position]}`);
            task[position] = editedTask;
            console.log('Tarefa editada com sucesso!');
            console.log(`Agora você possui ${task.length} tarefas registradas.`);
        } else {
            console.log('Número inválido.');
        }

    } else if (option === '4') {
        let indice = prompt('Digite o número da tarefa que deseja remover.');
        let position = Number(indice) - 1;

        if (position >= 0 && position < task.length) {
            task.splice(position, 1);
            console.log('Tarefa removida com sucesso!');
            console.log(`Agora você possui ${task.length} tarefas registradas.`);
        } else {
            console.log('Número inválido.');
        }

    } else if (option === '5') {
        console.log('Saindo... Até logo! 👋');
    } else {
        console.log('Opção inválida. Tente novamente.');
    }
}