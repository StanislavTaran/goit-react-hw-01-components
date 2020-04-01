import React from 'react';
import propTypes from 'prop-types';
import styles from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ transaction }) => (
  <>
    <td className={styles.tableCell}>{transaction.type}</td>
    <td className={styles.tableCell}>{transaction.amount}</td>
    <td className={styles.tableCell}>{transaction.currency}</td>
  </>
);

TransactionHistoryItem.propTypes = {
  transaction: propTypes.shape({
    type: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    currency: propTypes.string.isRequired,
  }).isRequired,
};

export default TransactionHistoryItem;
