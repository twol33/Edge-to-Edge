import { useHistory } from 'react-router-dom'

function FriendPage() {
    const history = useHistory();

    const navBack = () => {
        history.push('/');
    }
    return(
        <div>
            <button onClick = {navBack}>back</button>
            <h1>Friends</h1>
        </div>
    )
}

export default FriendPage;