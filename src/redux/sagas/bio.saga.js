import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchBio() {
    try{
        const bioResponse = yield axios.get('/')
        yield put({ type: 'SET_BIO', payload: bioResponse.data })
    } catch ( error ) {
        console.log('error in fetcBio');
        alert('Unable to fetch bio data')        
    }
}

function* bioSaga() {
    yield takeLatest( 'GET_BIO', fetchBio )
}

export default bioSaga;