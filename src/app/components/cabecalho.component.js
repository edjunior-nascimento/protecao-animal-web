export class CabecalhoComponent{
    
    constructor(id) {
        const wrapper = document.createElement('protecao-cabecalho');

        wrapper.innerHTML = `
            <style>
                .ptc-header {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding:5px 20px;

                    .logo {
                        width: 141px;
                        img {     
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                        }
                    }

                    .nav-links {
                        .menu-web {
                            
                            ul {
                                list-style: none;
                                display: flex;
                                gap: 32px;
                                
                                a {
                                    color: white;
                                }
                                a:hover {
                                    color: #9b9b9bff;
                                }
                            }
                        }

                        .icon-menu-mobile{
                            display: none;
                            i{
                                color: white;
                                font-size: 32px;
                                cursor: pointer;
                            }

                        }
                        .menu-mobile {
                            display: none;
                            width: 200px;
                            background-color: white;
                            border-radius: 2px;
                            position: absolute;
                            right: 20px;

                            > div {
                                display: flex;
                                padding: 10px 15px 10px 15px;
                                color: #27A8AD;
                                font-size: 14px;
                                gap:20px;
                                border-bottom: 1px solid #ccc;
                                cursor: pointer;
                            }

                            > div:hover {
                                background-color: #f0f0f0;
                            }
                        }
                    }
                }

                .show-menu-mobile {
                    display: block !important;
                }

                @media (max-width: 768px) {
                    .ptc-header {

                        .nav-links {
                            .menu-web {
                                display: none;
                            }
                            .icon-menu-mobile{
                                display: block;
                            }
                        }
                    }
                }

            </style>
            <div class="ptc-header"> 
                <div class="logo"> 
                    <a href="../inicial/index.html">
                        <img src="../../../assets/images/logo_protecao.png" alt="logo proteção animal">
                    </a>
                </div>
                <div class="nav-links">
                    <div class="menu-web">
                        <ul>
                            <li><a href="../inicial/index.html">Pagina inicial</a></li>
                            <li><a href="../doacao/index.html">Quero ajudar</a></li>
                            <li><a href="../adocao/index.html">Quero adotar</a></li>
                            <li><a href="../sobre/index.html">Quem somos</a></li>   
                        </ul>
                    </div> 
                    <div class="icon-menu-mobile">
                        <i class="fa-solid fa-bars"></i>
                    </div>
                    <div class="menu-mobile">
                        <div>
                            <img src="../../../assets/icons/game-icons_dog-house.png">
                            <p> Pagina Inicial</p>
                        </div>
                        <div>
                            <img src="../../../assets/icons/Vector.png">
                            <p>Quero Adotar</p>
                        </div>
                        <div>
                            <img src="../../../assets/icons/bxs_donate-heart.png">
                            <p>Quero Doar</p>
                        </div>
                        <div>
                            <img src="../../../assets/icons/ic_baseline-diversity-3.png">
                            <p>Quem Somos</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.getElementById(id).appendChild(wrapper);

        this._initEventos();
    }

    _initEventos() {
        const iconMenuMobile = document.querySelector('.icon-menu-mobile');
        const menuMobile = document.querySelector('.menu-mobile');

        iconMenuMobile.onclick = () => {
            menuMobile.classList.toggle('show-menu-mobile');
        }
    }
}

