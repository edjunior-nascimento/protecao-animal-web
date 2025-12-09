import { CardGaleriaComponent } from "../../components/card-galeria.component.js";

class InicialView {

    constructor() {
        this.cardGaleria = new CardGaleriaComponent('lista-galeria');
        this.cardGaleria.criar(1, "https://poa.sp.gov.br/wp-content/uploads/2023/01/Feira-de-adocao-na-Praca-da-Biblia_Edem-Juniro-2.jpeg", "Galeria Exemplo");
    }


}

const inicialView = new InicialView();
