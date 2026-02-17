import { CabecalhoComponent } from '../../components/cabecalho.component.js';
import { RodapeComponent } from '../../components/rodape.component.js';
import { CardGaleriaComponent } from "../../components/card-galeria.component.js";
import { CardAnimalComponent } from "../../components/card.animal.componente.js";
import { GaleriaUsecase } from '../../use-case/galeria.usecase.js';
import { AnimaisUsecase } from '../../use-case/animais.usecase.js';

class InicialView {

    #animaisUsecase = new AnimaisUsecase();
    #listaAnimais = [];
    #animalAtual = null;
    
    // Propriedades para a galeria
    indice = 0;
    tamanho = 3;
    
    constructor() {
        this.#init();
    }

    async #init() {
        this.cardGaleria = new CardGaleriaComponent('lista-galeria');
        this.listaGaleria = await new GaleriaUsecase().listAlbuns();
        this.#carregarGalerias();
        
        // Carrega a lista de animais disponíveis da API
        await this.#carregarAnimais();
        
        // Exibe um animal aleatório disponível para adoção
        this.#exibirAnimalAleatorio();
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

    // ===== FUNÇÕES PARA CARD DE ANIMAL =====

    /**
     * Carrega a lista de animais disponíveis para adoção do backend
     */
    async #carregarAnimais() {
        try {
            // Busca todos os animais com informações de local
            this.#listaAnimais = await this.#animaisUsecase.listaAnimais();
            
            // Filtra apenas animais não adotados
            this.#listaAnimais = this.#listaAnimais.filter(animal => !animal.adotado);
            
            console.log(`${this.#listaAnimais.length} animais disponíveis para adoção`);
        } catch (error) {
            console.error('Erro ao carregar animais:', error);
            this.#listaAnimais = [];
        }
    }

    /**
     * Exibe um animal aleatório no card na página inicial
     */
    #exibirAnimalAleatorio() {
        if (this.#listaAnimais.length === 0) {
            console.warn('Nenhum animal disponível para exibição');
            return;
        }

        // Seleciona um animal aleatório da lista
        const indiceAleatorio = Math.floor(Math.random() * this.#listaAnimais.length);
        const animalSelecionado = this.#listaAnimais[indiceAleatorio];
        
        this.#exibirCardAnimal(animalSelecionado);
    }

    /**
     * Exibe o card de um animal específico
     * @param {Object} animalData - Dados do animal vindos da API
     */
    #exibirCardAnimal(animalData) {
        // Remove o card anterior se existir
        const cardAnterior = document.querySelector('card-animal-component');
        if (cardAnterior) {
            cardAnterior.remove();
        }

        // Cria o novo card de animal
        const cardAnimal = document.createElement('card-animal-component');
        
        // Define os dados do animal no componente
        cardAnimal.animal = animalData;
        cardAnimal.localNome = animalData.local || 'Local não especificado';
        
        // Adiciona listener para o evento de fechar
        cardAnimal.addEventListener('fechar-card', () => {
            this.#fecharCardAnimal();
        });

        // Insere o card na página (após o header)
        const header = document.querySelector('header.cabecalho');
        if (header && header.nextSibling) {
            header.parentNode.insertBefore(cardAnimal, header.nextSibling);
        } else {
            document.body.insertBefore(cardAnimal, document.body.firstChild);
        }

        this.#animalAtual = animalData;
    }

    /**
     * Fecha e remove o card de animal da página
     */
    #fecharCardAnimal() {
        const cardAnimal = document.querySelector('card-animal-component');
        if (cardAnimal) {
            cardAnimal.remove();
            this.#animalAtual = null;
        }
    }

    /**
     * Exibe o próximo animal disponível
     */
    exibirProximoAnimal() {
        if (this.#listaAnimais.length === 0) {
            console.warn('Nenhum animal disponível');
            return;
        }

        let indiceAtual = -1;
        
        if (this.#animalAtual) {
            indiceAtual = this.#listaAnimais.findIndex(
                animal => animal.id === this.#animalAtual.id
            );
        }

        const proximoIndice = (indiceAtual + 1) % this.#listaAnimais.length;
        this.#exibirCardAnimal(this.#listaAnimais[proximoIndice]);
    }

    /**
     * Exibe um animal específico pelo ID
     * @param {number} idAnimal - ID do animal a ser exibido
     */
    async exibirAnimalPorId(idAnimal) {
        try {
            const animal = await this.#animaisUsecase.getAnimal(idAnimal);
            if (animal) {
                this.#exibirCardAnimal(animal);
            } else {
                console.error(`Animal com ID ${idAnimal} não encontrado`);
            }
        } catch (error) {
            console.error('Erro ao buscar animal:', error);
        }
    }

}

window.inicialView = new InicialView();
