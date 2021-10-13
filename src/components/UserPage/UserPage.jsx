import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      
      <div>
        <button>Status</button>
      </div>
      
      <div>
        <button>Bio</button>
      </div>

      <div>
        <button>Friends</button>
      </div>

      <div>
        <button>Weather</button>
      </div>

      <div>
        <button>Park</button>
        <button>Free Ride</button>
        <button>All Mountain</button>
        <button>Back Country</button>
      </div>

      <div>
        <LogOutButton className="btn" />
      </div>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
