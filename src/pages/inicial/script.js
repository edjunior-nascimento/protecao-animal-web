const openBtn = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const fade = document.getElementById('fade');

// Função para abrir e fechar modal
function toggleModal() {
  modal.classList.toggle('show');
  fade.classList.toggle('show');
}

// Abrir modal
openBtn.addEventListener('click', toggleModal);

// Fechar modal ao clicar fora
fade.addEventListener('click', toggleModal);


// Requisição Usando Axios
let galeriaGlobal = [] // variável global
let indice = 0
let tamanho = window.innerWidth <= 768 ? 1 : 3; // 1 card no mobile, 3 no desktop

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
        indice += tamanho;
        cardColecao();
    }
}

function botaoPrev() {
    if (indice - tamanho >= 0) {
        indice -= tamanho;
        cardColecao();
    }
}

function cardColecao() {
    let init = indice;
    let fim = indice + tamanho;
    let visivel = galeriaGlobal.slice(init, fim);

    let divFotos = document.querySelector(".fotos");
    divFotos.innerHTML = ""; // limpa antes de exibir nova página

    visivel.forEach(galeria => {
        const foto = galeria.fotos && galeria.fotos.length > 0 ? galeria.fotos[0] : "../../assets/images/erro.png";

        divFotos.innerHTML += `
        <a href="../galeria/index.html?id=${galeria.id}">
            <div style="width: 300px; border: none; border-radius: 8px; box-shadow: 2px 2px 8px rgba(0,0,0,0.1); padding: 16px; margin: 20px auto; font-family: Arial, sans-serif;
            background-color: #fff; text-align: center;">
                <img style="display: block; width: 100%; height: 10rem;" src="${foto}" alt="Imagem do animal">
                <p style="margin: 5px 0;">${galeria.nome}</p>
            </div>
        </a>
        `;
    });
}

// Atualiza o valor de `tamanho` se a tela for redimensionada
window.addEventListener("resize", () => {
  tamanho = window.innerWidth <= 768 ? 1 : 3;
  cardColecao();
});

// inicia o carregamento


// pagination







    