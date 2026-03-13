export class PataComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['text', 'img', 'size'];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const texto = this.getAttribute('text') || '';
    const img = this.getAttribute('img') || '';
    const size = this.getAttribute('size') || '220';

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          cursor: pointer;
          transition: transform .25s ease;
        }

        :host(:hover) {
          transform: scale(1.08);
        }

        .pata {
          width: ${size}px;
          height: ${size * 1.05}px;
          background-image: url('${img}');
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          font-family: 'Jockey One', sans-serif;
        }

        .texto {
          position: absolute;
          bottom: 28%;
          width: 65%;
          text-align: center;
          color: #fff;
          font-size: 1.4rem;
          line-height: 1.1;
          pointer-events: none;
          word-break: break-word;
          text-shadow: 0 2px 6px rgba(0,0,0,.4);
        }
      </style>

      <div class="pata">
        <div class="texto">${texto}</div>
      </div>
    `;
  }
}

if (!customElements.get('pata-component')) {
  customElements.define('pata-component', PataComponent);
}