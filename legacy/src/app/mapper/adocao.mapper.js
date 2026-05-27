import { AdocaoModel } from "../models/adocao.model";
import { AnimalModel } from "../models/animal,model";



export default class AdocaoMapper{

    static paraAdocaoModel(json) {

        let listaRetorno = [];
        
        json.forEach(element => {
            const adocaoModel = new AdocaoModel()
            const animalModel = new AnimalModel()

            animalModel.setId(element.id)
            animalModel.setNome(element.nome)
            animalModel.setEspecie(element.especie)
            animalModel.setSexo(element.sexo)
            animalModel.setPorte(element.porte)
            animalModel.setNascimento(element.nascimento)

            adocaoModel.setId(element.id)
            adocaoModel.setAnimal(animalModel)
            adocaoModel.setHistorico(element.historia)
            adocaoModel.setObservacoes(element.observacoes)
            adocaoModel.setTemperamento(element.temperamento)
            adocaoModel.setAdotado(element.adotado)
            adocaoModel.setSituacao(element.situacao)
            adocaoModel.setFotos(element.fotos)
            adocaoModel.setLocal(element.local)
            adocaoModel.setFotoCapa(element.fotos[0])

            listaRetorno.push(adocaoModel)

        });


        return listaRetorno;
    }








}