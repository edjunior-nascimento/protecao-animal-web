import axios from "https://cdn.skypack.dev/axios";
import GaleriaMapper from "../mapper/galeria.mapper.js";

export class GaleriaService {

  async listarGaleria(){
      let listaGaleria = [];   
      try {  
        const resposta = await axios.get("http://localhost:3001/api/galeria/")
        listaGaleria =  GaleriaMapper.paraGaleriaModel(resposta.data.data)
      } catch(error) {
        console.error('erro no axio' + error)
      }
      return listaGaleria;
  }

}
