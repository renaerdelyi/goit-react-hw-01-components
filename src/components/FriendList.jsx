import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FrinedListItem';
import './FriendList.css';

function FriendList({friends}) {
  return (
    <ul class="friend-list">
        {friends.map(({id, avatar, name, isOnline}) => (
            <FriendListItem 
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            />
        ))}
 
</ul>
  );
}

FriendList.prototype = {
    friends: PropTypes.arrayOf(
    PropTypes.shape({
        id:PropTypes.number.isRequired,
        avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline:PropTypes.bool.isRequired,
})
    ).isRequired,
};

export default FriendList;