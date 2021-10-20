import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useEffect } from 'react';

function FriendPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const store = useReduxStore();

    useEffect(() => {
        fetchActiveUsers();
    }, []);

    const fetchActiveUsers = (activeUser) => {
        dispatch({ type: 'FETCH_ACTIVE_USER', payload: activeUser})
    }

    const navBack = () => {
        history.push('/');
    }
    return(
        <div>
            <button onClick = {navBack}>back</button>
            <h1>Friends</h1>
            {JSON.stringify(store.profileReducer)}
        </div>
    )
}

export default FriendPage;