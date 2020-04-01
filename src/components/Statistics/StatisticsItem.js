import React from 'react';
import styles from './StatisticsItem.module.css';
import propTypes from 'prop-types';

const randomColor = () => {
  return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
};

const StatisticsItem = ({ statsItems }) =>
  statsItems.map(item => (
    <li
      className={styles.item}
      key={item.id}
      style={{ backgroundColor: randomColor() }}
    >
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}%</span>
    </li>
  ));

StatisticsItem.propTypes = {
  statsItems: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }),
  ).isRequired,
};

export default StatisticsItem;
