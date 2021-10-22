import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useReduxStore from '../../hooks/useReduxStore';

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
    )
}

export default WeatherPage;