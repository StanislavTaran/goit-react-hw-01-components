import React from 'react';
import propTypes from 'prop-types';
import styles from './Statistics.module.css';
import StatisticsItem from './StatisticsItem';

const Statistics = ({ title, stats }) => {
  const randomColor = () => {
    // eslint-disable-next-line no-bitwise
    return `#${(((1 << 24) * Math.random()) | 0).toString(16)}`;
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
            <StatisticsItem item={item} />
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
    }),
  ).isRequired,
};

export default Statistics;
