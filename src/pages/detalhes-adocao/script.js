let galery = document.querySelector(".galery")
const openModal = document.querySelector('.mobile-menu')
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')
const paginationContainer = document.querySelector('.pagination')

let animaisCache = []      // guarda todos os animais recebidos da API
let paginaAtual = 1        // começa na página 1
const limite = 6           // quantidade de cards por página

function listarAnimaisAxios() {
    axios.get("http://localhost:3001/api/animais")
        .then(response => {
            animaisCache = response.data.data
            renderizarPagina()
            renderizarPaginacao()
        })
        .catch(error => {
            console.error("Falha ao carregar json:", error)
        })    
}
listarAnimaisAxios()


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
    const foto = animal.fotos && animal.fotos.length > 0 ? animal.fotos[0] : 
    "https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140476186.jpg"

    galery.innerHTML += `
    <div style="
        background:#fff;
        border-radius:12px;
        overflow:hidden;
        box-shadow:0 4px 12px rgba(0,0,0,0.15);
        width:100%;
        max-width:250px;
        display:flex;
        flex-direction:column;
        transition:transform 0.2s ease, box-shadow 0.2s ease;
        margin:auto;
    "
    onmouseover="this.style.transform='translateY(-6px)';this.style.boxShadow='0 8px 20px rgba(0,0,0,0.2)'"
    onmouseout="this.style.transform='none';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)'"
    >
        <img src="${foto}" alt="animal-photo" style="
            width:100%;
            height:200px;
            object-fit:cover;
        ">

        <p style="
            font-size:16px;
            font-weight:bold;
            color:#2196f3;
            margin:10px 0 4px 0;
            text-align:center;
        ">${animal.nome}</p>

        <p style="
            font-size:14px;
            color:#555;
            margin-bottom:12px;
            text-align:center;
        ">${animal.local}</p>
    </div>
    `
}

// Estilo da galeria
Object.assign(galery.style, {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
    padding: "20px",
    justifyItems: "center"
})

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
function selectPage(event){
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

