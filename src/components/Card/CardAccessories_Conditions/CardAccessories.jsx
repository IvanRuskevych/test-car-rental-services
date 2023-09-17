import PropTypes from 'prop-types';

import styles from './CardAccessories_Conditions.module.css';
import CardAttribute from '../CardAttribute/CardAttribute';

function CardAccessories({ accessories }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Accessories and functionalities:</p>
      {accessories.length > 0 && (
        <ul className={styles.accs}>
          {accessories.map((item, index) => (
            <CardAttribute key={index} text={item} />
          ))}
        </ul>
      )}
      {!accessories ||
        (accessories.length === 0 && (
          <div className={styles.accs}>
            <CardAttribute text="None" />
          </div>
        ))}
    </div>
  );
}

CardAccessories.propTypes = {
  accessories: PropTypes.array,
};

export default CardAccessories;
