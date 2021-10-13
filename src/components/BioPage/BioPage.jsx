import { useHistory } from 'react-router-dom'

function BioPage(){
    const history = useHistory();

    const navBack = () => {
        history.push('/')
    }

    return(
        <div>
            <button onClick = {navBack}>back</button>
            <h1>BIO PAGE</h1>
            
        </div>
    )
}

export default BioPage;