// ...existing code...
export class CardDoacaoComponent extends HTMLElement {
  static get observedAttributes() {
    return ["valor", "descricao", "icone"];
  }

  connectedCallback() {
    this.style.display = "block";
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const valor = this.getAttribute("valor") || "";
    const descricao = this.getAttribute("descricao") || "";
    const icone =
      this.getAttribute("icone") || "../../../assets/images/icone_doacao.png";

    this.innerHTML = `
      <div class="box">
        <div class="card-primary">
          <img src="${icone}" alt="Ícone de doação" />
          <h4 class="card-title">Doando R$ ${valor}</h4>
        </div>
        <div>
          <p class="card-description">${descricao}</p>
        </div>
      </div>
    `;
  }
}

if (!customElements.get("card-doacao")) {
  customElements.define("card-doacao", CardDoacaoComponent);
}
// ...existing code...