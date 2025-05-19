let tasks = [];

function updateList() {
    const list = document.getElementById('listTask');
    list.innerHTML = ''; // Limpa a lista atual

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerText = task;

        // Botão de editar
        const buttonEdit = document.createElement('button');
        buttonEdit.innerText = 'Editar';
        buttonEdit.classList.add('edit');
        buttonEdit.onclick = () => editedTask(index);

        // Botão de deletar
        const buttonDelete = document.createElement('button');
        buttonDelete.innerText = 'Deletar';
        buttonDelete.classList.add('delete');
        buttonDelete.onclick = () => removeTask(index);

        // Adicionando os botões no item da lista
        li.appendChild(buttonEdit);
        li.appendChild(buttonDelete);

        list.appendChild(li);
    });
}

function addTask() {
    const input = document.getElementById('newTask');
    const task = input.value.trim();

    if (task) {
        tasks.push(task);
        input.value = '';
        updateList();
    } else {
        alert('Digite uma tarefa válida!');
    }
}

function editedTask(index) {
    const newTask = prompt('Edite a tarefa:', tasks[index]);
    
    // Prevenir edição para valores vazios ou idênticos
    if (newTask && newTask.trim() !== tasks[index]) {
        tasks[index] = newTask.trim();
        updateList();
    } else if (!newTask.trim()) {
        alert('Tarefa não pode ser vazia!');
    }
}

function removeTask(index) {
    tasks.splice(index, 1);
    updateList();
}
