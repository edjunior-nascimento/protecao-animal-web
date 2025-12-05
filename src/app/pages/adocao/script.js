
const paginationContainer = document.querySelector('.pagination')


let animaisGlobal = [] // todos os animais via API
let paginaAtual = 1        // começa na página 1
let indice = 0
let tamanho = 6 //cards por paginga
let listaLocais = []
init()

async function init(){

    animaisGlobal = await listarAnimaisAxios()
    listaLocais = await listarLocaisAxios()
    listarAnimals() 
    renderizarPaginacao()
    carregarFiltrosLocais(listaLocais)

}

async function listarAnimaisAxios(){
   try {  
    const resposta = await axios.get("http://localhost:3001/api/animais")
    return  resposta.data.data
    } catch(error) {
    console.error('erro no axio' + error)
   }
   
}

function listarAnimals(){
    
    var pets = document.querySelector(".galery")
    pets.innerHTML = ""

    let init = indice
    let fim = indice + tamanho
    let animaisVisiveis = animaisGlobal.slice(init, fim)
        
    animaisVisiveis.forEach(card => {
    
            pets.innerHTML += `
            <div class="card-animals">
                <img src="${card.fotos[0]}" alt="animal-photo" class="img-animal">
                
                ${card.adotado ? `
                <div class="card-adotado">
                    <p>Adotado</p>
                </div>
                ` : ''}

                <p class="card-name">${card.nome}</p>
                <p class="card-local">${getLocalById(card.local)}</p>
            </div>
            `;

               
    
        })

       
}
// listar os locais via axios assincrono
 async function listarLocaisAxios() {
       try {  
    const respostaLocal = await axios.get("http://localhost:3001/api/locais")
    return  respostaLocal.data.data
 
    } catch(error) {
    console.error('erro no axio' + error)
   }  
      
}

function getLocalById(id){
    let retorno = ''
    listaLocais.forEach(local => {
       
        if(local.id == id ){
            retorno = local.nome
        }
    })
    return retorno
}


    

// paginação dinamica
function renderizarPaginacao() {
    paginationContainer.innerHTML = "" // limpa antes

    // Botão esquerda
    const left = document.createElement("span")
    left.innerHTML = "&lt;"
    left.onclick = clickLeft
    paginationContainer.appendChild(left)
  
    

    // Botões numéricos
     const totalPaginas = Math.ceil(animaisGlobal.length / tamanho)
    for (let i = 1; i <= totalPaginas; i++) {
        const pageBtn = document.createElement("span")
        pageBtn.innerText = i
        pageBtn.dataset.page = i

        if (i === paginaAtual) {
            pageBtn.classList.add("active")
        }

        pageBtn.onclick = selectPage
        paginationContainer.appendChild(pageBtn)
    }

    // Botão direita
     const right = document.createElement("span")
    right.innerHTML = "&gt;"
    right.onclick = clickRight
    paginationContainer.appendChild(right)

}
// Seleção direta
function selectPage(event) {
     paginaAtual = parseInt(event.target.dataset.page)
    indice = (paginaAtual - 1)*tamanho
   
    listarAnimals()
    renderizarPaginacao() // atualiza active
  
}
// Botão Esquerda
function clickLeft() {
    if (paginaAtual > 1) {
        paginaAtual--
        indice-=tamanho
        renderizarPaginacao()
        listarAnimals()
    }

  
}

// Botão Direita
function clickRight() {
    const totalPaginas = Math.ceil(animaisGlobal.length / tamanho)
    if (paginaAtual < totalPaginas) {
        paginaAtual++
        indice+=tamanho
        listarAnimals()
        renderizarPaginacao()
    }

    
}

/// FILTROS

function carregarFiltrosLocais(listaLocais){
    const filtroLocais =  document.querySelector('#filter-local')
    listaLocais.forEach(local => {
        filtroLocais.innerHTML += `
           <option value="${local.id}">${local.nome}</option>
            `;
    })
  

}

function buttonSearch(){
    const filterSpecies = document.querySelector('#filter-species')
    const filterSex = document.querySelector('#filter-sex')
    const filterSize = document.querySelector('#filter-size')
    const filterLocal = document.querySelector('#filter-local')
    const filterName = document.querySelector('#filter-name')
    
   

    let animaisResultado = animaisGlobal
    animaisResultado = filtrarEspecie(filterSpecies.value, animaisResultado)
   
    animaisResultado = filtrarNome(filterName.value, animaisResultado)
   
    animaisResultado = filtrarSex(filterSex.value, animaisResultado)
      
    animaisResultado = filtrarSize(filterSize.value, animaisResultado)
   
    animaisResultado = filtrarLocal(filterLocal.value, animaisResultado)
     console.log(`este é: ${animaisResultado.length}`)
        
    var pets = document.querySelector(".galery")
    pets.innerHTML = ""

    animaisResultado.forEach(card => {
    
            pets.innerHTML += `
            <div class="card-animals">
                <img src="${card.fotos[0]}" alt="animal-photo" class="img-animal">
                
                ${card.adotado ? `
                <div class="card-adotado">
                    <p>Adotado</p>
                </div>
                ` : ''}

                <p class="card-name">${card.nome}</p>
                <p class="card-local">${getLocalById(card.local)}</p>
            </div>
            `; 
        })

        
       
}

// functions dos filtros
function filtrarEspecie(tipoEspecie, listaAnimal){

    return listaAnimal.filter(animal =>
    Number(tipoEspecie) !== 0 ? animal.especie == tipoEspecie : true
    )

}
function filtrarSex(tipoSex, listaAnimal){
    return listaAnimal.filter(animal =>
    Number(tipoSex) !== 0 ? animal.sexo == tipoSex : true
    )
}
function filtrarSize(tipoSize, listaAnimal){
    return listaAnimal.filter(animal =>
    Number(tipoSize) !== 0 ? animal.porte == tipoSize : true
    )
}

function filtrarLocal(tipoLocal, listaAnimal){
    return listaAnimal.filter(animal =>
    tipoLocal !== 'all' ? animal.local == Number(tipoLocal) : true
    )
}


function filtrarNome(filtroNome, listaAnimal){
    return listaAnimal.filter(animal =>
       filtroNome !== '' ? animal.nome.toUpperCase() == filtroNome.toUpperCase() : true
   
    )

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


