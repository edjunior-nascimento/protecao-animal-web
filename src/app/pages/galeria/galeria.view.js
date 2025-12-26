import { CabecalhoComponent } from '../../components/cabecalho.component.js'
import { GaleriaUsecase } from '../../use-case/galeria.usecase.js';
import { CardFotoComponent } from '../../components/card-foto.component.js';
class GaleriaView {
  listaFotos = []
  #cardFotos = null

  constructor() {
    new CabecalhoComponent("cabecalho");
    this.#init();
    this.#cardFotos = new CardFotoComponent('lista-fotos');

  }

  async #init() {
    const idUrl = new URLSearchParams(window.location.search).get('id')
    this.listaFotos = await new GaleriaUsecase().listFotosAlbum(idUrl);
    this.#criarCard();

  }

  #criarCard() {
    this.listaFotos.forEach((foto, index) => {
       this.#cardFotos.criar(index, foto);
    });
  }

}


window.galeriaView = new GaleriaView();