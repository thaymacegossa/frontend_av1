function calcularMedia() {
    const nome = document.getElementById("nome").value.trim();
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    const resultadoElement = document.getElementById("resultado");

    if (!nome || isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultadoElement.textContent = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    const aluno = {
        nome: nome,
        notas: [nota1, nota2, nota3],
        
        media: function() {
            let soma = 0;
            for (let i = 0; i < this.notas.length; i++) {
                soma += this.notas[i];
            }
            return soma / this.notas.length;
        }
    };

    const mediaAluno = aluno.media(); 
    resultadoElement.textContent = `A média de ${aluno.nome} é ${mediaAluno.toFixed(2)}.`;
}
