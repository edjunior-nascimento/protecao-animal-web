export class LocaisService {

  async listarLocais() {
        try {  
      const respostaLocal = await axios.get("http://localhost:3001/api/locais")
      return  respostaLocal.data.data
  
      } catch(error) {
      console.error('erro no axio' + error)
    }    
  }

}
