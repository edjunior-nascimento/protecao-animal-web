import { CabecalhoComponent} from '../../components/cabecalho.component.js'
import {CardAdocaoComponent} from '../../components/card-adocao.component.js'
import { AnimaisUsecase } from '../../use-case/animais.usecase.js';


class AdocaoView{
   
    cardAdocaoComponent = {}
    listaAnimais = []

    paginaAtual = 1  
    indice = 0
    itensPaginas = 6

    constructor() {
        new CabecalhoComponent("cabecalho");
        this.#init();
  
    }

    
    async #init(){
        this.cardAdocaoComponent =  new CardAdocaoComponent("lista-card-adocao");
        this.listaAnimais = await new AnimaisUsecase().listaAnimais()
        this.#cardAdocao()
        this.#renderizarPaginacao()
        
        //this.teste = await new AnimaisUsecase().getNomeAnimal()
        //console.log('TESTE ' + this.teste)
    }

    #cardAdocao(){

        this.cardAdocaoComponent.limpar()
        let galeria = document.querySelector(".galery")
        galeria.innerHTML = ""

        let init = this.indice
        let fim = this.indice + this.itensPaginas
        let animaisVisiveis = this.listaAnimais.slice(init, fim)

        animaisVisiveis.forEach(animal => {

            this.cardAdocaoComponent.criar(animal.id, animal.fotos[0], animal.nome, animal.local, animal.adotado);

        }) 

    }

    #renderizarPaginacao() {
    
        const paginationContainer = document.querySelector('#pagination')    
        paginationContainer.innerHTML = ``

        // Botão esquerdo
        const left = document.createElement("span")
        left.innerHTML = "&lt;"
        left.addEventListener('click', this.botaoLeft)
        paginationContainer.appendChild(left)
    
        // Botões numéricos
        let totalPaginas = Math.ceil(this.listaAnimais.length / this.itensPaginas)
        for (let i = 1; i <= totalPaginas; i++) {
            const pageBtn = document.createElement("span")
            pageBtn.innerText = i
            pageBtn.dataset.page = i

            if (i === this.paginaAtual) {
                pageBtn.classList.add("active")
            }

            pageBtn.addEventListener('click', this.selectPage)
            paginationContainer.appendChild(pageBtn)
       
        }
    
        // Botão direito
        const right = document.createElement("span")
        right.innerHTML = "&gt;"
        right.addEventListener('click', this.botaoRight )
        paginationContainer.appendChild(right)

    
    }

    //Functions da pagination
    botaoLeft = () => {
        if (this.paginaAtual > 1) {
                this.paginaAtual--
                this.indice-=this.itensPaginas
                this.#cardAdocao()
                this.#renderizarPaginacao()
            }
    }

    botaoRight = () => {
        
        const totalPaginas = Math.ceil(this.listaAnimais.length / this.itensPaginas)
        if (this.paginaAtual < totalPaginas) {
                this.paginaAtual++
                this.indice+=this.itensPaginas
                this.#cardAdocao()
                this.#renderizarPaginacao()
            }

            
    }

    selectPage = (event) => {
    
        this.paginaAtual = parseInt(event.target.dataset.page)
        this.indice = (this.paginaAtual - 1) * this.itensPaginas;

    // Re-renderiza
        this.#cardAdocao();
        this.#renderizarPaginacao();
    };
  
}

window.adocaoView = new AdocaoView()