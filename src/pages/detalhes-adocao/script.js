
import { animals } from "./data.animals.js"


function listarALLanimals(){
    let galery = document.querySelector(".galery")
    
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
    mostrarCards()
}
listarALLanimals()


