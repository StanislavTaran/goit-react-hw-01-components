import React from 'react';
import styles from './Statistics.module.css';
import propTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        <StatisticsItem statsItems={stats} />
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string.isRequired,
};

export default Statistics;
