export const Button = ({ text = '', handleClick }) => {
  return (
    <button onClick={handleClick} className="Button" type="button">
      {text}
    </button>
  );
};
