import React from 'react';
import propTypes from 'prop-types';
import styles from './FriendItem.module.css';

const FriendItem = ({ item }) => {
  const flagClass = item.isOnline ? styles.isOnline : styles.isOffline;

  return (
    <>
      <span className={flagClass}>{item.isOnline}</span>
      <img
        className={styles.avatar}
        src={item.avatar}
        alt={item.name}
        width="48"
      />
      <p className={styles.name}>{item.name}</p>
    </>
  );
};

FriendItem.propTypes = {
  item: propTypes.shape({
    isOnline: propTypes.bool.isRequired,
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
  }).isRequired,
};

export default FriendItem;
