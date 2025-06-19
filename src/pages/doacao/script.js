const openModalButton = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const fade = document.getElementById('fade');

const toggleModal = () => {
  modal.classList.toggle('hide');
  fade.classList.toggle('hide');
};

openModalButton.addEventListener('click', toggleModal);
fade.addEventListener('click', toggleModal);
