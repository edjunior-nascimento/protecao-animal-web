export class CardConfirmacaoComponent extends HTMLElement{

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    // Define quais atributos o componente observa
    static get observedAttributes() {
        return ['numero'];
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
        const numero = this.getAttribute('numero') || '';
       

        this.shadowRoot.innerHTML = `
            <style>
                body {
                font-family: Arial, Helvetica, sans-serif;
                
                }

                .card {
                
                background-color: #ffffff;
                width: 320px;          
                padding: 30px 25px;
                border-radius: 4px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.08);
                text-align: left;           
                }

                .card-title {
                font-size: 24px;
                font-weight: bold;
                color: #00bcd4;            
                margin-bottom: 25px;
                }


                .card-label {
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #9e9e9e;
                text-align: center;
                }


                .card-order-number {
                font-size: 36px;
                font-weight: bold;
                color: #555555;
                text-align: center;
                margin: 5px 0 25px;
                }


                .card-message {
                font-size: 15px;
                line-height: 1.5;
                color: #000000;
                margin-bottom: 25px;
                }


                .card-heart {
                font-size: 24px;
                color: #ff0000;
                }
            </style>

            <div class="card">
                <h1 class="card-title">Tudo Certo!</h1>
                
                <p class="card-label">Número do Pedido</p>
                <p class="card-order-number">${numero}</p>
                
                <p class="card-message">
                Agora fique atento as datas de<br>
                castrações na sua região através<br>
                das nossas redes sociais !
                </p>

                <div class="card-heart">❤</div>
            </div>
        `;

    }
    
}
customElements.define('card-confirmacao-component', CardConfirmacaoComponent);

