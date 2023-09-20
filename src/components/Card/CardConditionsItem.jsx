import PropTypes from 'prop-types';

import css from './CardConditionsItem.module.css';

function CardConditionsItem({ label, text }) {
  return (
    <li className={css.container}>
      {label && (
        <p className={css.attribute}>
          {label} : <span className={css.accent}>{text}</span>
        </p>
      )}
      {!label && <p className={css.attribute}> {text}</p>}
    </li>
  );
}

CardConditionsItem.propTypes = {
  label: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CardConditionsItem;
