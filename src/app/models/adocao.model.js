export class AdocaoModel {
  #id;
  #animal;
  #historico;
  #observacoes;
  #temperamento;
  #adotado;
  #situacao;
  #fotos;
  #local;
  #fotoCapa;

  // ID
  setId(value) {
    this.#id = value;
  }
  getId() {
    return this.#id;
  }

  // ANIMAL
  setAnimal(value) {
    this.#animal = value;
  }
  getAnimal() {
    return this.#animal;
  }

  // HISTÓRICO
  setHistorico(value) {
    this.#historico = value;
  }
  getHistorico() {
    return this.#historico;
  }

  // OBSERVAÇÕES
  setObservacoes(value) {
    this.#observacoes = value;
  }
  getObservacoes() {
    return this.#observacoes;
  }

  // TEMPERAMENTO
  setTemperamento(value) {
    this.#temperamento = value;
  }
  getTemperamento() {
    return this.#temperamento;
  }

  // ADOTADO
  setAdotado(value) {
    this.#adotado = value;
  }
  getAdotado() {
    return this.#adotado;
  }

  // SITUAÇÃO
  setSituacao(value) {
    this.#situacao = value;
  }
  getSituacao() {
    return this.#situacao;
  }

  // FOTOS
  setFotos(value) {
    this.#fotos = value;
  }
  getFotos() {
    return this.#fotos;
  }

  // LOCAL
  setLocal(value) {
    this.#local = value;
  }
  getLocal() {
    return this.#local;
  }

  // FOTO CAPA
    setFotoCapa(value) {
        if(value === null || value === undefined || value === '') {
            this.#fotoCapa = '../../assets/images/logo_protecao.png';
        }else {
            this.#fotoCapa = value;
        }
    }
    getFotoCapa() {
        return this.#fotoCapa;
    }
  
}