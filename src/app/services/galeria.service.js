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

  async listarFotos(id){
      let listaFotos = [];   
      try {  
        const resposta = await axios.get("http://localhost:3001/api/galeria/")
        const listaGaleria =  resposta.data.data
  
        listaGaleria.forEach(galeria => {
          if(galeria.id == id){
            listaFotos = galeria.fotos
          }
        });
  
      } catch(error) {
      console.error('erro no axio' + error)
      }
      return listaFotos;
  }
}
