import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* setRideStyle(action) {
    try{
        yield axios.post('/api/status', action.payload)
        yield put({ type: 'GET_LOCATION' })
    } catch ( error ) {
        console.log('error in setting user ride style');
        
    }
}

function* statusSaga() {
    yield takeLatest( 'SET_LOCATION', setRideStyle);
}

export default statusSaga;