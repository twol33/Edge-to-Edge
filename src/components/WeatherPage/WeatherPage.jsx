import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function WeatherPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const location = useSelector( store => store.location)

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

    const fetchUserLocation = () => {
        dispatch({ 
            type: 'FETCH_LOCATION',
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
            {JSON.stringify(location)}
           {/* {location.map((locations) => (
               <div>
                   <p>{locations.resort}</p>
               </div>
           ))} */}
        </div>
    )
}

export default WeatherPage;