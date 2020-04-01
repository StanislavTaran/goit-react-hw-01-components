import React from 'react';
import styles from './FriendList.module.css';
// import propTypes from 'prop-types';
import Friendsitem from './Friendsitem';

const FriendList = ({ friends }) => (
  <ul className={styles.friendList}>
    <Friendsitem friends={friends} />
  </ul>
);

export default FriendList;
