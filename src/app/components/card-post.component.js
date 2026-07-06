export class CardPostComponent extends HTMLElement{
  
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); 
       
    }

    static get observedAttributes() {
        return ['codigo', 'foto', 'nome', 'sexo', 'idade', 'porte', 'cor'];
    }


    connectedCallback() {
        this.render();
    }

    render(){
         
       const codigo = this.getAttribute('codigo') || '';
       const foto = this.getAttribute('foto') || '';
       const nome = this.getAttribute('nome') || '';
       const sexo = this.getAttribute('sexo') || '';
       const idade = this.getAttribute('idade') || '';
       const porte = this.getAttribute('porte') || '';
       const cor = this.getAttribute('cor') || '#1CB5B9';

         this.shadowRoot.innerHTML = `
            <style>
                .card-post-principal{
                    background: ${cor};
                    height: 650px;
                    width: 100%;
                    max-width: 360px;
                    color:  #ffffff;

                    .topo{
                        text-align: center;
                        padding: 40px 40px 0px;
                        

                    }

                    .titulo{
                    margin: 0;
                    font-size: 40px;
                    line-height: 1;
                    letter-spacing: 3px;
                    text-transform: uppercase;
                    color:  #ffffff;
                }

                .subtitulo{
                    width: 280px;
                    height: 50px;  
                    
                    margin: 10px -15px 20px;
                    background: #FFAC0C;
                    color:  #ffffff;
                    padding: 8px 14px;
                    border-radius: 10px;
                    font-size: 25px;
                    text-transform: uppercase;
                    letter-spacing: .5px;
                    display: grid;
                    place-items: center;
                }

                .area-amarela{
                    position: relative;
                    margin-top: 14px;
                    padding-top: 12px;
                    padding-bottom: 2px;
                          

                
                }

                .area-amarela::before{
                    width: 100%;
                    height: 215px;
                    content: '';
                    position: absolute;
                    top: calc(30% - 6px);
                    background: #FFAC0C;
                    
                }

               
                .moldura{
                    border: #FFAC0C solid 8px;
                    border-bottom: none;
                    width: 85%;
                    max-width: 220px;
                    margin: 0 auto;
                    aspect-ratio: 1 / 1;
                    background:  #ffffff;
                    overflow: hidden;
                    position: relative;
                
                }

                .moldura img{
                    
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                
                .info{
                   
                    margin-top: 14px;
                    display: grid;
                    place-items: center;
                    gap: 12px;
                }

                .chip-nome{
                    margin-top: -125px;
                    display: inline-block;
                    background: #1CB5B9;
                    color:  #ffffff;
                    padding: 6px 12px;
                    border-radius: 9px;
                    font-size: 16px;
                    letter-spacing: .2px;
                    max-width: 90%;
                    text-align: center;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    z-index: 2;
                }

                .dados{
                    margin-top: -75px;
                    width: 56%;
                    max-width: 160px;
                    background:  #ffffff;
                    color: #111111;
                    border-radius: 12px;
                    padding: 22px 16px 5px;
                    text-align: center;
                    box-shadow: 0 4px 10px rgba(0,0,0,.12);
                    font-family: Arial, Helvetica, sans-serif; 
                    z-index: 1;
                }

                .dados p{
                    margin: 6px 0;
                    font-size: 14px;
                    line-height: 1.25;
                    font-weight: bolder;
                }

               
                .site{
                    width: 200px;
                    display: inline-block;
                    background: #FFAC0C;
                    color:  #ffffff;
                    text-decoration: none;
                    padding: 10px 16px;
                    border-radius: 10px;
                    font-size: 14px;
                    line-height: 1;
                    text-align: center;
                    white-space: nowrap;
                    transition: transform .15s ease, filter .15s ease, box-shadow .15s ease;
                    box-shadow: 0 4px 10px rgba(0,0,0,.12); 
                }

                .site:hover{
                    transform: translateY(-1px);
                    filter: brightness(1.02);
                    box-shadow: 0 6px 14px rgba(0,0,0,.16);
                }

                
                @media (max-width: 380px){
                    .titulo{ font-size: 34px; }
                    .subtitulo{ font-size: 15px; }
                    .dados{ width: 92%; }
                }
                }

                
                

            </style>

            <div class="card-post-principal">
                <div class="topo">
                    <h1 class="titulo">ADOÇÃO</h1>
                    <div class="subtitulo">RESPONSÁVEL</div>
                </div>
            
                <div class="area-amarela">
                    <div class="moldura">
                        <img src="${foto}" alt="Foto do animal disponível para adoção" >
                    </div>
                </div>
                <div class="info">
                    <div class="chip-nome">
                        ${nome} 
                    </div>
                    
                    <div class="dados">
                        <p>${sexo}</p>
                        <p>${idade}</p>
                        <p>${porte}</p>
                    </div>
                    
                    <span> Acesse o link:</span>
                    
                      <a class="site" href="../galeria/index.html?id=${codigo}">
                    <strong>protecaoanimal.com.br</strong>
                    </a>
                </div>

            </div>
        `;

    }
    

}

customElements.define('card-post-component', CardPostComponent);

