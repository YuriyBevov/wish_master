import { addClass } from '../utils.js';

const modalState = (modal) => {

  if (modal) {
    const closeBtn = modal.querySelector('.modal__close');

    const onCloseBtnClickHandler = () => {
      addClass(modal,'closed');
    }

    const onEscBtnHandler = (evt) => {
      if (evt.keyCode === 27) {
        addClass(modal,'closed');
      }
    }

    const onMousedownHandler = (evt) => {
      const modalContent = modal.querySelector('.modal__wrapper');
      const clickArea = evt.target == modalContent || modalContent.contains(evt.target);
      if(!clickArea) {
        addClass(modal, 'closed');
      }
    }

    const openModal = () => {
      modal.classList.remove('closed');

      setTimeout(function() {
        window.addEventListener('keydown', onEscBtnHandler);
        window.addEventListener('mousedown', onMousedownHandler);
        closeBtn.addEventListener('click', onCloseBtnClickHandler);
      }, 700);
    }
    openModal();
  }
};

export {modalState};
