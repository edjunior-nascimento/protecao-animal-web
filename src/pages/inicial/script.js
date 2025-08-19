
function loadGalery(){
    axios.get("http://localhost:3001/api/galeria")
        .then(response => {
            const album = response.data;
            listaAlbum(album);
            return album;
        })
        .catch(error => {
            console.error("Falha ao carregar json:", error);
        })

}
loadGalery()

function listaAlbum(albumAnimal){

   for(let k = 0; k < 3; k++){
        var galeria = albumAnimal.data[k]
        this.cardAlbum(galeria);
    }

}

function cardAlbum(album){
    var galeria = document.querySelector(".fotos");
     galeria.innerHTML+=`     
     <div class="foto">
        <img src="${album.fotos[0]}" alt="Feira de adoção">
        <p>${album.nome}</p>
      </div>
     `;
}
