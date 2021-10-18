import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* setLocation() {
    try{
        yield axios.put({ type: 'SET_LOCATION' })
    } catch (error) {
        console.log('error in setting Location', error );
        
    }
}

function* locationSaga() {
    yield takeLatest( 'SET_USER_LOCATION', setLocation);
}
export default locationSaga;