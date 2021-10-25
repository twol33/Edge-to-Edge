import './WeatherPage.css'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useReduxStore from '../../hooks/useReduxStore';

// imports from material ui
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material';
import { green, red } from '@mui/material/colors';

function WeatherPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const store = useReduxStore();

    console.log(store.locationReducer);

    const [ state, setRideState ] = useState('');
    const [ resort, setResort ] = useState('');

    useEffect(() => {
        fetchUserLocation();
    }, []);

    //  dispatches to the reducers
    const updateLocation = () => {
        dispatch({
            type: 'SET_LOCATION',
            payload: {
                state: state,
                resort: resort,
            }
        })
    }

    const fetchUserLocation = (resorts) => {
        dispatch({ 
            type: 'FETCH_LOCATION', payload: resorts
        })
      }

    //  navigation for buttons 
    const navBack = () => {
        history.push('/');
    }

    // material ui colors
    const newgreen = green[600];
    const newred = red['A200'];

    const locationTheme = createTheme({
        palette: {
            primary:{
                main: newgreen
            },
            secondary:{
                main: newred
            },
        },
    })
    return(
        <ThemeProvider theme={locationTheme}>
        <div>
            <Button variant='contained' color='secondary' onClick = { navBack }>Back</Button>
            <h1 id='location-header'>Riding Location</h1>

            <form onSubmit = { updateLocation }>
                <input 
                    id='input-state'
                    type='text'
                    name='state'
                    placeholder='State'
                    value={state}
                    onChange={(event) => setRideState( event.target.value )}
                />

                <input 
                    id='input-resort'
                    type='text'
                    name='resort'
                    placeholder='Resort Name'
                    value={resort}
                    onChange={(event) => setResort( event.target.value )}
                />

                <button className='save-button' variant='contained' color='primary'>SAVE</button>
                    
            </form>

            <table className='location-table'>
                <thead>
                <tr>
                    <th>Location</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                    {store.locationReducer.map((locations) => (
                        <tr>
                            <td>{locations.resort}</td>
                            <td>{locations.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
        </ThemeProvider>
    )
}

export default WeatherPage;