import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* toggleStatus() {
    try{
        yield axios.put('/api/status', action.payload )
        yield put({ type: 'SET_STATUS' })
    }catch ( error ) {
        console.log('error in toggle status', error);
    }
}

function* statusSaga(){
    yield takeLatest( 'TOGGLE_STATUS', toggleStatus);
}

export default statusSaga;