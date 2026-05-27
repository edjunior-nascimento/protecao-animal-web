export class CardFotoComponent{
    id = '';
    constructor(idListaFotos) {
        this.id = idListaFotos;
    }

    criar(id, foto) {
        const wrapper = document.createElement('card-foto-wrapper');

        wrapper.innerHTML = `
            <style>
                .card-foto {
                    position: relative;
                    display: block;
                }

                .card-foto a {
                    text-decoration: none;
                    display: block;
                }

                .card-foto a div {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 1 / 1;
                    background-color: #fff;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    text-align: center;

                    cursor: pointer;
                    
                    border-radius: 4px;
                }

                .card-foto a div img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                @media (max-width: 600px) {
                    .galeria {
                        grid-template-columns: 1fr 1fr; /* 2 colunas em telas pequenas */
                    }
            </style>
            <div class="card-foto" onclick="window.galeriaView.mostrarModalImagem(${id})">
                <a href="../foto/index.html?id=${id}">
                    <div>
                        <img src="${foto}" alt="Foto da galeria"/>
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