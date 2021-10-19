import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useReduxStore from '../../hooks/useReduxStore';

function WeatherPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const store = useReduxStore();

    const [ state, setRideState ] = useState('');
    const [ resort, setResort ] = useState('');

    useEffect(() => {
        fetchUserLocation();
    }, []);

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

    const navBack = () => {
        history.push('/');

    }
    return(
        <div>
            <button onClick = { navBack }>back</button>
            <h1>Riding Location</h1>
            <form onSubmit = { updateLocation }>
                <input 
                    type='text'
                    name='state'
                    placeholder='State'
                    value={state}
                    onChange={(event) => setRideState( event.target.value )}
                />

                <input 
                    type='text'
                    name='resort'
                    placeholder='Resort Name'
                    value={resort}
                    onChange={(event) => setResort( event.target.value )}
                />

                <button>Save</button>
                    
            </form>

            <table>

            </table>
            {JSON.stringify(store.locationReducer)}

        </div>
    )
}

export default WeatherPage;