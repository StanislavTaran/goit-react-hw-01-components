import React from 'react';
import propTypes from 'prop-types';
import styles from './FriendList.module.css';
import Friendsitem from './Friendsitem';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    {friends.length > 0 ? (
      friends.map(item => (
        <li className={styles.item} key={item.id}>
          <Friendsitem item={item} />
        </li>
      ))
    ) : (
      <li> You have no friends...</li>
    )}
  </ul>
);

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;
