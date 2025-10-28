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
      galeria.fotos.forEach(foto => {
        criarCards(foto)
      })
    }
  })
}

function criarCards(foto) {

    galery.innerHTML += `
        <div class="card-animals">
                <img src="${foto}" alt="foto-galeria" 
            </div>`
}