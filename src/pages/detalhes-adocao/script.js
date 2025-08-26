let galery = document.querySelector(".galery")
const openModal = document.querySelector('.mobile-menu')
const modal = document.querySelector('#modal')
const fade = document.querySelector('#fade')

function listarAnimaisAxios() {
    axios.get("http://localhost:3001/api/animais")
        .then(response => {
            const animais = response.data;
            listarAnimais(animais);
            return animais;
        })
        .catch(error => {
            console.error("Falha ao carregar json:", error);
        });    
}
listarAnimaisAxios()

function listarAnimais(animais) {
    for(let k = 0; k < animais.data.length; k++){
        var animal = animais.data[k];
        criarCards(animal);
    }
}

function criarCards(animal) {
    const foto = animal.fotos && animal.fotos.length > 0 ? animal.fotos[0] : 
    "https://thumbs.dreamstime.com/b/no-image-available-icon-vector-illustration-flat-design-140476186.jpg";

    galery.innerHTML += `
    <div style="
        background:#fff;
        border-radius:12px;
        overflow:hidden;
        box-shadow:0 4px 12px rgba(0,0,0,0.15);
        width:100%;
        max-width:250px;
        display:flex;
        flex-direction:column;
        transition:transform 0.2s ease, box-shadow 0.2s ease;
        margin:auto;
    "
    onmouseover="this.style.transform='translateY(-6px)';this.style.boxShadow='0 8px 20px rgba(0,0,0,0.2)'"
    onmouseout="this.style.transform='none';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)'"
    >
        <img src="${foto}" alt="animal-photo" style="
            width:100%;
            height:200px;
            object-fit:cover;
        ">

        <p style="
            font-size:16px;
            font-weight:bold;
            color:#2196f3;
            margin:10px 0 4px 0;
            text-align:center;
        ">${animal.nome}</p>

        <p style="
            font-size:14px;
            color:#555;
            margin-bottom:12px;
            text-align:center;
        ">${animal.local}</p>
    </div>
    `;
}

// aplica estilo ao container também
Object.assign(galery.style, {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px",
    padding: "20px",
    justifyItems: "center"
});

//function para abrir o modal
const toggleModal = () => {
    modal.classList.toggle('hide')
    fade.classList.toggle('hide')
}

openModal.addEventListener('click', toggleModal)
fade.addEventListener('click',toggleModal)

function selectPage(event){
    const pages = document.querySelectorAll('.pagination span')
    pages.forEach((page) => {
        page.classList.remove('active')
    })  
    event.target.classList.add('active')
}

function clickLeft() {


}

function clickRight() {

    
}