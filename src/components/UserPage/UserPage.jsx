import React, { useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function UserPage() {
  const [ toggleSwitch, setStatus ] = useState( true );
  const [ toggleParkStyle, setParkStyle ] = useState( true );
  const [ toggleFreeRideStyle, setFreeRideStyle ] = useState( true );
  const [ toggleAllMtnStyle, setAllMtnStyle ] = useState( true );
  const [ toggleBCStyle, setBCStyle ] = useState( true );

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);

  // button to toggle status
  const toggleStatus = () => {
    console.log('clicked status button');
    setStatus(!toggleSwitch)
  }

  // toggle ride style buttons
  const toggleParkRideStyle = () => {
    setParkStyle(!toggleParkStyle)
    console.log('clicked park button');
  }

  const toggleFreeRideRideStyle = () => {
    setFreeRideStyle(!toggleFreeRideStyle)
    console.log('clicked freeride button');
  }
  
  const toggleAllMtnRideStyle = () => {
    setAllMtnStyle(!toggleAllMtnStyle)
    console.log('clicked All Mtn button');
  }

  const toggleBCRideStyle = () => { 
    setBCStyle(!toggleBCStyle)
    console.log('clicked Back Country button');
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

  // const makeRed = () => {
  //   $('status_button').css('color', 'red');
  // }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

      <div>
        <img/>
      </div>
      
      <div>
        <p>resort location</p>
      </div>

      <div>
        <p>ride styles selected</p>
      </div>

      <div>
        <p>status identifier img</p>
      </div>

      
      
      <div>
        <button className='status_button' onClick={toggleStatus}>Status</button>
      </div>
      
      <div>
        <button onClick = {goToBio}>Bio</button>
      </div>

      <div>
        <button onClick = {goToFriends}>Friends</button>
      </div>

      <div>
        <button onClick = {goToWeather}>Riding Location</button>
      </div>

      <div>
        <button onClick={toggleParkRideStyle}>Park</button>
        <button onClick={toggleFreeRideRideStyle}>Free Ride</button>
        <button onClick={toggleAllMtnRideStyle}>All Mountain</button>
        <button onClick={toggleBCRideStyle}>Back Country</button>
      </div>

      <div>
        <LogOutButton className="btn" />
      </div>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
