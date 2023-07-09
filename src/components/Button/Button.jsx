import styles from './Button.module.css';

export const Button = ({ text = '', handleClick }) => {
  return (
    <button onClick={handleClick} className={styles.button} type="button">
      {text}
    </button>
  );
};
