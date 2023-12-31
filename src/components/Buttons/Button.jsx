import PropTypes from 'prop-types';

import css from './Button.module.css';

function Button({ text, onClick }) {
  return (
    <button className={css.button} type="button" onClick={onClick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Button;
