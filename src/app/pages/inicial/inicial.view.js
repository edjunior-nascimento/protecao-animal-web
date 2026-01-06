import { CabecalhoComponent} from '../../components/cabecalho.component.js'
import { CardGaleriaComponent } from "../../components/card-galeria.component.js";
import { GaleriaUsecase } from '../../use-case/galeria.usecase.js';
class InicialView {

   
    
    constructor() {
        new CabecalhoComponent("cabecalho");
        this.#init();
    }

    listaGaleria = []
    indice = 0
    tamanho = window.innerWidth <= 768 ? 1 : 3;

   
    async #init(){
        this.cardGaleria = new CardGaleriaComponent('lista-galeria');
        this.listaGaleria = await new GaleriaUsecase().listAlbuns();
        this.#cardColecao();
    }

    botaoProximo() {
        if (this.indice + this.tamanho < this.listaGaleria.length) {
            this.indice += this.tamanho;
            this.#cardColecao();
        }
    }

    botaoAnterior() {
        if (this.indice - this.tamanho >= 0) {
            this.indice -= this.tamanho;
            this.#cardColecao();
        }
    }

    #cardColecao() {
        this.cardGaleria.limpar(); // limpa antes de exibir nova página

        let init = this.indice;
        let fim = this.indice + this.tamanho;
        let visivel = this.listaGaleria.slice(init, fim);

        visivel.forEach(galeria => {
            this.cardGaleria.criar(galeria.id, galeria.fotos[0], galeria.nome );
        });
    }

}

window.inicialView = new InicialView();

