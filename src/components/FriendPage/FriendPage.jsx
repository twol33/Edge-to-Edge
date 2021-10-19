import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function FriendPage() {
    const history = useHistory();
    const user = useSelector( store => store.user )

    const navBack = () => {
        history.push('/');
    }
    return(
        <div>
            <button onClick = {navBack}>back</button>
            <h1>Friends</h1>
            {JSON.stringify(user)}
        </div>
    )
}

export default FriendPage;