const modal = document.querySelector('.backdrop');
// const modalBtnOpen = document.querySelector('.modal-btn-open');

const modalBtnOpen1 = document.querySelector('.header__button.button.modal-btn-open');
const modalBtnOpen2 = document.querySelector('.header-section__button.button.modal-btn-open');

const modalBtnClose = document.querySelector('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

// modalBtnOpen.addEventListener('click', toggleModal);
modalBtnOpen1.addEventListener('click', toggleModal);
modalBtnOpen2.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);