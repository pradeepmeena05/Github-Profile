import React, { useState } from 'react';

import User from './User';
import './App.css'

const API_URL = "https://api.github.com";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [profiles, setProfiles] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    fetchProfiles();
  };

  const fetchProfiles = () => {
    fetch(`${API_URL}/search/users?q=${searchTerm}`)
      .then((res) => res.json())
      .then((data) => {
        setProfiles(data.items || []);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Enter Profile"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <input type="submit" value="Search" />
      </form>
      <div>
        {profiles.map((user) => (
          <User
            key={user.login}
            avatar={user.avatar_url}
            url={user.html_url}
            username={user.login}
           
          />
        ))}
      </div>
    </div>
  );
};




export default App;
