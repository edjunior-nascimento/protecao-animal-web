export class CardGaleriaComponent{
    id = '';
    constructor(idListaAnimal) {
        this.id = idListaAnimal;
    }

    criar(id, foto, nome) {
        const wrapper = document.createElement('card-galeria-wrapper');

        wrapper.innerHTML = `
            <style>
                .card-galeria > a > div{
                    position: relative; 
                    max-width: 300px;
                    aspect-ratio: 1 / 1;
                    background-color: #fff;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                    padding: 20px;

                    > img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                    }

                    .card-nome {
                        color: black;
                        font-family: Arial;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 1.35;
                        -webkit-line-clamp: 2;          /* limita a 2 linhas */
                        padding: 20px 0px 10px 20px;
                    }
                } 
                .card-galeria > a > div:hover {
                    transform: scale(1.05); /* aumenta 5% */
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* sombra mais forte */
                    cursor: pointer;
                }

            </style>
            <div class="card-galeria">
                <a href="../galeria/index.html?id=${id}">
                    <div>
                        <img src="${foto}" alt="Galeria Image"/>
                        <p class="card-nome">${nome}</p>
                    </div>
                </a>
            </div>
        `;

        document.getElementById(this.id).appendChild(wrapper);
    }

    limpar() {
        document.getElementById(this.id).innerHTML = '';
    }
}