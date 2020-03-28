import React from 'react';
import Profile from './Profile/Profile';
import user from '../user.json';
import Statistics from './Statistics/Statistics';
import statisticalData from '../statistical-data.json';
import friends from '../friends.json';
import FriendList from './FriendList/FriendList';
const App = () => (
  <>
    <Profile {...user} />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
  </>
);

export default App;
