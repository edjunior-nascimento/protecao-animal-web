class Animal {
    constructor(id, nome, especie, raca, idade, sexo, peso, cor, descricao, status = 'disponivel') {
        this.id = id;
        this.nome = nome;
        this.especie = especie;
        this.raca = raca;
        this.idade = idade;
        this.sexo = sexo;
        this.peso = peso;
        this.cor = cor;
        this.descricao = descricao;
        this.status = status; // disponivel, adotado, em_tratamento
        this.dataCadastro = new Date();
        this.dataAtualizacao = new Date();
    }

    // Atualizar informações do animal
    atualizar(dados) {
        Object.assign(this, dados);
        this.dataAtualizacao = new Date();
    }

    // Alterar status do animal
    alterarStatus(novoStatus) {
        this.status = novoStatus;
        this.dataAtualizacao = new Date();
    }

    // Verificar se animal está disponível para adoção
    isDisponivel() {
        return this.status === 'disponivel';
    }

    // Converter para objeto JSON
    toJSON() {
        return {
            id: this.id,
            nome: this.nome,
            especie: this.especie,
            raca: this.raca,
            idade: this.idade,
            sexo: this.sexo,
            peso: this.peso,
            cor: this.cor,
            descricao: this.descricao,
            status: this.status,
            dataCadastro: this.dataCadastro,
            dataAtualizacao: this.dataAtualizacao
        };
    }
}

export default Animal;