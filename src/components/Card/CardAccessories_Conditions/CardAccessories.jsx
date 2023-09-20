import PropTypes from 'prop-types';

import css from './CardAccessories_Conditions.module.css';
import CardAttribute from '../CardAttribute/CardAttribute';

function CardAccessories({ accessories }) {
  return (
    <div className={css.container}>
      <p className={css.title}>Accessories and functionalities:</p>
      {accessories.length > 0 && (
        <ul className={css.accs}>
          {accessories.map((item, index) => (
            <CardAttribute key={index} text={item} />
          ))}
        </ul>
      )}
      {!accessories ||
        (accessories.length === 0 && (
          <div className={css.accs}>
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
