import { animals } from "./data.animals.js"

let galery = document.querySelector(".galery")
const openModal = document.querySelector('.mobile-menu')
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')

mostrarCards()

function criarCards(item){
    galery.innerHTML += `
    <div class="card-animals">
            <img src="../../assets/images/${item.imagem}" alt="animal-photo" class="img-animal">
            <p class="card-name">${item.nome}</p>
            <p class="card-local">${item.local}</p>
        </div>
`
}

function mostrarCards(){
    for(let k in animals){
        let pet = animals[k]

        criarCards(pet)

    }

}


//MODAL MENU
const toggleModal = () => {
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

openModal.addEventListener('click', toggleModal)
fade.addEventListener('click',toggleModal)



let pagi = querySelector(".pages")
pagi.addEventListener('click', function(){
  pagi.style.backgroundColor = 'yellow'
})
 