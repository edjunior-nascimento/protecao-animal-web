export class GaleriaModel {
    #id;
    #nomeEvento;
    #fotoCapa;
    #fotos;

    setId(value) {
        this.#id = value;
    }

    getId() {
        return this.#id;
    }

    setNomeEvento(value) {
        this.#nomeEvento = value;
    }

    getNomeEvento() {
        return this.#nomeEvento;
    }

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

    setFotos(value) {
        this.#fotos = value;
    }

    getFotos() {
        return this.#fotos;
    }

}