import React from 'react';

function Profile(items) {
  return (
    <div class="profile">
      <div class="description">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          alt="User avatar"
          class="avatar"
        />{items.avatar}
        <p class="name">{items.name}</p>
        <p class="tag">{items.tag}</p>
        <p class="location">{items.location}</p>
      </div>

      <ul class="stats">{items.stats}
        <li>
          <span class="label">Followers</span>
          <span class="quantity">1000</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">2000</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;
