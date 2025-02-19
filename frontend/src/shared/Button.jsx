import PropTypes from "prop-types";

function Button({ text, className, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 rounded font-bold bg-red-600 hover:bg-red-700 text-white ${className}`}
    >
      {text}
    </button>
  );
}

// Prop Validations
Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  className: "",
  onClick: () => {},
};

export default Button;
