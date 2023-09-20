import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';

import css from './ButtonClose.module.css';

function ButtonClose({ onClose }) {
  return (
    <div>
      <MdClose onClick={() => onClose()} className={css.buttonIcon} />
    </div>
  );
}

ButtonClose.propTypes = {
  onClose: PropTypes.func,
};

export default ButtonClose;
