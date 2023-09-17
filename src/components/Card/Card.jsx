import PropTypes from 'prop-types';

import styles from './Card.module.css';
import addressShorten from '../../utils/addressShorten';
import CardAttribute from './CardAttribute/CardAttribute';
import CardAccessories from './CardAccessories_Conditions/CardAccessories';
import CardConditions from './CardAccessories_Conditions/CardConditions';
import Button from '../Buttons/Button';

function Card({ car }) {
  const address = addressShorten(car);
  return (
    <article className={styles.cardContainer}>
      <figure>
        <div className={styles.imageThumb}>
          <img
            className={styles.image}
            src={car.img}
            alt={`${car.make} ${car.model} ${car.year} car photo`}
          />
        </div>
        <figcaption className={styles.title}>
          {car.make} <span className={styles.accent}>{car.model}</span>, {car.year}
        </figcaption>
      </figure>
      <div className={styles.info}>
        <div className={styles.generalInfo}>
          {/* <div className={styles.title}>
						{car.make} <span className={styles.accent}>{car.model}</span>,{" "}
						{car.year}
					</div> */}
          <div className={styles.attributes}>
            <div className={styles.attributesUpper}>
              <CardAttribute text={address[0]} />
              <CardAttribute text={address[1]} />
              <CardAttribute label="Id" text={car.id} />
              <CardAttribute label="Year" text={car.year} />
              <CardAttribute label="Type" text={car.type} />
            </div>
            <div className={styles.attributesLower}></div>
            <CardAttribute label="Fuel Consumption" text={car.fuelConsumption} />
            <CardAttribute label="Engine Size" text={car.engineSize} />
          </div>
          <div className={styles.description}>{car.description}</div>
        </div>
        <CardAccessories accessories={car.accessories} />
        <CardConditions
          conditions={car.rentalConditions}
          mileage={car.mileage}
          price={car.rentalPrice}
        />
        <a href="tel:+380730000000">
          <Button text="Rent a car" />
        </a>
      </div>
    </article>
  );
}

Card.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.string,
    year: PropTypes.number,
    make: PropTypes.string,
    model: PropTypes.string,
    type: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    fuelConsumption: PropTypes.string,
    engineSize: PropTypes.string,
    accessories: PropTypes.arrayOf(PropTypes.string),
    functionalities: PropTypes.arrayOf(PropTypes.string),
    rentalPrice: PropTypes.string,
    rentalCompany: PropTypes.string,
    address: PropTypes.string,
    rentalConditions: PropTypes.string,
    mileage: PropTypes.number,
  }),
};
export default Card;
