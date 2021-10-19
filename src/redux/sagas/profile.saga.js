import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchActiveUsers() {
    try{
        const userStatus = yield axios.get('/api/profile')
        console.log('user statuses', userStatus);

        yield put({ type: "PLACE_ACTIVE_USER", payload: userStatus.data })
        
    }catch( error ) {
        console.log('error in axios get profile', error);
    }
}

function* profileSaga() {
    yield takeLatest( 'FETCH_ACTIVE_USER', fetchActiveUsers );
}

export default profileSaga;