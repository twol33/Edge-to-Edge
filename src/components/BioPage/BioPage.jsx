import React, { useEffect } from 'react';
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
    
    const user = useSelector( store => store.user )

    const updateBio = (event) => {
        dispatch({
            type: 'SET_BIO',
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
            <form onSubmit = { updateBio }>
                <input 
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    value={first_name}
                    onChange={(event) => setFirstName( event.target.value )}
                />

                <input 
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    value={last_name}
                    onChange={(event) => setLastName( event.target.value )}
                />

                <input 
                    type='text'
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(event) => setUsername( event.target.value )}
                />

                <input 
                    type='text'
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword( event.target.value )}
                />

                <input 
                    type='text'
                    name="url_link"
                    placeholder="Image URL"
                    value={image_url}
                    onChange={(event) => setImageUrl( event.target.value )}
                />

                <button>Save</button>
            </form>
        

            <p>{user.username} {user.password} {user.first_name} {user.last_name} {user.image_url}</p>
            
        </div>
    )
}

export default BioPage;