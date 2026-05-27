import { CabecalhoComponente } from '../../components/cabecalho.componente.js';
import { CardDoacaoComponent } from '../../components/card.doacao.componente .js';
import { RodapeComponent } from '../../components/rodape.component.js';
const openBtn = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const fade = document.getElementById('fade');

// Função para abrir e fechar modal
function toggleModal() {
  modal.classList.toggle('show');
  fade.classList.toggle('show');
}

// Abrir modal
openBtn.addEventListener('click', toggleModal);

// Fechar modal ao clicar fora
fade.addEventListener('click', toggleModal);
