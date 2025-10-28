
let animaisGlobal = [] // variável global
let indice = 0
let tamanho = 3
listarAnimaisAxios()

function listarAnimaisAxios() {
    axios.get("http://localhost:3001/api/animais")
        .then(response => {
            animaisGlobal = response.data.data // agora atualiza a variável global corretamente
             
            listarAnimals() // chama sem argumentos, pois usará a variável global
        })
        .catch(error => {
            console.error("Falha ao carregar json:", error)
        })
}
function listarAnimals(){
    
    let init = indice
    let fim = indice + tamanho
    let animaisVisiveis = animaisGlobal.slice(init, fim)
        
    var pets = document.querySelector(".galery")
    pets.innerHTML = ""

    animaisVisiveis.forEach(card => {
    pets.innerHTML+=`
            <div class="card-animals">
                <img src="${card.fotos[0]}" alt="animal-photo" class="img-animal">
                <p class="card-name">${card.nome}</p>
                <p class="card-local">${card.local}</p>
            </div>  
        `
        })

       
    }
    

function botaoAfter() {
    if (indice + tamanho < animaisGlobal.length) {
        indice += tamanho
        listarAnimals()
    }
}


function botaoPrev() {
    if (indice - tamanho >= 0) {
        indice -= tamanho
        listarAnimals()
    }
}


   
/*MODAL*/
const openModal = document.querySelector('.mobile-menu')
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')

const toggleModal = () => {
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

openModal.addEventListener('click', toggleModal)
fade.addEventListener('click',toggleModal)


