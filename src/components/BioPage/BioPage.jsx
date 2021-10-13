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
            <form>
                <input />
                <input />
                <input />
                <input />
                <input />
                
            </form>
            
        </div>
    )
}

export default BioPage;