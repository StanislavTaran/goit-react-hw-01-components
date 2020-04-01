import React from 'react';
import propTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
import TransactionHistoryItem from './TransactionHistoryItem';

const TransactionHistory = ({ items }) => (
  <table className={styles.TransactionHistory}>
    <thead className={styles.tableHead}>
      <tr className={styles.tableRow}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.length > 0 ? (
        items.map((item, idx) => {
          const RowClasses = idx % 2 ? styles.greyRow : styles.whiteRow;
          return (
            <tr key={item.id} className={RowClasses}>
              <TransactionHistoryItem transaction={item} />
            </tr>
          );
        })
      ) : (
        <tr className={styles.tableRow}>
          <td colSpan="3">NO DATA</td>
        </tr>
      )}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
