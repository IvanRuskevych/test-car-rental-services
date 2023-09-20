import PropTypes from 'prop-types';

import css from './CardAttribute.module.css';

function CardAttribute({ label, text }) {
  return (
    <>
      {label && (
        <li className={css.attribute}>
          {label} : {text}
        </li>
      )}
      {!label && <li className={css.attribute}> {text}</li>}
    </>
  );
}

CardAttribute.propTypes = {
  label: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CardAttribute;
