export class CardFotoComponent{
    id = '';
    constructor(idListaFotos) {
        this.id = idListaFotos;
    }

    criar(id, foto) {
        const wrapper = document.createElement('card-foto-wrapper');

        wrapper.innerHTML = `
            <style>
                .card-foto > a > div{
                    position: relative; 
                    max-width: 300px;
                    aspect-ratio: 1 / 1;
                    background-color: #fff;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;
                    

                    > img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                    }

                    
                } 
                .card-foto > a > div:hover {
                    transform: scale(1.05); /* aumenta 5% */
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* sombra mais forte */
                    cursor: pointer;
                }

            </style>
            <div class="card-foto" onclick="window.galeriaView.mostrarModalImagem(${id})'>
                <a href="../foto/index.html?id=${id}">
                    <div>
                        <img src="${foto}" alt="foto Image"/>

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