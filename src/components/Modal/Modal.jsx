import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

import css from './Modal.module.css';
import ButtonClose from '../Buttons/ButtonClose';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, closeModal, shown }) => {
  const closeModalByEscape = useCallback(
    (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  const closeModalOnBackdrop = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalByEscape);

    return () => {
      window.removeEventListener('keydown', closeModalByEscape);
    };
  }, [closeModalByEscape]);

  return createPortal(
    <div className={css.backdrop} onClick={closeModalOnBackdrop}>
      <div
        id="modalContent"
        className={
          shown ? css.modalContainer : [css.modalContainer, css.modalEnterActive].join(' ')
        }
      >
        <ButtonClose className={css.close} onClose={closeModal} />
        {children}
      </div>
    </div>,

    modalRoot
  );
};

export default Modal;
