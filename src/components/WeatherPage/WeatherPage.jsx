import { useHistory } from 'react-router-dom'
function WeatherPage() {
    const history = useHistory();

    const navBack = () => {
        history.push('/');
    }
    return(
        <div>
            <button onClick = {navBack}>back</button>
            <h1>Weather</h1>
        </div>
    )
}

export default WeatherPage;