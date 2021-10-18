import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function WeatherPage() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [ state, setRideState ] = useState('');
    const [ resort, setResort ] = useState('');

    const updateLocation = () => {
        dispatch({
            type: 'SET_LOCATION',
            payload: {
                state: state,
                resort: resort,
            }
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
        </div>
    )
}

export default WeatherPage;