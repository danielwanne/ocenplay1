// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Inicialização do mapa com Leaflet
    const map = L.map('map').setView([-23.5505, -46.6333], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);
    
    // Função para calcular impacto
    function calcularImpacto() {
        // Lógica para calcular impacto
    }
    
    // Função para carregar dados do dashboard
    function carregarDashboard() {
        // Lógica para carregar dados
    }
    
    // Chamar funções
    calcularImpacto();
    carregarDashboard();
});
