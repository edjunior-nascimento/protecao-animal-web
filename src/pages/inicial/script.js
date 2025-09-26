const openModal = document.querySelector('.mobile-menu')
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')

const toggleModal = () => {
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}
openModal.addEventListener('click', toggleModal)
fade.addEventListener('click',toggleModal)


// Requisição Usando Axios
let galeriaGlobal = [] // variável global
let indice = 0
let tamanho = 3
listarAnimaisAxios()

function listarAnimaisAxios() {
    axios.get("http://localhost:3001/api/galeria")
        .then(response => {
            galeriaGlobal = response.data.data // agora atualiza a variável global corretamente
             
            cardColecao() // chama sem argumentos, pois usará a variável global
        })
        .catch(error => {
            console.error("Falha ao carregar json:", error)
        })
}

function botaoAfter() {
    if (indice + tamanho < galeriaGlobal.length) {
        indice += tamanho
        cardColecao()
    }
}

function botaoPrev() {
    if (indice - tamanho >= 0) {
        indice -= tamanho
        cardColecao()
    }
}

function cardColecao() {
    let init = indice
    let fim = indice + tamanho
    let visivel = galeriaGlobal.slice(init, fim)

    let divFotos = document.querySelector(".fotos")
    divFotos.innerHTML = "" // limpa antes de exibir nova página

    visivel.forEach(galeria => {
        divFotos.innerHTML += `
            <div style="width: 300px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 8px rgba(0,0,0,0.1); padding: 16px; margin: 20px auto; font-family: Arial, sans-serif;">
                <img style="display: block; width: 100%; height: 10rem" src="${galeria.fotos[0]}" alt="Imagem doa.nome}</h2>
                <p style="margin: 5px 0;">Espécie: ${galeria.nome}</p>
                <p style="margin: 5px 0;">Obs: ${galeria.observacoes}</p>
            </div>
        `
    })
}

// inicia o carregamento


// pagination







    