let galery = document.querySelector(".galery")
const openModal = document.querySelector('.mobile-menu')
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')
const paginationContainer = document.querySelector('.pagination')

let animaisCache = []       // guarda todos os animais recebidos da API
let locaisCache = []    // guarda todos os locais recebidos da API
let paginaAtual = 1        // começa na página 1
const limite = 10           // quantidade de cards por página

listarAnimaisAxios()

function listarAnimaisAxios() {
    axios.get("http://localhost:3001/api/animais")
        .then(response => {
            animaisCache = response.data.data
            listarLocaisAxios()
           
        })
        .catch(error => {
            console.error("Falha ao carregar json:", error)
        })
}


function listarLocaisAxios() {
    axios.get("http://localhost:3001/api/locais")
        .then(response => {
            locaisCache = response.data.data
            converterAnimaisLocais()
            renderizarPagina()
            renderizarPaginacao()
        })
        .catch(error => {
            console.error("Falha ao carregar json:", error)
        })
}


function getLocalNomeById(id) {
    for (let i = 0; i < locaisCache.length; i++) {
        if (locaisCache[i].id === id) {
            return locaisCache[i].nome
        }
    }
}

function converterAnimaisLocais() {
    for (let i = 0; i < animaisCache.length; i++) {
        const localId = animaisCache[i].id
        const localNome = getLocalNomeById(localId)
        animaisCache[i].local = localNome
    }
}

// Renderizar cards da página atual
function renderizarPagina() {
    galery.innerHTML = ""

    const start = (paginaAtual - 1) * limite
    const end = start + limite
    const pagina = animaisCache.slice(start, end)

    pagina.forEach(animal => criarCards(animal))
}

// Criar um card
function criarCards(animal) {
    const foto = animal.fotos && animal.fotos.length > 0 && animal.fotos[0] !== "" ? animal.fotos[0] :
        "../../assets/images/erro.png"

    galery.innerHTML += `
        <div class="card-animals">
                <img src="${foto}" alt="animal-photo" class="img-animal">
                <div class="card-adotado"> <p >${animal.adotado ? "Adotado" : "Disponível"}</p>
                </div>
                <p class="card-name">${animal.nome}</p>
                <p class="card-local">${animal.local}</p>
            </div>`
}


// Função para abrir modal
const toggleModal = () => {
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}
openModal.addEventListener('click', toggleModal)
fade.addEventListener('click', toggleModal)

// ---------------- PAGINAÇÃO DINÂMICA ----------------
function renderizarPaginacao() {
    paginationContainer.innerHTML = "" // limpa antes

    // Botão esquerda
    const left = document.createElement("span")
    left.innerHTML = "&lt;"
    left.onclick = clickLeft
    paginationContainer.appendChild(left)

    const totalPaginas = Math.ceil(animaisCache.length / limite)

    // Botões numéricos
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
    renderizarPagina()
    renderizarPaginacao() // atualiza active
}

// Botão Esquerda
function clickLeft() {
    if (paginaAtual > 1) {
        paginaAtual--
        renderizarPagina()
        renderizarPaginacao()
    }
}

// Botão Direita
function clickRight() {
    const totalPaginas = Math.ceil(animaisCache.length / limite)
    if (paginaAtual < totalPaginas) {
        paginaAtual++
        renderizarPagina()
        renderizarPaginacao()
    }
}

// ----------------------------------------------------------------


