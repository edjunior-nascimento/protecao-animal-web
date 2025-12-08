export class AnimaisService {

  async listarAnimais(){
    try {  
      const resposta = await axios.get("http://localhost:3001/api/animais")
      return  resposta.data.data
      } catch(error) {
      console.error('erro no axio' + error)
    }
  }

}
