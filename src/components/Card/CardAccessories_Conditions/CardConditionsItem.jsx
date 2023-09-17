import PropTypes from "prop-types";

import styles from "./CardConditionsItem.module.css";

function CardConditionsItem({ label, text }) {
	return (
		<li className={styles.container}>
			{label && (
				<div className={styles.attribute}>
					{label} : <span className={styles.accent}>{text}</span>
				</div>
			)}
			{!label && <div className={styles.attribute}> {text}</div>}
		</li>
	);
}

CardConditionsItem.propTypes = {
	label: PropTypes.string,
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CardConditionsItem;
