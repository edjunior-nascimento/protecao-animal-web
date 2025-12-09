import { LocaisService } from "../services/locais.service.js";


export class LocaisUsecase {

    locaisService = new LocaisService();


    async listLocais(){
        const resposta = await this.locaisService.listarLocais();
        return resposta;
    }

    async getNome(idLocal){
        let resposta = "";

        const listaLocais =  await this.locaisService.listarLocais();

        listaLocais.forEach(local => {
            if(local.id == idLocal){
                resposta = local.nome;
            }
        });
        return resposta
    }
    
}