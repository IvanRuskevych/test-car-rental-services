import PropTypes from 'prop-types';

import addressShorten from '../../utils/addressShorten';

import CardAttribute from './CardAttribute';
import CardAccessories from './CardAccessories';
import CardConditions from './CardConditions';
import Button from '../Buttons/Button';

import css from './Card.module.css';

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
        <div>
          <ul>
            <CardAttribute text={address[0]} />
            <CardAttribute text={address[1]} />
            <CardAttribute label="Id" text={car.id} />
            <CardAttribute label="Year" text={car.year} />
            <CardAttribute label="Type" text={car.type} />
          </ul>
          <CardAttribute label="Fuel Consumption" text={car.fuelConsumption} />
          <CardAttribute label="Engine Size" text={car.engineSize} />
        </div>
        <p>{car.description}</p>
        <CardAccessories accessories={car.accessories} />
        <CardConditions
          conditions={car.rentalConditions}
          mileage={car.mileage}
          price={car.rentalPrice}
        />
        <a href="tel:+380730000000">
          <Button text="Rental car" />
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
    // functionalities: PropTypes.arrayOf(PropTypes.string),
    rentalPrice: PropTypes.string,
    // rentalCompany: PropTypes.string,
    // address: PropTypes.string,
    rentalConditions: PropTypes.string,
    mileage: PropTypes.number,
  }),
};
export default Card;
