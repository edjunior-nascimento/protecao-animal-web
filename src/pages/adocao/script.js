import { animals } from "./data.animals.js"
 

function listarAnimalsGallery(){
    
        var galeria = document.querySelector(".galery")

        function criarCards(card){

            galeria.innerHTML+=`
            <div class="card-animals">
                <img src="../../assets/images/${card.imagem}" alt="animal-photo" class="img-animal">
                <p class="card-name">${card.nome}</p>
                <p class="card-local">${card.local}</p>
            </div>
        
        `
        }

        function mostrarCards(){
            for(let k = 0; k < animals.length; k++){
                var animal = animals[k]
                criarCards(animal)
            }
        }
        mostrarCards()
    }
    
    listarAnimalsGallery()




