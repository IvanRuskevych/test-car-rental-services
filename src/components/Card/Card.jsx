import PropTypes from 'prop-types';

import css from './Card.module.css';
import addressShorten from '../../utils/addressShorten';
import CardAttribute from './CardAttribute/CardAttribute';
import CardAccessories from './CardAccessories_Conditions/CardAccessories';
import CardConditions from './CardAccessories_Conditions/CardConditions';
import Button from '../Buttons/Button';

function Card({ car }) {
  const address = addressShorten(car);

  return (
    <article className={css.cardContainer}>
      <div className={css.imageThumb}>
        <img
          className={css.image}
          src={car.img}
          alt={`${car.make} ${car.model} ${car.year} car photo`}
        />
      </div>
      <figcaption className={css.title}>
        {car.make} <span className={css.accent}>{car.model}</span>, {car.year}
      </figcaption>
      <div className={css.info}>
        <div className={css.generalInfo}>
          {/* <div className={css.title}>
						{car.make} <span className={css.accent}>{car.model}</span>,{" "}
						{car.year}
					</div> */}
          <div className={css.attributes}>
            <div className={css.attributesUpper}>
              <CardAttribute text={address[0]} />
              <CardAttribute text={address[1]} />
              <CardAttribute label="Id" text={car.id} />
              <CardAttribute label="Year" text={car.year} />
              <CardAttribute label="Type" text={car.type} />
            </div>
            <div className={css.attributesLower}></div>
            <CardAttribute label="Fuel Consumption" text={car.fuelConsumption} />
            <CardAttribute label="Engine Size" text={car.engineSize} />
          </div>
          <div className={css.description}>{car.description}</div>
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
