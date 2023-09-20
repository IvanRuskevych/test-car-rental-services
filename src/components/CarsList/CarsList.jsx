import PropTypes from 'prop-types';

import css from './CarsList.module.css';
import CarItem from './CarItem/CarItem';

function CarsList({ cars, favouriteChange, openModal }) {
  return (
    <ul className={css.container}>
      {cars.map((car) => (
        <CarItem car={car} key={car.id} openModal={openModal} favouriteChange={favouriteChange} />
      ))}
    </ul>
  );
}

CarsList.propTypes = {
  cars: PropTypes.array,
  favouriteChange: PropTypes.func,
  openModal: PropTypes.func,
};

export default CarsList;
