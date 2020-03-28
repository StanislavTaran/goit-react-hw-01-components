import React from 'react';
import styles from './Statistics.module.css';
import propTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  const randomColor = () => {
    return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  };
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {stats.map(item => (
          <li
            className={styles.item}
            key={item.id}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string.isRequired,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
