export class CardGaleriaComponent extends HTMLElement{

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    // Define quais atributos o componente observa
    static get observedAttributes() {
        return ['codigo', 'foto', 'nome'];
    }

    // Chamado quando atributos mudam
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

    // Chamado quando conecta ao DOM
    connectedCallback() {
        this.render();
    }

    render() {
        const codigo = this.getAttribute('codigo') || '';
        const foto = this.getAttribute('foto') || '';
        const nome = this.getAttribute('nome') || 'Nome não informado';

        this.shadowRoot.innerHTML = `
            <style>
                .card-galeria {
                    > a {
                        text-decoration: none;
                        list-style: none;
                    }
                    
                    > a > div {
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

                        p {
                            color: black;
                            font-weight: 200;
                            font-size: 1.2rem;
                        }
                    } 
                }
                .card-galeria > a > div:hover {
                    transform: scale(1.05); /* aumenta 5% */
                    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); /* sombra mais forte */
                }

            </style>
            <div class="card-galeria">
                <a href="../galeria/index.html?id=${codigo}">
                    <div>
                        <img src="${foto}" alt="Galeria Image"/>
                        <p class="card-nome">${nome}</p>
                    </div>
                </a>
            </div>
        `;

    }
    
}
customElements.define('card-galeria-component', CardGaleriaComponent);