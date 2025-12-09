import { AnimaisService } from "../services/animais.service.js";
import { LocaisUsecase } from "./locais.usecase.js";


export class AnimaisUsecase {

    animaisService = new AnimaisService();
    locaisUsecase = new LocaisUsecase();

    listaAnimais = [];

    constructor() {       
        this.init();
    }
        

    async init(){
        this.listaAnimais = await this.animaisService.listarAnimais();
    }

    async listAnimais(){
        let resposta = []
        
        let promessas = this.listaAnimais.map(async (animal) => {
            const nomeLocal = await this.locaisUsecase.getNome(animal.local);
            return { ...animal, local: nomeLocal };
        });

        resposta = await Promise.all(promessas);
        
        return resposta;
    }

    async getAnimal(idAnimal){
        let resposta = {};

        const listaAnimais =  await this.listAnimais();

        resposta = listaAnimais.find(animal => animal.id == idAnimal);

        return resposta
    }
    
    async listFotosAnimal(idAnimal){
        let resposta = [];

        this.listaAnimais.forEach(animal => {
            if(animal.id == idAnimal){
                resposta = animal.fotos;
            }
        });
        return resposta
    }

    async getNomeAnimal(idAnimal){
        let resposta = [];

        this.listaAnimais.forEach(animal => {
            if(animal.id == idAnimal){
                resposta = animal.nome;
            }
        });
        return resposta
    }

    async getNomeLocalAnimal(idAnimal){
        let resposta = {};

        const listaAnimais =  await this.listAnimais();

        resposta = listaAnimais.find(animal => animal.id == idAnimal) || {};

        return resposta.local
    }

}