import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function UserPage() {

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector( store => store.user );
  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    fetchUserLocation()
  }, []);

  console.log(fetchUserLocation);

  const fetchUserLocation = () => {
    dispatch({ type: 'FETCH_LOCATION'})
  }

  // destructurinh for buttons
  const [ park, postPark ] = useState('')
  const [ freeRide, postFreeRide ] = useState('')
  const [ allMtn, postAllMtn ] = useState('')
  const [ backCountry, postBc ] = useState('')
  
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

  // dispatches for ride style buttons
  
  const postPark = (event) => {
    dispatch({ type: "SET_PARK", payload: { style: park }})
  }

  const postFreeRide = (event) => {
    dispatch({ type: 'SET_FREERIDE', payload: { style: freeRide}})
  }

  const postAllMtn = (event) => {
    dispatch({ type: 'SET_ALLMTN', payload: { style: allMtn}})
  }

  const postBc = (event) => {
    dispatch({ type: 'SET_BACKCOUNTRY', payload: { style: backCountry}})
  }

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>

      <div>
        <img/>
      </div>
      
      <div>
        {/* {resortLocation.map((location) => (
          <p>{location.resort}</p> */}
        {/* ))} */}
      </div>

      <div>
        <p>ride styles selected</p>
      </div>

      <div>
        <p>status identifier img</p>
      </div>

      
      
      <div>
        <button className='status_button' >Status</button>
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
