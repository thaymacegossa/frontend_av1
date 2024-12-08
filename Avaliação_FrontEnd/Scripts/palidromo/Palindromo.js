function verificarPalindromo() {
    const palavra = document.getElementById("palavra").value;
    const resultadoElement = document.getElementById("resultado");

    const palavraFormatada = palavra.replace(/\s+/g, '').toLowerCase();

    for (let i = 0; i < palavraFormatada.length / 2; i++) {
        if (palavraFormatada[i] !== palavraFormatada[palavraFormatada.length - 1 - i]) {
            resultadoElement.textContent = `"${palavra}" não é um palíndromo.`;
            return;
        }
    }

    resultadoElement.textContent = `"${palavra}" é um palíndromo!`;
}
