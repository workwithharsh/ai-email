import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function LinkButton({ text, className, to }) {
  return (
    <Link
      to={to}
      className={`inline-block py-2 px-4 rounded font-bold mt-6 bg-red-600 hover:bg-red-700 text-white ${className}`}
    >
      {text}
    </Link>
  );
}

// Prop Validations
LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
};

LinkButton.defaultProps = {
  className: "",
};

export default LinkButton;
