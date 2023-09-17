import PropTypes from 'prop-types';

import styles from './CardAccessories_Conditions.module.css';
import stringToArray from '../../../utils/stringToArrray';
import CardConditionsItem from './CardConditionsItem';

function CardConditions({ conditions, mileage, price }) {
  const conditionsArray = conditions.split('\n');

  return (
    <div className={styles.container}>
      <p className={styles.title}>Rental Conditions: </p>
      {conditionsArray.length > 0 && (
        <ul className={styles.accs}>
          {conditionsArray.map((item, index) => {
            const containsColumn = item.includes(':');

            if (containsColumn) {
              const itemArr = stringToArray(item);

              return <CardConditionsItem key={index} label={itemArr[0]} text={itemArr[1]} />;
            } else {
              return <CardConditionsItem key={index} text={item} />;
            }
          })}
        </ul>
      )}

      <div className={styles.accs}>
        <CardConditionsItem label="Mileage" text={mileage.toLocaleString()} />
        <CardConditionsItem label="Price" text={price.substring(1) + '$'} />
      </div>
    </div>
  );
}

CardConditions.propTypes = {
  conditions: PropTypes.string,
  mileage: PropTypes.number,
  price: PropTypes.string,
};

export default CardConditions;
