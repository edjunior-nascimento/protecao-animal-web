export class CardAnimalComponent extends HTMLElement {

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this._animal = null;
        this._localNome = '';
        this.render();
    }

    static get observedAttributes() {
        return ['codico', 'nome', 'especie', 'sexo', 'idade', 'local', 'foto'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.render();
        }
    }

 

    render() {   

        const codigo = this.getAttribute('codigo') || ''; 
        const nome = this.getAttribute('nome') || 'Nome não informado';
        const especie = this.getAttribute('especie') || '';
        const sexo = this.getAttribute('sexo') || '';
        const idade = this.getAttribute('idade') || '';
        const local = this.getAttribute('local') || '';
        const foto = this.getAttribute('foto') || '';

        this.shadowRoot.innerHTML = `
            <style>
                .pet-card {
                    display: flex;
                    align-items: center;
                    font-family: 'Lexend', sans-serif;
                    border: 1px solid #d1d5db;
                    border-radius: 4px;
                    padding: 12px;
                    max-width: 90%;
                    background-color: #fff;
                    margin: 20px auto;
                    position: relative;
                }

                .pet-image img {
                    width: 120px;
                    height: 120px;
                    object-fit: cover;
                    border-radius: 8px;
                    display: block;
                }

                .pet-info {
                    margin-left: 20px;
                    flex: 1;
                }

                .pet-name {
                    color: #12999d;
                    font-size: 1.5rem;
                    margin: 0 0 8px 0;
                    font-weight: 600;
                }

                .pet-details {
                    color: #333;
                    font-size: 0.95rem;
                    margin: 0 0 12px 0;
                }

                .pet-location {
                    display: flex;
                    align-items: center;
                    color: #444;
                    font-size: 0.9rem;
                }

                .location-icon {
                    width: 18px;
                    height: 18px;
                    color: #12999d;
                    margin-right: 8px;
                }

                .close-button {
                    position: absolute;
                    top: 12px;
                    right: 12px;
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #666;
                    padding: 4px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: color 0.2s;
                }

                .close-button:hover {
                    color: #12999d;
                }

                @media (max-width: 768px) {
                    .pet-card {
                        flex-direction: column;
                        text-align: center;
                    }

                    .pet-info {
                        margin-left: 0;
                        margin-top: 12px;
                    }

                    .pet-location {
                        justify-content: center;
                    }
                }
            </style>

            <div class="pet-card" id="${codigo}">
                <div class="pet-image">
                    <img src="${foto}" alt="${nome}">
                </div>
                
                <div class="pet-info">
                    <h2 class="pet-name">${nome}</h2>
                    <p class="pet-details">${especie} | ${sexo} | ${idade}</p>
                    
                    <div class="pet-location">
                        <svg class="location-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>${local}</span>
                    </div>
                </div>
                
                <button class="close-button" aria-label="Fechar">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        `;

        // Adicionar event listener ao botão de fechar
        const closeButton = this.shadowRoot.querySelector('.close-button');
        if (closeButton) {
            closeButton.addEventListener('click', () => this._fecharCard());
        }
    }
}

// Registrar o componente
customElements.define('card-animal-component', CardAnimalComponent);




