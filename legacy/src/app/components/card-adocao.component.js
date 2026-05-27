export class CardAdocaoComponent extends HTMLElement{
  
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); 
       
    }

    static get observedAttributes() {
        return ['codigo', 'foto', 'nome', 'local', 'adotado'];
    }


    connectedCallback() {
        this.render();
    }

    render(){
         
       const codigo = this.getAttribute('codigo') || '';
       const foto = this.getAttribute('foto') || '';
       const nome = this.getAttribute('nome') || '';
       const local = this.getAttribute('local') || '';
       const adotado = this.getAttribute('adotado') || '';

         this.shadowRoot.innerHTML = `
            <style>
                .card-adocao {
                    
                    display: grid;
                    gap: 10px;
                    gridTemplateColumns: repeat( auto-fit, minmax(max(200px, 20%), 1fr));
                    padding: 10px;

                    text-decoration: none;
                    font-family: 'Jockey One';

                    > div > a > div{
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
                            padding: 5px 0px 5px 0px;
                        }

                        .card-nome {
                            color: #27A8AD;
                            font-size: 25px;
                            font-weight: 700;
                            line-height: 1.25;              
                            -webkit-line-clamp: 2;         
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
                }

                .card-adocao > div > a > div:hover {
                transform: scale(1.05);
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
                }

                .card-adocao > div > a{
                
                text-decoration: none;
                }

            </style>
            
        <div class="card-adocao">
        
            <div>
                <a href="../detalhes-adocao/index.html?id=${codigo}">
                    <div>
                        <img src="${foto}" alt="Foto do Animal">
                        
                        ${adotado === 'true' ? `
                        <div class="tag-adotado">
                            ADOTADO
                        </div>
                        ` : ''}

                        <p class="card-nome">${nome}</p>
                        <p class="card-local">${local}</p>
                    </div>
                </a>
            </div>
        </div>
        `;

    }
    

}

customElements.define('card-adocao-component', CardAdocaoComponent);

