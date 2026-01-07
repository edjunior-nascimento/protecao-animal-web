import { GaleriaModel } from "../models/galeria.model.js";

export default class GaleriaMapper {

    static paraGaleria(jsonDto) {
        let listaRetorno = [];
        jsonDto.forEach(dto => {
            const galeriaModel = new GaleriaModel();
            
            galeriaModel.setId(dto.id);
            galeriaModel.setNomeEvento(dto.nome);
            galeriaModel.setFotoCapa(dto.fotos[0]);

            listaRetorno.push(galeriaModel);
        });  
        return listaRetorno;
    }
    
}