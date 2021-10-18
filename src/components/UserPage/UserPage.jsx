import React, { useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function UserPage() {
  const [ toggleSwitch, setStatus ] = useState( true )

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  // button to toggle status
  const toggleStatus = () =>{
    console.log('clicked status button');
    setStatus(!toggleSwitch)
  }

  const history = useHistory();
  //these functions will navigate user to appropriate pages
  const goToBio = () => {
    history.push('/bio')
  }

  const goToWeather = () => {
    history.push('/weather')
  }

  const goToFriends = () => {
    history.push('/friend')
  }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      
      <div>
        <button onClick={toggleStatus}>Status</button>
      </div>
      
      <div>
        <button onClick = {goToBio}>Bio</button>
      </div>

      <div>
        <button onClick = {goToFriends}>Friends</button>
      </div>

      <div>
        <button onClick = {goToWeather}>Weather</button>
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
