import { GaleriaModel } from "../models/galeria.model.js";

export default class GaleriaMapper {

    static paraGaleriaModel(jsonDto) {
        let listaRetorno = [];
        jsonDto.forEach(dto => {
            const galeriaModel = new GaleriaModel();

            galeriaModel.setId(dto.id);
            galeriaModel.setNomeEvento(dto.nome);
            galeriaModel.setFotoCapa(dto.fotos[0]);
            galeriaModel.setFotos(dto.fotos);

            listaRetorno.push(galeriaModel);
        });  
        return listaRetorno;
    }
    
}