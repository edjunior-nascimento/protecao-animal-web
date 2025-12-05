import { GaleriaService } from "../../services/galeria.service.js";


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
let listaGaleria = [] // variável global
let indice = 0
let tamanho = window.innerWidth <= 768 ? 1 : 3; // 1 card no mobile, 3 no desktop

let galeriaService = new GaleriaService();

listaGaleria = await galeriaService.listarGaleria();

let galeriaCarousel = new GaleriaCarousel();
galeriaCarousel.cardColecao();



class GaleriaCarousel{
    botaoAfter() {
        if (indice + tamanho < listaGaleria.length) {
            indice += tamanho;
            cardColecao();
        }
    }

    botaoPrev() {
        if (indice - tamanho >= 0) {
            indice -= tamanho;
            cardColecao();
        }
    }

    cardColecao() {
        let init = indice;
        let fim = indice + tamanho;
        let visivel = listaGaleria.slice(init, fim);

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
}




// Atualiza o valor de `tamanho` se a tela for redimensionada
window.addEventListener("resize", () => {
  tamanho = window.innerWidth <= 768 ? 1 : 3;
  cardColecao();
});






    