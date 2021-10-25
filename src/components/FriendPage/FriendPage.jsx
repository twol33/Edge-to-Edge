import './FriendPage.css'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import useReduxStore from '../../hooks/useReduxStore';
import { useEffect } from 'react';

// imports from material ui
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@emotion/react';
import { Button } from '@mui/material';
import { green, red } from '@mui/material/colors';

function FriendPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const store = useReduxStore();
    // const profile = useSelector( store => store.profileReducer )
    console.log('this is the profile reducer', store.profileReducer);
    console.log('this is the infor from profile reducer', store.profileReducer);
   

    useEffect(() => {
        fetchActiveUsers();
    }, []);

    const fetchActiveUsers = (activeUser) => {
        dispatch({ type: 'FETCH_ACTIVE_USER', payload: activeUser})
    }

    const navBack = () => {
        history.push('/');
    }

    // material ui colors
    const newgreen = green[600];
    const newred = red['A200'];

    const friendsTheme = createTheme({
        palette: {
            primary:{
                main: newgreen
            },
            secondary:{
                main: newred
            },
        },
    })
    
    return(
        <ThemeProvider theme={friendsTheme}>
        <div>
            <Button variant='contained' color='secondary' onClick = {navBack}>back</Button>
            <h1 id='page-header'>Community</h1>
            <table className='active-user-table'>
                <thead>
                <tr>
                    <th>Active Users</th>
                    <th>State</th>
                    <th>Resort</th>
                    <th>Style</th>
                </tr>
                </thead>
                <tbody>
                        {store.profileReducer.map((profiles) => (
                            <tr>
                                <td>{profiles.username}</td>
                                <td>{profiles.state}</td>
                                <td>{profiles.resort}</td>
                                <td>{profiles.style}</td>
                            </tr>
                        ))}
                        {/* {store.profileReducer && store.profileReducer.length > 0 && (
                            <tr>
                            <td>{store.profileReducer.username}</td>
                            <td></td>
                        </tr>
                        )} */}
                </tbody>
            </table>
        </div>
        </ThemeProvider>
    )
}

export default FriendPage;