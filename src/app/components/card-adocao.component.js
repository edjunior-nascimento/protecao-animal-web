export class CardAdocaoComponent{
    _id = ''
    constructor(id) {
       this.id = id;
    }

    criar(id, foto, nome, local, statusAdocao){
         const wrapper = document.createElement('card-adocao-wrapper');

        wrapper.innerHTML = `
            <style>
                .card-animal > a > div{
                    position: relative; 
                    max-width: 300px;
                    aspect-ratio: 1 / 1;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    text-align: center;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    cursor: pointer;

                    > img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        display: block;
                        border-radius: 8px 8px 0 0;
                    }

                    .tag-adotado{
                        height: 22px;
                        position: absolute;
                        width: 100%;
                        background-color: rgb(255, 172, 12);
                        color: white;
                        margin-top: -22px;
                    }

                    .card-nome {
                        color: #27A8AD;
                        font-size: 25px;
                        font-weight: 700;
                        line-height: 1.25;              /* compacta, favorece 2 linhas */
                        -webkit-line-clamp: 2;          /* limita a 2 linhas */
                        padding-bottom: 10px;
                    }

                    .card-local {
                        color: black;
                        font-family: Arial;
                        font-weight: 400;
                        font-size: 18px;
                        line-height: 1.35;
                        -webkit-line-clamp: 2;          /* limita a 2 linhas */
                        padding-bottom: 10px;
                    }
                } 
                .card-animal > a > div:hover {
                transform: scale(1.05); /* aumenta 5% */
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* sombra mais forte */
                }

            </style>
            <div class="card-animal">
                <a href="../detalhes-adocao/index.html?id=${id}">
                    <div>
                        <img src="${foto}" alt="Foto do Animal">
                        
                        ${statusAdocao ? `
                        <div class="tag-adotado">
                            <p>Adotado</p>
                        </div>
                        ` : ''}

                        <p class="card-nome">${nome}</p>
                        <p class="card-local">${local}</p>
                    </div>
                </a>
            </div>
        `;

        const idElemento = document.getElementById(this.id)
   
        idElemento.appendChild(wrapper);

        idElemento.style.display = "grid";
        idElemento.style.gap = "10px";
        idElemento.style.gridTemplateColumns = "repeat( auto-fit, minmax(max(200px, 20%), 1fr))";
        idElemento.style.padding = "10px";
    }

}

