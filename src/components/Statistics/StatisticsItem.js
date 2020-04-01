import React from 'react';
import propTypes from 'prop-types';
import styles from './StatisticsItem.module.css';

const StatisticsItem = ({ item }) => (
  <>
    <span className={styles.label}>{item.label}</span>
    <span className={styles.percentage}>{`${item.percentage}%`}</span>
  </>
);

StatisticsItem.propTypes = {
  item: propTypes.shape({
    label: propTypes.string.isRequired,
    percentage: propTypes.number.isRequired,
  }).isRequired,
};

export default StatisticsItem;
