// Requisição Usando Axios
function listarAnimaisAxios() {
    axios.get("http://localhost:3001/api/animais")
        .then(response => {
            const animais = response.data;
            listaAnimal(animais);
            return animais;
        })
        .catch(error => {
            console.error("Falha ao carregar json:", error);
        });    
}
listarAnimaisAxios()


function listaAnimal(listaAnimais){
    for(let k = 0; k < listaAnimais.data.length; k++){
        var animal = listaAnimais.data[k]
        this.cardAnimal(animal);
    }
}

//card animal
function cardAnimal(animal){
    var galeria = document.querySelector(".lista");
     galeria.innerHTML+=`     
        <div style="width: 300px; border: 1px solid #ccc; border-radius: 8px; box-shadow: 2px 2px 8px rgba(0,0,0,0.1); padding: 16px; margin: 20px auto; font-family: Arial, sans-serif;">
            <img style="display: block; width: 100%;" src="${animal.fotos[0]}" alt="Imagem do Google Drive">
            <h2 style="margin: 10px 0 5px;">Nome: ${animal.nome}</h2>
            <p style="margin: 5px 0;">Espécie: ${animal.nome}</p>
            <p style="margin: 5px 0;">Obs: ${animal.observacoes}</p>
        </div>
     `;
}
