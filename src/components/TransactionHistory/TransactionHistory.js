import React from 'react';
import styles from './TransactionHistory.module.css';
import propTypes from 'prop-types';

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
        {items.length > 0 ? (
          items.map((item, idx) => {
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
          <tr>
            <td colSpan="3" className={styles.tableRow}>
              NO DATA
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
