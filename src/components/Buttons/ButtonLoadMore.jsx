import PropTypes from 'prop-types';

import styles from './ButtonLoadMore.module.css';

function ButtonLoadMore({
  // children,
  //   text,
  onClick,
}) {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {/* {children} */}
    </button>
  );
}

ButtonLoadMore.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};

export default ButtonLoadMore;
