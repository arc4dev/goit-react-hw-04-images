import { useEffect } from 'react';
import styles from './Modal.module.css';

function Modal({ largeImage, alt, handleClick }) {
  useEffect(() => {
    window.addEventListener('keydown', closeModal);

    return () => {
      window.removeEventListener('keydown', closeModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const closeModal = e => {
    if (e.code !== 'Escape') return;

    handleClick();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} onClick={handleClick}>
        <img src={largeImage} alt={alt} />
      </div>
    </div>
  );
}

export default Modal;
