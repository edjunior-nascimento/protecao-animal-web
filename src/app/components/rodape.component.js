export class RodapeComponent {

    constructor(id) {
        const wrapper = document.createElement('protecao-cabecalho');

        wrapper.innerHTML = `
            <style>
                #big-cat{
                    height: 300px;
                    padding-bottom: 0px;
                    margin-bottom: 0px;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    margin-top: -150px;
                }
                #big-gato{
                    width: 264.08px;
                    height: 291px;
                    gap: 0px;
                    opacity: 0px;
                    position: absolute;
                    bottom: -50px;
                
                }
                footer{
                     background-color: #27A8AD;
                }
                #footer-primary{
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-template-rows: 1fr auto;
                }
                #footer-secondary{
                    background-color: #27A8AD;
                    text-align: center;
                    margin-top: 1.5rem;
                }
                .inf{
                    text-align: center;
                    margin-top: 100px;
                    display: grid;
                    font-family: 'Jockey One'
                }
                .inf>a{
                    font-family: arial;
                }
                .footer-item{
                    text-decoration: none;
                    color: black;
                    padding: 5px;
                }     
                .social-icons{
                    display: flex;
                    justify-content: center;

                    height: 100px;
                }
                .item-social{
                    margin-left: 20px;
                }
                @media (max-width: 768px) {
                    #big-gato{
                        width: 204.08px;
                        height: 201px;
                        bottom: -35px;
                    }

                    #footer-primary{
                        display: grid;
                    
                        grid-template-columns: 1fr;
                    }
                    .icones{
                        width: 60px;
                        margin-top: 20px;
                        margin-right: 20px;
    
                    }
                }
                
            </style>

            <div id="big-cat">
                <img src="../../../assets/images/gato_footer.png" alt="logo-prot-animal" id="big-gato">
            </div>
            <footer>
                <div id="footer-primary">
                    <div class="inf">
                        <h3>Sobre a Proteção Animal</h3>

                        <a href="../sobre/index.html" class="footer-item">Sobre a Proteção Animal</a>
                        <a href="../formulario-castracao/" class="footer-item">Campanhas</a>
                        <a href="#" class="footer-item">Termos de Uso e Politica de Privacidade</a>
                    </div>

                    <div class="inf">
                        <h3>Colabore</h3>
                        <a href="../doacao/index.html" class="footer-item">Doe qualquer valor</a>
                        <a href="#" class="footer-item">Seja uma empresa parceira</a>
                    </div>

                    <div class="inf">
                        <h3>Contato</h3>
                        <p>Email:</p>
                        <a href="#" class="footer-item">protecaoanimal@gmail.com</a>
                    </div>

                    <div class="inf">
                        <h3>Rede Sociais</h3>
                        <div class="social-icons">
                            <div class="item-social">
                                <a href=""><img src="../../../assets/icons/ic_whatsapp_black.png" alt="wpp-img"
                                        class="icones" /></a>
                            </div>
                            <div class="item-social">
                                <a href="https://www.instagram.com/protecaoanimalgba/"><img
                                        src="../../../assets/icons/ic_instagram_black.png" alt="inst-img" class="icones" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="footer-secondary">
                    <a href=""><img src="../../../assets/images/logo_protecao.png" alt="logo-prot-animal" id="logo"
                            width="140px"></a>
                </div>
            </footer>
        `;

        document.getElementById(id).appendChild(wrapper);
    }

}
