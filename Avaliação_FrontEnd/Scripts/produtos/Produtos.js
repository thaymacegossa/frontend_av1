const produtos = [];
const tabelaProdutos = document.getElementById("tabelaProdutos").querySelector("tbody");
const resultadoElement = document.getElementById("resultado");

function atualizarTabela() {
    tabelaProdutos.innerHTML = "";
    produtos.forEach((produto, index) => {
        const row = tabelaProdutos.insertRow();
        
        row.innerHTML = `
            <td>${produto.nome}</td>
            <td>R$ ${produto.preco.toFixed(2)}</td>
            <td>${produto.quantidade}</td>
            <td>R$ ${produto.valorTotal}</td>
            <td><button onclick="removerProduto(${index})">Remover</button></td>
        `;
    });
    calcularValorTotal();
}

document.getElementById("produtoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const preco = parseFloat(document.getElementById("preco").value);
    const quantidade = parseInt(document.getElementById("quantidade").value);
    const valorTotal = (preco * quantidade).toFixed(2);

    const novoProduto = { nome, preco, quantidade, valorTotal };
    produtos.push(novoProduto);
    atualizarTabela();
    this.reset();
});

function removerProduto(index) {
    produtos.splice(index, 1);
    atualizarTabela();
}

function calcularValorTotal() {
    var sum = produtos.reduce((acumulador, produto) => {return acumulador + parseFloat(produto.valorTotal)}, 0);
    console.log(sum);
    resultadoElement.textContent = `Valor total do estoque: R$ ${parseFloat(sum).toFixed(2)}`;
}

atualizarTabela();