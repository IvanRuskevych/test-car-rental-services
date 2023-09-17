import { useState } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';

import styles from './CarItem.module.css';
import addressShorten from '../../../utils/addressShorten';
import shortestInArr from '../../../utils/shortestInArr';
import CardAttribute from '../../Card/CardAttribute/CardAttribute';
import Button from '../../Buttons/Button';

function CarItem({ car, favouriteChange, openModal }) {
  const [favourite, setFavourite] = useState(car.favourite);

  const address = addressShorten(car);
  const shortestFunctionality = shortestInArr(car.functionalities);

  const handleFavourite = () => {
    setFavourite(!favourite);
    favouriteChange(car);
  };

  return (
    <li className={styles.container}>
      <div>
        <div className={styles.imgContainer}>
          {!favourite && (
            <MdOutlineFavoriteBorder onClick={() => handleFavourite()} className={styles.icon} />
          )}

          {favourite && (
            <MdOutlineFavorite
              onClick={() => handleFavourite()}
              className={[styles.icon, styles.favourite].join(' ')}
            />
          )}

          <img
            className={styles.image}
            src={car.img}
            alt={`${car.make} ${car.model} ${car.year} car photo`}
          />
        </div>

        <div className={styles.titleContainer}>
          <p>
            {car.make} <span className={styles.accent}>{car.model}</span>, {car.year}
          </p>
          <p>{car.rentalPrice}</p>
        </div>

        <ul className={styles.attributesContainer}>
          <li>
            <CardAttribute text={address[0]} />
            <CardAttribute text={address[1]} />
            <CardAttribute text={car.rentalCompany} />
          </li>

          <li>
            <CardAttribute text={car.type} />
            <CardAttribute text={car.model} />
            <CardAttribute text={car.id} />
            <CardAttribute text={shortestFunctionality} />
          </li>
        </ul>
      </div>

      <Button
        text="Learn more ..."
        onClick={() => {
          openModal(car);
        }}
      />
    </li>
  );
}

CarItem.propTypes = {
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
    accessories: PropTypes.array,
    functionalities: PropTypes.array,
    rentalPrice: PropTypes.string,
    rentalCompany: PropTypes.string,
    address: PropTypes.string,
    rentalConditions: PropTypes.string,
    mileage: PropTypes.number,
    favourite: PropTypes.bool,
  }),
  favouriteChange: PropTypes.func,
  openModal: PropTypes.func,
};
export default CarItem;
