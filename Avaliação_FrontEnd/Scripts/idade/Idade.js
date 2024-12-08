const pessoas = [];

function adicionarPessoa() {
    const nome = document.getElementById("nomeInput").value.trim();
    const idade = parseInt(document.getElementById("idadeInput").value);

    if (nome === "" || isNaN(idade)) {
        alert("Erro!");
        return;
    }

    pessoas.push({ nome: nome, idade: idade });

    document.getElementById("nomeInput").value = "";
    document.getElementById("idadeInput").value = "";

    alert(`Pessoa ${nome} adicionada!`);
}


function exibirMaiores18() {
    const resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";

    const mais18 = pessoas.filter(pessoa => pessoa.idade > 18);

    if (mais18.length === 0) {
        resultadoElement.textContent = "Nenhuma pessoa com mais de 18 anos foi encontrada.";
        return;
    }

    // Exibe os nomes das pessoas maiores de 18 anos
    resultadoElement.innerHTML = "Pessoas com mais de 18 anos:<br><ul>";
    mais18.forEach(pessoa => {
        resultadoElement.innerHTML += `<li>${pessoa.nome} (${pessoa.idade} anos)</li>`;
    });
    resultadoElement.innerHTML += "</ul>";

    resultadoElement.style.display = "block";
}
