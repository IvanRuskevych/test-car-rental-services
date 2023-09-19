import PropTypes from 'prop-types';
import css from './ButtonLoadMore.module.css';

export default function ButtonLoadMore({ onClick }) {
  return (
    <div className={css.wrap}>
      <button className={css.button} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

ButtonLoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};
