import PropTypes from 'prop-types';

import css from './CardConditionsItem.module.css';

function CardConditionsItem({ label, text }) {
  return (
    <li className={css.container}>
      {label && (
        <div className={css.attribute}>
          {label} : <span className={css.accent}>{text}</span>
        </div>
      )}
      {!label && <div className={css.attribute}> {text}</div>}
    </li>
  );
}

CardConditionsItem.propTypes = {
  label: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CardConditionsItem;
