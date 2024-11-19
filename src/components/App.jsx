import React from 'react';
import Profile from './Profile';
import Statistics from './Statistics';
import data from './data.json';
import FriendList from './FriendList';
import friends from './friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from './transactions.json';

function App() {
  const user = {
    username: 'Jacques Gluke',
    tag: 'jgluke',
    location: 'Ocho Rios, Jamaica',
    avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
    stats: {
      followers: 5603,
      views: 4827,
      likes: 1308,
    },
  };
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;
