import { GaleriaService } from "../../services/galeria.service.js";

const openBtn = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const fade = document.getElementById('fade');
let galery = document.querySelector(".galery")

let indexAtual = 0;
let idUrl = null;
let listaFotos = [];

let galeriaService = new GaleriaService();


console.log(await galeriaService.listarGaleria());

//init();

function toggleModalMenu() {
  modal.classList.toggle('show');
  fade.classList.toggle('show');
}

async function init(){
  idUrl = new URLSearchParams(window.location.search).get('id');
  
  listaFotos = await listarFotosAxios(idUrl);

  listaFotos.forEach((foto, index) => {
    criarCards(foto, index);
  })
}

// async function listarFotosAxios(id){
//     let listaFotos = [];   
//     try {  
//       const resposta = await axios.get("http://localhost:3001/api/galeria/")
//       const listaGaleria =  resposta.data.data

//       listaGaleria.forEach(galeria => {
//         if(galeria.id == id){
//           listaFotos = galeria.fotos
//         }
//       });

//     } catch(error) {
//     console.error('erro no axio' + error)
//    }
//    return listaFotos;
// }

function criarCards(foto, index) {
  galery.innerHTML += `
        <div class="card-animals" onclick="mostrarModalImagem(${index})">
            <img src="${foto}" alt="foto-galeria" 
        </div>`
}

function mostrarModalImagem(index) {
  const modalGaleria = document.getElementById('modal-galeria');
  modalGaleria.style.display = 'block';
  const modalImage = modalGaleria.querySelector('#modal-galeria .modal-content img');
  
  listaFotos.forEach((foto, i) => {
    if(i == index){
      console.log(foto);
      modalImage.src = foto;
    }
  })
  
  indexAtual = index;
}

function fecharModalImagem() {
  const modalGaleria = document.getElementById('modal-galeria');
  modalGaleria.style.display = 'none';
}

function proximaImagem() {
  if(indexAtual <= listaFotos.length -1){
    indexAtual++;
    mostrarModalImagem(indexAtual)
  }
}

function imagemAnterior() {
  if(indexAtual >= 0){
    indexAtual--;
    mostrarModalImagem(indexAtual)
  }
}
