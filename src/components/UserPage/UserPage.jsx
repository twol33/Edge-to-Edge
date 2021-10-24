import React, { useEffect, useState } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import useReduxStore from '../../hooks/useReduxStore';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ButtonGroup, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { lightBlue, green, orange, blueGrey, red, purple } from '@mui/material/colors';

function UserPage() {

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector( store => store.user );
  const store = useReduxStore();
  // const style = useSelector( store => store.rideStyleReducer );
  // const location = useSelector( store => store.locationReducer )
  
  console.log(store.rideStyleReducer);

  const dispatch = useDispatch();
  const history = useHistory();
  
  useEffect(() => {
    fetchUserLocation()
  }, []);

  const fetchUserLocation = () => {
    dispatch({ type: 'FETCH_LOCATION'})
  }

  // destructuring for buttons
  const [ park, postPark ] = useState('Park')
  const [ freeRide, postFreeRide ] = useState('Free Ride')
  const [ allMtn, postAllMtn ] = useState('All Mountain')
  const [ backCountry, postBc ] = useState('Back Country')
  
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
  
  const submitPark = (event) => {
    dispatch({ type: "SET_PARK", payload: { style: park }})
  }

  const submitFreeRide = (event) => {
    dispatch({ type: 'SET_FREERIDE', payload: { style: freeRide }})
  }

  const submitAllMtn = (event) => {
    dispatch({ type: 'SET_ALLMTN', payload: { style: allMtn }})
  }

  const submitBc = (event) => {
    dispatch({ type: 'SET_BACKCOUNTRY', payload: { style: backCountry }})
  }

  // dispatch for status button

  const toggleRiderStatus = (event) => {
    dispatch({ type: 'TOGGLE_STATUS', payload: user  })
    dispatch({ type: 'FETCH_USER' })
  }

  // color themes for Material ui
  
  const newblueGrey = blueGrey['A400']
  const neworange = orange[800]
  const newlightBlue = lightBlue[600]
  const newgreen = green[600];
  const newred = red['A400'];
  const newpurple = purple['A400'];

  const theme = createTheme({
    palette: {
     primary: {
        main: newblueGrey,
      },
     secondary: {
        main: newlightBlue,
      },
     error: { 
        main: neworange,
      },
     warning: { 
        main: newgreen
      },
     info: { 
        main: newred 
      },
     success: { 
        main: newpurple
      },
    },
  })

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}

      <div>
        <p><img/></p>
      </div>
      
      <div>
        {store.locationReducer && store.locationReducer.length > 0 && (
         <p>Currently At: {store.locationReducer[0].resort}</p>
        )}
        {/* {store.locationReducer.map((locations) => ( */}
          {/* <p>Currently At: {locations.resort}</p>
         ))} */}
        {/* <p>{`Ride Location: ${store.locationReducer[0].resort}`}</p> */}
      </div>

      <div>

        {/* {store.rideStyleReducer.map((styles) => (
          <p>Currently Riding: {styles.style}</p>
        ))} */}
        <p>{`Ride Style: ${store.rideStyleReducer.style}`}</p>
      </div>

      <div>
        <p>{`On Snow: ${user.is_on_snow}`}</p>
      </div>
      
      <ThemeProvider theme={theme}>
        <div>
          <Button variant='contained' color='warning' onClick= {toggleRiderStatus} >Status</Button>
        </div>
        
        <div>
          <Button variant='contained' color='primary' onClick = {goToBio}>My Info</Button>
        </div>

        <div>
          <Button variant='contained' color='secondary' onClick = {goToFriends}>Active Users</Button>
        </div>

        <div>
          <Button variant='contained' color='error' onClick = {goToWeather}>Riding Location</Button>
        </div>
      </ThemeProvider>

      {/* <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={submitPark}>Park</Button>
        <button onClick={submitFreeRide}>Free Ride</button>
        <button onClick={submitAllMtn}>All Mountain</button>
        <button onClick={submitBc}>Back Country</button>
      </ButtonGroup> */}

      <ThemeProvider theme={theme}>
        <ButtonGroup size="large" color="success" aria-label="medium secondary button group">
          <Button variant='contained' onClick={submitPark}>Park</Button>
          <Button variant='contained' onClick={submitFreeRide}>Free Ride</Button>
          <Button variant='contained' onClick={submitAllMtn}>All Mountain</Button>
          <Button variant='contained' onClick={submitBc}>Back Country</Button>
        </ButtonGroup>
      </ThemeProvider>  

      {/* <div>
        <button onClick={submitPark}>Park</button>
        <button onClick={submitFreeRide}>Free Ride</button>
        <button onClick={submitAllMtn}>All Mountain</button>
        <button onClick={submitBc}>Back Country</button>
      </div> */}

      <div>
        <LogOutButton className="btn" />
      </div>

    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
