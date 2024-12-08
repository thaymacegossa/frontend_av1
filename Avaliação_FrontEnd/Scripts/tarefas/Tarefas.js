let tarefas = [];

function adicionarTarefa() {
    const tarefaInput = document.getElementById("tarefaInput");
    const tarefa = tarefaInput.value.trim();

    if (tarefa) {
        let indice = tarefas.length + 1;
        const novaTarefa = {indice, tarefa}
        tarefas.push(novaTarefa);
        tarefaInput.value = "";
        exibirTarefas();
    } else {
        alert("Por favor, insira uma tarefa válida.");
    }
}

function exibirTarefas() {
    const tarefasLista = document.getElementById("tarefaLista");
    tarefasLista.innerHTML = "";

    tarefas.forEach((tarefa) => {
        const li = document.createElement("tr");
        li.innerHTML = `<td>${tarefa.indice}</td><td>${tarefa.tarefa}</td>`;
        tarefasLista.appendChild(li);
    });
}

function concluirTarefa() {
    const tarefaConcluida = parseInt(document.getElementById("tarefaIndex").value);
    const tarefaIndex = tarefas.findIndex(tarefa => tarefa.indice === tarefaConcluida);

    if (tarefaIndex >= 0 && tarefaIndex < tarefas.length) {
        tarefas.splice(tarefaIndex, 1);
        exibirTarefas();
        document.getElementById("tarefaIndex").value = "";
    } else {
        alert("Número de tarefa inválido.");
    }
}

document.getElementById('tarefaInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita o comportamento padrão do Enter
        adicionarTarefa();
    }
});

document.getElementById('tarefaIndex').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita o comportamento padrão do Enter
        concluirTarefa();
    }
});