import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';

import styles from './ButtonClose.module.css';

function ButtonClose({ onClose }) {
  return (
    <div>
      <MdClose onClick={() => onClose()} className={styles.buttonIcon} />
    </div>
  );
}

ButtonClose.propTypes = {
  onClose: PropTypes.func,
};

export default ButtonClose;
