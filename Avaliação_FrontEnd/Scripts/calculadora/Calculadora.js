let resultado = "";

function adicionarNumero(numero) {
    resultado += numero;
    document.getElementById("resultado").value = resultado;
}

function adicionarOperacao(operacao) {
    resultado += " " + operacao + " ";
    document.getElementById("resultado").value = resultado;
}

function remover() {
    resultado = resultado.substring(0, resultado.length - 1);
    document.getElementById("resultado").value = resultado;
}

function calcular() {
    try {
        resultado = eval(resultado);
        document.getElementById("resultado").value = resultado;
    } catch {
        document.getElementById("resultado").value = "Erro";
        resultado = "";
    }
}

function limpar() {
    resultado = "";
    document.getElementById("resultado").value = "";
}