import React from 'react';
import Profile from './Profile';
import PropTypes from 'prop-types';

function App() {
  const user = {
      "username": "Jacques Gluke",
      "tag": "jgluke",
      "location": "Ocho Rios, Jamaica",
      "avatar": "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
      "stats": {
        "followers": 5603,
        "views": 4827,
        "likes": 1308
      }
  }
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile username={items.name} tag={items.tag} location={items.location} avatar={items.avatar} stats={items.stats}/>
    </div>
  );
}

export default App;
console.log(PropTypes);
