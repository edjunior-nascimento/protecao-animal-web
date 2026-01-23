import { GaleriaService } from "../services/galeria.service.js";


export class GaleriaUsecase {

    galeriaService = new GaleriaService();

    async listAlbuns(){
        let listaAlbuns = await this.galeriaService.listarGaleria();
        return listaAlbuns;
    }

    async listarGaleriaPorId(idAlbum){
        let resposta = [];
        let listaGaleriaModel = await this.galeriaService.listarGaleria();
        listaGaleriaModel.forEach(galeriaModel => {
            if(galeriaModel.getId() == idAlbum){
                resposta = galeriaModel;
            }
        })

        return resposta;
    }

    async getNomeAlbum(idAlbum){
        let resposta = "";

        let listaAlbuns = await this.galeriaService.listarGaleria();
        
        listaAlbuns.forEach(album => {
            if(album.id == idAlbum){
                resposta = album.nome;
            }
        })

        return resposta
    }

}