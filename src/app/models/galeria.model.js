export class GaleriaModel {
    #id;
    #nomeEvento;
    #fotoCapa;

    getId() {
        return this.#id;
    }

    setId(value) {
        this.#id = value;
    }

    getNomeEvento() {
        return this.#nomeEvento;
    }

    setNomeEvento(value) {
        this.#nomeEvento = value;
    }

    getFotoCapa() {
        return this.#fotoCapa;
    }

    setFotoCapa(value) {
        if(value === null || value === undefined || value === '') {
            this.#fotoCapa = '../../assets/images/logo_protecao.png';
        }else {
            this.#fotoCapa = value;
        }
    }

}