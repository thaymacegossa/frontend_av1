function gerarTabela() {
    const numero = parseInt(document.getElementById("numeroInput").value);
    const resultadoElement = document.getElementById("tabelaMultiplicacao");

    if (isNaN(numero) || numero <= 0) {
        alert("Por favor, insira um número positivo.");
        return;
    }

    for (let i = 1; i <= 10; i++) {
        const resultado = numero * i;
        aplicarResultado(`redultado${i}`, numero, resultado);
    }
    resultadoElement.style.display = "table";
}

function aplicarResultado(id, numero, resultado) {
    const elemento = document.getElementById(id);
    elemento.innerHTML = `${resultado}`;
    console.log(`1 X ${numero} = `, resultado);
}