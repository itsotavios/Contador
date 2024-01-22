document.addEventListener("DOMContentLoaded", function() {
    const dataInicial = new Date('2024-01-18').getTime();
  
    function formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }
  
    function atualizarContador() {
      const dataAtual = new Date().getTime();
      const diferenca = dataAtual - dataInicial;
  
      const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
  
      const contadorElement = document.getElementById('contador');
      contadorElement.innerHTML = `
        <p>Dias: ${formatTime(dias)}</p>
        <p>Horas: ${formatTime(horas)}</p>
        <p>Minutos: ${formatTime(minutos)}</p>
        <p>Segundos: ${formatTime(segundos)}</p>
      `;
  
      // Adicionando uma animação sutil
      contadorElement.style.color = '#ff7f50'; // Cor de pêssego
      setTimeout(() => {
        contadorElement.style.color = '#555'; // Restaurar cor original
      }, 300);
    }
  
    setInterval(atualizarContador, 1000);
    atualizarContador();
  
    // Adicionar balões
    const baloesContainer = document.getElementById('baloes-container');
    for (let i = 0; i < 10; i++) {
      const balao = document.createElement('div');
      balao.className = 'balao';
      balao.style.left = `${Math.random() * 100}%`;
      balao.style.animationDuration = `${Math.random() * 5 + 3}s`;
      baloesContainer.appendChild(balao);
    }
  });
  