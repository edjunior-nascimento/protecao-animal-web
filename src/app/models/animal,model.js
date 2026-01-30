export class AnimalModel {
  #id;
  #nome;
  #especie;
  #sexo;
  #porte;
  #nascimento;

  // ID
  setId(value) {
    this.#id = value;
  }
  getId() {
    return this.#id;
  }

  // NOME
  setNome(value) {
    this.#nome = value;
  }
  getNome() {
    return this.#nome;
  }

  // ESPÉCIE
  setEspecie(value) {
    this.#especie = value;
  }
  getEspecie() {
    return this.#especie;
  }

  // SEXO
  setSexo(value) {
    this.#sexo = value;
  }
  getSexo() {
    return this.#sexo;
  }

  // PORTE
  setPorte(value) {
    this.#porte = value;
  }
  getPorte() {
    return this.#porte;
  }

  // NASCIMENTO (pode ser Date, string, etc. dependendo do seu sistema)
  setNascimento(value) {
    this.#nascimento = value;
  }
  getNascimento() {
    return this.#nascimento;
  }
}

