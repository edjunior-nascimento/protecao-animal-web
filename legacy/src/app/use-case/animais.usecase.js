import { AnimaisService } from "../services/animais.service.js";
import { LocaisUsecase } from "./locais.usecase.js";


export class AnimaisUsecase {

    animaisService = new AnimaisService();
    locaisUsecase = new LocaisUsecase();


      //OK  
    async listaAnimais(){
        let resposta = []

        const listaAnimais = await this.animaisService.listarAnimais()
      
       for(const animal of listaAnimais){
            const nomeLocal = await this.locaisUsecase.getNome(animal.local)
            resposta.push({...animal,local:nomeLocal})
        }
        
        
        return resposta;
    }
    //ANALISA

    //object objetct (OK)
    async getAnimal(idAnimal){
        let resposta = {};

        const listaAnimais =  await this.listaAnimais();

        resposta = listaAnimais.find(animal => animal.id == idAnimal);

        return resposta
    }
    ///error
    async listFotosAnimal(idAnimal){
        let resposta = [];

        this.listaAnimais.forEach(animal => {
            if(animal.id == idAnimal){
                resposta = animal.fotos;
            }
        });
        return resposta
    }
    //error
    async getNomeAnimal(idAnimal){
        let resposta = [];

        this.listaAnimais.forEach(animal => {
            if(animal.id == idAnimal){
                resposta = animal.nome;
            }
        });
        return resposta
    }

    // OK
    async getNomeLocalAnimal(idAnimal){
        let resposta = {};

        const listaAnimais =  await this.listaAnimais();

        resposta = listaAnimais.find(animal => animal.id == idAnimal) || {};

        return resposta.local
    }

}