import React from 'react';
import styles from './FriendItem.module.css';
import propTypes from 'prop-types';

const FriendItem = ({ friends }) =>
  friends.length > 0 ? (
    friends.map(item => {
      const flagClass = item.isOnline ? styles.isOnline : styles.isOffline;
      return (
        <li className={styles.item} key={item.id}>
          <span className={flagClass}></span>
          <img
            className={styles.avatar}
            src={item.avatar}
            alt={item.name}
            width="48"
          />
          <p className={styles.name}>{item.name}</p>
        </li>
      );
    })
  ) : (
    <li> You have no friends...</li>
  );

FriendItem.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      isOnline: propTypes.bool.isRequired,
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    }),
  ).isRequired,
};

export default FriendItem;
