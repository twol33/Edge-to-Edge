import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* setLocation(action) {
    try{
        yield axios.post('/api/location', action.payload)
        yield put({ type: 'GET_LOCATION' })
    } catch (error) {
        console.log('error in setting Location', error );
        
    }
}

function* fetchLocation() {
    try{
        const userLocations = yield axios.get('/api/location')
        console.log('locations', userLocations);
        
        yield put({ type: 'PLACE_LOCATION', payload: userLocations.data })
    } catch ( error ) {
    console.log('error in getting location information', error);
    }
}

function* locationSaga() {
    yield takeLatest( 'SET_LOCATION', setLocation);
    yield takeLatest( 'FETCH_LOCATION', fetchLocation);
}
export default locationSaga;