import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* toggleStatus(action) {
    let userInfo = action.payload
    console.log(userInfo);
    if( userInfo.is_on_snow === true ) {
        console.log('on snow');
        
        try{
            yield axios.put(`/api/status/${userInfo.id}`, { params: false })
            yield put({ type: 'SET_STATUS' })
        }catch ( error ) {
            console.log('error in toggle status', error);
        }
    }else {
        console.log('off snow');
        
        try{
            yield axios.put(`/api/status/${userInfo.id}`, { params: true })
            yield put({ type: 'SET_STATUS' })
        }catch ( error ) {
            console.log('error in toggle status', error);
        }
    }
}


function* statusSaga(){
    yield takeLatest( 'TOGGLE_STATUS', toggleStatus);
}

export default statusSaga;