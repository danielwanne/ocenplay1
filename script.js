document.getElementById('form-coleta').addEventListener('submit', function(event) {
    event.preventDefault();
    const quantidade = document.getElementById('quantidade').value;
    registrarColeta(quantidade);
});

function registrarColeta(quantidade) {
    // Aqui você integraria a lógica de blockchain para registrar a coleta
    const certificadosDiv = document.getElementById('lista-certificados');
    const novoCertificado = document.createElement('div');
    novoCertificado.textContent = `Coleta registrada: ${quantidade} kg de plástico.`;
    certificadosDiv.appendChild(novoCertificado);
    // Implementar lógica de pagamento e segurança de dados
}
