import React from 'react';
import styles from './TransactionHistoryItem.module.css';
import propTypes from 'prop-types';

const TransactionHistoryItem = ({ transactions }) =>
  transactions.length > 0 ? (
    transactions.map((item, idx) => {
      const RowClasses = idx % 2 ? styles.greyRow : styles.whiteRow;
      return (
        <tr key={item.id} className={RowClasses}>
          <td className={styles.tableCell}>{item.type}</td>
          <td className={styles.tableCell}>{item.amount}</td>
          <td className={styles.tableCell}>{item.currency}</td>
        </tr>
      );
    })
  ) : (
    <tr className={styles.tableRow}>
      <td colSpan="3">NO DATA</td>
    </tr>
  );

TransactionHistoryItem.propTypes = {
  transactions: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistoryItem;
