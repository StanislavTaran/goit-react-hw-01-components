import React from 'react';
import styles from './TransactionHistory.module.css';
// import propTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.TransactionHistory}>
      <thead className={styles.tableHead}>
        <tr className={styles.tableRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <TransactionHistoryItem transactions={items} />
      </tbody>
    </table>
  );
};

export default TransactionHistory;
