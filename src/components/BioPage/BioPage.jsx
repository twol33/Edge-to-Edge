import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function BioPage(){
    const history = useHistory();
    const dispatch = useDispatch();

    const [ first_name, setFirstName ] = useState('');
    const [ last_name, setLastName ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ image_url, setImageUrl ] = useState('');
    
    const updateBio = (event) => {
        dispatch({
            type: 'UPDATE_BIO',
            payload: {
                first_name: first_name,
                last_name: last_name,
                username: username,
                password: password,
                image_url: image_url,
            },
        });
    };

    const navBack = () => {
        history.push('/')
    }

    return(
        <div>
            <button onClick = {navBack}>back</button>
            <h1>BIO PAGE</h1>
            <form>
                <input 
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={''}
                    onChange={(event) => name(params)}
                />

                <input 
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={''}
                    onChange={(event) => name(params)}
                />

                <input 
                    type='text'
                    name="username"
                    placeholder="Username"
                    value={''}
                    onChange={(event) => name(params)}
                />

                <input 
                    type='text'
                    name="password"
                    placeholder="Password"
                    value={''}
                    onChange={(event) => name(params)}
                />

                <input 
                    type='text'
                    name="url_link"
                    placeholder="Image URL"
                    value={''}
                    onChange={(event) => name(params)}
                />

                <button>Save</button>
            </form>
            
        </div>
    )
}

export default BioPage;