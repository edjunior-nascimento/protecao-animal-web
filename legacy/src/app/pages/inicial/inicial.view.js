import { CabecalhoComponent } from '../../components/cabecalho.component.js';
import { RodapeComponent } from '../../components/rodape.component.js';
import { CardGaleriaComponent } from "../../components/card-galeria.component.js";
import { GaleriaUsecase } from '../../use-case/galeria.usecase.js';
class InicialView {

   
    
    constructor() {
        this.#init();
    }

    async #init() {
        this.cardGaleria = new CardGaleriaComponent('lista-galeria');
        this.listaGaleria = await new GaleriaUsecase().listAlbuns();
        this.#carregarGalerias()
    }

    botaoProximo() {
        if (this.indice + this.tamanho < this.listaGaleria.length) {
            this.indice += this.tamanho;
            this.#carregarGalerias()
        }
    }

    botaoAnterior() {
        if (this.indice - this.tamanho >= 0) {
            this.indice -= this.tamanho;
            this.#carregarGalerias()
        }
    }

    #carregarGalerias() {
        
        let colecaoGaleria = document.getElementById('colecao-galeria');
        
        //Limpar a colecao existente
        colecaoGaleria.innerHTML = ''; 

        let init = this.indice;
        let fim = this.indice + this.tamanho;
        let listaGaleriaVisivel = this.listaGaleria.slice(init, fim);

        listaGaleriaVisivel.forEach(galeria => {
            colecaoGaleria.appendChild(this.#criarCard(galeria));
        });
    }

    #criarCard(galeriaModel) {
        const card = document.createElement('card-galeria-component');
        card.setAttribute('codigo', galeriaModel.getId());
        card.setAttribute('foto', galeriaModel.getFotoCapa());
        card.setAttribute('nome', galeriaModel.getNomeEvento());
        return card;
    }

}

window.inicialView = new InicialView();
