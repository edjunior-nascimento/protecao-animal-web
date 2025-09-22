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
function listarAnimaisAxios() {
    axios.get("http://localhost:3001/api/galeria")
        .then(response => {
            let galeriaGlobal = response.data;
          
            listaGaleria(galeriaGlobal);
                    }
    )
        
        .catch(error => {
            console.error("Falha ao carregar json:", error);
        });    
}
function listaGaleria(listaItem){
    for(let k = 0; k < 3; k++){
        var colecao = listaItem.data[k]
        cardColecao(colecao)
        
    }


   
}
function cardColecao(galeria){
    var divFotos = document.querySelector(".fotos");
     divFotos.innerHTML+=
     `  <div style="width: 300px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 8px rgba(0,0,0,0.1); padding: 16px; margin: 20px auto; font-family: Arial, sans-serif;">
            <img style="display: block; width: 100%;" src="${galeria.fotos[0]}" alt="Imagem do Google Drive">
            <h2 style="margin: 10px 0 5px;">Nome: ${galeria.nome}</h2>
            <p style="margin: 5px 0;">Espécie: ${galeria.nome}</p>
            <p style="margin: 5px 0;">Obs: ${galeria.observacoes}</p>
        </div>
     `;
}

listarAnimaisAxios()

// pagination

const fotosArray = ["a",'b','c','d','e','f','g','h','i','j','k','l','m']

let indice = 0
let tamanho = 3

function botaoAfter(){
    if((indice + tamanho) != fotosArray.length){
       indice ++
        exibirGaleria()
  }   
}

function botaoPrev(){

    if(indice > 0){
       indice --
       exibirGaleria()
   }

}

function exibirGaleria(){
    let visivel = []
     let init = indice 
    let fim = indice + tamanho

    visivel = fotosArray.slice(init,fim)
    
    console.log(visivel)
}


exibirGaleria()