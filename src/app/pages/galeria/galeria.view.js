import { CabecalhoComponente } from '../../components/cabecalho.componente.js';
//import { CabecalhoComponent } from '../../components/cabecalho.component.js'
import { GaleriaUsecase } from '../../use-case/galeria.usecase.js';
import { CardFotoComponent } from '../../components/card-foto.component.js';
import { RodapeComponent } from '../../components/rodape.component.js';
class GaleriaView {
  galeriaModel = null;
  #cardFotos = null
  indexAtual = 0;

  constructor() {
  
    this.#init();
    this.#cardFotos = new CardFotoComponent('lista-fotos');

  }

  async #init() {
    const idUrl = new URLSearchParams(window.location.search).get('id')
    this.galeriaModel = await new GaleriaUsecase().listarGaleriaPorId(idUrl);
    
    this.#criarCard();
  }

  #criarCard() {
    this.galeriaModel.getFotos().forEach((foto, index) => {
      this.#cardFotos.criar(index, foto);
    });
  }

  #atualizarImagemModal(src) {
    const modalImage = document.querySelector('.modal-content img');
    if (modalImage) {
      modalImage.src = src;
    }
  }

  mostrarModalImagem(index) {
    console.log('mostrarModalImagem index:', index);
    const modalGaleria = document.getElementById('modal-galeria');
    modalGaleria.style.display = 'block';

    this.listaFotos.forEach((foto, i) => {
      if (i == index) {
        console.log(foto);
        this.#atualizarImagemModal(foto);
      }
    })
    this.indexAtual = index;
  }

  fecharModalImagem() {
    const modalGaleria = document.getElementById('modal-galeria');
    modalGaleria.style.display = 'none';
  }

  proximaImagem() {
    if (this.indexAtual < this.listaFotos.length - 1) {
      this.indexAtual++;
      this.mostrarModalImagem(this.indexAtual)
    }
  }

  imagemAnterior() {
    if (this.indexAtual > 0) {
      this.indexAtual--;
      this.mostrarModalImagem(this.indexAtual)
    }
  }

}




window.galeriaView = new GaleriaView();