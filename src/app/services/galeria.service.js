import axios from "https://cdn.skypack.dev/axios";
export class GaleriaService {

  async listarGaleria(){
      let listaGaleria = [];   
      try {  
        const resposta = await axios.get("http://localhost:3001/api/galeria/")
        listaGaleria =  resposta.data.data
      } catch(error) {
      console.error('erro no axio' + error)
      }
      return listaGaleria;
  }

}
