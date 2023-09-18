import PropTypes from 'prop-types';

import styles from './CardAttribute.module.css';

function CardAttribute({ label, text }) {
  // console.log('CardAttribute: ', label, text);
  return (
    <>
      {label && (
        <li className={styles.attribute}>
          {label} : {text}
        </li>
      )}
      {!label && <li className={styles.attribute}> {text}</li>}
    </>
  );
}

CardAttribute.propTypes = {
  label: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CardAttribute;
