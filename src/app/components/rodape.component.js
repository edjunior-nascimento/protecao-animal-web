export class RodapeComponent extends HTMLElement{

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = 
        `<style>
                #big-cat{
                    height: 300px;
                    padding-bottom: 0px;
                    margin-bottom: 0px;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    margin-top: -150px;

                    > img {
                        width: 264.08px;
                        height: 291px;
                        gap: 0px;
                        opacity: 0px;
                        position: absolute;
                        bottom: -50px;
                    }
                }
                .rodape{
                    background-color: #27A8AD;
                    text-align: center;
                    padding-top: 40px;

                    > div:first-child {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        grid-template-rows: 1fr auto;

                        > div {
                            display: grid;
                            gap: 12px;

                            h3 {
                                font-family: 'Jockey One';
                            }

                            a {
                                font-family: 'Arial';
                                text-decoration: none;
                                color: black;
                            }
                            
                        }
                    }
                    .redes-sociais{
                       > div {
                        display: flex;
                        justify-self: center;
                        gap: 20px;
                       }

                    }
                }
                @media (max-width: 768px) {
                    #big-cat{
                        > img {
                            width: 204.08px;
                            height: 201px;
                            bottom: -35px;
                        }
                    }

                    .rodape{
                        > div:first-child {
                            display: grid;
                            grid-template-columns: 1fr;
                        }
                    }
                    .icones{
                        width: 36px;
                    }
                }
                
            </style>

            <div id="big-cat">
                <img src="../../../assets/images/gato_footer.png" alt="logo-prot-animal" id="big-gato">
            </div>
            <div class="rodape">
                <div>
                    <div>
                        <h3>Sobre a Proteção Animal</h3>
                        <a href="../sobre/index.html">Sobre a Proteção Animal</a>
                        <a href="../formulario-castracao/">Campanhas</a>
                        <a href="#">Termos de Uso e Politica de Privacidade</a>
                    </div>

                    <div>
                        <h3>Colabore</h3>
                        <a href="../doacao/index.html">Doe qualquer valor</a>
                        <a href="#">Seja uma empresa parceira</a>
                    </div>

                    <div>
                        <h3>Contato</h3>
                        <a href="#">protecaoanimal@gmail.com</a>
                    </div>

                    <div class="redes-sociais">
                        <h3>Rede Sociais</h3>
                        <div>
                            <div>
                                <a href=""><img src="../../../assets/icons/ic_whatsapp_black.png" alt="wpp-img" class="icones" /></a>
                            </div>
                            <div>
                                <a href="https://www.instagram.com/protecaoanimalgba/"><img src="../../../assets/icons/ic_instagram_black.png" alt="inst-img" class="icones" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <a href=""><img src="../../../assets/images/logo_protecao.png" alt="logo-prot-animal" width="140px"></a>
                </div>
            </div>
        `;
    }

}
customElements.define('rodape-component', RodapeComponent);
