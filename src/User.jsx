import React from 'react';
import './User.css'; // Import the CSS file

const User = ({ avatar, url, username, email }) => {
  return (
    <div className="user">
      <img src={avatar} alt={`${username}'s avatar`} className="avatar" />
      <div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="username">
          {username}
        </a>
        <div className="bio">
          {email}
        </div>
      </div>
    </div>
  );
};

export default User;
