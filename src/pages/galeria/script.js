const openBtn = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const fade = document.getElementById('fade');

let galeriaCache = []    // guarda todos os locais recebidos da API

listarGaleriaAxios()

// Função para abrir e fechar modal
function toggleModal() {
  modal.classList.toggle('show');
  fade.classList.toggle('show');
}

// Abrir modal
openBtn.addEventListener('click', toggleModal);

// Fechar modal ao clicar fora
fade.addEventListener('click', toggleModal);

