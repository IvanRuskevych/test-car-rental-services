import { useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

// import CloseButton from "../CloseButton/CloseButton";

import styles from './Modal.module.css';
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
    <>
      <div className={styles.backdrop} onClick={closeModalOnBackdrop}>
        <div
          id="modalContent"
          className={
            shown
              ? styles.modalContainer
              : [styles.modalContainer, styles.modalEnterActive].join(' ')
          }
        >
          <ButtonClose className={styles.close} onClose={closeModal} />
          {children}
        </div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
