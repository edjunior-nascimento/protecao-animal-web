const openBtn = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const fade = document.getElementById('fade');
let galery = document.querySelector(".galery")

//variveis da galeria
let galeriaCache = []       // guarda todos as galerias recebidos da API

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

//identificar o id na url
const urlParams = new URLSearchParams(window.location.search);
const idUrl = urlParams.get('id');


// Requisição Usando Axios


function listarGaleriaAxios() {
  axios.get("http://localhost:3001/api/galeria/")
    .then(response => {
      galeriaCache = response.data.data
      console.log(galeriaCache)
      listarFotosSelecionadas(idUrl)

    })
    .catch(error => {
      console.error("Falha ao carregar json:", error)
    })
}

function listarFotosSelecionadas(id) {
  galeriaCache.forEach(galeria => {
    if (galeria.id == id) {
     for (let i = 0; i < galeria.fotos.length; i++) {
      criarCards(i, galeria.fotos)
     }
    }
  })
}

function criarCards(index, fotos) {
const foto = getFoto(index, fotos);
  galery.innerHTML += `
        <div class="card-animals" onclick="mostrarModalImagem(${index}, `+ fotos +`)">
                <img src="${foto}" alt="foto-galeria" 
            </div>`
}

// funcao modal de imagem

function mostrarModalImagem(index, fotos) {
  const modalGaleria = document.getElementById('modal-galeria');
  modalGaleria.style.display = 'block';
  const modalImage = modalGaleria.querySelector('#modal-galeria .modal-content img');
  modalImage.src = getFoto(index, fotos);
}
function fecharModalImagem() {
  const modalGaleria = document.getElementById('modal-galeria');
  modalGaleria.style.display = 'none';
}

function proximaImagem() {
  // Lógica para mostrar a próxima imagem

}

function getFoto(index, fotos) {
  for (let i = 0; i < fotos.length; i++) {
    if (i == index) {
      
      return fotos[i];
    }
  }

}